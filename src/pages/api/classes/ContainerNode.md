[@add-on-hlapi-sdk](../overview.md) / ContainerNode

# Class: ContainerNode

Base class for a Node contains an entirely generic collection of children. (Other node classes may also hold children
in more rigid "slots" - use $[allChildren](Node.md#allChildren) for read access to children agnostic of node type).

## Hierarchy

- [`Node`](Node.md)

  ↳ **`ContainerNode`**

  ↳↳ [`ArtboardNode`](ArtboardNode.md)

  ↳↳ [`GroupNode`](GroupNode.md)

## Table of contents

### Accessors

- [children](ContainerNode.md#children)

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

### <a id="children" name="children"></a> children

• `get` **children**(): [`ItemList`](ItemList.md)<[`Node`](Node.md)\>

The node's children. Use the methods on this ItemList object to get, add, and remove children.

#### Returns

[`ItemList`](ItemList.md)<[`Node`](Node.md)\>
