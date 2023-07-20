[@hz/authoring-api](../overview.md) / RangedParagraphStyle

# Interface: RangedParagraphStyle

RangedParagraphStyle interface for specifying paragraph styles.

## Table of contents

### Properties

- [direction](RangedParagraphStyle.md#direction)
- [length](RangedParagraphStyle.md#length)
- [lineSpacing](RangedParagraphStyle.md#lineSpacing)
- [list](RangedParagraphStyle.md#list)
- [spaceAfter](RangedParagraphStyle.md#spaceAfter)
- [spaceBefore](RangedParagraphStyle.md#spaceBefore)

## Properties

### <a id="direction" name="direction"></a> direction

• `Optional` **direction**: [`ParagraphStyleDirection`](../enums/ParagraphStyleDirection.md)

paragraph writing direction (leftToRight | rightToLeft)

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:68

___

### <a id="length" name="length"></a> length

• **length**: `number`

the length or number of characters in which paragraph styles will be applied

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:48

___

### <a id="lineSpacing" name="lineSpacing"></a> lineSpacing

• `Optional` **lineSpacing**: `number`

spacing between lines AKA leading (spacing between lines AKA leading (value in multiple of the font size - ex. 1.5 = 150% font-size)

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:60

___

### <a id="list" name="list"></a> list

• `Optional` **list**: [`OrderedListStyle`](OrderedListStyle.md) \| [`UnorderedListStyle`](UnorderedListStyle.md)

list styles (OrderedListStyle | UnorderedListStyle)

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:64

___

### <a id="spaceAfter" name="spaceAfter"></a> spaceAfter

• `Optional` **spaceAfter**: `number`

space after paragraph (value in points). Value is ignored on the last paragraph. Values compound with adjacent paragraphs using spaceBefore.

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:56

___

### <a id="spaceBefore" name="spaceBefore"></a> spaceBefore

• `Optional` **spaceBefore**: `number`

space before paragraph (value in points). Value is ignored on the first paragraph. Values compound with adjacent paragraphs using spaceAfter.

#### Defined in

platform/authoring/api/src/ParagraphStyles.ts:52
