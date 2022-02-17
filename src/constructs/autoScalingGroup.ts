import { Resource } from 'aws-cdk-lib';
import { BlockDevice, BlockDeviceVolume, CfnAutoScalingGroup, EbsDeviceVolumeType } from 'aws-cdk-lib/aws-autoscaling';
import { InstanceProps, InstanceType, IVpc, LaunchTemplate, LaunchTemplateAttributes, MachineImage, Port, SecurityGroup, SecurityGroupProps, Vpc, VpcProps } from 'aws-cdk-lib/aws-ec2';
import { CfnTargetGroup, NetworkTargetGroupProps } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Effect, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { LoadBalancerProps } from './network';

export interface InternalVPC {
  readonly type: string;
  readonly vpcName: string;
  readonly vpcProps?: VpcProps;
}

export interface NetworkProps {
  readonly protocol: string;
  readonly port: number;
  readonly healthCheckPath: string;
  readonly sslEnabled: boolean;
  readonly host: string;
  readonly lbArn: string;
  readonly zoneId: string;
  readonly zoneName: string;
}

export interface IngressRule {
  readonly sourceSG: string;
  readonly description?: string;
  readonly port: number;
}

export interface InternalRole {
  readonly roleName?: string;
  readonly type: string;
  readonly roleArn?: string;
  readonly additionalPolicies?: any[];
}

export interface InternalSG {
  readonly type: string;
  readonly sgGroupId?: string;
  readonly ingressRules?: IngressRule[];
  readonly securityGroupName?: string;
  readonly description?: string;
  readonly allowAllOutbound?: boolean;
  readonly disableInlineRules?: boolean;
}

export interface InstanceStackProps {
  readonly asgName: string;
  readonly securityGroup?: InternalSG;
  readonly vpc?: InternalVPC;
  readonly role?: InternalRole;
  readonly instanceProps: InstanceProps;
  readonly tags?: Record<string, string>;
  readonly instanceVolumeSize?: BlockDevice;
  readonly targetGroupProps?: NetworkTargetGroupProps;
}

export interface InternalBD {
  readonly name: string;
  readonly size: number;
  readonly type: EbsDeviceVolumeType;
}

export interface InternalLaunchTemplateProps {
  readonly type: string;
  readonly templateName: string;
  readonly existingAttributes?: LaunchTemplateAttributes;
  readonly vpc: InternalVPC;
  readonly role: InternalRole;
  readonly instanceType: string;
  readonly amiImageId: string;
  readonly detailedMonitoring: boolean;
  readonly instanceVolumeSize?: BlockDevice;
  readonly securityGroup: InternalSG;
  readonly blockDevice: InternalBD;
  readonly sshKey: string;
}
export interface TargetGroupProps {
  readonly type: string;
  readonly port?: number;
  readonly name?: string;
  readonly protocol?: string;
  readonly timeout?: number;
  readonly healthPath?: string;
  readonly thresholdCount?: number;
  readonly tgArn?: string;
}
export interface AutoScalerProps {
  readonly asgName: string;
  readonly templateProps: InternalLaunchTemplateProps;
  readonly maxSize: string;
  readonly minSize: string;
  readonly tags?: CfnAutoScalingGroup.TagPropertyProperty[];
  readonly tgProps?: TargetGroupProps;
  readonly subnets: string[];
  readonly networkProps: NetworkProps[];
  readonly appName: string;
  readonly availabilityZones: string[];
}

export class AutoScaler extends Resource {
  public readonly loadBalancerProperties?: LoadBalancerProps[];
  constructor(scope: Construct, id: string, props: AutoScalerProps) {
    super(scope, id);

    const launchTemplate = this.getLT(props.templateProps, props.asgName);
    this.loadBalancerProperties = this.getTG(props.networkProps, props.templateProps.vpc.vpcName, props.appName);

    new CfnAutoScalingGroup(this, props.asgName, {
      maxSize: props.maxSize,
      minSize: props.minSize,
      autoScalingGroupName: props.asgName,
      launchTemplate: {
        version: launchTemplate.versionNumber,
        launchTemplateId: launchTemplate.launchTemplateId,
        launchTemplateName: launchTemplate.launchTemplateName,
      },
      targetGroupArns: this.loadBalancerProperties.map( (lb) => { return lb.targetGroupArn; } ),
      tags: props.tags,
      availabilityZones: props.availabilityZones,
      vpcZoneIdentifier: props.subnets,
      healthCheckGracePeriod: 300,
    });
  }

  private getVPC(props: InternalVPC) {
    const stackVPC = Vpc.fromLookup(this, props.vpcName, {
      isDefault: false,
      vpcId: props.vpcName,
    });
    return stackVPC;
  }

  private getRole(props: InternalRole, asgName: string) {
    if (props.type == 'existing') {
      const role = Role.fromRoleArn(this, asgName + '-stackRole', props.roleArn!);
      return role;
    } else {
      const role = new Role(this, asgName + '-stackRole', {
        assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
        roleName: asgName + '-role',
      });

      role.addManagedPolicy({
        managedPolicyArn: 'arn:aws:iam::aws:policy/service-role/AmazonEC2SpotFleetTaggingRole',
      });


      role.addManagedPolicy({
        managedPolicyArn: 'arn:aws:iam::aws:policy/ReadOnlyAccess',
      });

      role.addManagedPolicy({
        managedPolicyArn: 'arn:aws:iam::aws:policy/service-role/AmazonEC2RoleforSSM',
      });

      role.addManagedPolicy({
        managedPolicyArn: 'arn:aws:iam::aws:policy/AmazonEC2FullAccess',
      });

      role.addToPolicy(
        new PolicyStatement({
          effect: Effect.ALLOW,
          resources: ['*'],
          actions: [
            'iam:ListUsers',
            'iam:GetGroup',
          ],
        }),
      );

      role.addToPolicy(
        new PolicyStatement({
          effect: Effect.ALLOW,
          resources: ['*'],
          actions: [
            'ec2:DescribeTags',
          ],
        }),
      );

      role.addToPolicy(
        new PolicyStatement({
          effect: Effect.ALLOW,
          resources: ['*'],
          actions: [
            'iam:ListUsers',
            'iam:GetGroup',
          ],
          sid: 'VisualEditor0',
        }),
      );

      props.additionalPolicies?.forEach(policyDoc => {
        role.addToPolicy(
          PolicyStatement.fromJson(
            policyDoc,
          ),
        );
      });

      return role;
    }
  }

  private getSG(props: InternalSG, vpc: IVpc, asgName: string) {
    if (props.type == 'existing') {
      const securityGroup = SecurityGroup.fromSecurityGroupId(this, 'stack-sg', props.sgGroupId!);
      return securityGroup;
    } else {
      const sgProps: SecurityGroupProps = {
        securityGroupName: props.securityGroupName ?? 'stack-sg-group',
        vpc: vpc!,
        allowAllOutbound: props.allowAllOutbound ?? true,
        disableInlineRules: props.disableInlineRules ?? false,
      };
      const securityGroup = new SecurityGroup(this, asgName + '-stack-sg', sgProps);
      props.ingressRules!.forEach(ingress => {
        const ingressSG = SecurityGroup.fromSecurityGroupId(this, ingress.sourceSG + ingress.port.toString(), ingress.sourceSG);
        securityGroup.connections.allowFrom(ingressSG, Port.tcp(ingress.port), ingress.description ?? 'Application port');
      });
      return securityGroup;
    }
  }

  private getBD(props: InternalBD) {
    const bd: BlockDevice = {
      deviceName: props.name,
      volume: BlockDeviceVolume.ebs(props.size, {
        volumeType: props.type,
        deleteOnTermination: true,
      }),
    };
    return bd;
  }

  private getLT(props: InternalLaunchTemplateProps, asgName: string) {
    if (props.type == 'existing') {
      const launchTemplate = LaunchTemplate.fromLaunchTemplateAttributes(this, props.templateName, props.existingAttributes!);
      return launchTemplate;

    } else {

      const launchTemplate = new LaunchTemplate(this, props.templateName, {
        launchTemplateName: props.templateName,
        instanceType: new InstanceType(props.instanceType),
        machineImage: MachineImage.lookup({
          name: props.amiImageId,
        }),
        securityGroup: this.getSG(props.securityGroup, this.getVPC(props.vpc), asgName),
        role: this.getRole(props.role, asgName),
        detailedMonitoring: false,
        blockDevices: [this.getBD(props.blockDevice)],
        keyName: props.sshKey,
      });

      return launchTemplate;

    }
  }

  private getTG(props: NetworkProps[], vpcId: string, appName: string) {
    let lbProps: LoadBalancerProps[] = [];
    props.forEach(t => {
      const tg = new CfnTargetGroup(this, appName + t.port.toString(), {
        name: appName + t.port?.toString(),
        healthCheckEnabled: true,
        healthCheckPath: t.healthCheckPath!,
        ...((t.protocol == 'GRPC') ? { protocol: 'HTTP' } : { protocol: t.protocol }),
        ...((t.protocol == 'GRPC') ? { protocolVersion: 'GRPC' } : {}),
        healthCheckTimeoutSeconds: 5,
        healthCheckPort: String(t.port!),
        port: t.port!,
        vpcId: vpcId,
      });

      lbProps.push({
        appName: appName,
        hostHeader: t.host,
        lbArn: t.lbArn,
        sslEnabled: t.sslEnabled,
        targetGroupArn: tg.ref,
        zoneId: t.zoneId,
        zoneName: t.zoneName,
      });

    });

    return lbProps;
  }
}