# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoScaler <a name="AutoScaler" id="@smallcase/aws-cdk-microservice.AutoScaler"></a>

#### Initializers <a name="Initializers" id="@smallcase/aws-cdk-microservice.AutoScaler.Initializer"></a>

```typescript
import { AutoScaler } from '@smallcase/aws-cdk-microservice'

new AutoScaler(scope: Construct, id: string, props: AutoScalerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScaler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScaler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScaler.Initializer.parameter.props">props</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.AutoScalerProps">AutoScalerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@smallcase/aws-cdk-microservice.AutoScaler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@smallcase/aws-cdk-microservice.AutoScaler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@smallcase/aws-cdk-microservice.AutoScaler.Initializer.parameter.props"></a>

- *Type:* <a href="#@smallcase/aws-cdk-microservice.AutoScalerProps">AutoScalerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScaler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScaler.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@smallcase/aws-cdk-microservice.AutoScaler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@smallcase/aws-cdk-microservice.AutoScaler.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops being managed by CloudFormation, either because you've removed it from the CDK application or because you've made a change that requires the resource to be replaced.  The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@smallcase/aws-cdk-microservice.AutoScaler.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScaler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScaler.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@smallcase/aws-cdk-microservice.AutoScaler.isConstruct"></a>

```typescript
import { AutoScaler } from '@smallcase/aws-cdk-microservice'

AutoScaler.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/aws-cdk-microservice.AutoScaler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@smallcase/aws-cdk-microservice.AutoScaler.isResource"></a>

```typescript
import { AutoScaler } from '@smallcase/aws-cdk-microservice'

AutoScaler.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@smallcase/aws-cdk-microservice.AutoScaler.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScaler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScaler.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScaler.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScaler.property.loadBalancerProperties">loadBalancerProperties</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.LoadBalancerProps">LoadBalancerProps</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@smallcase/aws-cdk-microservice.AutoScaler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@smallcase/aws-cdk-microservice.AutoScaler.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK (generally, those created by creating new class instances like Role, Bucket, etc.), this is always the same as the environment of the stack they belong to; however, for imported resources (those obtained from static methods like fromRoleArn, fromBucketName, etc.), that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@smallcase/aws-cdk-microservice.AutoScaler.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `loadBalancerProperties`<sup>Optional</sup> <a name="loadBalancerProperties" id="@smallcase/aws-cdk-microservice.AutoScaler.property.loadBalancerProperties"></a>

```typescript
public readonly loadBalancerProperties: LoadBalancerProps[];
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.LoadBalancerProps">LoadBalancerProps</a>[]

---


### BalancerEntry <a name="BalancerEntry" id="@smallcase/aws-cdk-microservice.BalancerEntry"></a>

#### Initializers <a name="Initializers" id="@smallcase/aws-cdk-microservice.BalancerEntry.Initializer"></a>

```typescript
import { BalancerEntry } from '@smallcase/aws-cdk-microservice'

new BalancerEntry(scope: Construct, id: string, props: LoadBalancerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.BalancerEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.BalancerEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.BalancerEntry.Initializer.parameter.props">props</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.LoadBalancerProps">LoadBalancerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@smallcase/aws-cdk-microservice.BalancerEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@smallcase/aws-cdk-microservice.BalancerEntry.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@smallcase/aws-cdk-microservice.BalancerEntry.Initializer.parameter.props"></a>

- *Type:* <a href="#@smallcase/aws-cdk-microservice.LoadBalancerProps">LoadBalancerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.BalancerEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@smallcase/aws-cdk-microservice.BalancerEntry.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@smallcase/aws-cdk-microservice.BalancerEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@smallcase/aws-cdk-microservice.BalancerEntry.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops being managed by CloudFormation, either because you've removed it from the CDK application or because you've made a change that requires the resource to be replaced.  The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@smallcase/aws-cdk-microservice.BalancerEntry.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.BalancerEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@smallcase/aws-cdk-microservice.BalancerEntry.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@smallcase/aws-cdk-microservice.BalancerEntry.isConstruct"></a>

```typescript
import { BalancerEntry } from '@smallcase/aws-cdk-microservice'

BalancerEntry.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/aws-cdk-microservice.BalancerEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@smallcase/aws-cdk-microservice.BalancerEntry.isResource"></a>

```typescript
import { BalancerEntry } from '@smallcase/aws-cdk-microservice'

BalancerEntry.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@smallcase/aws-cdk-microservice.BalancerEntry.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.BalancerEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@smallcase/aws-cdk-microservice.BalancerEntry.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@smallcase/aws-cdk-microservice.BalancerEntry.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="@smallcase/aws-cdk-microservice.BalancerEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@smallcase/aws-cdk-microservice.BalancerEntry.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK (generally, those created by creating new class instances like Role, Bucket, etc.), this is always the same as the environment of the stack they belong to; however, for imported resources (those obtained from static methods like fromRoleArn, fromBucketName, etc.), that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@smallcase/aws-cdk-microservice.BalancerEntry.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### Deployment <a name="Deployment" id="@smallcase/aws-cdk-microservice.Deployment"></a>

#### Initializers <a name="Initializers" id="@smallcase/aws-cdk-microservice.Deployment.Initializer"></a>

```typescript
import { Deployment } from '@smallcase/aws-cdk-microservice'

new Deployment(scope: Construct, id: string, props: DeploymentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.Deployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.Deployment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.Deployment.Initializer.parameter.props">props</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.DeploymentProps">DeploymentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@smallcase/aws-cdk-microservice.Deployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@smallcase/aws-cdk-microservice.Deployment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@smallcase/aws-cdk-microservice.Deployment.Initializer.parameter.props"></a>

- *Type:* <a href="#@smallcase/aws-cdk-microservice.DeploymentProps">DeploymentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.Deployment.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@smallcase/aws-cdk-microservice.Deployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.Deployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@smallcase/aws-cdk-microservice.Deployment.isConstruct"></a>

```typescript
import { Deployment } from '@smallcase/aws-cdk-microservice'

Deployment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/aws-cdk-microservice.Deployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.Deployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@smallcase/aws-cdk-microservice.Deployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### MicroService <a name="MicroService" id="@smallcase/aws-cdk-microservice.MicroService"></a>

#### Initializers <a name="Initializers" id="@smallcase/aws-cdk-microservice.MicroService.Initializer"></a>

```typescript
import { MicroService } from '@smallcase/aws-cdk-microservice'

new MicroService(scope: Construct, id: string, props: MicroServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.Initializer.parameter.props">props</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps">MicroServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@smallcase/aws-cdk-microservice.MicroService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@smallcase/aws-cdk-microservice.MicroService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@smallcase/aws-cdk-microservice.MicroService.Initializer.parameter.props"></a>

- *Type:* <a href="#@smallcase/aws-cdk-microservice.MicroServiceProps">MicroServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@smallcase/aws-cdk-microservice.MicroService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@smallcase/aws-cdk-microservice.MicroService.isConstruct"></a>

```typescript
import { MicroService } from '@smallcase/aws-cdk-microservice'

MicroService.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/aws-cdk-microservice.MicroService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.role">role</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.InternalRole">InternalRole</a></code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.sshKey">sshKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.targetGroupProps">targetGroupProps</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.TargetGroupProps">TargetGroupProps</a>[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.vpc">vpc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.asgMaxSize">asgMaxSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.asgMinSize">asgMinSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.createCodedeployApplication">createCodedeployApplication</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.deploymentPolicies">deploymentPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.diskSize">diskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.env">env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.instanceLabels">instanceLabels</a></code> | <code>aws-cdk-lib.aws_autoscaling.CfnAutoScalingGroup.TagPropertyProperty[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.networkProps">networkProps</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.NetworkProps">NetworkProps</a>[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.securityGroupProps">securityGroupProps</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.InternalSG">InternalSG</a></code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroService.property.tcpRules">tcpRules</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.IngressRule">IngressRule</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@smallcase/aws-cdk-microservice.MicroService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `appName`<sup>Required</sup> <a name="appName" id="@smallcase/aws-cdk-microservice.MicroService.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@smallcase/aws-cdk-microservice.MicroService.property.role"></a>

```typescript
public readonly role: InternalRole;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.InternalRole">InternalRole</a>

---

##### `sshKey`<sup>Required</sup> <a name="sshKey" id="@smallcase/aws-cdk-microservice.MicroService.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* string

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@smallcase/aws-cdk-microservice.MicroService.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `targetGroupProps`<sup>Required</sup> <a name="targetGroupProps" id="@smallcase/aws-cdk-microservice.MicroService.property.targetGroupProps"></a>

```typescript
public readonly targetGroupProps: TargetGroupProps[];
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.TargetGroupProps">TargetGroupProps</a>[]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@smallcase/aws-cdk-microservice.MicroService.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="@smallcase/aws-cdk-microservice.MicroService.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `asgMaxSize`<sup>Optional</sup> <a name="asgMaxSize" id="@smallcase/aws-cdk-microservice.MicroService.property.asgMaxSize"></a>

```typescript
public readonly asgMaxSize: string;
```

- *Type:* string

---

##### `asgMinSize`<sup>Optional</sup> <a name="asgMinSize" id="@smallcase/aws-cdk-microservice.MicroService.property.asgMinSize"></a>

```typescript
public readonly asgMinSize: string;
```

- *Type:* string

---

##### `createCodedeployApplication`<sup>Optional</sup> <a name="createCodedeployApplication" id="@smallcase/aws-cdk-microservice.MicroService.property.createCodedeployApplication"></a>

```typescript
public readonly createCodedeployApplication: boolean;
```

- *Type:* boolean

---

##### `deploymentPolicies`<sup>Optional</sup> <a name="deploymentPolicies" id="@smallcase/aws-cdk-microservice.MicroService.property.deploymentPolicies"></a>

```typescript
public readonly deploymentPolicies: string[];
```

- *Type:* string[]

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="@smallcase/aws-cdk-microservice.MicroService.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@smallcase/aws-cdk-microservice.MicroService.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `env`<sup>Optional</sup> <a name="env" id="@smallcase/aws-cdk-microservice.MicroService.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* string

---

##### `instanceLabels`<sup>Optional</sup> <a name="instanceLabels" id="@smallcase/aws-cdk-microservice.MicroService.property.instanceLabels"></a>

```typescript
public readonly instanceLabels: TagPropertyProperty[];
```

- *Type:* aws-cdk-lib.aws_autoscaling.CfnAutoScalingGroup.TagPropertyProperty[]

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@smallcase/aws-cdk-microservice.MicroService.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `networkProps`<sup>Optional</sup> <a name="networkProps" id="@smallcase/aws-cdk-microservice.MicroService.property.networkProps"></a>

```typescript
public readonly networkProps: NetworkProps[];
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.NetworkProps">NetworkProps</a>[]

---

##### `securityGroupProps`<sup>Optional</sup> <a name="securityGroupProps" id="@smallcase/aws-cdk-microservice.MicroService.property.securityGroupProps"></a>

```typescript
public readonly securityGroupProps: InternalSG;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.InternalSG">InternalSG</a>

---

##### `tcpRules`<sup>Optional</sup> <a name="tcpRules" id="@smallcase/aws-cdk-microservice.MicroService.property.tcpRules"></a>

```typescript
public readonly tcpRules: IngressRule[];
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.IngressRule">IngressRule</a>[]

---


## Structs <a name="Structs" id="Structs"></a>

### ApplicationProps <a name="ApplicationProps" id="@smallcase/aws-cdk-microservice.ApplicationProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.ApplicationProps.Initializer"></a>

```typescript
import { ApplicationProps } from '@smallcase/aws-cdk-microservice'

const applicationProps: ApplicationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.ApplicationProps.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.ApplicationProps.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.ApplicationProps.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@smallcase/aws-cdk-microservice.ApplicationProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@smallcase/aws-cdk-microservice.ApplicationProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@smallcase/aws-cdk-microservice.ApplicationProps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### AutoScalerProps <a name="AutoScalerProps" id="@smallcase/aws-cdk-microservice.AutoScalerProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.AutoScalerProps.Initializer"></a>

```typescript
import { AutoScalerProps } from '@smallcase/aws-cdk-microservice'

const autoScalerProps: AutoScalerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScalerProps.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScalerProps.property.asgName">asgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScalerProps.property.maxSize">maxSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScalerProps.property.minSize">minSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScalerProps.property.networkProps">networkProps</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.NetworkProps">NetworkProps</a>[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScalerProps.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScalerProps.property.templateProps">templateProps</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps">InternalLaunchTemplateProps</a></code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScalerProps.property.tags">tags</a></code> | <code>aws-cdk-lib.aws_autoscaling.CfnAutoScalingGroup.TagPropertyProperty[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.AutoScalerProps.property.tgProps">tgProps</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.TargetGroupProps">TargetGroupProps</a></code> | *No description.* |

---

##### `appName`<sup>Required</sup> <a name="appName" id="@smallcase/aws-cdk-microservice.AutoScalerProps.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `asgName`<sup>Required</sup> <a name="asgName" id="@smallcase/aws-cdk-microservice.AutoScalerProps.property.asgName"></a>

```typescript
public readonly asgName: string;
```

- *Type:* string

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@smallcase/aws-cdk-microservice.AutoScalerProps.property.maxSize"></a>

```typescript
public readonly maxSize: string;
```

- *Type:* string

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@smallcase/aws-cdk-microservice.AutoScalerProps.property.minSize"></a>

```typescript
public readonly minSize: string;
```

- *Type:* string

---

##### `networkProps`<sup>Required</sup> <a name="networkProps" id="@smallcase/aws-cdk-microservice.AutoScalerProps.property.networkProps"></a>

```typescript
public readonly networkProps: NetworkProps[];
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.NetworkProps">NetworkProps</a>[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@smallcase/aws-cdk-microservice.AutoScalerProps.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `templateProps`<sup>Required</sup> <a name="templateProps" id="@smallcase/aws-cdk-microservice.AutoScalerProps.property.templateProps"></a>

```typescript
public readonly templateProps: InternalLaunchTemplateProps;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps">InternalLaunchTemplateProps</a>

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@smallcase/aws-cdk-microservice.AutoScalerProps.property.tags"></a>

```typescript
public readonly tags: TagPropertyProperty[];
```

- *Type:* aws-cdk-lib.aws_autoscaling.CfnAutoScalingGroup.TagPropertyProperty[]

---

##### `tgProps`<sup>Optional</sup> <a name="tgProps" id="@smallcase/aws-cdk-microservice.AutoScalerProps.property.tgProps"></a>

```typescript
public readonly tgProps: TargetGroupProps;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.TargetGroupProps">TargetGroupProps</a>

---

### DeploymentProps <a name="DeploymentProps" id="@smallcase/aws-cdk-microservice.DeploymentProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.DeploymentProps.Initializer"></a>

```typescript
import { DeploymentProps } from '@smallcase/aws-cdk-microservice'

const deploymentProps: DeploymentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.DeploymentProps.property.applicationProps">applicationProps</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.ApplicationProps">ApplicationProps</a></code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.DeploymentProps.property.asgNames">asgNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.DeploymentProps.property.deploymentConfigName">deploymentConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.DeploymentProps.property.deploymentGroupName">deploymentGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.DeploymentProps.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.DeploymentProps.property.tgName">tgName</a></code> | <code>string</code> | *No description.* |

---

##### `applicationProps`<sup>Required</sup> <a name="applicationProps" id="@smallcase/aws-cdk-microservice.DeploymentProps.property.applicationProps"></a>

```typescript
public readonly applicationProps: ApplicationProps;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.ApplicationProps">ApplicationProps</a>

---

##### `asgNames`<sup>Required</sup> <a name="asgNames" id="@smallcase/aws-cdk-microservice.DeploymentProps.property.asgNames"></a>

```typescript
public readonly asgNames: string[];
```

- *Type:* string[]

---

##### `deploymentConfigName`<sup>Required</sup> <a name="deploymentConfigName" id="@smallcase/aws-cdk-microservice.DeploymentProps.property.deploymentConfigName"></a>

```typescript
public readonly deploymentConfigName: string;
```

- *Type:* string

---

##### `deploymentGroupName`<sup>Required</sup> <a name="deploymentGroupName" id="@smallcase/aws-cdk-microservice.DeploymentProps.property.deploymentGroupName"></a>

```typescript
public readonly deploymentGroupName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@smallcase/aws-cdk-microservice.DeploymentProps.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tgName`<sup>Required</sup> <a name="tgName" id="@smallcase/aws-cdk-microservice.DeploymentProps.property.tgName"></a>

```typescript
public readonly tgName: string;
```

- *Type:* string

---

### IngressRule <a name="IngressRule" id="@smallcase/aws-cdk-microservice.IngressRule"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.IngressRule.Initializer"></a>

```typescript
import { IngressRule } from '@smallcase/aws-cdk-microservice'

const ingressRule: IngressRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.IngressRule.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.IngressRule.property.sourceSG">sourceSG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.IngressRule.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `port`<sup>Required</sup> <a name="port" id="@smallcase/aws-cdk-microservice.IngressRule.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `sourceSG`<sup>Required</sup> <a name="sourceSG" id="@smallcase/aws-cdk-microservice.IngressRule.property.sourceSG"></a>

```typescript
public readonly sourceSG: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="@smallcase/aws-cdk-microservice.IngressRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

### InstanceStackProps <a name="InstanceStackProps" id="@smallcase/aws-cdk-microservice.InstanceStackProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.InstanceStackProps.Initializer"></a>

```typescript
import { InstanceStackProps } from '@smallcase/aws-cdk-microservice'

const instanceStackProps: InstanceStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.InstanceStackProps.property.asgName">asgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InstanceStackProps.property.instanceProps">instanceProps</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceProps</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InstanceStackProps.property.instanceVolumeSize">instanceVolumeSize</a></code> | <code>aws-cdk-lib.aws_autoscaling.BlockDevice</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InstanceStackProps.property.role">role</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.InternalRole">InternalRole</a></code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InstanceStackProps.property.securityGroup">securityGroup</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.InternalSG">InternalSG</a></code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InstanceStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InstanceStackProps.property.targetGroupProps">targetGroupProps</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.NetworkTargetGroupProps</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InstanceStackProps.property.vpc">vpc</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.InternalVPC">InternalVPC</a></code> | *No description.* |

---

##### `asgName`<sup>Required</sup> <a name="asgName" id="@smallcase/aws-cdk-microservice.InstanceStackProps.property.asgName"></a>

```typescript
public readonly asgName: string;
```

- *Type:* string

---

##### `instanceProps`<sup>Required</sup> <a name="instanceProps" id="@smallcase/aws-cdk-microservice.InstanceStackProps.property.instanceProps"></a>

```typescript
public readonly instanceProps: InstanceProps;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceProps

---

##### `instanceVolumeSize`<sup>Optional</sup> <a name="instanceVolumeSize" id="@smallcase/aws-cdk-microservice.InstanceStackProps.property.instanceVolumeSize"></a>

```typescript
public readonly instanceVolumeSize: BlockDevice;
```

- *Type:* aws-cdk-lib.aws_autoscaling.BlockDevice

---

##### `role`<sup>Optional</sup> <a name="role" id="@smallcase/aws-cdk-microservice.InstanceStackProps.property.role"></a>

```typescript
public readonly role: InternalRole;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.InternalRole">InternalRole</a>

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@smallcase/aws-cdk-microservice.InstanceStackProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: InternalSG;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.InternalSG">InternalSG</a>

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@smallcase/aws-cdk-microservice.InstanceStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetGroupProps`<sup>Optional</sup> <a name="targetGroupProps" id="@smallcase/aws-cdk-microservice.InstanceStackProps.property.targetGroupProps"></a>

```typescript
public readonly targetGroupProps: NetworkTargetGroupProps;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.NetworkTargetGroupProps

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@smallcase/aws-cdk-microservice.InstanceStackProps.property.vpc"></a>

```typescript
public readonly vpc: InternalVPC;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.InternalVPC">InternalVPC</a>

---

### InternalBD <a name="InternalBD" id="@smallcase/aws-cdk-microservice.InternalBD"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.InternalBD.Initializer"></a>

```typescript
import { InternalBD } from '@smallcase/aws-cdk-microservice'

const internalBD: InternalBD = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalBD.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalBD.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalBD.property.type">type</a></code> | <code>aws-cdk-lib.aws_autoscaling.EbsDeviceVolumeType</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@smallcase/aws-cdk-microservice.InternalBD.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@smallcase/aws-cdk-microservice.InternalBD.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@smallcase/aws-cdk-microservice.InternalBD.property.type"></a>

```typescript
public readonly type: EbsDeviceVolumeType;
```

- *Type:* aws-cdk-lib.aws_autoscaling.EbsDeviceVolumeType

---

### InternalLaunchTemplateProps <a name="InternalLaunchTemplateProps" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.Initializer"></a>

```typescript
import { InternalLaunchTemplateProps } from '@smallcase/aws-cdk-microservice'

const internalLaunchTemplateProps: InternalLaunchTemplateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.amiImageId">amiImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.blockDevice">blockDevice</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.InternalBD">InternalBD</a></code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.detailedMonitoring">detailedMonitoring</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.role">role</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.InternalRole">InternalRole</a></code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.securityGroup">securityGroup</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.InternalSG">InternalSG</a></code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.sshKey">sshKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.vpc">vpc</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.InternalVPC">InternalVPC</a></code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.existingAttributes">existingAttributes</a></code> | <code>aws-cdk-lib.aws_ec2.LaunchTemplateAttributes</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.instanceVolumeSize">instanceVolumeSize</a></code> | <code>aws-cdk-lib.aws_autoscaling.BlockDevice</code> | *No description.* |

---

##### `amiImageId`<sup>Required</sup> <a name="amiImageId" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.amiImageId"></a>

```typescript
public readonly amiImageId: string;
```

- *Type:* string

---

##### `blockDevice`<sup>Required</sup> <a name="blockDevice" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.blockDevice"></a>

```typescript
public readonly blockDevice: InternalBD;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.InternalBD">InternalBD</a>

---

##### `detailedMonitoring`<sup>Required</sup> <a name="detailedMonitoring" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.detailedMonitoring"></a>

```typescript
public readonly detailedMonitoring: boolean;
```

- *Type:* boolean

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.role"></a>

```typescript
public readonly role: InternalRole;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.InternalRole">InternalRole</a>

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: InternalSG;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.InternalSG">InternalSG</a>

---

##### `sshKey`<sup>Required</sup> <a name="sshKey" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* string

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.vpc"></a>

```typescript
public readonly vpc: InternalVPC;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.InternalVPC">InternalVPC</a>

---

##### `existingAttributes`<sup>Optional</sup> <a name="existingAttributes" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.existingAttributes"></a>

```typescript
public readonly existingAttributes: LaunchTemplateAttributes;
```

- *Type:* aws-cdk-lib.aws_ec2.LaunchTemplateAttributes

---

##### `instanceVolumeSize`<sup>Optional</sup> <a name="instanceVolumeSize" id="@smallcase/aws-cdk-microservice.InternalLaunchTemplateProps.property.instanceVolumeSize"></a>

```typescript
public readonly instanceVolumeSize: BlockDevice;
```

- *Type:* aws-cdk-lib.aws_autoscaling.BlockDevice

---

### InternalRole <a name="InternalRole" id="@smallcase/aws-cdk-microservice.InternalRole"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.InternalRole.Initializer"></a>

```typescript
import { InternalRole } from '@smallcase/aws-cdk-microservice'

const internalRole: InternalRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalRole.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalRole.property.additionalPolicies">additionalPolicies</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalRole.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalRole.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@smallcase/aws-cdk-microservice.InternalRole.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `additionalPolicies`<sup>Optional</sup> <a name="additionalPolicies" id="@smallcase/aws-cdk-microservice.InternalRole.property.additionalPolicies"></a>

```typescript
public readonly additionalPolicies: any[];
```

- *Type:* any[]

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@smallcase/aws-cdk-microservice.InternalRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@smallcase/aws-cdk-microservice.InternalRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

### InternalSG <a name="InternalSG" id="@smallcase/aws-cdk-microservice.InternalSG"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.InternalSG.Initializer"></a>

```typescript
import { InternalSG } from '@smallcase/aws-cdk-microservice'

const internalSG: InternalSG = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalSG.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalSG.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalSG.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalSG.property.disableInlineRules">disableInlineRules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalSG.property.ingressRules">ingressRules</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.IngressRule">IngressRule</a>[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalSG.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalSG.property.sgGroupId">sgGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@smallcase/aws-cdk-microservice.InternalSG.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@smallcase/aws-cdk-microservice.InternalSG.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean

---

##### `description`<sup>Optional</sup> <a name="description" id="@smallcase/aws-cdk-microservice.InternalSG.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableInlineRules`<sup>Optional</sup> <a name="disableInlineRules" id="@smallcase/aws-cdk-microservice.InternalSG.property.disableInlineRules"></a>

```typescript
public readonly disableInlineRules: boolean;
```

- *Type:* boolean

---

##### `ingressRules`<sup>Optional</sup> <a name="ingressRules" id="@smallcase/aws-cdk-microservice.InternalSG.property.ingressRules"></a>

```typescript
public readonly ingressRules: IngressRule[];
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.IngressRule">IngressRule</a>[]

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@smallcase/aws-cdk-microservice.InternalSG.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

---

##### `sgGroupId`<sup>Optional</sup> <a name="sgGroupId" id="@smallcase/aws-cdk-microservice.InternalSG.property.sgGroupId"></a>

```typescript
public readonly sgGroupId: string;
```

- *Type:* string

---

### InternalVPC <a name="InternalVPC" id="@smallcase/aws-cdk-microservice.InternalVPC"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.InternalVPC.Initializer"></a>

```typescript
import { InternalVPC } from '@smallcase/aws-cdk-microservice'

const internalVPC: InternalVPC = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalVPC.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalVPC.property.vpcName">vpcName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.InternalVPC.property.vpcProps">vpcProps</a></code> | <code>aws-cdk-lib.aws_ec2.VpcProps</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@smallcase/aws-cdk-microservice.InternalVPC.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="@smallcase/aws-cdk-microservice.InternalVPC.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

---

##### `vpcProps`<sup>Optional</sup> <a name="vpcProps" id="@smallcase/aws-cdk-microservice.InternalVPC.property.vpcProps"></a>

```typescript
public readonly vpcProps: VpcProps;
```

- *Type:* aws-cdk-lib.aws_ec2.VpcProps

---

### LoadBalancerProps <a name="LoadBalancerProps" id="@smallcase/aws-cdk-microservice.LoadBalancerProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.LoadBalancerProps.Initializer"></a>

```typescript
import { LoadBalancerProps } from '@smallcase/aws-cdk-microservice'

const loadBalancerProps: LoadBalancerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.LoadBalancerProps.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.LoadBalancerProps.property.hostHeader">hostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.LoadBalancerProps.property.lbArn">lbArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.LoadBalancerProps.property.sslEnabled">sslEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.LoadBalancerProps.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.LoadBalancerProps.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |

---

##### `appName`<sup>Required</sup> <a name="appName" id="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.hostHeader"></a>

```typescript
public readonly hostHeader: string;
```

- *Type:* string

---

##### `lbArn`<sup>Required</sup> <a name="lbArn" id="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.lbArn"></a>

```typescript
public readonly lbArn: string;
```

- *Type:* string

---

##### `sslEnabled`<sup>Required</sup> <a name="sslEnabled" id="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.sslEnabled"></a>

```typescript
public readonly sslEnabled: boolean;
```

- *Type:* boolean

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@smallcase/aws-cdk-microservice.LoadBalancerProps.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

### MicroServiceProps <a name="MicroServiceProps" id="@smallcase/aws-cdk-microservice.MicroServiceProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.MicroServiceProps.Initializer"></a>

```typescript
import { MicroServiceProps } from '@smallcase/aws-cdk-microservice'

const microServiceProps: MicroServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.ami">ami</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.env">env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.role">role</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.InternalRole">InternalRole</a></code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.sshKey">sshKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.vpc">vpc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.asgMaxSize">asgMaxSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.asgMinSize">asgMinSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.createCodedeployApplication">createCodedeployApplication</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.deploymentPolicies">deploymentPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.diskSize">diskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.instanceLabels">instanceLabels</a></code> | <code>aws-cdk-lib.aws_autoscaling.CfnAutoScalingGroup.TagPropertyProperty[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.networkProps">networkProps</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.NetworkProps">NetworkProps</a>[]</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.securityGroupProps">securityGroupProps</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.InternalSG">InternalSG</a></code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.MicroServiceProps.property.tcpRules">tcpRules</a></code> | <code><a href="#@smallcase/aws-cdk-microservice.IngressRule">IngressRule</a>[]</code> | *No description.* |

---

##### `ami`<sup>Required</sup> <a name="ami" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.ami"></a>

```typescript
public readonly ami: string;
```

- *Type:* string

---

##### `appName`<sup>Required</sup> <a name="appName" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.role"></a>

```typescript
public readonly role: InternalRole;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.InternalRole">InternalRole</a>

---

##### `sshKey`<sup>Required</sup> <a name="sshKey" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* string

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `asgMaxSize`<sup>Optional</sup> <a name="asgMaxSize" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.asgMaxSize"></a>

```typescript
public readonly asgMaxSize: string;
```

- *Type:* string

---

##### `asgMinSize`<sup>Optional</sup> <a name="asgMinSize" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.asgMinSize"></a>

```typescript
public readonly asgMinSize: string;
```

- *Type:* string

---

##### `createCodedeployApplication`<sup>Optional</sup> <a name="createCodedeployApplication" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.createCodedeployApplication"></a>

```typescript
public readonly createCodedeployApplication: boolean;
```

- *Type:* boolean

---

##### `deploymentPolicies`<sup>Optional</sup> <a name="deploymentPolicies" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.deploymentPolicies"></a>

```typescript
public readonly deploymentPolicies: string[];
```

- *Type:* string[]

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `instanceLabels`<sup>Optional</sup> <a name="instanceLabels" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.instanceLabels"></a>

```typescript
public readonly instanceLabels: TagPropertyProperty[];
```

- *Type:* aws-cdk-lib.aws_autoscaling.CfnAutoScalingGroup.TagPropertyProperty[]

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `networkProps`<sup>Optional</sup> <a name="networkProps" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.networkProps"></a>

```typescript
public readonly networkProps: NetworkProps[];
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.NetworkProps">NetworkProps</a>[]

---

##### `securityGroupProps`<sup>Optional</sup> <a name="securityGroupProps" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.securityGroupProps"></a>

```typescript
public readonly securityGroupProps: InternalSG;
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.InternalSG">InternalSG</a>

---

##### `tcpRules`<sup>Optional</sup> <a name="tcpRules" id="@smallcase/aws-cdk-microservice.MicroServiceProps.property.tcpRules"></a>

```typescript
public readonly tcpRules: IngressRule[];
```

- *Type:* <a href="#@smallcase/aws-cdk-microservice.IngressRule">IngressRule</a>[]

---

### NetworkProps <a name="NetworkProps" id="@smallcase/aws-cdk-microservice.NetworkProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.NetworkProps.Initializer"></a>

```typescript
import { NetworkProps } from '@smallcase/aws-cdk-microservice'

const networkProps: NetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.NetworkProps.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.NetworkProps.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.NetworkProps.property.lbArn">lbArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.NetworkProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.NetworkProps.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.NetworkProps.property.sslEnabled">sslEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.NetworkProps.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@smallcase/aws-cdk-microservice.NetworkProps.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@smallcase/aws-cdk-microservice.NetworkProps.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `lbArn`<sup>Required</sup> <a name="lbArn" id="@smallcase/aws-cdk-microservice.NetworkProps.property.lbArn"></a>

```typescript
public readonly lbArn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@smallcase/aws-cdk-microservice.NetworkProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@smallcase/aws-cdk-microservice.NetworkProps.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sslEnabled`<sup>Required</sup> <a name="sslEnabled" id="@smallcase/aws-cdk-microservice.NetworkProps.property.sslEnabled"></a>

```typescript
public readonly sslEnabled: boolean;
```

- *Type:* boolean

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@smallcase/aws-cdk-microservice.NetworkProps.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

### TargetGroupProps <a name="TargetGroupProps" id="@smallcase/aws-cdk-microservice.TargetGroupProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/aws-cdk-microservice.TargetGroupProps.Initializer"></a>

```typescript
import { TargetGroupProps } from '@smallcase/aws-cdk-microservice'

const targetGroupProps: TargetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/aws-cdk-microservice.TargetGroupProps.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.TargetGroupProps.property.healthPath">healthPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.TargetGroupProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.TargetGroupProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.TargetGroupProps.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.TargetGroupProps.property.tgArn">tgArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.TargetGroupProps.property.thresholdCount">thresholdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@smallcase/aws-cdk-microservice.TargetGroupProps.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@smallcase/aws-cdk-microservice.TargetGroupProps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `healthPath`<sup>Optional</sup> <a name="healthPath" id="@smallcase/aws-cdk-microservice.TargetGroupProps.property.healthPath"></a>

```typescript
public readonly healthPath: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="@smallcase/aws-cdk-microservice.TargetGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="@smallcase/aws-cdk-microservice.TargetGroupProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@smallcase/aws-cdk-microservice.TargetGroupProps.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `tgArn`<sup>Optional</sup> <a name="tgArn" id="@smallcase/aws-cdk-microservice.TargetGroupProps.property.tgArn"></a>

```typescript
public readonly tgArn: string;
```

- *Type:* string

---

##### `thresholdCount`<sup>Optional</sup> <a name="thresholdCount" id="@smallcase/aws-cdk-microservice.TargetGroupProps.property.thresholdCount"></a>

```typescript
public readonly thresholdCount: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@smallcase/aws-cdk-microservice.TargetGroupProps.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---



