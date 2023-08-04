[@add-on-hlapi-sdk](../overview.md) / ArtboardList

# Class: ArtboardList

ArtboardList represents an ordered list of ArtboardNodes, representing
artboards that are children of a page node.

ArtboardList also provides APIs for adding/removing ArtboardNodes from the list by adding/removing them
from the PageNode.

## Hierarchy

- [`ReadOnlyItemList`](ReadOnlyItemList.md)<[`ArtboardNode`](ArtboardNode.md)\>

  ↳ **`ArtboardList`**

## Table of contents

### Accessors

- [first](ArtboardList.md#first)
- [last](ArtboardList.md#last)
- [length](ArtboardList.md#length)

### Methods

- [[iterator]](ArtboardList.md#[iterator])
- [addArtboard](ArtboardList.md#addArtboard)
- [item](ArtboardList.md#item)
- [remove](ArtboardList.md#remove)
- [toArray](ArtboardList.md#toArray)

## Accessors

### <a id="first" name="first"></a> first

• `get` **first**(): `undefined` \| `T`

First item in this list, or undefined if list is empty.

#### Returns

`undefined` \| `T`

#### Inherited from

ReadOnlyItemList.first

___

### <a id="last" name="last"></a> last

• `get` **last**(): `undefined` \| `T`

Last item in this list, or undefined if list is empty.

#### Returns

`undefined` \| `T`

#### Inherited from

ReadOnlyItemList.last

___

### <a id="length" name="length"></a> length

• `get` **length**(): `number`

Number of items in this list.

#### Returns

`number`

#### Inherited from

ReadOnlyItemList.length

## Methods

### <a id="[iterator]" name="[iterator]"></a> [iterator]

▸ **[iterator]**(): `Iterator`<[`ArtboardNode`](ArtboardNode.md), `any`, `undefined`\>

Iterates over all the items in this list. Mutations that occur mid-iteration are not reflected by the iterator.

#### Returns

`Iterator`<[`ArtboardNode`](ArtboardNode.md), `any`, `undefined`\>

#### Inherited from

[ReadOnlyItemList](ReadOnlyItemList.md).[[iterator]](ReadOnlyItemList.md#[iterator])

___

### <a id="addArtboard" name="addArtboard"></a> addArtboard

▸ **addArtboard**(): [`ArtboardNode`](ArtboardNode.md)

Create a new artboard and add it to the end of the list.

#### Returns

[`ArtboardNode`](ArtboardNode.md)

the newly added artboard.

___

### <a id="item" name="item"></a> item

▸ **item**(`index`): `undefined` \| [`ArtboardNode`](ArtboardNode.md)

Returns item at the given index, or undefined if index is out of range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Zero-based index |

#### Returns

`undefined` \| [`ArtboardNode`](ArtboardNode.md)

#### Inherited from

[ReadOnlyItemList](ReadOnlyItemList.md).[item](ReadOnlyItemList.md#item)

___

### <a id="remove" name="remove"></a> remove

▸ **remove**(...`items`): `void`

Remove the items from the list.

**`Throws`**

An error if any of the items are not in the list or if removing the
items would cause the list to be empty. If one of these errors occurs, the list
is not modified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | [`ArtboardNode`](ArtboardNode.md)[] |

#### Returns

`void`

___

### <a id="toArray" name="toArray"></a> toArray

▸ **toArray**(): readonly [`ArtboardNode`](ArtboardNode.md)[]

All items in the list, as a static array. Mutations that occur later are not reflected in an array returned earlier.

#### Returns

readonly [`ArtboardNode`](ArtboardNode.md)[]

#### Inherited from

[ReadOnlyItemList](ReadOnlyItemList.md).[toArray](ReadOnlyItemList.md#toArray)
