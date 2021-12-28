[datastreams-api](../README.md) / DataStreamTrackGenerator

# Class: DataStreamTrackGenerator

## Hierarchy

- [`DataStreamTrack`](DataStreamTrack.md)

  ↳ **`DataStreamTrackGenerator`**

## Table of contents

### Constructors

- [constructor](DataStreamTrackGenerator.md#constructor)

### Properties

- [callbacks](DataStreamTrackGenerator.md#callbacks)
- [contentHint](DataStreamTrackGenerator.md#contenthint)
- [data](DataStreamTrackGenerator.md#data)
- [enabled](DataStreamTrackGenerator.md#enabled)
- [id](DataStreamTrackGenerator.md#id)
- [isolated](DataStreamTrackGenerator.md#isolated)
- [kind](DataStreamTrackGenerator.md#kind)
- [label](DataStreamTrackGenerator.md#label)
- [muted](DataStreamTrackGenerator.md#muted)
- [pipeline](DataStreamTrackGenerator.md#pipeline)
- [readyState](DataStreamTrackGenerator.md#readystate)
- [remote](DataStreamTrackGenerator.md#remote)
- [writable](DataStreamTrackGenerator.md#writable)

### Accessors

- [[toStringTag]](DataStreamTrackGenerator.md#[tostringtag])

### Methods

- [abort](DataStreamTrackGenerator.md#abort)
- [addData](DataStreamTrackGenerator.md#adddata)
- [addEventListener](DataStreamTrackGenerator.md#addeventlistener)
- [applyConstraints](DataStreamTrackGenerator.md#applyconstraints)
- [clone](DataStreamTrackGenerator.md#clone)
- [close](DataStreamTrackGenerator.md#close)
- [deinit](DataStreamTrackGenerator.md#deinit)
- [dispatchEvent](DataStreamTrackGenerator.md#dispatchevent)
- [getCapabilities](DataStreamTrackGenerator.md#getcapabilities)
- [getConstraints](DataStreamTrackGenerator.md#getconstraints)
- [getSettings](DataStreamTrackGenerator.md#getsettings)
- [ondata](DataStreamTrackGenerator.md#ondata)
- [onended](DataStreamTrackGenerator.md#onended)
- [onisolationchange](DataStreamTrackGenerator.md#onisolationchange)
- [onmute](DataStreamTrackGenerator.md#onmute)
- [onunmute](DataStreamTrackGenerator.md#onunmute)
- [removeEventListener](DataStreamTrackGenerator.md#removeeventlistener)
- [start](DataStreamTrackGenerator.md#start)
- [stop](DataStreamTrackGenerator.md#stop)
- [subscribe](DataStreamTrackGenerator.md#subscribe)
- [unsubscribe](DataStreamTrackGenerator.md#unsubscribe)
- [write](DataStreamTrackGenerator.md#write)

## Constructors

### constructor

• **new DataStreamTrackGenerator**()

#### Overrides

[DataStreamTrack](DataStreamTrack.md).[constructor](DataStreamTrack.md#constructor)

#### Defined in

[src/frontend/core/DataStreamTrackGenerator.ts:13](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackGenerator.ts#L13)

## Properties

### callbacks

• **callbacks**: `Map`<`string`, `Function`\>

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[callbacks](DataStreamTrack.md#callbacks)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:25](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L25)

___

### contentHint

• **contentHint**: `string` = `''`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[contentHint](DataStreamTrack.md#contenthint)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:13](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L13)

___

### data

• **data**: `any`[] = `[]`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[data](DataStreamTrack.md#data)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:24](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L24)

___

### enabled

• **enabled**: `boolean` = `false`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[enabled](DataStreamTrack.md#enabled)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:14](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L14)

___

### id

• **id**: `string` = `''`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[id](DataStreamTrack.md#id)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:18](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L18)

___

### isolated

• **isolated**: `boolean` = `false`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[isolated](DataStreamTrack.md#isolated)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:15](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L15)

___

### kind

• **kind**: `string` = `''`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[kind](DataStreamTrack.md#kind)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:19](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L19)

___

### label

• **label**: `string` = `''`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[label](DataStreamTrack.md#label)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:20](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L20)

___

### muted

• **muted**: `boolean` = `false`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[muted](DataStreamTrack.md#muted)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:16](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L16)

___

### pipeline

• **pipeline**: `any`[] = `[]`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[pipeline](DataStreamTrack.md#pipeline)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:26](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L26)

___

### readyState

• **readyState**: `MediaStreamTrackState` = `'live'`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[readyState](DataStreamTrack.md#readystate)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:21](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L21)

___

### remote

• **remote**: `boolean` = `false`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[remote](DataStreamTrack.md#remote)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:17](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L17)

___

### writable

• **writable**: `WritableStream`<`any`\>

#### Defined in

[src/frontend/core/DataStreamTrackGenerator.ts:11](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackGenerator.ts#L11)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Inherited from

DataStreamTrack.\_\_@toStringTag@248

#### Defined in

[src/frontend/core/DataStreamTrack.ts:28](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L28)

## Methods

### abort

▸ **abort**(`reason`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `any` |

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrackGenerator.ts:37](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackGenerator.ts#L37)

___

### addData

▸ **addData**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[addData](DataStreamTrack.md#adddata)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:74](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L74)

___

### addEventListener

▸ **addEventListener**(`type`, `callback`, `options?`): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[addEventListener](DataStreamTrack.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4981

▸ **addEventListener**(`type`, `callback`, `options?`): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[addEventListener](DataStreamTrack.md#addeventlistener)

#### Defined in

node_modules/@types/web/index.d.ts:4980

___

### applyConstraints

▸ **applyConstraints**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[applyConstraints](DataStreamTrack.md#applyconstraints)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:49](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L49)

___

### clone

▸ **clone**(): `this`

#### Returns

`this`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[clone](DataStreamTrack.md#clone)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:54](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L54)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrackGenerator.ts:34](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackGenerator.ts#L34)

___

### deinit

▸ **deinit**(): `void`

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[deinit](DataStreamTrack.md#deinit)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:44](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L44)

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[dispatchEvent](DataStreamTrack.md#dispatchevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4983

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[dispatchEvent](DataStreamTrack.md#dispatchevent)

#### Defined in

node_modules/@types/web/index.d.ts:4982

___

### getCapabilities

▸ **getCapabilities**(): `DataTrackCapabilities`

#### Returns

`DataTrackCapabilities`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[getCapabilities](DataStreamTrack.md#getcapabilities)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:58](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L58)

___

### getConstraints

▸ **getConstraints**(): `DataTrackConstraints`

#### Returns

`DataTrackConstraints`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[getConstraints](DataStreamTrack.md#getconstraints)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:62](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L62)

___

### getSettings

▸ **getSettings**(): `DataTrackSettings`

#### Returns

`DataTrackSettings`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[getSettings](DataStreamTrack.md#getsettings)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:66](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L66)

___

### ondata

▸ **ondata**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[ondata](DataStreamTrack.md#ondata)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:81](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L81)

___

### onended

▸ **onended**(): `void`

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[onended](DataStreamTrack.md#onended)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:97](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L97)

___

### onisolationchange

▸ **onisolationchange**(): `void`

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[onisolationchange](DataStreamTrack.md#onisolationchange)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:100](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L100)

___

### onmute

▸ **onmute**(): `void`

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[onmute](DataStreamTrack.md#onmute)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:101](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L101)

___

### onunmute

▸ **onunmute**(): `void`

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[onunmute](DataStreamTrack.md#onunmute)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:102](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L102)

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `options?`): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[removeEventListener](DataStreamTrack.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4985

▸ **removeEventListener**(`type`, `callback`, `options?`): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[removeEventListener](DataStreamTrack.md#removeeventlistener)

#### Defined in

node_modules/@types/web/index.d.ts:4984

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrackGenerator.ts:28](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackGenerator.ts#L28)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[stop](DataStreamTrack.md#stop)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:70](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L70)

___

### subscribe

▸ **subscribe**(`callback`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`string`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[subscribe](DataStreamTrack.md#subscribe)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:87](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L87)

___

### unsubscribe

▸ **unsubscribe**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Inherited from

[DataStreamTrack](DataStreamTrack.md).[unsubscribe](DataStreamTrack.md#unsubscribe)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:93](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L93)

___

### write

▸ **write**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrackGenerator.ts:31](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackGenerator.ts#L31)
