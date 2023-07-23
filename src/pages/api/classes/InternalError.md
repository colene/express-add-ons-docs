[ /authoring-api](../overview.md) / InternalError

# Class: InternalError

An internal error occured that is not caused by consumers of high level API.

## Hierarchy

- `Error`

  ↳ **`InternalError`**

## Table of contents

### Constructors

- [constructor](InternalError.md#constructor)

### Properties

- [message](InternalError.md#message)
- [name](InternalError.md#name)
- [stack](InternalError.md#stack)
- [prepareStackTrace](InternalError.md#prepareStackTrace)
- [stackTraceLimit](InternalError.md#stackTraceLimit)

### Methods

- [captureStackTrace](InternalError.md#captureStackTrace)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new InternalError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

common/temp/node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1046

## Properties

### <a id="message" name="message"></a> message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

common/temp/node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1041

___

### <a id="name" name="name"></a> name

• `Readonly` **name**: ``"InternalError"``

#### Overrides

Error.name

#### Defined in

platform/authoring/api/src/InternalError.ts:23

___

### <a id="stack" name="stack"></a> stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

common/temp/node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1042

___

### <a id="prepareStackTrace" name="prepareStackTrace"></a> prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

common/temp/node_modules/.pnpm/@types+node@16.11.62/node_modules/@types/node/ts4.8/globals.d.ts:11

___

### <a id="stackTraceLimit" name="stackTraceLimit"></a> stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

common/temp/node_modules/.pnpm/@types+node@16.11.62/node_modules/@types/node/ts4.8/globals.d.ts:13

## Methods

### <a id="captureStackTrace" name="captureStackTrace"></a> captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

common/temp/node_modules/.pnpm/@types+node@16.11.62/node_modules/@types/node/ts4.8/globals.d.ts:4
