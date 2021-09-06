# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AutoScaler <a name="@smallcase/aws-cdk-microservice.AutoScaler"></a>

#### Initializer <a name="@smallcase/aws-cdk-microservice.AutoScaler.Initializer"></a>

```typescript
import { AutoScaler } from '@smallcase/aws-cdk-microservice'

new AutoScaler(scope: Construct, id: string, props: AutoScalerProps)
```

##### `scope`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScaler.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScaler.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScaler.parameter.props"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.AutoScalerProps`](#@smallcase/aws-cdk-microservice.AutoScalerProps)

---



#### Properties <a name="Properties"></a>

##### `targetGroupArn`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScaler.property.targetGroupArn"></a>

- *Type:* `string`

---


### BalancerEntry <a name="@smallcase/aws-cdk-microservice.BalancerEntry"></a>

#### Initializer <a name="@smallcase/aws-cdk-microservice.BalancerEntry.Initializer"></a>

```typescript
import { BalancerEntry } from '@smallcase/aws-cdk-microservice'

new BalancerEntry(scope: Construct, id: string, props: LoadBalancerProps)
```

##### `scope`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.BalancerEntry.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.BalancerEntry.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.BalancerEntry.parameter.props"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.LoadBalancerProps`](#@smallcase/aws-cdk-microservice.LoadBalancerProps)

---





### Deployment <a name="@smallcase/aws-cdk-microservice.Deployment"></a>

#### Initializer <a name="@smallcase/aws-cdk-microservice.Deployment.Initializer"></a>

```typescript
import { Deployment } from '@smallcase/aws-cdk-microservice'

new Deployment(scope: Construct, id: string, props: DeploymentProps)
```

##### `scope`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.Deployment.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.Deployment.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.Deployment.parameter.props"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.DeploymentProps`](#@smallcase/aws-cdk-microservice.DeploymentProps)

---





### MicroService <a name="@smallcase/aws-cdk-microservice.MicroService"></a>

#### Initializer <a name="@smallcase/aws-cdk-microservice.MicroService.Initializer"></a>

```typescript
import { MicroService } from '@smallcase/aws-cdk-microservice'

new MicroService(scope: Construct, id: string, props: MicroServiceProps)
```

##### `scope`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.parameter.props"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.MicroServiceProps`](#@smallcase/aws-cdk-microservice.MicroServiceProps)

---



#### Properties <a name="Properties"></a>

##### `appName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.appName"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.role"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.InternalRole`](#@smallcase/aws-cdk-microservice.InternalRole)

---

##### `sshKey`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.sshKey"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpc`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.vpc"></a>

- *Type:* `string`

---

##### `applicationType`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.applicationType"></a>

- *Type:* `string`

---

##### `asgMaxSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.asgMaxSize"></a>

- *Type:* `string`

---

##### `asgMinSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.asgMinSize"></a>

- *Type:* `string`

---

##### `createCodedeployApplication`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.createCodedeployApplication"></a>

- *Type:* `boolean`

---

##### `deploymentPolicies`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.deploymentPolicies"></a>

- *Type:* `string`[]

---

##### `diskSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.diskSize"></a>

- *Type:* `number`

---

##### `diskType`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.diskType"></a>

- *Type:* `string`

---

##### `env`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.env"></a>

- *Type:* `string`

---

##### `healthCheckPath`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.healthCheckPath"></a>

- *Type:* `string`

---

##### `host`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.host"></a>

- *Type:* `string`

---

##### `instanceLabels`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.instanceLabels"></a>

- *Type:* [`@aws-cdk/aws-autoscaling.CfnAutoScalingGroup.TagPropertyProperty`](#@aws-cdk/aws-autoscaling.CfnAutoScalingGroup.TagPropertyProperty)[]

---

##### `instanceType`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.instanceType"></a>

- *Type:* `string`

---

##### `lbArn`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.lbArn"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.port"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.protocol"></a>

- *Type:* `string`

---

##### `securityGroupProps`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.securityGroupProps"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.InternalSG`](#@smallcase/aws-cdk-microservice.InternalSG)

---

##### `sslEnabled`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.sslEnabled"></a>

- *Type:* `boolean`

---

##### `tcpRules`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.tcpRules"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.IngressRule`](#@smallcase/aws-cdk-microservice.IngressRule)[]

---


## Structs <a name="Structs"></a>

### ApplicationProps <a name="@smallcase/aws-cdk-microservice.ApplicationProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ApplicationProps } from '@smallcase/aws-cdk-microservice'

const applicationProps: ApplicationProps = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.ApplicationProps.property.applicationName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.ApplicationProps.property.resourceType"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.ApplicationProps.property.type"></a>

- *Type:* `string`

---

### AutoScalerProps <a name="@smallcase/aws-cdk-microservice.AutoScalerProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AutoScalerProps } from '@smallcase/aws-cdk-microservice'

const autoScalerProps: AutoScalerProps = { ... }
```

##### `asgName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.asgName"></a>

- *Type:* `string`

---

##### `maxSize`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.maxSize"></a>

- *Type:* `string`

---

##### `minSize`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.minSize"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.subnets"></a>

- *Type:* `string`[]

---

##### `templateProps`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.templateProps"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps`](#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps)

---

##### `tags`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.tags"></a>

- *Type:* [`@aws-cdk/aws-autoscaling.CfnAutoScalingGroup.TagPropertyProperty`](#@aws-cdk/aws-autoscaling.CfnAutoScalingGroup.TagPropertyProperty)[]

---

##### `tgProps`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.tgProps"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.TargetGroupProps`](#@smallcase/aws-cdk-microservice.TargetGroupProps)

---

### DeploymentProps <a name="@smallcase/aws-cdk-microservice.DeploymentProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DeploymentProps } from '@smallcase/aws-cdk-microservice'

const deploymentProps: DeploymentProps = { ... }
```

##### `applicationProps`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.DeploymentProps.property.applicationProps"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.ApplicationProps`](#@smallcase/aws-cdk-microservice.ApplicationProps)

---

##### `asgNames`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.DeploymentProps.property.asgNames"></a>

- *Type:* `string`[]

---

##### `deploymentConfigName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.DeploymentProps.property.deploymentConfigName"></a>

- *Type:* `string`

---

##### `deploymentGroupName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.DeploymentProps.property.deploymentGroupName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.DeploymentProps.property.roleArn"></a>

- *Type:* `string`

---

##### `tgName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.DeploymentProps.property.tgName"></a>

- *Type:* `string`

---

### IngressRule <a name="@smallcase/aws-cdk-microservice.IngressRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { IngressRule } from '@smallcase/aws-cdk-microservice'

const ingressRule: IngressRule = { ... }
```

##### `port`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.IngressRule.property.port"></a>

- *Type:* `number`

---

##### `sourceSG`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.IngressRule.property.sourceSG"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.IngressRule.property.description"></a>

- *Type:* `string`

---

### InstanceStackProps <a name="@smallcase/aws-cdk-microservice.InstanceStackProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InstanceStackProps } from '@smallcase/aws-cdk-microservice'

const instanceStackProps: InstanceStackProps = { ... }
```

##### `asgName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.asgName"></a>

- *Type:* `string`

---

##### `instanceProps`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.instanceProps"></a>

- *Type:* [`@aws-cdk/aws-ec2.InstanceProps`](#@aws-cdk/aws-ec2.InstanceProps)

---

##### `instanceVolumeSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.instanceVolumeSize"></a>

- *Type:* [`@aws-cdk/aws-ec2.BlockDevice`](#@aws-cdk/aws-ec2.BlockDevice)

---

##### `role`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.role"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.InternalRole`](#@smallcase/aws-cdk-microservice.InternalRole)

---

##### `securityGroup`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.securityGroup"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.InternalSG`](#@smallcase/aws-cdk-microservice.InternalSG)

---

##### `tags`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `targetGroupProps`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.targetGroupProps"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.NetworkTargetGroupProps`](#@aws-cdk/aws-elasticloadbalancingv2.NetworkTargetGroupProps)

---

##### `vpc`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.vpc"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.InternalVPC`](#@smallcase/aws-cdk-microservice.InternalVPC)

---

### InternalBD <a name="@smallcase/aws-cdk-microservice.InternalBD"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InternalBD } from '@smallcase/aws-cdk-microservice'

const internalBD: InternalBD = { ... }
```

##### `name`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalBD.property.name"></a>

- *Type:* `string`

---

##### `size`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalBD.property.size"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalBD.property.type"></a>

- *Type:* [`@aws-cdk/aws-ec2.EbsDeviceVolumeType`](#@aws-cdk/aws-ec2.EbsDeviceVolumeType)

---

### InternalLaunchTemplateProps <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InternalLaunchTemplateProps } from '@smallcase/aws-cdk-microservice'

const internalLaunchTemplateProps: InternalLaunchTemplateProps = { ... }
```

##### `amiImageId`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.amiImageId"></a>

- *Type:* `string`

---

##### `blockDevice`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.blockDevice"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.InternalBD`](#@smallcase/aws-cdk-microservice.InternalBD)

---

##### `detailedMonitoring`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.detailedMonitoring"></a>

- *Type:* `boolean`

---

##### `instanceType`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.instanceType"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.role"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.InternalRole`](#@smallcase/aws-cdk-microservice.InternalRole)

---

##### `securityGroup`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.securityGroup"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.InternalSG`](#@smallcase/aws-cdk-microservice.InternalSG)

---

##### `sshKey`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.sshKey"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.templateName"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.type"></a>

- *Type:* `string`

---

##### `vpc`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.vpc"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.InternalVPC`](#@smallcase/aws-cdk-microservice.InternalVPC)

---

##### `existingAttributes`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.existingAttributes"></a>

- *Type:* [`@aws-cdk/aws-ec2.LaunchTemplateAttributes`](#@aws-cdk/aws-ec2.LaunchTemplateAttributes)

---

##### `instanceVolumeSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.instanceVolumeSize"></a>

- *Type:* [`@aws-cdk/aws-ec2.BlockDevice`](#@aws-cdk/aws-ec2.BlockDevice)

---

### InternalRole <a name="@smallcase/aws-cdk-microservice.InternalRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InternalRole } from '@smallcase/aws-cdk-microservice'

const internalRole: InternalRole = { ... }
```

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalRole.property.type"></a>

- *Type:* `string`

---

##### `additionalPolicies`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalRole.property.additionalPolicies"></a>

- *Type:* `any`[]

---

##### `roleArn`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalRole.property.roleArn"></a>

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalRole.property.roleName"></a>

- *Type:* `string`

---

### InternalSG <a name="@smallcase/aws-cdk-microservice.InternalSG"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InternalSG } from '@smallcase/aws-cdk-microservice'

const internalSG: InternalSG = { ... }
```

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.type"></a>

- *Type:* `string`

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.allowAllOutbound"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.description"></a>

- *Type:* `string`

---

##### `disableInlineRules`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.disableInlineRules"></a>

- *Type:* `boolean`

---

##### `ingressRules`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.ingressRules"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.IngressRule`](#@smallcase/aws-cdk-microservice.IngressRule)[]

---

##### `securityGroupName`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.securityGroupName"></a>

- *Type:* `string`

---

##### `sgGroupId`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.sgGroupId"></a>

- *Type:* `string`

---

### InternalVPC <a name="@smallcase/aws-cdk-microservice.InternalVPC"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InternalVPC } from '@smallcase/aws-cdk-microservice'

const internalVPC: InternalVPC = { ... }
```

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalVPC.property.type"></a>

- *Type:* `string`

---

##### `vpcName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalVPC.property.vpcName"></a>

- *Type:* `string`

---

##### `vpcProps`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalVPC.property.vpcProps"></a>

- *Type:* [`@aws-cdk/aws-ec2.VpcProps`](#@aws-cdk/aws-ec2.VpcProps)

---

### LoadBalancerProps <a name="@smallcase/aws-cdk-microservice.LoadBalancerProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { LoadBalancerProps } from '@smallcase/aws-cdk-microservice'

const loadBalancerProps: LoadBalancerProps = { ... }
```

##### `appName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.appName"></a>

- *Type:* `string`

---

##### `hostHeader`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.hostHeader"></a>

- *Type:* `string`

---

##### `lbArn`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.lbArn"></a>

- *Type:* `string`

---

##### `sslEnabled`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.sslEnabled"></a>

- *Type:* `boolean`

---

##### `targetGroupArn`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.targetGroupArn"></a>

- *Type:* `string`

---

### MicroServiceProps <a name="@smallcase/aws-cdk-microservice.MicroServiceProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { MicroServiceProps } from '@smallcase/aws-cdk-microservice'

const microServiceProps: MicroServiceProps = { ... }
```

##### `appName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.appName"></a>

- *Type:* `string`

---

##### `env`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.env"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.role"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.InternalRole`](#@smallcase/aws-cdk-microservice.InternalRole)

---

##### `sshKey`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.sshKey"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpc`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.vpc"></a>

- *Type:* `string`

---

##### `ami`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.ami"></a>

- *Type:* `string`

---

##### `applicationType`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.applicationType"></a>

- *Type:* `string`

---

##### `asgMaxSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.asgMaxSize"></a>

- *Type:* `string`

---

##### `asgMinSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.asgMinSize"></a>

- *Type:* `string`

---

##### `createCodedeployApplication`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.createCodedeployApplication"></a>

- *Type:* `boolean`

---

##### `deploymentPolicies`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.deploymentPolicies"></a>

- *Type:* `string`[]

---

##### `diskSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.diskSize"></a>

- *Type:* `number`

---

##### `diskType`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.diskType"></a>

- *Type:* `string`

---

##### `healthCheckPath`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.healthCheckPath"></a>

- *Type:* `string`

---

##### `host`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.host"></a>

- *Type:* `string`

---

##### `instanceLabels`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.instanceLabels"></a>

- *Type:* [`@aws-cdk/aws-autoscaling.CfnAutoScalingGroup.TagPropertyProperty`](#@aws-cdk/aws-autoscaling.CfnAutoScalingGroup.TagPropertyProperty)[]

---

##### `instanceType`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.instanceType"></a>

- *Type:* `string`

---

##### `lbArn`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.lbArn"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.port"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.protocol"></a>

- *Type:* `string`

---

##### `securityGroupProps`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.securityGroupProps"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.InternalSG`](#@smallcase/aws-cdk-microservice.InternalSG)

---

##### `sslEnabled`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.sslEnabled"></a>

- *Type:* `boolean`

---

##### `tcpRules`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.tcpRules"></a>

- *Type:* [`@smallcase/aws-cdk-microservice.IngressRule`](#@smallcase/aws-cdk-microservice.IngressRule)[]

---

### TargetGroupProps <a name="@smallcase/aws-cdk-microservice.TargetGroupProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TargetGroupProps } from '@smallcase/aws-cdk-microservice'

const targetGroupProps: TargetGroupProps = { ... }
```

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.type"></a>

- *Type:* `string`

---

##### `healthPath`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.healthPath"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.name"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.port"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.protocol"></a>

- *Type:* `string`

---

##### `tgArn`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.tgArn"></a>

- *Type:* `string`

---

##### `thresholdCount`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.thresholdCount"></a>

- *Type:* `number`

---

##### `timeout`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.timeout"></a>

- *Type:* `number`

---



