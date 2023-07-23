[ /authoring-api](../overview.md) / ContainerNode

# Class: ContainerNode

Base class for a Node contains an entirely generic collection of children. (Other node classes may also hold children
in more rigid "slots" - use $[allChildren](Node.md#allChildren) for read access to children agnostic of node type).

## Hierarchy

- [`Node`](Node.md)

  ↳ **`ContainerNode`**

  ↳↳ [`ArtboardNode`](ArtboardNode.md)

  ↳↳ [`GroupNode`](GroupNode.md)

## Table of contents

### Constructors

- [constructor](ContainerNode.md#constructor)

### Properties

- [\_core](ContainerNode.md#_core)

### Accessors

- [absoluteRotation](ContainerNode.md#absoluteRotation)
- [absoluteTransform](ContainerNode.md#absoluteTransform)
- [allChildren](ContainerNode.md#allChildren)
- [blendMode](ContainerNode.md#blendMode)
- [children](ContainerNode.md#children)
- [entity](ContainerNode.md#entity)
- [locked](ContainerNode.md#locked)
- [name](ContainerNode.md#name)
- [opacity](ContainerNode.md#opacity)
- [parent](ContainerNode.md#parent)
- [relativeRotation](ContainerNode.md#relativeRotation)
- [relativeTransform](ContainerNode.md#relativeTransform)
- [translateX](ContainerNode.md#translateX)
- [translateY](ContainerNode.md#translateY)
- [type](ContainerNode.md#type)

### Methods

- [canRemoveChild](ContainerNode.md#canRemoveChild)
- [removeFromParent](ContainerNode.md#removeFromParent)
- [canChangeParent](ContainerNode.md#canChangeParent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ContainerNode**(`_entity`, `_core`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_entity` | `string` |
| `_core` | `CoreDependencies`<[`Node`](Node.md)\> |

#### Inherited from

[Node](Node.md).[constructor](Node.md#constructor)

#### Defined in

platform/authoring/api/src/Node.ts:51

## Properties

### <a id="_core" name="_core"></a> \_core

• `Protected` `Readonly` **\_core**: `CoreDependencies`<[`Node`](Node.md)\>

#### Inherited from

[Node](Node.md).[_core](Node.md#_core)

#### Defined in

platform/authoring/api/src/Node.ts:51

## Accessors

### <a id="absoluteRotation" name="absoluteRotation"></a> absoluteRotation

• `get` **absoluteRotation**(): `number`

The node's absolute rotation value in degrees (includes the parent chain rotation). Must be a finite number.

#### Returns

`number`

#### Inherited from

Node.absoluteRotation

#### Defined in

platform/authoring/api/src/Node.ts:159

• `set` **absoluteRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Node.absoluteRotation

#### Defined in

platform/authoring/api/src/Node.ts:163

___

### <a id="absoluteTransform" name="absoluteTransform"></a> absoluteTransform

• `get` **absoluteTransform**(): `mat2d`

The node's absolute (global) transform.

#### Returns

`mat2d`

#### Inherited from

Node.absoluteTransform

#### Defined in

platform/authoring/api/src/Node.ts:257

• `set` **absoluteTransform**(`transform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `mat2d` |

#### Returns

`void`

#### Inherited from

Node.absoluteTransform

#### Defined in

platform/authoring/api/src/Node.ts:261

___

### <a id="allChildren" name="allChildren"></a> allChildren

• `get` **allChildren**(): `Readonly`<`Iterable`<[`Node`](Node.md)\>\>

Returns a read-only list of all children of the node. General-purpose content containers such as GroupNode also provide
a mutable $[children](ContainerNode.md#children) list. Other nodes with a more specific structure can hold children in various
discrete "slots"; this `allChildren` list includes *all* such children and reflects their overall display z-order.

#### Returns

`Readonly`<`Iterable`<[`Node`](Node.md)\>\>

#### Inherited from

Node.allChildren

#### Defined in

platform/authoring/api/src/Node.ts:58

___

### <a id="blendMode" name="blendMode"></a> blendMode

• `get` **blendMode**(): [`BlendModeValue`](../enums/BlendModeValue.md)

#### Returns

[`BlendModeValue`](../enums/BlendModeValue.md)

#### Overrides

Node.blendMode

#### Defined in

platform/authoring/api/src/ContainerNode.ts:54

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendModeValue`](../enums/BlendModeValue.md) |

#### Returns

`void`

#### Overrides

Node.blendMode

#### Defined in

platform/authoring/api/src/ContainerNode.ts:57

___

### <a id="children" name="children"></a> children

• `get` **children**(): [`ItemList`](ItemList.md)<[`Node`](Node.md)\>

The node's children. Use the methods on this ItemList object to get, add, and remove children.

#### Returns

[`ItemList`](ItemList.md)<[`Node`](Node.md)\>

#### Defined in

platform/authoring/api/src/ContainerNode.ts:34

___

### <a id="entity" name="entity"></a> entity

• `get` **entity**(): `string`

ECS entity for this node.

#### Returns

`string`

#### Inherited from

Node.entity

#### Defined in

platform/authoring/api/src/Node.ts:97

___

### <a id="locked" name="locked"></a> locked

• `get` **locked**(): `boolean`

The node's lock/unlock state.

#### Returns

`boolean`

#### Inherited from

Node.locked

#### Defined in

platform/authoring/api/src/Node.ts:293

• `set` **locked**(`locked`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locked` | `boolean` |

#### Returns

`void`

#### Inherited from

Node.locked

#### Defined in

platform/authoring/api/src/Node.ts:297

___

### <a id="name" name="name"></a> name

• `get` **name**(): `undefined` \| `string`

The node's name.

#### Returns

`undefined` \| `string`

#### Inherited from

Node.name

#### Defined in

platform/authoring/api/src/Node.ts:277

• `set` **name**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

Node.name

#### Defined in

platform/authoring/api/src/Node.ts:281

___

### <a id="opacity" name="opacity"></a> opacity

• `get` **opacity**(): `number`

The node's opacity.

#### Returns

`number`

#### Inherited from

Node.opacity

#### Defined in

platform/authoring/api/src/Node.ts:234

• `set` **opacity**(`opacity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opacity` | `number` |

#### Returns

`void`

#### Inherited from

Node.opacity

#### Defined in

platform/authoring/api/src/Node.ts:238

___

### <a id="parent" name="parent"></a> parent

• `get` **parent**(): `undefined` \| [`Node`](Node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](Node.md)

#### Inherited from

Node.parent

#### Defined in

platform/authoring/api/src/Node.ts:211

___

### <a id="relativeRotation" name="relativeRotation"></a> relativeRotation

• `get` **relativeRotation**(): `number`

The node's local rotation value in degrees. Modifying this value will also adjust the node's x & y translation such
that the node's center is in the same location after the rotation – i.e. this setter rotates the node about its
center, not its origin.

#### Returns

`number`

#### Inherited from

Node.relativeRotation

#### Defined in

platform/authoring/api/src/Node.ts:148

• `set` **relativeRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Node.relativeRotation

#### Defined in

platform/authoring/api/src/Node.ts:152

___

### <a id="relativeTransform" name="relativeTransform"></a> relativeTransform

• `get` **relativeTransform**(): `mat2d`

The node's transform relative to its parent.

#### Returns

`mat2d`

#### Inherited from

Node.relativeTransform

#### Defined in

platform/authoring/api/src/Node.ts:246

• `set` **relativeTransform**(`transform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `mat2d` |

#### Returns

`void`

#### Inherited from

Node.relativeTransform

#### Defined in

platform/authoring/api/src/Node.ts:250

___

### <a id="translateX" name="translateX"></a> translateX

• `get` **translateX**(): `number`

The translation of the node along its parent's x-axis. Must be a finite number.

#### Returns

`number`

#### Inherited from

Node.translateX

#### Defined in

platform/authoring/api/src/Node.ts:116

• `set` **translateX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Node.translateX

#### Defined in

platform/authoring/api/src/Node.ts:120

___

### <a id="translateY" name="translateY"></a> translateY

• `get` **translateY**(): `number`

The translation of the node along its parent's y-axis. Must be a finite number.

#### Returns

`number`

#### Inherited from

Node.translateY

#### Defined in

platform/authoring/api/src/Node.ts:131

• `set` **translateY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Node.translateY

#### Defined in

platform/authoring/api/src/Node.ts:135

___

### <a id="type" name="type"></a> type

• `get` **type**(): keyof `SceneNodeTypeValueExtensibleEnum` \| `ApiNodeType`

The node's type.

#### Returns

keyof `SceneNodeTypeValueExtensibleEnum` \| `ApiNodeType`

#### Inherited from

Node.type

#### Defined in

platform/authoring/api/src/Node.ts:104

## Methods

### <a id="canRemoveChild" name="canRemoveChild"></a> canRemoveChild

▸ `Protected` **canRemoveChild**(`_child`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_child` | [`Node`](Node.md) |

#### Returns

`boolean`

#### Overrides

[Node](Node.md).[canRemoveChild](Node.md#canRemoveChild)

#### Defined in

platform/authoring/api/src/ContainerNode.ts:48

___

### <a id="removeFromParent" name="removeFromParent"></a> removeFromParent

▸ **removeFromParent**(): `void`

Removes the node from its parent - for a basic ContainerNode, this is equivalent to `node.parent.children.remove(node)`.
For nodes with other slots, removes the child from whichever slot it resides in, if possible. Throws if the slot does
not support removal. Also throws if node is the artwork root. No-op if node is already an orphan.

#### Returns

`void`

#### Inherited from

[Node](Node.md).[removeFromParent](Node.md#removeFromParent)

#### Defined in

platform/authoring/api/src/Node.ts:221

___

### <a id="canChangeParent" name="canChangeParent"></a> canChangeParent

▸ `Static` `Protected` **canChangeParent**(`node`, `core`): `boolean`

Use this to check if the parent of a given node can be changed: either adding the node to a new parent *and/or*
removing the node from its current parent container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](Node.md) | The node whose parent would be changed |
| `core` | `CoreDependencies`<[`Node`](Node.md)\> | - |

#### Returns

`boolean`

True if it is allowed to change the parent at all.

#### Inherited from

[Node](Node.md).[canChangeParent](Node.md#canChangeParent)

#### Defined in

platform/authoring/api/src/Node.ts:82
