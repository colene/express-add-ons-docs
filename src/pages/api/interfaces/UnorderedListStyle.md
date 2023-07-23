[ /authoring-api](../overview.md) / UnorderedListStyle

# Interface: UnorderedListStyle

UnorderedListStyle interface for specifying an unordered list

## Hierarchy

- `BaseParagraphListStyle`

  ↳ **`UnorderedListStyle`**

## Table of contents

### Properties

- [indentLevel](UnorderedListStyle.md#indentLevel)
- [postfix](UnorderedListStyle.md#postfix)
- [prefix](UnorderedListStyle.md#prefix)
- [type](UnorderedListStyle.md#type)
- [unorderedSymbol](UnorderedListStyle.md#unorderedSymbol)

## Properties

### <a id="indentLevel" name="indentLevel"></a> indentLevel

• `Optional` **indentLevel**: `number`

#### Inherited from

BaseParagraphListStyle.indentLevel

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:77

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

• **type**: [`unordered`](../enums/ParagraphListStyleType.md#unordered)

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:96

___

### <a id="unorderedSymbol" name="unorderedSymbol"></a> unorderedSymbol

• `Optional` **unorderedSymbol**: `string`

Defaults to the text engines bullet symbols for the indent level given when unspecified by the user.
The default indent bullet symbols for each indent level are: •, ◦, ◼, ◻, and then they repeat.

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:101
