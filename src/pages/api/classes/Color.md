[@hz/authoring-api](../overview.md) / Color

# Class: Color

Represents a color in one of any available RGB colorspaces.

## Table of contents

### Constructors

- [constructor](Color.md#constructor)

### Properties

- [alpha](Color.md#alpha)
- [blue](Color.md#blue)
- [colorSpace](Color.md#colorSpace)
- [green](Color.md#green)
- [red](Color.md#red)

### Methods

- [getHex](Color.md#getHex)
- [getIntegerComponents](Color.md#getIntegerComponents)
- [createFromHex](Color.md#createFromHex)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Color**(`red`, `green`, `blue`, `alpha?`)

Create a new Color. All color components should be in a 0 - 1 range. Non-finite
values are treated as 0. Any values outside this range are clamped to within the
range.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `red` | `number` | `undefined` | The red component in a range from 0 - 1. |
| `green` | `number` | `undefined` | The green component in a range from 0 - 1. |
| `blue` | `number` | `undefined` | The blue component in a range from 0 - 1. |
| `alpha` | `number` | `1` | (optional) The alpha component in a range from 0 - 1. |

#### Defined in

platform/authoring/api/src/Color.ts:69

## Properties

### <a id="alpha" name="alpha"></a> alpha

• `Readonly` **alpha**: `number`

The alpha channel in range from 0 - 1.

#### Defined in

platform/authoring/api/src/Color.ts:52

___

### <a id="blue" name="blue"></a> blue

• `Readonly` **blue**: `number`

The blue channel in range from 0 - 1.

#### Defined in

platform/authoring/api/src/Color.ts:47

___

### <a id="colorSpace" name="colorSpace"></a> colorSpace

• `Readonly` **colorSpace**: [`sRGB`](../enums/ColorSpace.md#sRGB) = `ColorSpace.sRGB`

This color's color space. Currently only sRGB is supported.

#### Defined in

platform/authoring/api/src/Color.ts:57

___

### <a id="green" name="green"></a> green

• `Readonly` **green**: `number`

The green channel in range from 0 - 1.

#### Defined in

platform/authoring/api/src/Color.ts:42

___

### <a id="red" name="red"></a> red

• `Readonly` **red**: `number`

The red channel in range from 0 - 1.

#### Defined in

platform/authoring/api/src/Color.ts:37

## Methods

### <a id="getHex" name="getHex"></a> getHex

▸ **getHex**(): `string`

Get the color in hex "#RRGGBBAA" format. This format is only valid for the sRGB
color space. If the color is in another color space, this will result in a lossy
conversion.

#### Returns

`string`

#### Defined in

platform/authoring/api/src/Color.ts:103

___

### <a id="getIntegerComponents" name="getIntegerComponents"></a> getIntegerComponents

▸ **getIntegerComponents**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |
| `blue` | `number` |
| `green` | `number` |
| `red` | `number` |

#### Defined in

platform/authoring/api/src/Color.ts:122

___

### <a id="createFromHex" name="createFromHex"></a> createFromHex

▸ `Static` **createFromHex**(`hex`): [`Color`](Color.md)

Create a new color from its equivalent RGBA hex representation. Currently only
supports formats "#RRGGBBAA" or "RRGGBBAA". If the hex value is invalid, this
method will return transparent black.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | The color in hex representation. |

#### Returns

[`Color`](Color.md)

A new color matching the given hex representation, or transparent black if
the hex string cannot be parsed.

#### Defined in

platform/authoring/api/src/Color.ts:92
