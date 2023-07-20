[@hz/authoring-api](../overview.md) / Context

# Class: Context

Contains the user's current selection state, indicating the content they are focused on.

## Table of contents

### Constructors

- [constructor](Context.md#constructor)

### Accessors

- [hasSelection](Context.md#hasSelection)
- [selection](Context.md#selection)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Context**(`_core`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_core` | `CoreDependencies`<[`Node`](Node.md)\> |

#### Defined in

platform/authoring/api/src/Context.ts:26

## Accessors

### <a id="hasSelection" name="hasSelection"></a> hasSelection

• `get` **hasSelection**(): `boolean`

#### Returns

`boolean`

false if the current editable selection does not contain any nodes, otherwise true.

#### Defined in

platform/authoring/api/src/Context.ts:38

___

### <a id="selection" name="selection"></a> selection

• `get` **selection**(): readonly [`Node`](Node.md)[]

#### Returns

readonly [`Node`](Node.md)[]

the current selection.

#### Defined in

platform/authoring/api/src/Context.ts:31
