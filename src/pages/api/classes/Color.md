[@add-on-hlapi-sdk](../overview.md) / Color

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

## Accessors

### <a id="alpha" name="alpha"></a> alpha

• `get` **alpha**(): `number`

The alpha channel in range from 0 - 1.

#### Returns

`number`

___

### <a id="blue" name="blue"></a> blue

• `get` **blue**(): `number`

The blue channel in range from 0 - 1.

#### Returns

`number`

___

### <a id="colorSpace" name="colorSpace"></a> colorSpace

• `get` **colorSpace**(): `sRGB`

This color's color space. Currently only sRGB is supported.

#### Returns

`sRGB`

___

### <a id="green" name="green"></a> green

• `get` **green**(): `number`

The green channel in range from 0 - 1.

#### Returns

`number`

___

### <a id="red" name="red"></a> red

• `get` **red**(): `number`

The red channel in range from 0 - 1.

#### Returns

`number`

## Methods

### <a id="getHex" name="getHex"></a> getHex

▸ **getHex**(): `string`

Get the color in hex "#RRGGBBAA" format. This format is only valid for the sRGB
color space. If the color is in another color space, this will result in a lossy
conversion.

#### Returns

`string`
