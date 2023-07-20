[@hz/authoring-api](../overview.md) / ArtboardNode

# Class: ArtboardNode

An ArtboardNode represents an artboard object in the scenegraph. This class is a high-level API
wrapper around the low-level APIs for interacting with artboards in ECS.

**`Remarks`**

Despite supporting the 'fills' list property, ArtboardNode does not extend FillableNode due to limitations
on multiple inheritance.

## Hierarchy

- [`ContainerNode`](ContainerNode.md)

  ↳ **`ArtboardNode`**

## Implements

- `IFillableNode`
- `IRectangularNode`

## Table of contents

### Constructors

- [constructor](ArtboardNode.md#constructor)

### Properties

- [\_core](ArtboardNode.md#_core)

### Accessors

- [absoluteRotation](ArtboardNode.md#absoluteRotation)
- [absoluteTransform](ArtboardNode.md#absoluteTransform)
- [allChildren](ArtboardNode.md#allChildren)
- [blendMode](ArtboardNode.md#blendMode)
- [children](ArtboardNode.md#children)
- [entity](ArtboardNode.md#entity)
- [fills](ArtboardNode.md#fills)
- [height](ArtboardNode.md#height)
- [locked](ArtboardNode.md#locked)
- [name](ArtboardNode.md#name)
- [opacity](ArtboardNode.md#opacity)
- [parent](ArtboardNode.md#parent)
- [relativeRotation](ArtboardNode.md#relativeRotation)
- [relativeTransform](ArtboardNode.md#relativeTransform)
- [strokes](ArtboardNode.md#strokes)
- [translateX](ArtboardNode.md#translateX)
- [translateY](ArtboardNode.md#translateY)
- [type](ArtboardNode.md#type)
- [width](ArtboardNode.md#width)

### Methods

- [canRemoveChild](ArtboardNode.md#canRemoveChild)
- [removeFromParent](ArtboardNode.md#removeFromParent)
- [canChangeParent](ArtboardNode.md#canChangeParent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ArtboardNode**(`entity`, `core`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `core` | `CoreDependencies`<[`Node`](Node.md)\> |

#### Overrides

[ContainerNode](ContainerNode.md).[constructor](ContainerNode.md#constructor)

#### Defined in

platform/authoring/api/src/ArtboardNode.ts:44

## Properties

### <a id="_core" name="_core"></a> \_core

• `Protected` `Readonly` **\_core**: `CoreDependencies`<[`Node`](Node.md)\>

#### Inherited from

[ContainerNode](ContainerNode.md).[_core](ContainerNode.md#_core)

#### Defined in

platform/authoring/api/src/Node.ts:51

## Accessors

### <a id="absoluteRotation" name="absoluteRotation"></a> absoluteRotation

• `get` **absoluteRotation**(): `number`

The node's absolute rotation value in degrees (includes the parent chain rotation). Must be a finite number.

#### Returns

`number`

#### Inherited from

ContainerNode.absoluteRotation

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

ContainerNode.absoluteRotation

#### Defined in

platform/authoring/api/src/Node.ts:163

___

### <a id="absoluteTransform" name="absoluteTransform"></a> absoluteTransform

• `get` **absoluteTransform**(): `mat2d`

The node's absolute (global) transform.

#### Returns

`mat2d`

#### Inherited from

ContainerNode.absoluteTransform

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

ContainerNode.absoluteTransform

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

ContainerNode.allChildren

#### Defined in

platform/authoring/api/src/Node.ts:58

___

### <a id="blendMode" name="blendMode"></a> blendMode

• `get` **blendMode**(): [`BlendModeValue`](../enums/BlendModeValue.md)

#### Returns

[`BlendModeValue`](../enums/BlendModeValue.md)

#### Inherited from

ContainerNode.blendMode

#### Defined in

platform/authoring/api/src/ContainerNode.ts:54

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendModeValue`](../enums/BlendModeValue.md) |

#### Returns

`void`

#### Inherited from

ContainerNode.blendMode

#### Defined in

platform/authoring/api/src/ContainerNode.ts:57

___

### <a id="children" name="children"></a> children

• `get` **children**(): [`ItemList`](ItemList.md)<[`Node`](Node.md)\>

The node's children. Use the methods on this ItemList object to get, add, and remove children.

#### Returns

[`ItemList`](ItemList.md)<[`Node`](Node.md)\>

#### Inherited from

ContainerNode.children

#### Defined in

platform/authoring/api/src/ContainerNode.ts:34

___

### <a id="entity" name="entity"></a> entity

• `get` **entity**(): `string`

ECS entity for this node.

#### Returns

`string`

#### Inherited from

ContainerNode.entity

#### Defined in

platform/authoring/api/src/Node.ts:97

___

### <a id="fills" name="fills"></a> fills

• `get` **fills**(): [`ItemList`](ItemList.md)<[`Fill`](../interfaces/Fill.md)\>

Any fill(s) on the shape. Use the methods on this ItemList object to get, add, and remove fills.

#### Returns

[`ItemList`](ItemList.md)<[`Fill`](../interfaces/Fill.md)\>

#### Implementation of

IFillableNode.fills

#### Defined in

platform/authoring/api/src/ArtboardNode.ts:76

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

platform/authoring/api/src/ArtboardNode.ts:66

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

platform/authoring/api/src/ArtboardNode.ts:69

___

### <a id="locked" name="locked"></a> locked

• `get` **locked**(): `boolean`

The node's lock/unlock state.

#### Returns

`boolean`

#### Inherited from

ContainerNode.locked

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

ContainerNode.locked

#### Defined in

platform/authoring/api/src/Node.ts:297

___

### <a id="name" name="name"></a> name

• `get` **name**(): `undefined` \| `string`

The node's name.

#### Returns

`undefined` \| `string`

#### Inherited from

ContainerNode.name

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

ContainerNode.name

#### Defined in

platform/authoring/api/src/Node.ts:281

___

### <a id="opacity" name="opacity"></a> opacity

• `get` **opacity**(): `number`

The node's opacity.

#### Returns

`number`

#### Inherited from

ContainerNode.opacity

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

ContainerNode.opacity

#### Defined in

platform/authoring/api/src/Node.ts:238

___

### <a id="parent" name="parent"></a> parent

• `get` **parent**(): `undefined` \| [`Node`](Node.md)

The node's parent. Undefined if the node is an orphan, or if the node is the artwork root.

#### Returns

`undefined` \| [`Node`](Node.md)

#### Inherited from

ContainerNode.parent

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

ContainerNode.relativeRotation

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

ContainerNode.relativeRotation

#### Defined in

platform/authoring/api/src/Node.ts:152

___

### <a id="relativeTransform" name="relativeTransform"></a> relativeTransform

• `get` **relativeTransform**(): `mat2d`

The node's transform relative to its parent.

#### Returns

`mat2d`

#### Inherited from

ContainerNode.relativeTransform

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

ContainerNode.relativeTransform

#### Defined in

platform/authoring/api/src/Node.ts:250

___

### <a id="strokes" name="strokes"></a> strokes

• `get` **strokes**(): [`ItemList`](ItemList.md)<[`Stroke`](../interfaces/Stroke.md)\>

Any strokes(s) on the shape. Use the methods on this ItemList object to get, add, and remove strokes.

#### Returns

[`ItemList`](ItemList.md)<[`Stroke`](../interfaces/Stroke.md)\>

#### Defined in

platform/authoring/api/src/ArtboardNode.ts:83

___

### <a id="translateX" name="translateX"></a> translateX

• `get` **translateX**(): `number`

The translation of the node along its parent's x-axis. Must be a finite number.

#### Returns

`number`

#### Inherited from

ContainerNode.translateX

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

ContainerNode.translateX

#### Defined in

platform/authoring/api/src/Node.ts:120

___

### <a id="translateY" name="translateY"></a> translateY

• `get` **translateY**(): `number`

The translation of the node along its parent's y-axis. Must be a finite number.

#### Returns

`number`

#### Inherited from

ContainerNode.translateY

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

ContainerNode.translateY

#### Defined in

platform/authoring/api/src/Node.ts:135

___

### <a id="type" name="type"></a> type

• `get` **type**(): keyof `SceneNodeTypeValueExtensibleEnum` \| `ApiNodeType`

The node's type.

#### Returns

keyof `SceneNodeTypeValueExtensibleEnum` \| `ApiNodeType`

#### Inherited from

ContainerNode.type

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

platform/authoring/api/src/ArtboardNode.ts:55

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

platform/authoring/api/src/ArtboardNode.ts:58

## Methods

### <a id="canRemoveChild" name="canRemoveChild"></a> canRemoveChild

▸ `Protected` **canRemoveChild**(`_child`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_child` | [`Node`](Node.md) |

#### Returns

`boolean`

#### Inherited from

[ContainerNode](ContainerNode.md).[canRemoveChild](ContainerNode.md#canRemoveChild)

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

[ContainerNode](ContainerNode.md).[removeFromParent](ContainerNode.md#removeFromParent)

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

[ContainerNode](ContainerNode.md).[canChangeParent](ContainerNode.md#canChangeParent)

#### Defined in

platform/authoring/api/src/Node.ts:82
