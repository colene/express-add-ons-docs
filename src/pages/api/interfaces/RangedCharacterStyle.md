[ /authoring-api](../overview.md) / RangedCharacterStyle

# Interface: RangedCharacterStyle

Public version of RangedCharacterStyle. InternalCharacterStyle refers the hz/text-types interface.

## Hierarchy

- `Partial`<`Omit`<`InternalCharacterStyle`, ``"originalFont"`` \| ``"color"`` \| ``"strikethrough"`` \| ``"features"``\>\>

  ↳ **`RangedCharacterStyle`**

## Table of contents

### Properties

- [assigned](RangedCharacterStyle.md#assigned)
- [color](RangedCharacterStyle.md#color)
- [font](RangedCharacterStyle.md#font)
- [fontSize](RangedCharacterStyle.md#fontSize)
- [length](RangedCharacterStyle.md#length)
- [tracking](RangedCharacterStyle.md#tracking)
- [underline](RangedCharacterStyle.md#underline)

## Properties

### <a id="assigned" name="assigned"></a> assigned

• `Optional` **assigned**: `number`

#### Inherited from

Partial.assigned

#### Defined in

platform/foundation/text/text-types/dist/PersistedECSDefinitions.d.ts:232

___

### <a id="color" name="color"></a> color

• `Optional` **color**: [`Color`](../classes/Color.md)

#### Defined in

platform/authoring/api/src/CharacterStyles.ts:36

___

### <a id="font" name="font"></a> font

• `Optional` **font**: [`FontId`](FontId.md)

#### Inherited from

Partial.font

#### Defined in

platform/foundation/text/text-types/dist/PersistedECSDefinitions.d.ts:233

___

### <a id="fontSize" name="fontSize"></a> fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

Partial.fontSize

#### Defined in

platform/foundation/text/text-types/dist/PersistedECSDefinitions.d.ts:235

___

### <a id="length" name="length"></a> length

• **length**: `number`

the length or number of characters in which character styles will be applied

#### Defined in

platform/authoring/api/src/CharacterStyles.ts:35

___

### <a id="tracking" name="tracking"></a> tracking

• `Optional` **tracking**: `number`

#### Inherited from

Partial.tracking

#### Defined in

platform/foundation/text/text-types/dist/PersistedECSDefinitions.d.ts:238

___

### <a id="underline" name="underline"></a> underline

• `Optional` **underline**: `boolean`

#### Inherited from

Partial.underline

#### Defined in

platform/foundation/text/text-types/dist/PersistedECSDefinitions.d.ts:239
