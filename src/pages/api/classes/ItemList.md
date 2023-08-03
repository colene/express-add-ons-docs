[@add-on-hlapi-sdk](../overview.md) / ItemList

# Class: ItemList<T\>

ItemList represents an ordered list of editor API wrapper objects, representing entities that are all children of the
same parent node. All children are of the same "flavor" (ChildOf component ID), i.e. this represents a view onto a
single ChildrenQuery's result list. (Note some node types may use an ItemList subclass to present a *filtered* view of
the overall query result list, however).

ItemList also provides APIs for manipulating the list by adding items to the parent or removing items from the parent.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ListItem`](../interfaces/ListItem.md) |

## Hierarchy

- [`ReadOnlyItemList`](ReadOnlyItemList.md)<`T`\>

  ↳ **`ItemList`**

## Table of contents

### Accessors

- [first](ItemList.md#first)
- [last](ItemList.md#last)
- [length](ItemList.md#length)

### Methods

- [[iterator]](ItemList.md#[iterator])
- [append](ItemList.md#append)
- [clear](ItemList.md#clear)
- [insertAfter](ItemList.md#insertAfter)
- [insertBefore](ItemList.md#insertBefore)
- [item](ItemList.md#item)
- [remove](ItemList.md#remove)
- [replace](ItemList.md#replace)
- [toArray](ItemList.md#toArray)

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

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

Iterates over all the items in this list. Mutations that occur mid-iteration are not reflected by the iterator.

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Inherited from

[ReadOnlyItemList](ReadOnlyItemList.md).[[iterator]](ReadOnlyItemList.md#[iterator])

___

### <a id="append" name="append"></a> append

▸ **append**(...`items`): `void`

Add one or more items to the end of the list. The last argument will become the last item in this list. Items are
removed from their previous parent, if any – or if an item is already in *this* list, its index is simply changed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `T`[] |

#### Returns

`void`

___

### <a id="clear" name="clear"></a> clear

▸ **clear**(): `void`

Remove all items from this list. No-op if list is already empty.

#### Returns

`void`

___

### <a id="insertAfter" name="insertAfter"></a> insertAfter

▸ **insertAfter**(`newItem`, `after`): `void`

Insert `newItem` so it is immediately after `after` in this list: places `newItem` at the index one higher than `after`,
shifting all later items to higher indices (the index of `after` remains unchanged). `newItem` is removed from its previous parent,
if any – or if it's already in *this* list, its index is simply changed. No-op if both arguments are the same item.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newItem` | `T` |
| `after` | `T` |

#### Returns

`void`

___

### <a id="insertBefore" name="insertBefore"></a> insertBefore

▸ **insertBefore**(`newItem`, `before`): `void`

Insert `newItem` so it is immediately before `before` in this list: places `newItem` at the index that `before` used
to occupy, shifting `before` and all later items to higher indices. `newItem` is removed from its previous parent,
if any – or if it's already in *this* list, its index is simply changed. No-op if both arguments are the same item.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newItem` | `T` |
| `before` | `T` |

#### Returns

`void`

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

#### Inherited from

[ReadOnlyItemList](ReadOnlyItemList.md).[item](ReadOnlyItemList.md#item)

___

### <a id="remove" name="remove"></a> remove

▸ **remove**(...`items`): `void`

Remove one or more items from this list. The items need not be contiguous.
Throws without performing any removals if any item is not a member of this list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `T`[] |

#### Returns

`void`

___

### <a id="replace" name="replace"></a> replace

▸ **replace**(`oldItem`, `newItem`): `void`

Replace `oldItem` with `newItem` in this list. Throws if `oldItem` is not a member of this list.
`newItem` is removed from its previous parent, if any – or if it's already in *this* list, its index is simply
changed. No-op if both arguments are the same item.

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldItem` | `T` |
| `newItem` | `T` |

#### Returns

`void`

___

### <a id="toArray" name="toArray"></a> toArray

▸ **toArray**(): readonly `T`[]

All items in the list, as a static array. Mutations that occur later are not reflected in an array returned earlier.

#### Returns

readonly `T`[]

#### Inherited from

[ReadOnlyItemList](ReadOnlyItemList.md).[toArray](ReadOnlyItemList.md#toArray)
