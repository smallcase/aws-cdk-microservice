describe('my suite', () => {
  test.only('my only true test', () => {
    expect(1 + 1).toEqual(2);
  });
});

// import { SynthUtils } from '@aws-cdk/assert';
// import { Stack } from '@aws-cdk/core';
// import { MicroService } from '../src/constructs/microservice';

// test('dlq creates an alarm', () => {
//   const stack = new Stack();
//   new MicroService(stack, 'UnknownAPI', {
//     appName: 'UnknownAPI',
//     env: 'development',
//     asgMaxSize: '1',
//     asgMinSize: '1',
//     diskSize: 20,
//     instanceLabels: [
//       {
//         key: 'NODE-VERSION',
//         propagateAtLaunch: true,
//         value: '12',
//       },
//       {
//         key: 'TYPE',
//         propagateAtLaunch: true,
//         value: 'application',
//       },
//     ],
//     instanceType: 't3.micro',
//     vpc: 'vpc-1234567',
//     port: 8000,
//     protocol: 'HTTP',
//     healthCheckPath: '/health',
//     subnets: ['subnet-987654321', 'subnet-12345678'],
//     tcpRules: [
//       {
//         sourceSG: 'sg-12345678',
//         description: 'ssh rule',
//         port: 22,
//       },
//     ],
//     host: 'abc-test-123.smallcase.com',
//     lbArn: 'arn:aws:elasticloadbalancing:ap-south-1:12345678910:loadbalancer/app/API-DEV-External',
//     sslEnabled: false,
//     sshKey: 'master-dev',
//     createCodedeployApplication: true,
//     role: {
//       type: 'new',
//     },
//     applicationType: 'new',
//   });
//   expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
// });