[@hz/authoring-api](../overview.md) / OrderedListStyle

# Interface: OrderedListStyle

OrderedListStyle interface for specifying an ordered list

## Hierarchy

- `BaseParagraphListStyle`

  ↳ **`OrderedListStyle`**

## Table of contents

### Properties

- [indentLevel](OrderedListStyle.md#indentLevel)
- [orderedSequence](OrderedListStyle.md#orderedSequence)
- [postfix](OrderedListStyle.md#postfix)
- [prefix](OrderedListStyle.md#prefix)
- [type](OrderedListStyle.md#type)

## Properties

### <a id="indentLevel" name="indentLevel"></a> indentLevel

• `Optional` **indentLevel**: `number`

#### Inherited from

BaseParagraphListStyle.indentLevel

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:77

___

### <a id="orderedSequence" name="orderedSequence"></a> orderedSequence

• `Optional` **orderedSequence**: [`ParagraphListSequenceType`](../enums/ParagraphListSequenceType.md)

Defaults to the text engines sequence for the indent level given when unspecified by the user.
The default indent seqences for each indent level are: 1, a, i, I, and then they repeat.

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:89

___

### <a id="postfix" name="postfix"></a> postfix

• `Optional` **postfix**: `string`

#### Inherited from

BaseParagraphListStyle.postfix

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:76

___

### <a id="prefix" name="prefix"></a> prefix

• `Optional` **prefix**: `string`

#### Inherited from

BaseParagraphListStyle.prefix

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:75

___

### <a id="type" name="type"></a> type

• **type**: [`ordered`](../enums/ParagraphListStyleType.md#ordered)

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:84
