[ /authoring-api](../overview.md) / RectangleNode

# Class: RectangleNode

A RectangleNode represents a rectangle object in the scenegraph. This class is a high-level API
wrapper around the low-level APIs for interacting with scene graph rectangle objects in ECS.

## Hierarchy

- `FillableNode`

  ↳ **`RectangleNode`**

## Implements

- `IRectangularNode`

## Table of contents

### Constructors

- [constructor](RectangleNode.md#constructor)

### Properties

- [\_core](RectangleNode.md#_core)
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

- [canRemoveChild](RectangleNode.md#canRemoveChild)
- [getUniformCornerRadius](RectangleNode.md#getUniformCornerRadius)
- [removeFromParent](RectangleNode.md#removeFromParent)
- [setUniformCornerRadius](RectangleNode.md#setUniformCornerRadius)
- [canChangeParent](RectangleNode.md#canChangeParent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new RectangleNode**(`entity`, `core`)

**`Throws`**

if the input ECS entity does not have rectangle component.

**`Remarks`**

Please use editor.createRectangle if there is no valid entity for this constructor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `core` | `CoreDependencies`<[`Node`](Node.md)\> |

#### Overrides

FillableNode.constructor

#### Defined in

platform/authoring/api/src/RectangleNode.ts:47

## Properties

### <a id="_core" name="_core"></a> \_core

• `Protected` `Readonly` **\_core**: `CoreDependencies`<[`Node`](Node.md)\>

#### Inherited from

FillableNode.\_core

#### Defined in

platform/authoring/api/src/Node.ts:51

___

### <a id="DEFAULT_STROKE_WIDTH" name="DEFAULT_STROKE_WIDTH"></a> DEFAULT\_STROKE\_WIDTH

▪ `Static` **DEFAULT\_STROKE\_WIDTH**: `number` = `20`

#### Inherited from

FillableNode.DEFAULT\_STROKE\_WIDTH

#### Defined in

platform/authoring/api/src/StrokableNode.ts:36

## Accessors

### <a id="absoluteRotation" name="absoluteRotation"></a> absoluteRotation

• `get` **absoluteRotation**(): `number`

The node's absolute rotation value in degrees (includes the parent chain rotation). Must be a finite number.

#### Returns

`number`

#### Inherited from

FillableNode.absoluteRotation

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

FillableNode.absoluteRotation

#### Defined in

platform/authoring/api/src/Node.ts:163

___

### <a id="absoluteTransform" name="absoluteTransform"></a> absoluteTransform

• `get` **absoluteTransform**(): `mat2d`

The node's absolute (global) transform.

#### Returns

`mat2d`

#### Inherited from

FillableNode.absoluteTransform

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

FillableNode.absoluteTransform

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

FillableNode.allChildren

#### Defined in

platform/authoring/api/src/Node.ts:58

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

platform/authoring/api/src/Node.ts:308

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

platform/authoring/api/src/Node.ts:311

___

### <a id="bottomLeftRadius" name="bottomLeftRadius"></a> bottomLeftRadius

• `get` **bottomLeftRadius**(): `number`

The radius of the bottom left corner.

#### Returns

`number`

#### Defined in

platform/authoring/api/src/RectangleNode.ts:174

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

platform/authoring/api/src/RectangleNode.ts:185

___

### <a id="bottomRightRadius" name="bottomRightRadius"></a> bottomRightRadius

• `get` **bottomRightRadius**(): `number`

The radius of the bottom right corner.

#### Returns

`number`

#### Defined in

platform/authoring/api/src/RectangleNode.ts:152

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

platform/authoring/api/src/RectangleNode.ts:163

___

### <a id="entity" name="entity"></a> entity

• `get` **entity**(): `string`

ECS entity for this node.

#### Returns

`string`

#### Inherited from

FillableNode.entity

#### Defined in

platform/authoring/api/src/Node.ts:97

___

### <a id="fills" name="fills"></a> fills

• `get` **fills**(): [`ItemList`](ItemList.md)<[`Fill`](../interfaces/Fill.md)\>

Any fill(s) on the shape. Use the methods on this ItemList object to get, add, and remove fills.

#### Returns

[`ItemList`](ItemList.md)<[`Fill`](../interfaces/Fill.md)\>

#### Inherited from

FillableNode.fills

#### Defined in

platform/authoring/api/src/FillableNode.ts:39

___

### <a id="height" name="height"></a> height

• `get` **height**(): `number`

The height of the node.
Must be at least [MIN_DIMENSION](../overview.md#MIN_DIMENSION).

#### Returns

`number`

#### Implementation of

IRectangularNode.height

#### Defined in

platform/authoring/api/src/RectangleNode.ts:80

• `set` **height**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

IRectangularNode.height

#### Defined in

platform/authoring/api/src/RectangleNode.ts:83

___

### <a id="locked" name="locked"></a> locked

• `get` **locked**(): `boolean`

The node's lock/unlock state.

#### Returns

`boolean`

#### Inherited from

FillableNode.locked

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

FillableNode.locked

#### Defined in

platform/authoring/api/src/Node.ts:297

___

### <a id="name" name="name"></a> name

• `get` **name**(): `undefined` \| `string`

The node's name.

#### Returns

`undefined` \| `string`

#### Inherited from

FillableNode.name

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

FillableNode.name

#### Defined in

platform/authoring/api/src/Node.ts:281

___

### <a id="opacity" name="opacity"></a> opacity

• `get` **opacity**(): `number`

The node's opacity.

#### Returns

`number`

#### Inherited from

FillableNode.opacity

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

FillableNode.opacity

#### Defined in

platform/authoring/api/src/Node.ts:238

___

### <a id="parent" name="parent"></a> parent

• `get` **parent**(): `undefined` \| [`Node`](Node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](Node.md)

#### Inherited from

FillableNode.parent

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

FillableNode.relativeRotation

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

FillableNode.relativeRotation

#### Defined in

platform/authoring/api/src/Node.ts:152

___

### <a id="relativeTransform" name="relativeTransform"></a> relativeTransform

• `get` **relativeTransform**(): `mat2d`

The node's transform relative to its parent.

#### Returns

`mat2d`

#### Inherited from

FillableNode.relativeTransform

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

FillableNode.relativeTransform

#### Defined in

platform/authoring/api/src/Node.ts:250

___

### <a id="strokes" name="strokes"></a> strokes

• `get` **strokes**(): [`ItemList`](ItemList.md)<[`Stroke`](../interfaces/Stroke.md)\>

Any stroke(s) on the shape. Use the methods on this ItemList object to get, add, and remove strokes.

#### Returns

[`ItemList`](ItemList.md)<[`Stroke`](../interfaces/Stroke.md)\>

#### Inherited from

FillableNode.strokes

#### Defined in

platform/authoring/api/src/StrokableNode.ts:41

___

### <a id="topLeftRadius" name="topLeftRadius"></a> topLeftRadius

• `get` **topLeftRadius**(): `number`

The radius of the top left corner.

#### Returns

`number`

#### Defined in

platform/authoring/api/src/RectangleNode.ts:106

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

platform/authoring/api/src/RectangleNode.ts:117

___

### <a id="topRightRadius" name="topRightRadius"></a> topRightRadius

• `get` **topRightRadius**(): `number`

The radius of the top right corner.

#### Returns

`number`

#### Defined in

platform/authoring/api/src/RectangleNode.ts:130

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

platform/authoring/api/src/RectangleNode.ts:141

___

### <a id="translateX" name="translateX"></a> translateX

• `get` **translateX**(): `number`

The translation of the node along its parent's x-axis. Must be a finite number.

#### Returns

`number`

#### Inherited from

FillableNode.translateX

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

FillableNode.translateX

#### Defined in

platform/authoring/api/src/Node.ts:120

___

### <a id="translateY" name="translateY"></a> translateY

• `get` **translateY**(): `number`

The translation of the node along its parent's y-axis. Must be a finite number.

#### Returns

`number`

#### Inherited from

FillableNode.translateY

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

FillableNode.translateY

#### Defined in

platform/authoring/api/src/Node.ts:135

___

### <a id="type" name="type"></a> type

• `get` **type**(): keyof `SceneNodeTypeValueExtensibleEnum` \| `ApiNodeType`

The node's type.

#### Returns

keyof `SceneNodeTypeValueExtensibleEnum` \| `ApiNodeType`

#### Inherited from

FillableNode.type

#### Defined in

platform/authoring/api/src/Node.ts:104

___

### <a id="width" name="width"></a> width

• `get` **width**(): `number`

The width of the node.
Must be at least [MIN_DIMENSION](../overview.md#MIN_DIMENSION).

#### Returns

`number`

#### Implementation of

IRectangularNode.width

#### Defined in

platform/authoring/api/src/RectangleNode.ts:69

• `set` **width**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

IRectangularNode.width

#### Defined in

platform/authoring/api/src/RectangleNode.ts:72

## Methods

### <a id="canRemoveChild" name="canRemoveChild"></a> canRemoveChild

▸ `Protected` **canRemoveChild**(`_child`): `boolean`

Indicates whether a given child of this node can be removed. Certain parent containers impose restrictions on their
child structure; those subclasses should override this method to implement their specific rules. Do not call this
directly though - use canChangeParent() instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_child` | [`Node`](Node.md) | A child of this node |

#### Returns

`boolean`

#### Inherited from

FillableNode.canRemoveChild

#### Defined in

platform/authoring/api/src/Node.ts:70

___

### <a id="getUniformCornerRadius" name="getUniformCornerRadius"></a> getUniformCornerRadius

▸ **getUniformCornerRadius**(): `undefined` \| `number`

If all vertices have the same corner radius value, return that value.
Otherwise, undefined is returned.

#### Returns

`undefined` \| `number`

#### Defined in

platform/authoring/api/src/RectangleNode.ts:197

___

### <a id="removeFromParent" name="removeFromParent"></a> removeFromParent

▸ **removeFromParent**(): `void`

Removes the node from its parent - for a basic ContainerNode, this is equivalent to `node.parent.children.remove(node)`.
For nodes with other slots, removes the child from whichever slot it resides in, if possible. Throws if the slot does
not support removal. Also throws if node is the artwork root. No-op if node is already an orphan.

#### Returns

`void`

#### Inherited from

FillableNode.removeFromParent

#### Defined in

platform/authoring/api/src/Node.ts:221

___

### <a id="setUniformCornerRadius" name="setUniformCornerRadius"></a> setUniformCornerRadius

▸ **setUniformCornerRadius**(`value`): `void`

Set all corner radius to the same value. Must be at least 0.

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

platform/authoring/api/src/RectangleNode.ts:219

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

FillableNode.canChangeParent

#### Defined in

platform/authoring/api/src/Node.ts:82
