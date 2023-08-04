[@add-on-hlapi-sdk](../overview.md) / Editor

# Class: Editor<ExpressRootNode\>

Entry point for Editor APIs.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ExpressRootNode` | extends [`Node`](Node.md) = [`Node`](Node.md) |

## Hierarchy

- `ProxyLiveObject`

  ↳ **`Editor`**

## Table of contents

### Accessors

- [context](Editor.md#context)
- [documentRoot](Editor.md#documentRoot)

### Methods

- [createColorFill](Editor.md#createColorFill)
- [createEllipse](Editor.md#createEllipse)
- [createGroup](Editor.md#createGroup)
- [createImageContainer](Editor.md#createImageContainer)
- [createLine](Editor.md#createLine)
- [createRectangle](Editor.md#createRectangle)
- [createStroke](Editor.md#createStroke)
- [createText](Editor.md#createText)
- [loadBitmapImage](Editor.md#loadBitmapImage)

## Accessors

### <a id="context" name="context"></a> context

• `get` **context**(): [`Context`](Context.md)

User's current selection context

#### Returns

[`Context`](Context.md)

___

### <a id="documentRoot" name="documentRoot"></a> documentRoot

• `get` **documentRoot**(): [`ExpressRootNode`](ExpressRootNode.md)

#### Returns

[`ExpressRootNode`](ExpressRootNode.md)

the root of the document.

## Methods

### <a id="createColorFill" name="createColorFill"></a> createColorFill

▸ **createColorFill**(`color`): [`ColorFill`](../interfaces/ColorFill.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](Color.md) | The color to use for the fill. |

#### Returns

[`ColorFill`](../interfaces/ColorFill.md)

a color fill.

___

### <a id="createEllipse" name="createEllipse"></a> createEllipse

▸ **createEllipse**(): [`EllipseNode`](EllipseNode.md)

#### Returns

[`EllipseNode`](EllipseNode.md)

an ellipse node with default x/y radii.
Transform values default to 0.

___

### <a id="createGroup" name="createGroup"></a> createGroup

▸ **createGroup**(): [`GroupNode`](GroupNode.md)

#### Returns

[`GroupNode`](GroupNode.md)

a group node.

___

### <a id="createImageContainer" name="createImageContainer"></a> createImageContainer

▸ **createImageContainer**(`bitmapData`, `options?`): [`MediaContainerNode`](MediaContainerNode.md)

Creates a bitmap image, represented as a multi-node MediaContainerNode structure. Always creates a "full-frame,"
uncropped image initially, but cropping can be changed after it is created by modifying the properties of the
container's mediaRectangle and maskShape children.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bitmapData` | [`BitmapImage`](../interfaces/BitmapImage.md) | BitmapImage resource (e.g. returned from loadBitmapImage()). |
| `options` | `Object` | Additional configuration:      - initialSize - Size the image is displayed at. Must have the same aspect ratio as bitmapData! Defaults to the        size the image would be created at by a UI drag-drop gesture (typically the image's full size, but scaled down        if needed to stay below an application-defined size cap). |
| `options.initialSize?` | [`RectangleGeometry`](../interfaces/RectangleGeometry.md) | - |

#### Returns

[`MediaContainerNode`](MediaContainerNode.md)

MediaContainerNode representing the top container node of the CropGroup structure.

___

### <a id="createLine" name="createLine"></a> createLine

▸ **createLine**(): [`LineNode`](LineNode.md)

#### Returns

[`LineNode`](LineNode.md)

a line node with default start point and end point and a default stroke.
Transform values default to 0.

___

### <a id="createRectangle" name="createRectangle"></a> createRectangle

▸ **createRectangle**(): [`RectangleNode`](RectangleNode.md)

#### Returns

[`RectangleNode`](RectangleNode.md)

a rectangle node with default width and height.
Transform values default to 0.

___

### <a id="createStroke" name="createStroke"></a> createStroke

▸ **createStroke**(`options?`): [`Stroke`](../interfaces/Stroke.md)

The stroke color has default value DEFAULT_STROKE_COLOR if none is provided.

The stroke width has default value DEFAULT_STROKE_WIDTH if none is provided.
Otherwise, the value must be from MIN_STROKE_WIDTH to MAX_STROKE_WIDTH.

The dash pattern has default value [] if none is provided. If the dash pattern has
odd number of elements, the items are copied to double the array.
For example, [1, 2, 3] becomes [1, 2, 3, 1, 2, 3]. The values within
this array must be non-negative.

The dash offset has default value 0 if none is provided. If a non-zero dash offset but
no dash pattern are given, the offset value is ignored (i.e., the returned
stroke has dash offset of 0.)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`StrokeOptions`](../interfaces/StrokeOptions.md)\> |

#### Returns

[`Stroke`](../interfaces/Stroke.md)

a stroke with center position, as only this position is currently supported.

___

### <a id="createText" name="createText"></a> createText

▸ **createText**(): [`TextNode`](TextNode.md)

#### Returns

[`TextNode`](TextNode.md)

a text node with default styles. The text content is initially empty, so the text node will be
invisible until its `text` property is set.

___

### <a id="loadBitmapImage" name="loadBitmapImage"></a> loadBitmapImage

▸ **loadBitmapImage**(`bitmapData`): `Promise`<[`BitmapImage`](../interfaces/BitmapImage.md)\>

Creates a bitmap image ResourceCollection, which can be displayed in the document by passing it to createImageContainer()
to create a CropGroup node. The same BitmapImage can be used to create multiple CropGroups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bitmapData` | `Blob` | Encoded image data in PNG or JPEG format. |

#### Returns

`Promise`<[`BitmapImage`](../interfaces/BitmapImage.md)\>
