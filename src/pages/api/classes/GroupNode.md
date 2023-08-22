[@add-on-hlapi-sdk](../overview.md) / GroupNode

# Class: GroupNode

A GroupNode represents a group object in the scenegraph.

## Hierarchy

- [`ContainerNode`](ContainerNode.md)

  ↳ **`GroupNode`**

## Table of contents

### Accessors

- [maskShape](GroupNode.md#maskShape)

Inherited from [`ContainerNode`](ContainerNode.md):

- [children](GroupNode.md#children)

Inherited from [`Node`](Node.md):

- [absoluteRotation](Node.md#absoluteRotation)
- [absoluteTransform](Node.md#absoluteTransform)
- [allChildren](Node.md#allChildren)
- [blendMode](Node.md#blendMode)
- [name](Node.md#name)
- [opacity](Node.md#opacity)
- [parent](Node.md#parent)
- [relativeRotation](Node.md#relativeRotation)
- [relativeTransform](Node.md#relativeTransform)
- [translateX](Node.md#translateX)
- [translateY](Node.md#translateY)
- [type](Node.md#type)

### Methods

Inherited from [`Node`](Node.md):

- [removeFromParent](Node.md#removeFromParent)

## Accessors

### <a id="maskShape" name="maskShape"></a> maskShape

• `get` **maskShape**(): `undefined` \| [`FillableNode`](FillableNode.md)

The mask node in the group.

#### Returns

`undefined` \| [`FillableNode`](FillableNode.md)

undefined if no mask is found.

• `set` **maskShape**(`mask`): `void`

If the input mask node is undefined, remove the existing mask node from the group node and orphan the mask node.

**`Throws`**

if the given node type cannot be used as a vector mask.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `undefined` \| [`FillableNode`](FillableNode.md) |

#### Returns

`void`
