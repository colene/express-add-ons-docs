[@hz/add-on-hz-hlapi-sdk](../overview.md) / HzHLApiUtils

# Interface: HzHLApiUtils

## Table of contents

### Methods

- [createColor](HzHLApiUtils.md#createColor)

## Methods

### <a id="createColor" name="createColor"></a> createColor

▸ **createColor**(`red`, `green`, `blue`, `alpha`): [`Color`](../classes/Color.md)

Create a new Color. All color components should be in a 0 - 1 range. Non-finite
values are treated as 0. Any values outside this range are clamped to within the
range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `red` | `number` | The red component in a range from 0 - 1. |
| `green` | `number` | The green component in a range from 0 - 1. |
| `blue` | `number` | The blue component in a range from 0 - 1. |
| `alpha` | `number` | (optional) The alpha component in a range from 0 - 1. |

#### Returns

[`Color`](../classes/Color.md)

#### Defined in

support/HzHLApiUtils.ts:32
