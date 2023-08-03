[add-on-hlapi-sdk](../overview.md) / ColorFill

# Interface: ColorFill

Represents a solid-color fill.

## Hierarchy

- [`Fill`](Fill.md)

  ↳ **`ColorFill`**

## Table of contents

### Properties

- [color](ColorFill.md#color)
- [entity](ColorFill.md#entity)
- [type](ColorFill.md#type)

## Properties

### <a id="color" name="color"></a> color

• `Readonly` **color**: [`Color`](../classes/Color.md)

The fill color.

#### Defined in

Fill.ts:50

___

### <a id="entity" name="entity"></a> entity

• `Readonly` **entity**: `string`

The ECS entity for this fill.

#### Inherited from

[Fill](Fill.md).[entity](Fill.md#entity)

#### Defined in

Fill.ts:35

___

### <a id="type" name="type"></a> type

• `Readonly` **type**: [`color`](../enums/FillTypeValue.md#color)

The fill type.

#### Overrides

[Fill](Fill.md).[type](Fill.md#type)

#### Defined in

Fill.ts:45
