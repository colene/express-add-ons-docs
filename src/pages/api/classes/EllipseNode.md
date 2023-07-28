[@hz/add-on-hz-hlapi-sdk](../overview.md) / EllipseNode

# Class: EllipseNode

An EllipseNode represents an ellipse object in the scenegraph. This class is a high-level API
wrapper around the low-level APIs for interacting with scene graph ellipse objects in ECS.

## Hierarchy

- [`FillableNode`](FillableNode.md)

  ↳ **`EllipseNode`**

## Table of contents

### Properties

- [DEFAULT\_STROKE\_WIDTH](EllipseNode.md#DEFAULT_STROKE_WIDTH)

### Accessors

- [absoluteRotation](EllipseNode.md#absoluteRotation)
- [absoluteTransform](EllipseNode.md#absoluteTransform)
- [allChildren](EllipseNode.md#allChildren)
- [blendMode](EllipseNode.md#blendMode)
- [entity](EllipseNode.md#entity)
- [fills](EllipseNode.md#fills)
- [locked](EllipseNode.md#locked)
- [name](EllipseNode.md#name)
- [opacity](EllipseNode.md#opacity)
- [parent](EllipseNode.md#parent)
- [relativeRotation](EllipseNode.md#relativeRotation)
- [relativeTransform](EllipseNode.md#relativeTransform)
- [rx](EllipseNode.md#rx)
- [ry](EllipseNode.md#ry)
- [strokes](EllipseNode.md#strokes)
- [translateX](EllipseNode.md#translateX)
- [translateY](EllipseNode.md#translateY)
- [type](EllipseNode.md#type)

### Methods

- [removeFromParent](EllipseNode.md#removeFromParent)

## Properties

### <a id="DEFAULT_STROKE_WIDTH" name="DEFAULT_STROKE_WIDTH"></a> DEFAULT\_STROKE\_WIDTH

▪ `Static` **DEFAULT\_STROKE\_WIDTH**: `number` = `20`

#### Inherited from

[FillableNode](FillableNode.md).[DEFAULT_STROKE_WIDTH](FillableNode.md#DEFAULT_STROKE_WIDTH)

#### Defined in

StrokableNode.ts:36

## Accessors

### <a id="absoluteRotation" name="absoluteRotation"></a> absoluteRotation

• `get` **absoluteRotation**(): `number`

The node's absolute rotation value in degrees (includes the parent chain rotation). Must be a finite number.

#### Returns

`number`

#### Inherited from

FillableNode.absoluteRotation

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

FillableNode.absoluteRotation

#### Defined in

Node.ts:101

___

### <a id="absoluteTransform" name="absoluteTransform"></a> absoluteTransform

• `get` **absoluteTransform**(): `mat2d`

The node's absolute (global) transform.

#### Returns

`mat2d`

#### Inherited from

FillableNode.absoluteTransform

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

FillableNode.absoluteTransform

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

FillableNode.allChildren

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

FillableNode.blendMode

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

FillableNode.blendMode

#### Defined in

Node.ts:194

___

### <a id="entity" name="entity"></a> entity

• `get` **entity**(): `string`

ECS entity for this node.

#### Returns

`string`

#### Inherited from

FillableNode.entity

#### Defined in

Node.ts:42

___

### <a id="fills" name="fills"></a> fills

• `get` **fills**(): [`ItemList`](ItemList.md)<[`Fill`](../interfaces/Fill.md)\>

Any fill(s) on the shape. Use the methods on this ItemList object to get, add, and remove fills.

#### Returns

[`ItemList`](ItemList.md)<[`Fill`](../interfaces/Fill.md)\>

#### Inherited from

FillableNode.fills

#### Defined in

FillableNode.ts:39

___

### <a id="locked" name="locked"></a> locked

• `get` **locked**(): `boolean`

The node's lock/unlock state.

#### Returns

`boolean`

#### Inherited from

FillableNode.locked

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

FillableNode.locked

#### Defined in

Node.ts:179

___

### <a id="name" name="name"></a> name

• `get` **name**(): `undefined` \| `string`

The node's name.

#### Returns

`undefined` \| `string`

#### Inherited from

FillableNode.name

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

FillableNode.name

#### Defined in

Node.ts:167

___

### <a id="opacity" name="opacity"></a> opacity

• `get` **opacity**(): `number`

The node's opacity.

#### Returns

`number`

#### Inherited from

FillableNode.opacity

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

FillableNode.opacity

#### Defined in

Node.ts:131

___

### <a id="parent" name="parent"></a> parent

• `get` **parent**(): `undefined` \| [`Node`](Node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](Node.md)

#### Inherited from

FillableNode.parent

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

FillableNode.relativeRotation

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

FillableNode.relativeRotation

#### Defined in

Node.ts:89

___

### <a id="relativeTransform" name="relativeTransform"></a> relativeTransform

• `get` **relativeTransform**(): `mat2d`

The node's transform relative to its parent.

#### Returns

`mat2d`

#### Inherited from

FillableNode.relativeTransform

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

FillableNode.relativeTransform

#### Defined in

Node.ts:143

___

### <a id="rx" name="rx"></a> rx

• `get` **rx**(): `number`

The radius of the ellipse on the x-axis.

#### Returns

`number`

#### Defined in

EllipseNode.ts:32

• `set` **rx**(`value`): `void`

Set the ellipse radius on the x-axis.
Must be at least MIN_DIMENSION / 2.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

EllipseNode.ts:41

___

### <a id="ry" name="ry"></a> ry

• `get` **ry**(): `number`

The radius of the ellipse on the y-axis.

#### Returns

`number`

#### Defined in

EllipseNode.ts:48

• `set` **ry**(`value`): `void`

Set the ellipse radius on the y-axis.
Must be at least MIN_DIMENSION / 2.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

EllipseNode.ts:57

___

### <a id="strokes" name="strokes"></a> strokes

• `get` **strokes**(): [`ItemList`](ItemList.md)<[`Stroke`](../interfaces/Stroke.md)\>

Any stroke(s) on the shape. Use the methods on this ItemList object to get, add, and remove strokes.

#### Returns

[`ItemList`](ItemList.md)<[`Stroke`](../interfaces/Stroke.md)\>

#### Inherited from

FillableNode.strokes

#### Defined in

StrokableNode.ts:41

___

### <a id="translateX" name="translateX"></a> translateX

• `get` **translateX**(): `number`

The translation of the node along its parent's x-axis. Must be a finite number.

#### Returns

`number`

#### Inherited from

FillableNode.translateX

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

FillableNode.translateX

#### Defined in

Node.ts:63

___

### <a id="translateY" name="translateY"></a> translateY

• `get` **translateY**(): `number`

The translation of the node along its parent's y-axis. Must be a finite number.

#### Returns

`number`

#### Inherited from

FillableNode.translateY

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

FillableNode.translateY

#### Defined in

Node.ts:75

___

### <a id="type" name="type"></a> type

• `get` **type**(): [`SceneNodeTypeValueID`](../enums/SceneNodeTypeValueID.md)

The node's type.

#### Returns

[`SceneNodeTypeValueID`](../enums/SceneNodeTypeValueID.md)

#### Inherited from

FillableNode.type

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

[FillableNode](FillableNode.md).[removeFromParent](FillableNode.md#removeFromParent)

#### Defined in

Node.ts:118
