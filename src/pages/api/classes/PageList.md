[@add-on-hlapi-sdk](../overview.md) / PageList

# Class: PageList

PageList represents an ordered list of High Level API PageNodes, representing
artboard containers that are children of a parent node.

PageList also provides APIs for adding new pages to the list by adding them to the parent entity.

## Hierarchy

- [`ReadOnlyItemList`](ReadOnlyItemList.md)<[`PageNode`](PageNode.md)\>

  ↳ **`PageList`**

## Table of contents

### Accessors

- [first](PageList.md#first)
- [last](PageList.md#last)
- [length](PageList.md#length)

### Methods

- [[iterator]](PageList.md#[iterator])
- [addPage](PageList.md#addPage)
- [item](PageList.md#item)
- [toArray](PageList.md#toArray)

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

▸ **[iterator]**(): `Iterator`<[`PageNode`](PageNode.md), `any`, `undefined`\>

Iterates over all the items in this list. Mutations that occur mid-iteration are not reflected by the iterator.

#### Returns

`Iterator`<[`PageNode`](PageNode.md), `any`, `undefined`\>

#### Inherited from

[ReadOnlyItemList](ReadOnlyItemList.md).[[iterator]](ReadOnlyItemList.md#[iterator])

___

### <a id="addPage" name="addPage"></a> addPage

▸ **addPage**(`geometry`): [`PageNode`](PageNode.md)

Create a new page and add it to the end of the list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`RectangleGeometry`](../interfaces/RectangleGeometry.md) | The size of the new page. |

#### Returns

[`PageNode`](PageNode.md)

___

### <a id="item" name="item"></a> item

▸ **item**(`index`): `undefined` \| [`PageNode`](PageNode.md)

Returns item at the given index, or undefined if index is out of range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Zero-based index |

#### Returns

`undefined` \| [`PageNode`](PageNode.md)

#### Inherited from

[ReadOnlyItemList](ReadOnlyItemList.md).[item](ReadOnlyItemList.md#item)

___

### <a id="toArray" name="toArray"></a> toArray

▸ **toArray**(): readonly [`PageNode`](PageNode.md)[]

All items in the list, as a static array. Mutations that occur later are not reflected in an array returned earlier.

#### Returns

readonly [`PageNode`](PageNode.md)[]

#### Inherited from

[ReadOnlyItemList](ReadOnlyItemList.md).[toArray](ReadOnlyItemList.md#toArray)
