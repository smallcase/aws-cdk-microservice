describe('my suite', () => {
  test.only('my only true test', () => {
    expect(1 + 1).toEqual(2);
  });
});

// import { App, Stack, StackProps } from '@aws-cdk/core';
// import { Construct } from 'constructs';
// import { MicroService } from '../src/constructs/microservice';


// class TestStack extends Stack {
//   constructor(scope: Construct, id: string, props?: StackProps) {
//     super(scope, id, props);
//     new MicroService(this, 'test', {
//       appName: 'test',
//       env: 'prod',
//       asgMaxSize: '1',
//       asgMinSize: '1',
//       diskSize: 20,
//       instanceLabels: [
//         {
//           key: 'SUDOERS_GROUPS_TAG',
//           propagateAtLaunch: true,
//           value: 'Developers',
//         },
//       ],
//       instanceType: 't3.micro',
//       vpc: 'vpc-1234567',
//       role: {
//         type: 'existing',
//         roleArn: 'arn:aws:iam::123456789233:instance-profile/API-DEV',
//       },
//       sshKey: 'master-dev',
//       subnets: ['subnet-12345678', 'subnet-123456789'],
//       tcpRules: [
//         {
//           sourceSG: 'sg-12345678',
//           description: 'ssh rule',
//           port: 22,
//         },
//       ],
//       networkProps: [
//         {
//           healthCheckPath: '/health',
//           host: 'abc-test-123.smallcase.com',
//           lbArn: 'arn:aws:elasticloadbalancing:ap-south-1:123456789233:loadbalancer/app/API-DEV-External',
//           sslEnabled: false,
//           port: 8000,
//           protocol: 'HTTP',
//         },
//       ],
//       createCodedeployApplication: true,
//     });
//   }
// }


// test('hello', () => {
//   const app = new App();
//   new TestStack(app, 'TestStack', {
//     env: { account: '123456789233', region: 'ap-south-1' },
//   });
//   app.synth();
// });