[@add-on-hlapi-sdk](../overview.md) / ReadOnlyItemList

# Class: ReadOnlyItemList<T\>

ReadOnlyItemList represents an ordered list of editor API wrapper objects, representing entities that are all children of the
same parent node. All children are of the same "flavor" (ChildOf component ID), i.e. this represents a view onto a
single ChildrenQuery's result list.

Items in a bare ReadOnlyItemList cannot be added, removed, or reordered. Subclasses like ItemList may add these capabilities, however.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ListItem`](../interfaces/ListItem.md) |

## Hierarchy

- `TemplatizedProxyLiveObject`

  ↳ **`ReadOnlyItemList`**

  ↳↳ [`ArtboardList`](ArtboardList.md)

  ↳↳ [`ItemList`](ItemList.md)

  ↳↳ [`PageList`](PageList.md)

## Table of contents

### Accessors

- [first](ReadOnlyItemList.md#first)
- [last](ReadOnlyItemList.md#last)
- [length](ReadOnlyItemList.md#length)

### Methods

- [[iterator]](ReadOnlyItemList.md#[iterator])
- [item](ReadOnlyItemList.md#item)
- [toArray](ReadOnlyItemList.md#toArray)

## Accessors

### <a id="first" name="first"></a> first

• `get` **first**(): `undefined` \| `T`

First item in this list, or undefined if list is empty.

#### Returns

`undefined` \| `T`

___

### <a id="last" name="last"></a> last

• `get` **last**(): `undefined` \| `T`

Last item in this list, or undefined if list is empty.

#### Returns

`undefined` \| `T`

___

### <a id="length" name="length"></a> length

• `get` **length**(): `number`

Number of items in this list.

#### Returns

`number`

## Methods

### <a id="[iterator]" name="[iterator]"></a> [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

Iterates over all the items in this list. Mutations that occur mid-iteration are not reflected by the iterator.

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

___

### <a id="item" name="item"></a> item

▸ **item**(`index`): `undefined` \| `T`

Returns item at the given index, or undefined if index is out of range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Zero-based index |

#### Returns

`undefined` \| `T`

___

### <a id="toArray" name="toArray"></a> toArray

▸ **toArray**(): readonly `T`[]

All items in the list, as a static array. Mutations that occur later are not reflected in an array returned earlier.

#### Returns

readonly `T`[]
