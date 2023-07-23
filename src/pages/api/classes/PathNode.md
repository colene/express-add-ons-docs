[ /authoring-api](../overview.md) / PathNode

# Class: PathNode

A PathNode represents a path object. This class is a high-level API
wrapper around the low-level APIs for path creation.

## Hierarchy

- `FillableNode`

  ↳ **`PathNode`**

## Table of contents

### Constructors

- [constructor](PathNode.md#constructor)

### Properties

- [\_core](PathNode.md#_core)
- [DEFAULT\_STROKE\_WIDTH](PathNode.md#DEFAULT_STROKE_WIDTH)

### Accessors

- [absoluteRotation](PathNode.md#absoluteRotation)
- [absoluteTransform](PathNode.md#absoluteTransform)
- [allChildren](PathNode.md#allChildren)
- [blendMode](PathNode.md#blendMode)
- [entity](PathNode.md#entity)
- [fillRule](PathNode.md#fillRule)
- [fills](PathNode.md#fills)
- [locked](PathNode.md#locked)
- [name](PathNode.md#name)
- [opacity](PathNode.md#opacity)
- [parent](PathNode.md#parent)
- [path](PathNode.md#path)
- [relativeRotation](PathNode.md#relativeRotation)
- [relativeTransform](PathNode.md#relativeTransform)
- [strokes](PathNode.md#strokes)
- [translateX](PathNode.md#translateX)
- [translateY](PathNode.md#translateY)
- [type](PathNode.md#type)

### Methods

- [canRemoveChild](PathNode.md#canRemoveChild)
- [removeFromParent](PathNode.md#removeFromParent)
- [canChangeParent](PathNode.md#canChangeParent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new PathNode**(`entity`, `core`)

**`Throws`**

if the input ECS entity does not have path component.

**`Remarks`**

Please use editor.createPath if there is no valid entity for this constructor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `core` | `CoreDependencies`<[`Node`](Node.md)\> |

#### Overrides

FillableNode.constructor

#### Defined in

platform/authoring/api/src/PathNode.ts:40

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

### <a id="fillRule" name="fillRule"></a> fillRule

• `get` **fillRule**(): `FillRuleValue`

The fill rule specifies how the inside of a path is calculated. The fill rule value is read-only and cannot be modified via this API.

#### Returns

`FillRuleValue`

#### Defined in

platform/authoring/api/src/PathNode.ts:64

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

### <a id="path" name="path"></a> path

• `get` **path**(): `string`

The path definition as an SVG string. The path data is read-only and cannot be modified via this API.
Example: "M 0 0 L 10 15".

#### Returns

`string`

#### Defined in

platform/authoring/api/src/PathNode.ts:51

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
