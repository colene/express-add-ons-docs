[@add-on-hlapi-sdk](../overview.md) / LineNode

# Class: LineNode

A LineNode represents a line object in the scenegraph.

## Hierarchy

- [`StrokableNode`](StrokableNode.md)

  ↳ **`LineNode`**

## Table of contents

### Properties

- [DEFAULT\_END\_X](LineNode.md#DEFAULT_END_X)
- [DEFAULT\_END\_Y](LineNode.md#DEFAULT_END_Y)
- [DEFAULT\_START\_X](LineNode.md#DEFAULT_START_X)
- [DEFAULT\_START\_Y](LineNode.md#DEFAULT_START_Y)
- [DEFAULT\_STROKE\_WIDTH](LineNode.md#DEFAULT_STROKE_WIDTH)

### Accessors

- [absoluteRotation](LineNode.md#absoluteRotation)
- [absoluteTransform](LineNode.md#absoluteTransform)
- [allChildren](LineNode.md#allChildren)
- [blendMode](LineNode.md#blendMode)
- [endArrowHeadType](LineNode.md#endArrowHeadType)
- [endX](LineNode.md#endX)
- [endY](LineNode.md#endY)
- [name](LineNode.md#name)
- [opacity](LineNode.md#opacity)
- [parent](LineNode.md#parent)
- [relativeRotation](LineNode.md#relativeRotation)
- [relativeTransform](LineNode.md#relativeTransform)
- [startArrowHeadType](LineNode.md#startArrowHeadType)
- [startX](LineNode.md#startX)
- [startY](LineNode.md#startY)
- [strokes](LineNode.md#strokes)
- [translateX](LineNode.md#translateX)
- [translateY](LineNode.md#translateY)
- [type](LineNode.md#type)

### Methods

- [removeFromParent](LineNode.md#removeFromParent)
- [setEndPoints](LineNode.md#setEndPoints)

## Properties

### <a id="DEFAULT_END_X" name="DEFAULT_END_X"></a> DEFAULT\_END\_X

▪ `Static` `Readonly` **DEFAULT\_END\_X**: ``100``

___

### <a id="DEFAULT_END_Y" name="DEFAULT_END_Y"></a> DEFAULT\_END\_Y

▪ `Static` `Readonly` **DEFAULT\_END\_Y**: ``100``

___

### <a id="DEFAULT_START_X" name="DEFAULT_START_X"></a> DEFAULT\_START\_X

▪ `Static` `Readonly` **DEFAULT\_START\_X**: ``0``

___

### <a id="DEFAULT_START_Y" name="DEFAULT_START_Y"></a> DEFAULT\_START\_Y

▪ `Static` `Readonly` **DEFAULT\_START\_Y**: ``0``

___

### <a id="DEFAULT_STROKE_WIDTH" name="DEFAULT_STROKE_WIDTH"></a> DEFAULT\_STROKE\_WIDTH

▪ `Static` **DEFAULT\_STROKE\_WIDTH**: `number` = `20`

#### Inherited from

[StrokableNode](StrokableNode.md).[DEFAULT_STROKE_WIDTH](StrokableNode.md#DEFAULT_STROKE_WIDTH)

## Accessors

### <a id="absoluteRotation" name="absoluteRotation"></a> absoluteRotation

• `get` **absoluteRotation**(): `number`

The node's absolute rotation value in degrees (includes the parent chain rotation). Must be a finite number.

#### Returns

`number`

#### Inherited from

StrokableNode.absoluteRotation

• `set` **absoluteRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

StrokableNode.absoluteRotation

___

### <a id="absoluteTransform" name="absoluteTransform"></a> absoluteTransform

• `get` **absoluteTransform**(): `mat2d`

The node's absolute (global) transform.

#### Returns

`mat2d`

#### Inherited from

StrokableNode.absoluteTransform

___

### <a id="allChildren" name="allChildren"></a> allChildren

• `get` **allChildren**(): `Readonly`<`Iterable`<[`Node`](Node.md)\>\>

Returns a read-only list of all children of the node. General-purpose content containers such as GroupNode also provide
a mutable $[children](ContainerNode.md#children) list. Other nodes with a more specific structure can hold children in various
discrete "slots"; this `allChildren` list includes *all* such children and reflects their overall display z-order.

#### Returns

`Readonly`<`Iterable`<[`Node`](Node.md)\>\>

#### Inherited from

StrokableNode.allChildren

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

StrokableNode.blendMode

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendModeValue`](../enums/BlendModeValue.md) |

#### Returns

`void`

#### Inherited from

StrokableNode.blendMode

___

### <a id="endArrowHeadType" name="endArrowHeadType"></a> endArrowHeadType

• `get` **endArrowHeadType**(): [`ArrowHeadType`](../enums/ArrowHeadType.md)

The shape encapsulating the end of a line. The size and color of the arrowhead
depends on the first available stroke's weight and color assigned to the node.
Removal of all strokes on this line leads to the arrowhead's removal.

The getter returns [none](../enums/ArrowHeadType.md#none) when there are no strokes on the line
or no arrowhead on the first stroke of the line.

#### Returns

[`ArrowHeadType`](../enums/ArrowHeadType.md)

• `set` **endArrowHeadType**(`type`): `void`

The setter creates a default stroke for the line when there are no strokes on the line,
and updates the arrowhead on only the first stroke of the line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ArrowHeadType`](../enums/ArrowHeadType.md) |

#### Returns

`void`

___

### <a id="endX" name="endX"></a> endX

• `get` **endX**(): `number`

The end point on the x-axis in the parent's coordinate system.

#### Returns

`number`

___

### <a id="endY" name="endY"></a> endY

• `get` **endY**(): `number`

The end point on the y-axis in the parent's coordinate system.

#### Returns

`number`

___

### <a id="name" name="name"></a> name

• `get` **name**(): `undefined` \| `string`

The node's name.

#### Returns

`undefined` \| `string`

#### Inherited from

StrokableNode.name

• `set` **name**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

StrokableNode.name

___

### <a id="opacity" name="opacity"></a> opacity

• `get` **opacity**(): `number`

The node's opacity.

#### Returns

`number`

#### Inherited from

StrokableNode.opacity

• `set` **opacity**(`opacity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opacity` | `number` |

#### Returns

`void`

#### Inherited from

StrokableNode.opacity

___

### <a id="parent" name="parent"></a> parent

• `get` **parent**(): `undefined` \| [`Node`](Node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](Node.md)

#### Inherited from

StrokableNode.parent

___

### <a id="relativeRotation" name="relativeRotation"></a> relativeRotation

• `get` **relativeRotation**(): `number`

The node's local rotation value in degrees. Modifying this value will also adjust the node's x & y translation such
that the node's center is in the same location after the rotation – i.e. this setter rotates the node about its
center, not its origin.

#### Returns

`number`

#### Inherited from

StrokableNode.relativeRotation

• `set` **relativeRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

StrokableNode.relativeRotation

___

### <a id="relativeTransform" name="relativeTransform"></a> relativeTransform

• `get` **relativeTransform**(): `mat2d`

The node's transform relative to its parent.

#### Returns

`mat2d`

#### Inherited from

StrokableNode.relativeTransform

___

### <a id="startArrowHeadType" name="startArrowHeadType"></a> startArrowHeadType

• `get` **startArrowHeadType**(): [`ArrowHeadType`](../enums/ArrowHeadType.md)

The shape encapsulating the start of a line. The size and color of the arrowhead
depends on the first available stroke's weight and color assigned to the node.
Removal of all strokes on this line leads to the arrowhead's removal.

The getter returns [none](../enums/ArrowHeadType.md#none) when there are no strokes on the line
or no arrowhead on the first stroke of the line.

#### Returns

[`ArrowHeadType`](../enums/ArrowHeadType.md)

• `set` **startArrowHeadType**(`type`): `void`

The setter creates a default stroke for the line when there are no strokes on the line,
and updates the arrowhead on only the first stroke of the line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ArrowHeadType`](../enums/ArrowHeadType.md) |

#### Returns

`void`

___

### <a id="startX" name="startX"></a> startX

• `get` **startX**(): `number`

The start point on the x-axis in the parent's coordinate system.

#### Returns

`number`

___

### <a id="startY" name="startY"></a> startY

• `get` **startY**(): `number`

The start point on the y-axis in the parent's coordinate system.

#### Returns

`number`

___

### <a id="strokes" name="strokes"></a> strokes

• `get` **strokes**(): [`ItemList`](ItemList.md)<[`Stroke`](../interfaces/Stroke.md)\>

Any stroke(s) on the shape. Use the methods on this ItemList object to get, add, and remove strokes.

#### Returns

[`ItemList`](ItemList.md)<[`Stroke`](../interfaces/Stroke.md)\>

#### Inherited from

StrokableNode.strokes

___

### <a id="translateX" name="translateX"></a> translateX

• `get` **translateX**(): `number`

The translation of the node along its parent's x-axis. Must be a finite number.

#### Returns

`number`

#### Inherited from

StrokableNode.translateX

• `set` **translateX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

StrokableNode.translateX

___

### <a id="translateY" name="translateY"></a> translateY

• `get` **translateY**(): `number`

The translation of the node along its parent's y-axis. Must be a finite number.

#### Returns

`number`

#### Inherited from

StrokableNode.translateY

• `set` **translateY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

StrokableNode.translateY

___

### <a id="type" name="type"></a> type

• `get` **type**(): [`SceneNodeTypeValueID`](../enums/SceneNodeTypeValueID.md)

The node's type.

#### Returns

[`SceneNodeTypeValueID`](../enums/SceneNodeTypeValueID.md)

#### Inherited from

StrokableNode.type

## Methods

### <a id="removeFromParent" name="removeFromParent"></a> removeFromParent

▸ **removeFromParent**(): `void`

Removes the node from its parent - for a basic ContainerNode, this is equivalent to `node.parent.children.remove(node)`.
For nodes with other slots, removes the child from whichever slot it resides in, if possible. Throws if the slot does
not support removal. Also throws if node is the artwork root. No-op if node is already an orphan.

#### Returns

`void`

#### Inherited from

[StrokableNode](StrokableNode.md).[removeFromParent](StrokableNode.md#removeFromParent)

___

### <a id="setEndPoints" name="setEndPoints"></a> setEndPoints

▸ **setEndPoints**(`startX`, `startY`, `endX`, `endY`): `void`

Set the start and end points of the line in the coordinate space of its parent.
The values may be normalized by this setter, shifting the node's translation
and counter-shifting the start/end points. Therefore, the start/end getters may
return values different from the values you passed into this setter, even though
the line's visual bounds and appearance are the same. Rotation is preserved.

Coordinates must be finite numbers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `startX` | `number` |
| `startY` | `number` |
| `endX` | `number` |
| `endY` | `number` |

#### Returns

`void`
