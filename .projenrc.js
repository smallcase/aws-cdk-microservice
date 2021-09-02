const { AwsCdkConstructLibrary, NpmAccess } = require('projen');
const CDK_VERSION = '1.113.0';
const project = new AwsCdkConstructLibrary({
  author: 'Gagan Singh',
  authorAddress: 'gaganpreet.singh@smallcase.com',
  cdkVersion: `${CDK_VERSION}`,
  cdkVersionPinning: true,
  constructsVersion: '3.3.138',
  constructsVersionPinning: true,
  defaultReleaseBranch: 'master',
  name: '@smallcase/aws-cdk-microservice',
  repositoryUrl: 'https://github.com/smallcase/aws-cdk-microservice.git',
  npmAccess: NpmAccess.PUBLIC,
  python: {
    distName: 'aws-cdk-microservice',
    module: 'aws_cdk_microservice',
  },
  cdkDependencies: [
    '@aws-cdk/aws-iam',
    '@aws-cdk/core',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-elasticloadbalancingv2',
    '@aws-cdk/aws-autoscaling',
    '@aws-cdk/aws-codedeploy',
  ],
  context: {
    '@aws-cdk/core:newStyleStackSynthesis': true,
  },
  devDeps: [
    `@aws-cdk/aws-iam@${CDK_VERSION}`,
    `@aws-cdk/aws-ec2@${CDK_VERSION}`,
    `@aws-cdk/aws-elasticloadbalancingv2@${CDK_VERSION}`,
    `@aws-cdk/aws-autoscaling@${CDK_VERSION}`,
    `@aws-cdk/aws-codedeploy@${CDK_VERSION}`,
  ],
  peerDeps: [
    `@aws-cdk/aws-iam@${CDK_VERSION}`,
    `@aws-cdk/aws-ec2@${CDK_VERSION}`,
    `@aws-cdk/aws-elasticloadbalancingv2@${CDK_VERSION}`,
    `@aws-cdk/aws-autoscaling@${CDK_VERSION}`,
    `@aws-cdk/aws-codedeploy@${CDK_VERSION}`,
  ],
});
project.synth();