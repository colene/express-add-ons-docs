[@add-on-hlapi-sdk](../overview.md) / Stroke

# Interface: Stroke

Represents a stroke in the scene graph.

## Hierarchy

- [`StrokeOptions`](StrokeOptions.md)

  ↳ **`Stroke`**

## Table of contents

### Properties

- [color](Stroke.md#color)
- [dashOffset](Stroke.md#dashOffset)
- [dashPattern](Stroke.md#dashPattern)
- [position](Stroke.md#position)
- [width](Stroke.md#width)

## Properties

### <a id="color" name="color"></a> color

• `Readonly` **color**: [`Color`](../classes/Color.md)

The color of a stroke.

#### Inherited from

[StrokeOptions](StrokeOptions.md).[color](StrokeOptions.md#color)

___

### <a id="dashOffset" name="dashOffset"></a> dashOffset

• `Readonly` **dashOffset**: `number`

Number of pixels the beginning of dash pattern should be offset along the stroke.

#### Inherited from

[StrokeOptions](StrokeOptions.md).[dashOffset](StrokeOptions.md#dashOffset)

___

### <a id="dashPattern" name="dashPattern"></a> dashPattern

• `Readonly` **dashPattern**: `number`[]

If empty, this is a solid stroke.
If non-empty, the values alternate between length of a rendered and blank segment,
repeated along the length of the stroke. The first value represents the first solid segment.

#### Inherited from

[StrokeOptions](StrokeOptions.md).[dashPattern](StrokeOptions.md#dashPattern)

___

### <a id="position" name="position"></a> position

• `Readonly` **position**: [`StrokePositionValue`](../enums/StrokePositionValue.md)

The position of the stroke relative to the outline of a shape.
Currently, only center position is supported for persisted strokes.

___

### <a id="width" name="width"></a> width

• `Readonly` **width**: `number`

The thickness of a stroke.

#### Inherited from

[StrokeOptions](StrokeOptions.md).[width](StrokeOptions.md#width)
