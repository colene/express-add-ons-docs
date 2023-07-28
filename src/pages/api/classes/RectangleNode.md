[@hz/add-on-hz-hlapi-sdk](../overview.md) / RectangleNode

# Class: RectangleNode

A RectangleNode represents a rectangle object in the scenegraph. This class is a high-level API
wrapper around the low-level APIs for interacting with scene graph rectangle objects in ECS.

## Hierarchy

- [`FillableNode`](FillableNode.md)

  ↳ **`RectangleNode`**

## Implements

- [`IRectangularNode`](../interfaces/IRectangularNode.md)

## Table of contents

### Properties

- [DEFAULT\_STROKE\_WIDTH](RectangleNode.md#DEFAULT_STROKE_WIDTH)

### Accessors

- [absoluteRotation](RectangleNode.md#absoluteRotation)
- [absoluteTransform](RectangleNode.md#absoluteTransform)
- [allChildren](RectangleNode.md#allChildren)
- [blendMode](RectangleNode.md#blendMode)
- [bottomLeftRadius](RectangleNode.md#bottomLeftRadius)
- [bottomRightRadius](RectangleNode.md#bottomRightRadius)
- [entity](RectangleNode.md#entity)
- [fills](RectangleNode.md#fills)
- [height](RectangleNode.md#height)
- [locked](RectangleNode.md#locked)
- [name](RectangleNode.md#name)
- [opacity](RectangleNode.md#opacity)
- [parent](RectangleNode.md#parent)
- [relativeRotation](RectangleNode.md#relativeRotation)
- [relativeTransform](RectangleNode.md#relativeTransform)
- [strokes](RectangleNode.md#strokes)
- [topLeftRadius](RectangleNode.md#topLeftRadius)
- [topRightRadius](RectangleNode.md#topRightRadius)
- [translateX](RectangleNode.md#translateX)
- [translateY](RectangleNode.md#translateY)
- [type](RectangleNode.md#type)
- [width](RectangleNode.md#width)

### Methods

- [getUniformCornerRadius](RectangleNode.md#getUniformCornerRadius)
- [removeFromParent](RectangleNode.md#removeFromParent)
- [setUniformCornerRadius](RectangleNode.md#setUniformCornerRadius)

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

### <a id="bottomLeftRadius" name="bottomLeftRadius"></a> bottomLeftRadius

• `get` **bottomLeftRadius**(): `number`

The radius of the bottom left corner.

#### Returns

`number`

#### Defined in

RectangleNode.ts:122

• `set` **bottomLeftRadius**(`value`): `void`

Set the radius of the bottom left corner. Must be at least 0.

**`Remarks`**

The actual corner radius that is rendered is capped based on the size of the rectangle
even if the radius value set here is higher.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

RectangleNode.ts:134

___

### <a id="bottomRightRadius" name="bottomRightRadius"></a> bottomRightRadius

• `get` **bottomRightRadius**(): `number`

The radius of the bottom right corner.

#### Returns

`number`

#### Defined in

RectangleNode.ts:103

• `set` **bottomRightRadius**(`value`): `void`

Set the radius of the bottom right corner. Must be at least 0.

**`Remarks`**

The actual corner radius that is rendered is capped based on the size of the rectangle
even if the radius value set here is higher.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

RectangleNode.ts:115

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

### <a id="height" name="height"></a> height

• `get` **height**(): `number`

The height of the node.
Must be at least MIN_DIMENSION.

#### Returns

`number`

#### Implementation of

[IRectangularNode](../interfaces/IRectangularNode.md).[height](../interfaces/IRectangularNode.md#height)

#### Defined in

RectangleNode.ts:53

• `set` **height**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[IRectangularNode](../interfaces/IRectangularNode.md).[height](../interfaces/IRectangularNode.md#height)

#### Defined in

RectangleNode.ts:58

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

### <a id="topLeftRadius" name="topLeftRadius"></a> topLeftRadius

• `get` **topLeftRadius**(): `number`

The radius of the top left corner.

#### Returns

`number`

#### Defined in

RectangleNode.ts:65

• `set` **topLeftRadius**(`value`): `void`

Set the radius of the top left corner. Must be at least 0.

**`Remarks`**

The actual corner radius that is rendered is capped based on the size of the rectangle
even if the radius value set here is higher.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

RectangleNode.ts:77

___

### <a id="topRightRadius" name="topRightRadius"></a> topRightRadius

• `get` **topRightRadius**(): `number`

The radius of the top right corner.

#### Returns

`number`

#### Defined in

RectangleNode.ts:84

• `set` **topRightRadius**(`value`): `void`

Set the radius of the top right corner. Must at least 0.

**`Remarks`**

The actual corner radius that is rendered is capped based on the size of the rectangle
even if the radius value set here is higher.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

RectangleNode.ts:96

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

___

### <a id="width" name="width"></a> width

• `get` **width**(): `number`

The width of the node.
Must be at least MIN_DIMENSION.

#### Returns

`number`

#### Implementation of

[IRectangularNode](../interfaces/IRectangularNode.md).[width](../interfaces/IRectangularNode.md#width)

#### Defined in

RectangleNode.ts:40

• `set` **width**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[IRectangularNode](../interfaces/IRectangularNode.md).[width](../interfaces/IRectangularNode.md#width)

#### Defined in

RectangleNode.ts:45

## Methods

### <a id="getUniformCornerRadius" name="getUniformCornerRadius"></a> getUniformCornerRadius

▸ **getUniformCornerRadius**(): `undefined` \| `number`

If all vertices have the same corner radius value, return that value.
Otherwise, undefined is returned.

#### Returns

`undefined` \| `number`

#### Defined in

RectangleNode.ts:142

___

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

___

### <a id="setUniformCornerRadius" name="setUniformCornerRadius"></a> setUniformCornerRadius

▸ **setUniformCornerRadius**(`radius`): `void`

Set all corner radius to the same value. Must be at least 0.

**`Remarks`**

The actual corner radius that is rendered is capped based on the size of the rectangle
even if the radius value set here is higher.

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Defined in

RectangleNode.ts:154
