const { AwsCdkConstructLibrary } = require('projen/lib/awscdk');

const CDK_VERSION = '2.8.0';
const project = new AwsCdkConstructLibrary({
  author: 'Gagan Singh',
  authorAddress: 'gaganpreet.singh@smallcase.com',
  cdkVersion: `${CDK_VERSION}`,
  cdkVersionPinning: true,
  constructsVersion: '10.0.5',
  constructsVersionPinning: true,
  defaultReleaseBranch: 'master',
  name: '@smallcase/aws-cdk-microservice',
  repositoryUrl: 'https://github.com/smallcase/aws-cdk-microservice.git',
  python: {
    distName: 'aws-cdk-microservice',
    module: 'aws_cdk_microservice',
  },
  context: {
    '@aws-cdk/core:newStyleStackSynthesis': true,
  },
  devDeps: [
    `aws-cdk-lib@${CDK_VERSION}`,
    'cdk8s@2.1.23',
  ],
  peerDeps: [
    `aws-cdk-lib@${CDK_VERSION}`,
  ],
  releaseToNpm: true,
  releaseEveryCommit: true,
  licensed: true,
});
project.synth();
