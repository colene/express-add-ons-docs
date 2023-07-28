[@hz/add-on-hz-hlapi-sdk](../overview.md) / StrokableNode

# Class: StrokableNode

Base class for a Node that can have its own stroke.

## Hierarchy

- [`Node`](Node.md)

  ↳ **`StrokableNode`**

  ↳↳ [`LineNode`](LineNode.md)

  ↳↳ [`FillableNode`](FillableNode.md)

## Implements

- `IStrokableNode`

## Table of contents

### Properties

- [DEFAULT\_STROKE\_WIDTH](StrokableNode.md#DEFAULT_STROKE_WIDTH)

### Accessors

- [absoluteRotation](StrokableNode.md#absoluteRotation)
- [absoluteTransform](StrokableNode.md#absoluteTransform)
- [allChildren](StrokableNode.md#allChildren)
- [blendMode](StrokableNode.md#blendMode)
- [entity](StrokableNode.md#entity)
- [locked](StrokableNode.md#locked)
- [name](StrokableNode.md#name)
- [opacity](StrokableNode.md#opacity)
- [parent](StrokableNode.md#parent)
- [relativeRotation](StrokableNode.md#relativeRotation)
- [relativeTransform](StrokableNode.md#relativeTransform)
- [strokes](StrokableNode.md#strokes)
- [translateX](StrokableNode.md#translateX)
- [translateY](StrokableNode.md#translateY)
- [type](StrokableNode.md#type)

### Methods

- [removeFromParent](StrokableNode.md#removeFromParent)

## Properties

### <a id="DEFAULT_STROKE_WIDTH" name="DEFAULT_STROKE_WIDTH"></a> DEFAULT\_STROKE\_WIDTH

▪ `Static` **DEFAULT\_STROKE\_WIDTH**: `number` = `20`

#### Defined in

StrokableNode.ts:36

## Accessors

### <a id="absoluteRotation" name="absoluteRotation"></a> absoluteRotation

• `get` **absoluteRotation**(): `number`

The node's absolute rotation value in degrees (includes the parent chain rotation). Must be a finite number.

#### Returns

`number`

#### Inherited from

Node.absoluteRotation

#### Defined in

Node.ts:96

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

Node.ts:101

___

### <a id="absoluteTransform" name="absoluteTransform"></a> absoluteTransform

• `get` **absoluteTransform**(): `mat2d`

The node's absolute (global) transform.

#### Returns

`mat2d`

#### Inherited from

Node.absoluteTransform

#### Defined in

Node.ts:150

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

Node.ts:155

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

Node.ts:34

___

### <a id="blendMode" name="blendMode"></a> blendMode

• `get` **blendMode**(): [`BlendModeValue`](../enums/BlendModeValue.md)

Blend mode determines how a node is composited onto the content below it.
The default value is [normal](../enums/BlendModeValue.md#normal)

[passThrough](../enums/BlendModeValue.md#passThrough) and [normal](../enums/BlendModeValue.md#normal)
are equivalent for leaf nodes, and only visually different for nodes with children.

#### Returns

[`BlendModeValue`](../enums/BlendModeValue.md)

#### Inherited from

Node.blendMode

#### Defined in

Node.ts:190

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendModeValue`](../enums/BlendModeValue.md) |

#### Returns

`void`

#### Inherited from

Node.blendMode

#### Defined in

Node.ts:194

___

### <a id="entity" name="entity"></a> entity

• `get` **entity**(): `string`

ECS entity for this node.

#### Returns

`string`

#### Inherited from

Node.entity

#### Defined in

Node.ts:42

___

### <a id="locked" name="locked"></a> locked

• `get` **locked**(): `boolean`

The node's lock/unlock state.

#### Returns

`boolean`

#### Inherited from

Node.locked

#### Defined in

Node.ts:174

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

Node.ts:179

___

### <a id="name" name="name"></a> name

• `get` **name**(): `undefined` \| `string`

The node's name.

#### Returns

`undefined` \| `string`

#### Inherited from

Node.name

#### Defined in

Node.ts:162

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

Node.ts:167

___

### <a id="opacity" name="opacity"></a> opacity

• `get` **opacity**(): `number`

The node's opacity.

#### Returns

`number`

#### Inherited from

Node.opacity

#### Defined in

Node.ts:126

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

Node.ts:131

___

### <a id="parent" name="parent"></a> parent

• `get` **parent**(): `undefined` \| [`Node`](Node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](Node.md)

#### Inherited from

Node.parent

#### Defined in

Node.ts:108

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

Node.ts:84

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

Node.ts:89

___

### <a id="relativeTransform" name="relativeTransform"></a> relativeTransform

• `get` **relativeTransform**(): `mat2d`

The node's transform relative to its parent.

#### Returns

`mat2d`

#### Inherited from

Node.relativeTransform

#### Defined in

Node.ts:138

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

Node.ts:143

___

### <a id="strokes" name="strokes"></a> strokes

• `get` **strokes**(): [`ItemList`](ItemList.md)<[`Stroke`](../interfaces/Stroke.md)\>

Any stroke(s) on the shape. Use the methods on this ItemList object to get, add, and remove strokes.

#### Returns

[`ItemList`](ItemList.md)<[`Stroke`](../interfaces/Stroke.md)\>

#### Implementation of

IStrokableNode.strokes

#### Defined in

StrokableNode.ts:41

___

### <a id="translateX" name="translateX"></a> translateX

• `get` **translateX**(): `number`

The translation of the node along its parent's x-axis. Must be a finite number.

#### Returns

`number`

#### Inherited from

Node.translateX

#### Defined in

Node.ts:58

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

Node.ts:63

___

### <a id="translateY" name="translateY"></a> translateY

• `get` **translateY**(): `number`

The translation of the node along its parent's y-axis. Must be a finite number.

#### Returns

`number`

#### Inherited from

Node.translateY

#### Defined in

Node.ts:70

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

Node.ts:75

___

### <a id="type" name="type"></a> type

• `get` **type**(): [`SceneNodeTypeValueID`](../enums/SceneNodeTypeValueID.md)

The node's type.

#### Returns

[`SceneNodeTypeValueID`](../enums/SceneNodeTypeValueID.md)

#### Inherited from

Node.type

#### Defined in

Node.ts:50

## Methods

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

Node.ts:118
