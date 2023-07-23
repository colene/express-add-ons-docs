[ /authoring-api](../overview.md) / ParagraphStyleRangeList

# Class: ParagraphStyleRangeList

Represents a list of paragraph style ranges.

## Hierarchy

- `StyleRangeList`<[`RangedParagraphStyle`](../interfaces/RangedParagraphStyle.md)\>

  ↳ **`ParagraphStyleRangeList`**

## Table of contents

### Constructors

- [constructor](ParagraphStyleRangeList.md#constructor)

### Properties

- [\_core](ParagraphStyleRangeList.md#_core)
- [\_textNodeEntity](ParagraphStyleRangeList.md#_textNodeEntity)

### Methods

- [setStyleRanges](ParagraphStyleRangeList.md#setStyleRanges)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ParagraphStyleRangeList**(`_core`, `_textNodeEntity`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_core` | `CoreDependencies`<[`Node`](Node.md)\> |
| `_textNodeEntity` | `string` |

#### Inherited from

StyleRangeList<RangedParagraphStyle\>.constructor

#### Defined in

platform/authoring/api/src/StyleRangeList.ts:34

## Properties

### <a id="_core" name="_core"></a> \_core

• `Protected` **\_core**: `CoreDependencies`<[`Node`](Node.md)\>

#### Inherited from

StyleRangeList.\_core

#### Defined in

platform/authoring/api/src/StyleRangeList.ts:34

___

### <a id="_textNodeEntity" name="_textNodeEntity"></a> \_textNodeEntity

• `Protected` **\_textNodeEntity**: `string`

#### Inherited from

StyleRangeList.\_textNodeEntity

#### Defined in

platform/authoring/api/src/StyleRangeList.ts:34

## Methods

### <a id="setStyleRanges" name="setStyleRanges"></a> setStyleRanges

▸ **setStyleRanges**(`styles`): `void`

Sets paragraph style from a character range (length).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `styles` | [`RangedParagraphStyle`](../interfaces/RangedParagraphStyle.md)[] | * See [RangedParagraphStyle](../interfaces/RangedParagraphStyle.md) |

#### Returns

`void`

#### Overrides

StyleRangeList.setStyleRanges

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:264
