[@hz/authoring-api](../overview.md) / Editor

# Class: Editor

Entry point to the authoring APIs.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TenantRootNode` | extends [`Node`](Node.md) = [`Node`](Node.md) |

## Table of contents

### Constructors

- [constructor](Editor.md#constructor)

### Properties

- [actions](Editor.md#actions)
- [context](Editor.md#context)

### Accessors

- [documentRoot](Editor.md#documentRoot)

### Methods

- [addTemporalArtboardContainerWithArtboard](Editor.md#addTemporalArtboardContainerWithArtboard)
- [createArtboard](Editor.md#createArtboard)
- [createBitmapImage](Editor.md#createBitmapImage)
- [createColorFill](Editor.md#createColorFill)
- [createEllipse](Editor.md#createEllipse)
- [createGroup](Editor.md#createGroup)
- [createImageContainer](Editor.md#createImageContainer)
- [createLine](Editor.md#createLine)
- [createRectangle](Editor.md#createRectangle)
- [createStroke](Editor.md#createStroke)
- [createText](Editor.md#createText)
- [getNodeForEntity](Editor.md#getNodeForEntity)
- [getNodesForEntities](Editor.md#getNodesForEntities)
- [loadBitmapImage](Editor.md#loadBitmapImage)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Editor**<`TenantRootNode`\>(`_core`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TenantRootNode` | extends [`Node`](Node.md)<`TenantRootNode`\> = [`Node`](Node.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_core` | `CoreDependencies`<`TenantRootNode`\> |

#### Defined in

platform/authoring/api/src/Editor.ts:112

## Properties

### <a id="actions" name="actions"></a> actions

• `Readonly` **actions**: [`EditorActions`](EditorActions.md)

"Namespace" for methods related to registration and execution of a
[UserAction](../interfaces/UserAction.md).

#### Defined in

platform/authoring/api/src/Editor.ts:105

___

### <a id="context" name="context"></a> context

• `Readonly` **context**: [`Context`](Context.md)

User's current selection context

#### Defined in

platform/authoring/api/src/Editor.ts:110

## Accessors

### <a id="documentRoot" name="documentRoot"></a> documentRoot

• `get` **documentRoot**(): `TenantRootNode`

#### Returns

`TenantRootNode`

the root of the document.

#### Defined in

platform/authoring/api/src/Editor.ts:120

## Methods

### <a id="addTemporalArtboardContainerWithArtboard" name="addTemporalArtboardContainerWithArtboard"></a> addTemporalArtboardContainerWithArtboard

▸ **addTemporalArtboardContainerWithArtboard**(`geometry`): `Object`

Creates a TemporalArtboardContainer (a ContainerNode) parenting TemporalArtboardContainerMain (ContainerNode) whose child
is an artboard (ArtboardNode). Items in this structure all have the same dimension as specified. This is equivalent to
a "Page" in Project X. The TemporalArtboardContainer is appended as the latest child to #artwork root by default.

**`Remarks`**

TemporalArtboardContainer and TemporalArtboardContainerMain are ContainerNode to prevent their dimension changing after creation.
The convention in Project X is container, container main and artboards must have the same dimension. Editing ArtboardNode's
dimension when it is a descendant of a TemporalArtboardContainer and TemporalArtboardContainerMain is discouraged, as it can
lead to undefined behaviors in Project X. There can also be undefined behaviors when a rooted TemporalArtboardContainer
does not have TemporalArtboardContainerMain, or the TemporalArtboardContainerMain does not have any Artboard.
Hence, proceed with caution with reparenting TemporalArtboardContainer, TemporalArtboardContainerMain and Artboard.

[HZ-20133] addresses safeguards around editing TemporalArtboardContainer, TemporalArtboardContainerMain and ArtboardNode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | `RectangleGeometry` |

#### Returns

`Object`

an object containing the first ArtboardNode.

| Name | Type |
| :------ | :------ |
| `artboard` | [`ArtboardNode`](ArtboardNode.md) |

#### Defined in

platform/authoring/api/src/Editor.ts:141

___

### <a id="createArtboard" name="createArtboard"></a> createArtboard

▸ **createArtboard**(): [`ArtboardNode`](ArtboardNode.md)

#### Returns

[`ArtboardNode`](ArtboardNode.md)

an artboard node with default width and height.
Transform values default to 0.

#### Defined in

platform/authoring/api/src/Editor.ts:158

___

### <a id="createBitmapImage" name="createBitmapImage"></a> createBitmapImage

▸ **createBitmapImage**(`bitmapData`, `initialSize`): [`Node`](Node.md)

**`Deprecated`**

Use loadBitmapImage() + createImageContainer() instead of this single synchronous API. See
createImageContainer() for documentation on this method - other than the arguments, its behavior is identical.

TODO [HZ-24464]: remove this deprecated API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bitmapData` | `Blob` | Encoded image data in PNG or JPEG format. |
| `initialSize` | `RectangleGeometry` | Size the image is displayed at. Must have the same aspect ratio as bitmapData! |

#### Returns

[`Node`](Node.md)

Generic opaque Node representing the CropGroup structure.

#### Defined in

platform/authoring/api/src/Editor.ts:252

___

### <a id="createColorFill" name="createColorFill"></a> createColorFill

▸ **createColorFill**(`color`): [`ColorFill`](../interfaces/ColorFill.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](Color.md) | The color to use for the fill. |

#### Returns

[`ColorFill`](../interfaces/ColorFill.md)

a color fill.

#### Defined in

platform/authoring/api/src/Editor.ts:232

___

### <a id="createEllipse" name="createEllipse"></a> createEllipse

▸ **createEllipse**(): [`EllipseNode`](EllipseNode.md)

#### Returns

[`EllipseNode`](EllipseNode.md)

an ellipse node with default x/y radii.
Transform values default to 0.

#### Defined in

platform/authoring/api/src/Editor.ts:174

___

### <a id="createGroup" name="createGroup"></a> createGroup

▸ **createGroup**(): [`GroupNode`](GroupNode.md)

#### Returns

[`GroupNode`](GroupNode.md)

a group node.

#### Defined in

platform/authoring/api/src/Editor.ts:223

___

### <a id="createImageContainer" name="createImageContainer"></a> createImageContainer

▸ **createImageContainer**(`bitmapData`, `options?`): `MediaContainerNode`

Creates a bitmap image, represented as a multi-node MediaContainerNode structure. Always creates a "full-frame,"
uncropped image initially, but cropping can be changed after it is created by modifying the properties of the
container's mediaRectangle and maskShape children.

Image creation involves some asynchronous steps. The image will be visible in this client almost instantly, but will
render as a gray placeholder on other clients until it has been uploaded to DCX and then downloaded by those clients.
This local client will act as having unsaved changes until the upload has finished.

Note: this API does not provide deduplication (HZ-15408). If the provided bitmapData corresponds to an image already
in the document, this API will create a 2nd duplicate resource, wasting user storage and browser memory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bitmapData` | [`BitmapImage`](../interfaces/BitmapImage.md) | BitmapImage resource (e.g. returned from loadBitmapImage()). |
| `options` | `Object` | Additional configuration:      - initialSize - Size the image is displayed at. Must have the same aspect ratio as bitmapData! Defaults to the        size the image would be created at by a UI drag-drop gesture (typically the image's full size, but scaled down        if needed to stay below an application-defined size cap). |
| `options.initialSize?` | `RectangleGeometry` | - |

#### Returns

`MediaContainerNode`

MediaContainerNode representing the top container node of the CropGroup structure.

#### Defined in

platform/authoring/api/src/Editor.ts:281

___

### <a id="createLine" name="createLine"></a> createLine

▸ **createLine**(): [`LineNode`](LineNode.md)

#### Returns

[`LineNode`](LineNode.md)

a line node with default start point and end point and a default stroke.
Transform values default to 0.

#### Defined in

platform/authoring/api/src/Editor.ts:199

___

### <a id="createRectangle" name="createRectangle"></a> createRectangle

▸ **createRectangle**(): [`RectangleNode`](RectangleNode.md)

#### Returns

[`RectangleNode`](RectangleNode.md)

a rectangle node with default width and height.
Transform values default to 0.

#### Defined in

platform/authoring/api/src/Editor.ts:187

___

### <a id="createStroke" name="createStroke"></a> createStroke

▸ **createStroke**(`options?`): [`Stroke`](../interfaces/Stroke.md)

The stroke color has default value [DEFAULT_STROKE_COLOR](../overview.md#DEFAULT_STROKE_COLOR) if none is provided.

The stroke width has default value [DEFAULT_STROKE_WIDTH](../overview.md#DEFAULT_STROKE_WIDTH) if none is provided.
Otherwise, the value must be from [MIN_STROKE_WIDTH](../overview.md#MIN_STROKE_WIDTH) to [MAX_STROKE_WIDTH](../overview.md#MAX_STROKE_WIDTH).

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
| `options?` | `Partial`<`StrokeOptions`\> |

#### Returns

[`Stroke`](../interfaces/Stroke.md)

a stroke with center position, as only this position is currently supported.

#### Defined in

platform/authoring/api/src/Editor.ts:404

___

### <a id="createText" name="createText"></a> createText

▸ **createText**(): [`TextNode`](TextNode.md)

#### Returns

[`TextNode`](TextNode.md)

a text node with default styles. The text content is initially empty, so the text node will be
invisible until its `text` property is set.

#### Defined in

platform/authoring/api/src/Editor.ts:474

___

### <a id="getNodeForEntity" name="getNodeForEntity"></a> getNodeForEntity

▸ **getNodeForEntity**(`entity`): [`Node`](Node.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` | a scenenode entity. |

#### Returns

[`Node`](Node.md)

a suitable Node subclass wrapper corresponding to its type.

#### Defined in

platform/authoring/api/src/Editor.ts:458

___

### <a id="getNodesForEntities" name="getNodesForEntities"></a> getNodesForEntities

▸ **getNodesForEntities**(`entities`): [`Node`](Node.md)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | readonly `string`[] \| `Iterable`<`string`\> | a list of scenenode entities. |

#### Returns

[`Node`](Node.md)[]

list of suitable Node subclass wrappers, each matching the corresponding entity's type.

#### Defined in

platform/authoring/api/src/Editor.ts:466

___

### <a id="loadBitmapImage" name="loadBitmapImage"></a> loadBitmapImage

▸ **loadBitmapImage**(`bitmapData`): `Promise`<[`BitmapImage`](../interfaces/BitmapImage.md)\>

Creates a bitmap image ResourceCollection, which can be displayed in the document by passing it to createBitmapImage()
to crate a CropGroup node. The same BitmapImage can be used to create multiple CropGroups.

Async steps to upload image resource data proceeds async in the background, but the BitmapImage return value can be used
immediately. The local client will act as having unsaved changes until the upload has finished.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bitmapData` | `Blob` | Encoded image data in PNG or JPEG format. |

#### Returns

`Promise`<[`BitmapImage`](../interfaces/BitmapImage.md)\>

#### Defined in

platform/authoring/api/src/Editor.ts:330
