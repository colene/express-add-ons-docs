[@hz/add-on-hz-hlapi-sdk](../overview.md) / Context

# Class: Context

Contains the user's current selection state, indicating the content they are focused on.

## Hierarchy

- `ProxyLiveObject`

  ↳ **`Context`**

## Table of contents

### Accessors

- [hasSelection](Context.md#hasSelection)
- [insertionParent](Context.md#insertionParent)
- [selection](Context.md#selection)

## Accessors

### <a id="hasSelection" name="hasSelection"></a> hasSelection

• `get` **hasSelection**(): `boolean`

#### Returns

`boolean`

false if the current editable selection does not contain any nodes, otherwise true.

#### Defined in

Context.ts:38

___

### <a id="insertionParent" name="insertionParent"></a> insertionParent

• `get` **insertionParent**(): [`Node`](Node.md)

#### Returns

[`Node`](Node.md)

the parent to insert newly added content into.

#### Defined in

Context.ts:46

___

### <a id="selection" name="selection"></a> selection

• `get` **selection**(): readonly [`Node`](Node.md)[]

#### Returns

readonly [`Node`](Node.md)[]

the current selection.

#### Defined in

Context.ts:30
