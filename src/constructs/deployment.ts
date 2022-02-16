import { CfnDeploymentGroup, ServerApplication } from 'aws-cdk-lib/aws-codedeploy';
import { Construct } from 'constructs';

export interface ApplicationProps {
  readonly applicationName: string;
  readonly resourceType: string;
  readonly type: string;
}
export interface DeploymentProps {
  readonly applicationProps: ApplicationProps;
  readonly deploymentGroupName: string;
  readonly asgNames: string[];
  readonly roleArn: string;
  readonly deploymentConfigName: string;
  readonly tgName: string;
}

export class Deployment extends Construct {
  constructor(scope: Construct, id: string, props: DeploymentProps) {
    super(scope, id);

    const app = this.getApp(props.applicationProps);

    const dg = new CfnDeploymentGroup(this, props.deploymentGroupName, {
      deploymentGroupName: props.deploymentGroupName,
      applicationName: props.applicationProps.applicationName,
      serviceRoleArn: props.roleArn,
      autoScalingGroups: props.asgNames,
      deploymentConfigName: props.deploymentConfigName,
    });
    dg.node.addDependency(app);
  }

  private getApp(props: ApplicationProps) {
    if (props.type == 'existing') {
      const app = ServerApplication.fromServerApplicationName(this, props.applicationName, props.applicationName);
      return app;
    } else {
      const app = new ServerApplication(this, props.applicationName, {
        applicationName: props.applicationName,
      });
      return app;
    }
  }
}