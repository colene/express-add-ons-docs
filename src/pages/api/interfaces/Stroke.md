[ /authoring-api](../overview.md) / Stroke

# Interface: Stroke

Represents a stroke in the scene graph.

## Hierarchy

- `StrokeOptions`

  ↳ **`Stroke`**

## Table of contents

### Properties

- [color](Stroke.md#color)
- [dashOffset](Stroke.md#dashOffset)
- [dashPattern](Stroke.md#dashPattern)
- [entity](Stroke.md#entity)
- [position](Stroke.md#position)
- [width](Stroke.md#width)

## Properties

### <a id="color" name="color"></a> color

• `Readonly` **color**: [`Color`](../classes/Color.md)

The color of a stroke.

#### Inherited from

StrokeOptions.color

#### Defined in

platform/authoring/api/src/Stroke.ts:30

___

### <a id="dashOffset" name="dashOffset"></a> dashOffset

• `Readonly` **dashOffset**: `number`

Number of pixels the beginning of dash pattern should be offset along the stroke.

#### Inherited from

StrokeOptions.dashOffset

#### Defined in

platform/authoring/api/src/Stroke.ts:44

___

### <a id="dashPattern" name="dashPattern"></a> dashPattern

• `Readonly` **dashPattern**: `number`[]

If empty, this is a solid stroke.
If non-empty, the values alternate between length of a rendered and blank segment,
repeated along the length of the stroke. The first value represents the first solid segment.

#### Inherited from

StrokeOptions.dashPattern

#### Defined in

platform/authoring/api/src/Stroke.ts:40

___

### <a id="entity" name="entity"></a> entity

• `Readonly` **entity**: `string`

#### Defined in

platform/authoring/api/src/Stroke.ts:51

___

### <a id="position" name="position"></a> position

• `Readonly` **position**: [`StrokePositionValue`](../enums/StrokePositionValue.md)

The position of the stroke relative to the outline of a shape.
Currently, only center position is supported for persisted strokes.

#### Defined in

platform/authoring/api/src/Stroke.ts:57

___

### <a id="width" name="width"></a> width

• `Readonly` **width**: `number`

The thickness of a stroke.

#### Inherited from

StrokeOptions.width

#### Defined in

platform/authoring/api/src/Stroke.ts:34
