[@hz/add-on-hz-hlapi-sdk](../overview.md) / Color

# Class: Color

Represents a color in one of any available RGB colorspaces.

## Hierarchy

- `ProxyLiveObject`

  ↳ **`Color`**

## Table of contents

### Accessors

- [alpha](Color.md#alpha)
- [blue](Color.md#blue)
- [colorSpace](Color.md#colorSpace)
- [green](Color.md#green)
- [red](Color.md#red)

### Methods

- [getHex](Color.md#getHex)
- [createFromHex](Color.md#createFromHex)

## Accessors

### <a id="alpha" name="alpha"></a> alpha

• `get` **alpha**(): `number`

The alpha channel in range from 0 - 1.

#### Returns

`number`

#### Defined in

Color.ts:59

___

### <a id="blue" name="blue"></a> blue

• `get` **blue**(): `number`

The blue channel in range from 0 - 1.

#### Returns

`number`

#### Defined in

Color.ts:51

___

### <a id="colorSpace" name="colorSpace"></a> colorSpace

• `get` **colorSpace**(): `sRGB`

This color's color space. Currently only sRGB is supported.

#### Returns

`sRGB`

#### Defined in

Color.ts:67

___

### <a id="green" name="green"></a> green

• `get` **green**(): `number`

The green channel in range from 0 - 1.

#### Returns

`number`

#### Defined in

Color.ts:43

___

### <a id="red" name="red"></a> red

• `get` **red**(): `number`

The red channel in range from 0 - 1.

#### Returns

`number`

#### Defined in

Color.ts:35

## Methods

### <a id="getHex" name="getHex"></a> getHex

▸ **getHex**(): `string`

Get the color in hex "#RRGGBBAA" format. This format is only valid for the sRGB
color space. If the color is in another color space, this will result in a lossy
conversion.

#### Returns

`string`

#### Defined in

Color.ts:102

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

Color.ts:92
