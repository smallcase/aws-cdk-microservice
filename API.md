# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AutoScaler <a name="@smallcase/aws-cdk-microservice.AutoScaler"></a>

#### Initializers <a name="@smallcase/aws-cdk-microservice.AutoScaler.Initializer"></a>

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

```typescript
public readonly targetGroupArn: string;
```

- *Type:* `string`

---


### BalancerEntry <a name="@smallcase/aws-cdk-microservice.BalancerEntry"></a>

#### Initializers <a name="@smallcase/aws-cdk-microservice.BalancerEntry.Initializer"></a>

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

#### Initializers <a name="@smallcase/aws-cdk-microservice.Deployment.Initializer"></a>

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

#### Initializers <a name="@smallcase/aws-cdk-microservice.MicroService.Initializer"></a>

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

```typescript
public readonly appName: string;
```

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.role"></a>

```typescript
public readonly role: InternalRole;
```

- *Type:* [`@smallcase/aws-cdk-microservice.InternalRole`](#@smallcase/aws-cdk-microservice.InternalRole)

---

##### `sshKey`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* `string`[]

---

##### `vpc`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* `string`

---

##### `applicationType`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* `string`

---

##### `asgMaxSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.asgMaxSize"></a>

```typescript
public readonly asgMaxSize: string;
```

- *Type:* `string`

---

##### `asgMinSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.asgMinSize"></a>

```typescript
public readonly asgMinSize: string;
```

- *Type:* `string`

---

##### `createCodedeployApplication`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.createCodedeployApplication"></a>

```typescript
public readonly createCodedeployApplication: boolean;
```

- *Type:* `boolean`

---

##### `deploymentPolicies`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.deploymentPolicies"></a>

```typescript
public readonly deploymentPolicies: string[];
```

- *Type:* `string`[]

---

##### `diskSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* `number`

---

##### `diskType`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* `string`

---

##### `env`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* `string`

---

##### `healthCheckPath`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* `string`

---

##### `host`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* `string`

---

##### `instanceLabels`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.instanceLabels"></a>

```typescript
public readonly instanceLabels: TagPropertyProperty[];
```

- *Type:* [`@aws-cdk/aws-autoscaling.CfnAutoScalingGroup.TagPropertyProperty`](#@aws-cdk/aws-autoscaling.CfnAutoScalingGroup.TagPropertyProperty)[]

---

##### `instanceType`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* `string`

---

##### `lbArn`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.lbArn"></a>

```typescript
public readonly lbArn: string;
```

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* `string`

---

##### `securityGroupProps`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.securityGroupProps"></a>

```typescript
public readonly securityGroupProps: InternalSG;
```

- *Type:* [`@smallcase/aws-cdk-microservice.InternalSG`](#@smallcase/aws-cdk-microservice.InternalSG)

---

##### `sslEnabled`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.sslEnabled"></a>

```typescript
public readonly sslEnabled: boolean;
```

- *Type:* `boolean`

---

##### `tcpRules`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroService.property.tcpRules"></a>

```typescript
public readonly tcpRules: IngressRule[];
```

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

```typescript
public readonly applicationName: string;
```

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.ApplicationProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.ApplicationProps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

### AutoScalerProps <a name="@smallcase/aws-cdk-microservice.AutoScalerProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AutoScalerProps } from '@smallcase/aws-cdk-microservice'

const autoScalerProps: AutoScalerProps = { ... }
```

##### `asgName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.asgName"></a>

```typescript
public readonly asgName: string;
```

- *Type:* `string`

---

##### `maxSize`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.maxSize"></a>

```typescript
public readonly maxSize: string;
```

- *Type:* `string`

---

##### `minSize`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.minSize"></a>

```typescript
public readonly minSize: string;
```

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* `string`[]

---

##### `templateProps`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.templateProps"></a>

```typescript
public readonly templateProps: InternalLaunchTemplateProps;
```

- *Type:* [`@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps`](#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps)

---

##### `tags`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.tags"></a>

```typescript
public readonly tags: TagPropertyProperty[];
```

- *Type:* [`@aws-cdk/aws-autoscaling.CfnAutoScalingGroup.TagPropertyProperty`](#@aws-cdk/aws-autoscaling.CfnAutoScalingGroup.TagPropertyProperty)[]

---

##### `tgProps`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.AutoScalerProps.property.tgProps"></a>

```typescript
public readonly tgProps: TargetGroupProps;
```

- *Type:* [`@smallcase/aws-cdk-microservice.TargetGroupProps`](#@smallcase/aws-cdk-microservice.TargetGroupProps)

---

### DeploymentProps <a name="@smallcase/aws-cdk-microservice.DeploymentProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DeploymentProps } from '@smallcase/aws-cdk-microservice'

const deploymentProps: DeploymentProps = { ... }
```

##### `applicationProps`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.DeploymentProps.property.applicationProps"></a>

```typescript
public readonly applicationProps: ApplicationProps;
```

- *Type:* [`@smallcase/aws-cdk-microservice.ApplicationProps`](#@smallcase/aws-cdk-microservice.ApplicationProps)

---

##### `asgNames`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.DeploymentProps.property.asgNames"></a>

```typescript
public readonly asgNames: string[];
```

- *Type:* `string`[]

---

##### `deploymentConfigName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.DeploymentProps.property.deploymentConfigName"></a>

```typescript
public readonly deploymentConfigName: string;
```

- *Type:* `string`

---

##### `deploymentGroupName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.DeploymentProps.property.deploymentGroupName"></a>

```typescript
public readonly deploymentGroupName: string;
```

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.DeploymentProps.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* `string`

---

##### `tgName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.DeploymentProps.property.tgName"></a>

```typescript
public readonly tgName: string;
```

- *Type:* `string`

---

### IngressRule <a name="@smallcase/aws-cdk-microservice.IngressRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { IngressRule } from '@smallcase/aws-cdk-microservice'

const ingressRule: IngressRule = { ... }
```

##### `port`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.IngressRule.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* `number`

---

##### `sourceSG`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.IngressRule.property.sourceSG"></a>

```typescript
public readonly sourceSG: string;
```

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.IngressRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

### InstanceStackProps <a name="@smallcase/aws-cdk-microservice.InstanceStackProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InstanceStackProps } from '@smallcase/aws-cdk-microservice'

const instanceStackProps: InstanceStackProps = { ... }
```

##### `asgName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.asgName"></a>

```typescript
public readonly asgName: string;
```

- *Type:* `string`

---

##### `instanceProps`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.instanceProps"></a>

```typescript
public readonly instanceProps: InstanceProps;
```

- *Type:* [`@aws-cdk/aws-ec2.InstanceProps`](#@aws-cdk/aws-ec2.InstanceProps)

---

##### `instanceVolumeSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.instanceVolumeSize"></a>

```typescript
public readonly instanceVolumeSize: BlockDevice;
```

- *Type:* [`@aws-cdk/aws-ec2.BlockDevice`](#@aws-cdk/aws-ec2.BlockDevice)

---

##### `role`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.role"></a>

```typescript
public readonly role: InternalRole;
```

- *Type:* [`@smallcase/aws-cdk-microservice.InternalRole`](#@smallcase/aws-cdk-microservice.InternalRole)

---

##### `securityGroup`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: InternalSG;
```

- *Type:* [`@smallcase/aws-cdk-microservice.InternalSG`](#@smallcase/aws-cdk-microservice.InternalSG)

---

##### `tags`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `targetGroupProps`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.targetGroupProps"></a>

```typescript
public readonly targetGroupProps: NetworkTargetGroupProps;
```

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.NetworkTargetGroupProps`](#@aws-cdk/aws-elasticloadbalancingv2.NetworkTargetGroupProps)

---

##### `vpc`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InstanceStackProps.property.vpc"></a>

```typescript
public readonly vpc: InternalVPC;
```

- *Type:* [`@smallcase/aws-cdk-microservice.InternalVPC`](#@smallcase/aws-cdk-microservice.InternalVPC)

---

### InternalBD <a name="@smallcase/aws-cdk-microservice.InternalBD"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InternalBD } from '@smallcase/aws-cdk-microservice'

const internalBD: InternalBD = { ... }
```

##### `name`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalBD.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `size`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalBD.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalBD.property.type"></a>

```typescript
public readonly type: EbsDeviceVolumeType;
```

- *Type:* [`@aws-cdk/aws-ec2.EbsDeviceVolumeType`](#@aws-cdk/aws-ec2.EbsDeviceVolumeType)

---

### InternalLaunchTemplateProps <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InternalLaunchTemplateProps } from '@smallcase/aws-cdk-microservice'

const internalLaunchTemplateProps: InternalLaunchTemplateProps = { ... }
```

##### `amiImageId`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.amiImageId"></a>

```typescript
public readonly amiImageId: string;
```

- *Type:* `string`

---

##### `blockDevice`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.blockDevice"></a>

```typescript
public readonly blockDevice: InternalBD;
```

- *Type:* [`@smallcase/aws-cdk-microservice.InternalBD`](#@smallcase/aws-cdk-microservice.InternalBD)

---

##### `detailedMonitoring`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.detailedMonitoring"></a>

```typescript
public readonly detailedMonitoring: boolean;
```

- *Type:* `boolean`

---

##### `instanceType`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.role"></a>

```typescript
public readonly role: InternalRole;
```

- *Type:* [`@smallcase/aws-cdk-microservice.InternalRole`](#@smallcase/aws-cdk-microservice.InternalRole)

---

##### `securityGroup`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: InternalSG;
```

- *Type:* [`@smallcase/aws-cdk-microservice.InternalSG`](#@smallcase/aws-cdk-microservice.InternalSG)

---

##### `sshKey`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `vpc`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.vpc"></a>

```typescript
public readonly vpc: InternalVPC;
```

- *Type:* [`@smallcase/aws-cdk-microservice.InternalVPC`](#@smallcase/aws-cdk-microservice.InternalVPC)

---

##### `existingAttributes`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.existingAttributes"></a>

```typescript
public readonly existingAttributes: LaunchTemplateAttributes;
```

- *Type:* [`@aws-cdk/aws-ec2.LaunchTemplateAttributes`](#@aws-cdk/aws-ec2.LaunchTemplateAttributes)

---

##### `instanceVolumeSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.instanceVolumeSize"></a>

```typescript
public readonly instanceVolumeSize: BlockDevice;
```

- *Type:* [`@aws-cdk/aws-ec2.BlockDevice`](#@aws-cdk/aws-ec2.BlockDevice)

---

### InternalRole <a name="@smallcase/aws-cdk-microservice.InternalRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InternalRole } from '@smallcase/aws-cdk-microservice'

const internalRole: InternalRole = { ... }
```

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalRole.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `additionalPolicies`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalRole.property.additionalPolicies"></a>

```typescript
public readonly additionalPolicies: any[];
```

- *Type:* `any`[]

---

##### `roleArn`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* `string`

---

##### `roleName`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* `string`

---

### InternalSG <a name="@smallcase/aws-cdk-microservice.InternalSG"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InternalSG } from '@smallcase/aws-cdk-microservice'

const internalSG: InternalSG = { ... }
```

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `disableInlineRules`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.disableInlineRules"></a>

```typescript
public readonly disableInlineRules: boolean;
```

- *Type:* `boolean`

---

##### `ingressRules`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.ingressRules"></a>

```typescript
public readonly ingressRules: IngressRule[];
```

- *Type:* [`@smallcase/aws-cdk-microservice.IngressRule`](#@smallcase/aws-cdk-microservice.IngressRule)[]

---

##### `securityGroupName`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* `string`

---

##### `sgGroupId`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalSG.property.sgGroupId"></a>

```typescript
public readonly sgGroupId: string;
```

- *Type:* `string`

---

### InternalVPC <a name="@smallcase/aws-cdk-microservice.InternalVPC"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InternalVPC } from '@smallcase/aws-cdk-microservice'

const internalVPC: InternalVPC = { ... }
```

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalVPC.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `vpcName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.InternalVPC.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* `string`

---

##### `vpcProps`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.InternalVPC.property.vpcProps"></a>

```typescript
public readonly vpcProps: VpcProps;
```

- *Type:* [`@aws-cdk/aws-ec2.VpcProps`](#@aws-cdk/aws-ec2.VpcProps)

---

### LoadBalancerProps <a name="@smallcase/aws-cdk-microservice.LoadBalancerProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { LoadBalancerProps } from '@smallcase/aws-cdk-microservice'

const loadBalancerProps: LoadBalancerProps = { ... }
```

##### `appName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* `string`

---

##### `hostHeader`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.hostHeader"></a>

```typescript
public readonly hostHeader: string;
```

- *Type:* `string`

---

##### `lbArn`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.lbArn"></a>

```typescript
public readonly lbArn: string;
```

- *Type:* `string`

---

##### `sslEnabled`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.sslEnabled"></a>

```typescript
public readonly sslEnabled: boolean;
```

- *Type:* `boolean`

---

##### `targetGroupArn`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* `string`

---

### MicroServiceProps <a name="@smallcase/aws-cdk-microservice.MicroServiceProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { MicroServiceProps } from '@smallcase/aws-cdk-microservice'

const microServiceProps: MicroServiceProps = { ... }
```

##### `appName`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* `string`

---

##### `env`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.role"></a>

```typescript
public readonly role: InternalRole;
```

- *Type:* [`@smallcase/aws-cdk-microservice.InternalRole`](#@smallcase/aws-cdk-microservice.InternalRole)

---

##### `sshKey`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* `string`[]

---

##### `vpc`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* `string`

---

##### `ami`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.ami"></a>

```typescript
public readonly ami: string;
```

- *Type:* `string`

---

##### `applicationType`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* `string`

---

##### `asgMaxSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.asgMaxSize"></a>

```typescript
public readonly asgMaxSize: string;
```

- *Type:* `string`

---

##### `asgMinSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.asgMinSize"></a>

```typescript
public readonly asgMinSize: string;
```

- *Type:* `string`

---

##### `createCodedeployApplication`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.createCodedeployApplication"></a>

```typescript
public readonly createCodedeployApplication: boolean;
```

- *Type:* `boolean`

---

##### `deploymentPolicies`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.deploymentPolicies"></a>

```typescript
public readonly deploymentPolicies: string[];
```

- *Type:* `string`[]

---

##### `diskSize`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* `number`

---

##### `diskType`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* `string`

---

##### `healthCheckPath`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* `string`

---

##### `host`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* `string`

---

##### `instanceLabels`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.instanceLabels"></a>

```typescript
public readonly instanceLabels: TagPropertyProperty[];
```

- *Type:* [`@aws-cdk/aws-autoscaling.CfnAutoScalingGroup.TagPropertyProperty`](#@aws-cdk/aws-autoscaling.CfnAutoScalingGroup.TagPropertyProperty)[]

---

##### `instanceType`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* `string`

---

##### `lbArn`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.lbArn"></a>

```typescript
public readonly lbArn: string;
```

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* `string`

---

##### `securityGroupProps`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.securityGroupProps"></a>

```typescript
public readonly securityGroupProps: InternalSG;
```

- *Type:* [`@smallcase/aws-cdk-microservice.InternalSG`](#@smallcase/aws-cdk-microservice.InternalSG)

---

##### `sslEnabled`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.sslEnabled"></a>

```typescript
public readonly sslEnabled: boolean;
```

- *Type:* `boolean`

---

##### `tcpRules`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.MicroServiceProps.property.tcpRules"></a>

```typescript
public readonly tcpRules: IngressRule[];
```

- *Type:* [`@smallcase/aws-cdk-microservice.IngressRule`](#@smallcase/aws-cdk-microservice.IngressRule)[]

---

### TargetGroupProps <a name="@smallcase/aws-cdk-microservice.TargetGroupProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TargetGroupProps } from '@smallcase/aws-cdk-microservice'

const targetGroupProps: TargetGroupProps = { ... }
```

##### `type`<sup>Required</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `healthPath`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.healthPath"></a>

```typescript
public readonly healthPath: string;
```

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* `string`

---

##### `tgArn`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.tgArn"></a>

```typescript
public readonly tgArn: string;
```

- *Type:* `string`

---

##### `thresholdCount`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.thresholdCount"></a>

```typescript
public readonly thresholdCount: number;
```

- *Type:* `number`

---

##### `timeout`<sup>Optional</sup> <a name="@smallcase/aws-cdk-microservice.TargetGroupProps.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* `number`

---



