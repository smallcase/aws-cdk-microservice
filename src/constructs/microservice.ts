import { CfnAutoScalingGroup } from '@aws-cdk/aws-autoscaling';
import { EbsDeviceVolumeType } from '@aws-cdk/aws-ec2';
import { Effect, PolicyStatement, Role, ServicePrincipal } from '@aws-cdk/aws-iam';
import { Construct } from '@aws-cdk/core';
import { AutoScaler, IngressRule, InternalRole } from './autoScalingGroup';
import { Deployment } from './deployment';
import { BalancerEntry } from './network';


export interface MicroServiceProps {
  readonly env: string;
  readonly instanceType?: string;
  readonly appName: string;
  readonly asgMaxSize?: string;
  readonly asgMinSize?: string;
  readonly instanceLabels?: CfnAutoScalingGroup.TagPropertyProperty[];
  readonly healthCheckPath?: string;
  readonly port?: number;
  readonly vpc: string;
  readonly subnets: string[];
  readonly protocol?: string;
  readonly diskSize?: number;
  readonly role: InternalRole;
  readonly tcpRules?: IngressRule[];
  readonly sslEnabled?: boolean;
  readonly host?: string;
  readonly lbArn?: string;
  readonly ami?: string;
  readonly sshKey: string;
  readonly diskType?: string;
  readonly createCodedeployApplication?: boolean;
  readonly deploymentPolicies?: string[];
  readonly applicationType?: string;
}
export class MicroService extends Construct {

  public readonly instanceType?: string;
  public readonly appName: string;
  public readonly asgMaxSize?: string;
  public readonly asgMinSize?: string;
  public readonly env?: string;
  public readonly instanceLabels?: CfnAutoScalingGroup.TagPropertyProperty[];
  public readonly healthCheckPath?: string;
  public readonly port?: number;
  public readonly protocol?: string;
  public readonly diskSize?: number;
  public readonly vpc: string;
  public readonly role: InternalRole;
  public readonly tcpRules?: IngressRule[];
  public readonly subnets: string[];
  public readonly sslEnabled?: boolean;
  public readonly host?: string;
  public readonly lbArn?: string;
  public readonly sshKey: string;
  public readonly diskType?: string;
  public readonly createCodedeployApplication?: boolean;
  public readonly deploymentPolicies?: string[];
  public readonly applicationType?: string;

  constructor(scope: Construct, id: string, props: MicroServiceProps) {
    super(scope, id);

    this.instanceType = props?.instanceType ?? 't3a.micro';
    this.appName = props.appName;
    this.asgMaxSize = props?.asgMaxSize ?? '2';
    this.asgMinSize = props?.asgMinSize ?? '1';
    this.env = props?.env ?? 'development';
    this.instanceLabels = props?.instanceLabels;
    this.healthCheckPath = props?.healthCheckPath ?? '/v1/healthCheck';
    this.port = props.port ?? undefined;
    this.protocol = props.protocol ?? 'HTTP';
    this.diskSize = props.diskSize ?? 8;
    this.vpc = props.vpc;
    this.role = props.role;
    this.tcpRules = props.tcpRules ?? [];
    this.subnets = props.subnets;
    this.sslEnabled = props.sslEnabled;
    this.host = props.host;
    this.lbArn = props.lbArn;
    this.sshKey = props.sshKey;
    this.diskType = props.diskType;
    this.createCodedeployApplication = props.createCodedeployApplication ?? false;
    this.deploymentPolicies = props.deploymentPolicies ?? [];
    this.applicationType = props.applicationType ?? 'new';

    const resourceNamePrefix = this.env + '-' + this.appName;
    const asg = new AutoScaler(this, resourceNamePrefix + '-as', {
      asgName: resourceNamePrefix + '-ASG',
      maxSize: this.asgMaxSize,
      minSize: this.asgMinSize,
      tgProps: this.port ? {
        type: 'new',
        healthPath: this.healthCheckPath,
        protocol: this.protocol,
        port: this.port,
        name: ((resourceNamePrefix + '-TG').length >= 32)? this.env + '-' + this.appName + '-TG':resourceNamePrefix + '-TG',
        timeout: 10,
        thresholdCount: 2,
      }: undefined,
      templateProps: {
        instanceType: this.instanceType,
        detailedMonitoring: false,
        templateName: resourceNamePrefix + '-LT',
        amiImageId: props.ami ?? 'Ubuntu Server 20.04 LTS (HVM), SSD Volume Type',
        type: 'new',
        blockDevice: {
          size: this.diskSize,
          name: '/dev/sda1',
          type: this.getDiskType(this.diskType ?? 'GP3'),
        },
        vpc: {
          type: 'existing',
          vpcName: this.vpc,
        },
        securityGroup: {
          type: 'new',
          allowAllOutbound: true,
          securityGroupName: resourceNamePrefix + '-SG',
          ingressRules: this.tcpRules,
        },
        role: this.role,
        sshKey: this.sshKey,
      },
      tags: props.instanceLabels,
      subnets: this.subnets,
    });

    if (this.createCodedeployApplication) {
      const depRole = this.getDeploymentGroupRole();
      const dep = new Deployment(this, resourceNamePrefix + '-cd', {
        asgNames: [resourceNamePrefix + '-ASG'],
        deploymentConfigName: 'CodeDeployDefault.OneAtATime',
        roleArn: depRole.roleArn,
        applicationProps: {
          applicationName: this.appName + '-' + this.env,
          type: this.applicationType,
          resourceType: 'Server',
        },
        deploymentGroupName: this.env,
        tgName: resourceNamePrefix + '-TG',
      });
      dep.node.addDependency(depRole);
    }

    if (this.host && this.lbArn && asg.targetGroupArn != '') {
      const lbEntry = new BalancerEntry(this, resourceNamePrefix + '-lb', {
        appName: this.appName,
        hostHeader: this.host,
        targetGroupArn: asg.targetGroupArn,
        lbArn: this.lbArn,
        sslEnabled: this.sslEnabled ?? false,
      });
      lbEntry.node.addDependency(asg);
    }
  }

  private getDeploymentGroupRole() {
    var role = new Role(this, this.appName + '-deployment-group-role', {
      assumedBy: new ServicePrincipal('codedeploy.amazonaws.com'),
      roleName: this.appName + '-deployment-group-role',
    });
    role.addToPolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        resources: ['*'],
        actions: [
          'autoscaling:CompleteLifecycleAction',
          'autoscaling:DeleteLifecycleHook',
          'autoscaling:DescribeAutoScalingGroups',
          'autoscaling:DescribeLifecycleHooks',
          'autoscaling:PutLifecycleHook',
          'autoscaling:RecordLifecycleActionHeartbeat',
          'autoscaling:CreateAutoScalingGroup',
          'autoscaling:UpdateAutoScalingGroup',
          'autoscaling:EnableMetricsCollection',
          'autoscaling:DescribePolicies',
          'autoscaling:DescribeScheduledActions',
          'autoscaling:DescribeNotificationConfigurations',
          'autoscaling:SuspendProcesses',
          'autoscaling:ResumeProcesses',
          'autoscaling:AttachLoadBalancers',
          'autoscaling:AttachLoadBalancerTargetGroups',
          'autoscaling:PutScalingPolicy',
          'autoscaling:PutScheduledUpdateGroupAction',
          'autoscaling:PutNotificationConfiguration',
          'autoscaling:PutWarmPool',
          'autoscaling:DescribeScalingActivities',
          'autoscaling:DeleteAutoScalingGroup',
          'ec2:DescribeInstances',
          'ec2:DescribeInstanceStatus',
          'ec2:TerminateInstances',
          'tag:GetResources',
          'sns:Publish',
          'cloudwatch:DescribeAlarms',
          'cloudwatch:PutMetricAlarm',
          'elasticloadbalancing:DescribeLoadBalancers',
          'elasticloadbalancing:DescribeInstanceHealth',
          'elasticloadbalancing:RegisterInstancesWithLoadBalancer',
          'elasticloadbalancing:DeregisterInstancesFromLoadBalancer',
          'elasticloadbalancing:DescribeTargetGroups',
          'elasticloadbalancing:DescribeTargetHealth',
          'elasticloadbalancing:RegisterTargets',
          'elasticloadbalancing:DeregisterTargets',
          'ec2:CreateTags',
          'ec2:RunInstances',
          'iam:PassRole',
          ... this.deploymentPolicies ?? [],
        ],
      }),
    );
    return role;
  }

  private getDiskType(type: string) {
    return type as EbsDeviceVolumeType;
  }
}
