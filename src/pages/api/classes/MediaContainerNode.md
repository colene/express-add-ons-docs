[add-on-hlapi-sdk](../overview.md) / MediaContainerNode

# Class: MediaContainerNode

A MediaContainerNode is a multi-node construct that displays media (such as images or video) with optional cropping and
clipping to a shape mask. The underlying media asset is always rectangular, but the final appearance of this node is
determined by the maskShape which is not necessarily a rectangle.

## Hierarchy

- [`Node`](Node.md)

  ↳ **`MediaContainerNode`**

## Table of contents

### Accessors

- [absoluteRotation](MediaContainerNode.md#absoluteRotation)
- [absoluteTransform](MediaContainerNode.md#absoluteTransform)
- [allChildren](MediaContainerNode.md#allChildren)
- [blendMode](MediaContainerNode.md#blendMode)
- [entity](MediaContainerNode.md#entity)
- [locked](MediaContainerNode.md#locked)
- [maskShape](MediaContainerNode.md#maskShape)
- [mediaRectangle](MediaContainerNode.md#mediaRectangle)
- [name](MediaContainerNode.md#name)
- [opacity](MediaContainerNode.md#opacity)
- [parent](MediaContainerNode.md#parent)
- [relativeRotation](MediaContainerNode.md#relativeRotation)
- [relativeTransform](MediaContainerNode.md#relativeTransform)
- [translateX](MediaContainerNode.md#translateX)
- [translateY](MediaContainerNode.md#translateY)
- [type](MediaContainerNode.md#type)

### Methods

- [removeFromParent](MediaContainerNode.md#removeFromParent)

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

### <a id="maskShape" name="maskShape"></a> maskShape

• `get` **maskShape**(): [`FillableNode`](FillableNode.md)

The mask used for cropping/clipping the media. The bounds of this shape are entire visible bounds of the container.
The shape's geometric properties (position, rotation, size, etc.) can be changed, but it cannot be replaced by a
different shape via this API (see HZ-12247).

#### Returns

[`FillableNode`](FillableNode.md)

#### Defined in

MediaContainerNode.ts:46

___

### <a id="mediaRectangle" name="mediaRectangle"></a> mediaRectangle

• `get` **mediaRectangle**(): [`Node`](Node.md) \| `ImageRectangleNode`

The rectangular node representing the entire, uncropped bounds of the media (image or video). The media's position and
rotation can be changed, but it cannot be resized yet via this API (see HZ-17885 & HZ-12247). Detailed media information
is only available for images for now; other media types will yield a plain Node object (see HZ-15896).

#### Returns

[`Node`](Node.md) \| `ImageRectangleNode`

#### Defined in

MediaContainerNode.ts:36

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
