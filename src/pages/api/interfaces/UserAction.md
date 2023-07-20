[@hz/authoring-api](../overview.md) / UserAction

# Interface: UserAction<T\>

A UserAction is a simplified ActionHandler. Key differences:

1. ActionSystem#addActionHandler supports 0..N handlers, a UserAction is a 1:1 mapping.
2. Advanced features of ActionProcessor (filter, map, reduce, etc.) are not supported.
3. A UserAction is user-visible. It provides a localized name, disabled
   state, and optional keyboard shortcut to allow Horizon tenants to expose in the UI.
4. Can be defined in both the UI thread and the Authoring thread.
5. Declaration merging of ActionType is optional, but recommended for first-party code
   for compile-time type checking.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](../overview.md#ActionType) = [`ActionType`](../overview.md#ActionType) |

## Hierarchy

- `BaseAction`

  ↳ **`UserAction`**

## Table of contents

### Properties

- [computedName](UserAction.md#computedName)
- [context](UserAction.md#context)
- [disabled](UserAction.md#disabled)
- [isBrowserNative](UserAction.md#isBrowserNative)
- [keybinding](UserAction.md#keybinding)
- [name](UserAction.md#name)

### Methods

- [execute](UserAction.md#execute)
- [needsToUpdate](UserAction.md#needsToUpdate)
- [update](UserAction.md#update)

## Properties

### <a id="computedName" name="computedName"></a> computedName

• `Optional` `Readonly` **computedName**: `string`

(Optional) Internally translated name computed based on UserAction state.
If not provided, fallback to required name MessageDescriptor.

#### Defined in

platform/common/user-action/dist/UserAction.d.ts:52

___

### <a id="context" name="context"></a> context

• `Optional` **context**: `boolean`

#### Defined in

platform/common/user-action/dist/UserAction.d.ts:67

___

### <a id="disabled" name="disabled"></a> disabled

• `Optional` `Readonly` **disabled**: `boolean`

(Optional) UserActions may compute disabled state based on application/document state.
If undefined, the action will always be enabled.

#### Defined in

platform/common/user-action/dist/UserAction.d.ts:57

___

### <a id="isBrowserNative" name="isBrowserNative"></a> isBrowserNative

• `Optional` `Readonly` **isBrowserNative**: `boolean`

(Optional) If set to true, we do NOT register the UserAction to Mousetrap handler.
This way we can have the formatted keyboard shortcut but let the browser handle the event.

#### Defined in

platform/common/user-action/dist/UserAction.d.ts:66

___

### <a id="keybinding" name="keybinding"></a> keybinding

• `Optional` `Readonly` **keybinding**: `KeybindingValue`

(Optional) Default keybinding(s)

#### Defined in

platform/common/user-action/dist/UserAction.d.ts:61

___

### <a id="name" name="name"></a> name

• `Readonly` **name**: `MessageDescriptor`

Default MessageDescriptor to translate as the [UserAction](UserAction.md) name
for display in UI (e.g. context menu). Translation is performed by
UserActionManager.

#### Defined in

platform/common/user-action/dist/UserAction.d.ts:47

## Methods

### <a id="execute" name="execute"></a> execute

▸ **execute**(`actionMessage?`): `void`

Mutate UI or authoring/document state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionMessage?` | `Readonly`<`Message`<`ActionTypeMap`, `T`\> & { `metadata?`: `ActionMetadata`  }\> |

#### Returns

`void`

#### Overrides

BaseAction.execute

#### Defined in

platform/common/user-action/dist/UserAction.d.ts:84

___

### <a id="needsToUpdate" name="needsToUpdate"></a> needsToUpdate

▸ `Optional` **needsToUpdate**(): `boolean`

(Optional) Called every frame while the action is registered. Imeplementations should
return true when the UI or authoring/document state used disable the action is dirty.
The action must also define the [update](UserAction.md#update) method.

#### Returns

`boolean`

whether the action needs to update disabled state.

#### Defined in

platform/common/user-action/dist/UserAction.d.ts:75

___

### <a id="update" name="update"></a> update

▸ `Optional` **update**(): `void`

(Optional) Update disabled state. Called when needsToUpdate() returns true.
The action must also define the [needsToUpdate](UserAction.md#needsToUpdate) method.

#### Returns

`void`

#### Defined in

platform/common/user-action/dist/UserAction.d.ts:80
