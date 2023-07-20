[@hz/authoring-api](../overview.md) / EditorActions

# Class: EditorActions

Internal class to expose limited methods on UserActionManager.

## Table of contents

### Constructors

- [constructor](EditorActions.md#constructor)

### Methods

- [execute](EditorActions.md#execute)
- [setUserAction](EditorActions.md#setUserAction)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new EditorActions**(`_core`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_core` | `CoreDependencies`<[`Node`](Node.md)\> |

#### Defined in

platform/authoring/api/src/Editor.ts:68

## Methods

### <a id="execute" name="execute"></a> execute

▸ **execute**(`actionTypeOrMessage`): `Promise`<`void`\>

**`See`**

UserActionManager#execute

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionTypeOrMessage` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

platform/authoring/api/src/Editor.ts:73

▸ **execute**(`actionMessage`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionMessage` | `unknown` |

#### Returns

`Promise`<`void`\>

#### Defined in

platform/authoring/api/src/Editor.ts:74

▸ **execute**<`T`\>(`actionType`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](../overview.md#ActionType) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionType` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

platform/authoring/api/src/Editor.ts:75

___

### <a id="setUserAction" name="setUserAction"></a> setUserAction

▸ **setUserAction**(`actionType`, `action`): `void`

**`See`**

UserActionManager#setUserAction

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionType` | `string` |
| `action` | [`UserAction`](../interfaces/UserAction.md)<[`ActionType`](../overview.md#ActionType)\> |

#### Returns

`void`

#### Defined in

platform/authoring/api/src/Editor.ts:87
