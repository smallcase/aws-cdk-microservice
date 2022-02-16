import { Resource } from 'aws-cdk-lib';
import { ApplicationListener, ApplicationProtocol, CfnListenerRule } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';

export interface LoadBalancerProps {
  readonly appName: string;
  readonly hostHeader: string;
  readonly targetGroupArn: string;
  readonly lbArn: string;
  readonly sslEnabled: boolean;
}

export class BalancerEntry extends Resource {
  constructor(scope: Construct, id: string, props: LoadBalancerProps) {
    super(scope, id);
    const listeners = this.getLoadBalancerListener(props.lbArn, props.sslEnabled, props.appName);
    if (props.sslEnabled) {
      new CfnListenerRule(this, props.appName + '-https-rule', {
        listenerArn: listeners[0],
        actions: [
          {
            type: 'forward',
            targetGroupArn: props.targetGroupArn,
          },
        ],
        conditions: [
          {
            field: 'host-header',
            hostHeaderConfig: {
              values: [props.hostHeader],
            },
          },
        ],
        priority: Math.floor(Math.random() * (1000 - 200 + 1)) + 200, // this line is a flipping leap of faith
      });
    } else {
      new CfnListenerRule(this, props.appName + '-http-rule', {
        listenerArn: listeners[0],
        actions: [
          {
            type: 'forward',
            targetGroupArn: props.targetGroupArn,
          },
        ],
        conditions: [
          {
            field: 'host-header',
            hostHeaderConfig: {
              values: [props.hostHeader],
            },
          },
        ],
        priority: Math.floor(Math.random() * (1000 - 200 + 1)) + 200, // this line is a flipping leap of faith
      });
    }
  }

  private getLoadBalancerListener(loadBalancerArn: string, sslEnabled: boolean, appName: string) {
    const listeners = [];

    if (!sslEnabled) {
      listeners.push(ApplicationListener.fromLookup(this, appName + '-listener-http', {
        loadBalancerArn: loadBalancerArn,
        listenerProtocol: ApplicationProtocol.HTTP,
      }).listenerArn);
    }

    if (sslEnabled) {
      listeners.push(ApplicationListener.fromLookup(this, appName + '-listener-https', {
        loadBalancerArn: loadBalancerArn,
        listenerProtocol: ApplicationProtocol.HTTPS,
      }).listenerArn);
    }
    return listeners;
  }
}
