[datastreams-api](../README.md) / DataStreamTrack

# Class: DataStreamTrack

## Hierarchy

- `EventTarget`

  ↳ **`DataStreamTrack`**

  ↳↳ [`DataStreamTrackGenerator`](DataStreamTrackGenerator.md)

## Table of contents

### Constructors

- [constructor](DataStreamTrack.md#constructor)

### Properties

- [callbacks](DataStreamTrack.md#callbacks)
- [contentHint](DataStreamTrack.md#contenthint)
- [data](DataStreamTrack.md#data)
- [enabled](DataStreamTrack.md#enabled)
- [id](DataStreamTrack.md#id)
- [isolated](DataStreamTrack.md#isolated)
- [kind](DataStreamTrack.md#kind)
- [label](DataStreamTrack.md#label)
- [muted](DataStreamTrack.md#muted)
- [pipeline](DataStreamTrack.md#pipeline)
- [readyState](DataStreamTrack.md#readystate)
- [remote](DataStreamTrack.md#remote)

### Accessors

- [[toStringTag]](DataStreamTrack.md#[tostringtag])

### Methods

- [addData](DataStreamTrack.md#adddata)
- [addEventListener](DataStreamTrack.md#addeventlistener)
- [applyConstraints](DataStreamTrack.md#applyconstraints)
- [clone](DataStreamTrack.md#clone)
- [deinit](DataStreamTrack.md#deinit)
- [dispatchEvent](DataStreamTrack.md#dispatchevent)
- [getCapabilities](DataStreamTrack.md#getcapabilities)
- [getConstraints](DataStreamTrack.md#getconstraints)
- [getSettings](DataStreamTrack.md#getsettings)
- [ondata](DataStreamTrack.md#ondata)
- [onended](DataStreamTrack.md#onended)
- [onisolationchange](DataStreamTrack.md#onisolationchange)
- [onmute](DataStreamTrack.md#onmute)
- [onunmute](DataStreamTrack.md#onunmute)
- [removeEventListener](DataStreamTrack.md#removeeventlistener)
- [stop](DataStreamTrack.md#stop)
- [subscribe](DataStreamTrack.md#subscribe)
- [unsubscribe](DataStreamTrack.md#unsubscribe)

## Constructors

### constructor

• **new DataStreamTrack**(`device?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device?` | `Device`<`any`\> |

#### Overrides

EventTarget.constructor

#### Defined in

[src/frontend/core/DataStreamTrack.ts:30](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L30)

## Properties

### callbacks

• **callbacks**: `Map`<`string`, `Function`\>

#### Defined in

[src/frontend/core/DataStreamTrack.ts:25](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L25)

___

### contentHint

• **contentHint**: `string` = `''`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:13](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L13)

___

### data

• **data**: `any`[] = `[]`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:24](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L24)

___

### enabled

• **enabled**: `boolean` = `false`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:14](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L14)

___

### id

• **id**: `string` = `''`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:18](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L18)

___

### isolated

• **isolated**: `boolean` = `false`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:15](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L15)

___

### kind

• **kind**: `string` = `''`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:19](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L19)

___

### label

• **label**: `string` = `''`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:20](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L20)

___

### muted

• **muted**: `boolean` = `false`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:16](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L16)

___

### pipeline

• **pipeline**: `any`[] = `[]`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:26](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L26)

___

### readyState

• **readyState**: `MediaStreamTrackState` = `'live'`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:21](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L21)

___

### remote

• **remote**: `boolean` = `false`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:17](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L17)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:28](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L28)

## Methods

### addData

▸ **addData**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`void`

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

EventTarget.addEventListener

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

EventTarget.addEventListener

#### Defined in

node_modules/@types/web/index.d.ts:4980

___

### applyConstraints

▸ **applyConstraints**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/core/DataStreamTrack.ts:49](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L49)

___

### clone

▸ **clone**(): `this`

#### Returns

`this`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:54](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L54)

___

### deinit

▸ **deinit**(): `void`

#### Returns

`void`

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

EventTarget.dispatchEvent

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

EventTarget.dispatchEvent

#### Defined in

node_modules/@types/web/index.d.ts:4982

___

### getCapabilities

▸ **getCapabilities**(): `DataTrackCapabilities`

#### Returns

`DataTrackCapabilities`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:58](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L58)

___

### getConstraints

▸ **getConstraints**(): `DataTrackConstraints`

#### Returns

`DataTrackConstraints`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:62](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L62)

___

### getSettings

▸ **getSettings**(): `DataTrackSettings`

#### Returns

`DataTrackSettings`

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

#### Defined in

[src/frontend/core/DataStreamTrack.ts:81](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L81)

___

### onended

▸ **onended**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:97](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L97)

___

### onisolationchange

▸ **onisolationchange**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:100](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L100)

___

### onmute

▸ **onmute**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:101](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L101)

___

### onunmute

▸ **onunmute**(): `void`

#### Returns

`void`

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

EventTarget.removeEventListener

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

EventTarget.removeEventListener

#### Defined in

node_modules/@types/web/index.d.ts:4984

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

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

#### Defined in

[src/frontend/core/DataStreamTrack.ts:93](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrack.ts#L93)
