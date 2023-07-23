 /authoring-api

#  /authoring-api

## Table of contents

### Enumerations

- [BlendModeValue](enums/BlendModeValue.md)
- [ColorSpace](enums/ColorSpace.md)
- [FontSource](enums/FontSource.md)
- [ParagraphListSequenceType](enums/ParagraphListSequenceType.md)
- [ParagraphListStyleType](enums/ParagraphListStyleType.md)
- [ParagraphStyleDirection](enums/ParagraphStyleDirection.md)
- [StrokePositionValue](enums/StrokePositionValue.md)
- [TextAlignmentValue](enums/TextAlignmentValue.md)

### Classes

- [ArtboardNode](classes/ArtboardNode.md)
- [Color](classes/Color.md)
- [ContainerNode](classes/ContainerNode.md)
- [Context](classes/Context.md)
- [Editor](classes/Editor.md)
- [EditorActions](classes/EditorActions.md)
- [EllipseNode](classes/EllipseNode.md)
- [GroupNode](classes/GroupNode.md)
- [InternalError](classes/InternalError.md)
- [ItemList](classes/ItemList.md)
- [LineNode](classes/LineNode.md)
- [Node](classes/Node.md)
- [ParagraphStyleRangeList](classes/ParagraphStyleRangeList.md)
- [PathNode](classes/PathNode.md)
- [RectangleNode](classes/RectangleNode.md)
- [StrokableNode](classes/StrokableNode.md)
- [TextNode](classes/TextNode.md)

### Interfaces

- [BitmapImage](interfaces/BitmapImage.md)
- [ColorFill](interfaces/ColorFill.md)
- [Fill](interfaces/Fill.md)
- [FontId](interfaces/FontId.md)
- [OrderedListStyle](interfaces/OrderedListStyle.md)
- [RangedCharacterStyle](interfaces/RangedCharacterStyle.md)
- [RangedParagraphStyle](interfaces/RangedParagraphStyle.md)
- [Stroke](interfaces/Stroke.md)
- [UnorderedListStyle](interfaces/UnorderedListStyle.md)
- [UserAction](interfaces/UserAction.md)

### Type Aliases

- [ActionType](overview.md#ActionType)

### Variables

- [DEFAULT\_ELLIPSE\_RX](overview.md#DEFAULT_ELLIPSE_RX)
- [DEFAULT\_ELLIPSE\_RY](overview.md#DEFAULT_ELLIPSE_RY)
- [DEFAULT\_LINE\_END\_X](overview.md#DEFAULT_LINE_END_X)
- [DEFAULT\_LINE\_END\_Y](overview.md#DEFAULT_LINE_END_Y)
- [DEFAULT\_LINE\_START\_X](overview.md#DEFAULT_LINE_START_X)
- [DEFAULT\_LINE\_START\_Y](overview.md#DEFAULT_LINE_START_Y)
- [DEFAULT\_PATH\_FILL\_RULE](overview.md#DEFAULT_PATH_FILL_RULE)
- [DEFAULT\_RECTANGLE\_HEIGHT](overview.md#DEFAULT_RECTANGLE_HEIGHT)
- [DEFAULT\_RECTANGLE\_WIDTH](overview.md#DEFAULT_RECTANGLE_WIDTH)
- [DEFAULT\_STROKE\_COLOR](overview.md#DEFAULT_STROKE_COLOR)
- [DEFAULT\_STROKE\_POSITION](overview.md#DEFAULT_STROKE_POSITION)
- [DEFAULT\_STROKE\_WIDTH](overview.md#DEFAULT_STROKE_WIDTH)
- [MAX\_DIMENSION](overview.md#MAX_DIMENSION)
- [MAX\_STROKE\_WIDTH](overview.md#MAX_STROKE_WIDTH)
- [MIN\_DIMENSION](overview.md#MIN_DIMENSION)
- [MIN\_STROKE\_WIDTH](overview.md#MIN_STROKE_WIDTH)

## Type Aliases

### <a id="ActionType" name="ActionType"></a> ActionType

Ƭ **ActionType**: keyof `ActionTypeMap` & `string`

Values that identify types of actions.

## Variables

### <a id="DEFAULT_ELLIPSE_RX" name="DEFAULT_ELLIPSE_RX"></a> DEFAULT\_ELLIPSE\_RX

• `Const` **DEFAULT\_ELLIPSE\_RX**: ``200``

___

### <a id="DEFAULT_ELLIPSE_RY" name="DEFAULT_ELLIPSE_RY"></a> DEFAULT\_ELLIPSE\_RY

• `Const` **DEFAULT\_ELLIPSE\_RY**: ``100``
___

### <a id="DEFAULT_LINE_END_X" name="DEFAULT_LINE_END_X"></a> DEFAULT\_LINE\_END\_X

• `Const` **DEFAULT\_LINE\_END\_X**: ``100``

___

### <a id="DEFAULT_LINE_END_Y" name="DEFAULT_LINE_END_Y"></a> DEFAULT\_LINE\_END\_Y

• `Const` **DEFAULT\_LINE\_END\_Y**: ``100``

___

### <a id="DEFAULT_LINE_START_X" name="DEFAULT_LINE_START_X"></a> DEFAULT\_LINE\_START\_X

• `Const` **DEFAULT\_LINE\_START\_X**: ``0``

___

### <a id="DEFAULT_LINE_START_Y" name="DEFAULT_LINE_START_Y"></a> DEFAULT\_LINE\_START\_Y

• `Const` **DEFAULT\_LINE\_START\_Y**: ``0``

___

### <a id="DEFAULT_PATH_FILL_RULE" name="DEFAULT_PATH_FILL_RULE"></a> DEFAULT\_PATH\_FILL\_RULE

• `Const` **DEFAULT\_PATH\_FILL\_RULE**: `nonZero` = `FillRuleValue.nonZero`

___

### <a id="DEFAULT_RECTANGLE_HEIGHT" name="DEFAULT_RECTANGLE_HEIGHT"></a> DEFAULT\_RECTANGLE\_HEIGHT

• `Const` **DEFAULT\_RECTANGLE\_HEIGHT**: ``100``

___

### <a id="DEFAULT_RECTANGLE_WIDTH" name="DEFAULT_RECTANGLE_WIDTH"></a> DEFAULT\_RECTANGLE\_WIDTH

• `Const` **DEFAULT\_RECTANGLE\_WIDTH**: ``200``

___

### <a id="DEFAULT_STROKE_COLOR" name="DEFAULT_STROKE_COLOR"></a> DEFAULT\_STROKE\_COLOR

• `Const` **DEFAULT\_STROKE\_COLOR**: [`Color`](classes/Color.md)

___

### <a id="DEFAULT_STROKE_POSITION" name="DEFAULT_STROKE_POSITION"></a> DEFAULT\_STROKE\_POSITION

• `Const` **DEFAULT\_STROKE\_POSITION**: [`center`](enums/StrokePositionValue.md#center) = `StrokePositionValue.center`

___

### <a id="DEFAULT_STROKE_WIDTH" name="DEFAULT_STROKE_WIDTH"></a> DEFAULT\_STROKE\_WIDTH

• `Const` **DEFAULT\_STROKE\_WIDTH**: ``1``

___

### <a id="MAX_DIMENSION" name="MAX_DIMENSION"></a> MAX\_DIMENSION

• `Const` **MAX\_DIMENSION**: `number` = `Number.MAX_SAFE_INTEGER`

___

### <a id="MAX_STROKE_WIDTH" name="MAX_STROKE_WIDTH"></a> MAX\_STROKE\_WIDTH

• `Const` **MAX\_STROKE\_WIDTH**: ``300``

___

### <a id="MIN_DIMENSION" name="MIN_DIMENSION"></a> MIN\_DIMENSION

• `Const` **MIN\_DIMENSION**: ``0.01``

___

### <a id="MIN_STROKE_WIDTH" name="MIN_STROKE_WIDTH"></a> MIN\_STROKE\_WIDTH

• `Const` **MIN\_STROKE\_WIDTH**: ``0``