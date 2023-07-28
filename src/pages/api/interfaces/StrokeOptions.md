[@hz/add-on-hz-hlapi-sdk](../overview.md) / StrokeOptions

# Interface: StrokeOptions

Properties that can be provided to create a stroke.

## Hierarchy

- **`StrokeOptions`**

  ↳ [`Stroke`](Stroke.md)

## Table of contents

### Properties

- [color](StrokeOptions.md#color)
- [dashOffset](StrokeOptions.md#dashOffset)
- [dashPattern](StrokeOptions.md#dashPattern)
- [width](StrokeOptions.md#width)

## Properties

### <a id="color" name="color"></a> color

• `Readonly` **color**: [`Color`](../classes/Color.md)

The color of a stroke.

#### Defined in

Stroke.ts:29

___

### <a id="dashOffset" name="dashOffset"></a> dashOffset

• `Readonly` **dashOffset**: `number`

Number of pixels the beginning of dash pattern should be offset along the stroke.

#### Defined in

Stroke.ts:43

___

### <a id="dashPattern" name="dashPattern"></a> dashPattern

• `Readonly` **dashPattern**: `number`[]

If empty, this is a solid stroke.
If non-empty, the values alternate between length of a rendered and blank segment,
repeated along the length of the stroke. The first value represents the first solid segment.

#### Defined in

Stroke.ts:39

___

### <a id="width" name="width"></a> width

• `Readonly` **width**: `number`

The thickness of a stroke.

#### Defined in

Stroke.ts:33
