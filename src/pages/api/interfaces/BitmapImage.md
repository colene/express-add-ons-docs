[ /authoring-api](../overview.md) / BitmapImage

# Interface: BitmapImage

Represents a bitmap image ResourceCollection. Can be displayed in the document by creating a CropGroup scenenode
structure via Editor.createImageContainer().

## Table of contents

### Properties

- [entity](BitmapImage.md#entity)
- [height](BitmapImage.md#height)
- [width](BitmapImage.md#width)

## Properties

### <a id="entity" name="entity"></a> entity

• `Readonly` **entity**: `string`

The ECS entity for this image resource.

#### Defined in

platform/authoring/api/src/Fill.ts:61

___

### <a id="height" name="height"></a> height

• `Readonly` **height**: `number`

Original height of the bitmap in pixels.

#### Defined in

platform/authoring/api/src/Fill.ts:71

___

### <a id="width" name="width"></a> width

• `Readonly` **width**: `number`

Original width of the bitmap in pixels.

#### Defined in

platform/authoring/api/src/Fill.ts:66
