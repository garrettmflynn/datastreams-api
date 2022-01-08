---
id: "datastreams_core.DataStreamTrackGenerator"
title: "Class: DataStreamTrackGenerator"
sidebar_label: "DataStreamTrackGenerator"
custom_edit_url: null
---

[datastreams.core](../modules/datastreams_core).DataStreamTrackGenerator

## Hierarchy

- [`DataStreamTrack`](datastreams_core.DataStreamTrack)

  ↳ **`DataStreamTrackGenerator`**

## Constructors

### constructor

• **new DataStreamTrackGenerator**()

#### Overrides

[DataStreamTrack](datastreams_core.DataStreamTrack).[constructor](datastreams_core.DataStreamTrack#constructor)

#### Defined in

[src/frontend/core/DataStreamTrackGenerator.ts:13](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrackGenerator.ts#L13)

## Properties

### callbacks

• **callbacks**: `Map`<`string`, `Function`\>

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[callbacks](datastreams_core.DataStreamTrack#callbacks)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:25](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L25)

___

### contentHint

• **contentHint**: `string` = `''`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[contentHint](datastreams_core.DataStreamTrack#contenthint)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:13](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L13)

___

### data

• **data**: `any`[] = `[]`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[data](datastreams_core.DataStreamTrack#data)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:24](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L24)

___

### enabled

• **enabled**: `boolean` = `false`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[enabled](datastreams_core.DataStreamTrack#enabled)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:14](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L14)

___

### id

• **id**: `string` = `''`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[id](datastreams_core.DataStreamTrack#id)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:18](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L18)

___

### isolated

• **isolated**: `boolean` = `false`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[isolated](datastreams_core.DataStreamTrack#isolated)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:15](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L15)

___

### kind

• **kind**: `string` = `''`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[kind](datastreams_core.DataStreamTrack#kind)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:19](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L19)

___

### label

• **label**: `string` = `''`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[label](datastreams_core.DataStreamTrack#label)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:20](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L20)

___

### muted

• **muted**: `boolean` = `false`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[muted](datastreams_core.DataStreamTrack#muted)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:16](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L16)

___

### pipeline

• **pipeline**: `any`[] = `[]`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[pipeline](datastreams_core.DataStreamTrack#pipeline)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:26](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L26)

___

### readyState

• **readyState**: `MediaStreamTrackState` = `'live'`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[readyState](datastreams_core.DataStreamTrack#readystate)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:21](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L21)

___

### remote

• **remote**: `boolean` = `false`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[remote](datastreams_core.DataStreamTrack#remote)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:17](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L17)

___

### writable

• **writable**: `WritableStream`<`any`\>

#### Defined in

[src/frontend/core/DataStreamTrackGenerator.ts:11](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrackGenerator.ts#L11)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Inherited from

DataStreamTrack.\_\_@toStringTag@60

#### Defined in

[src/frontend/core/DataStreamTrack.ts:28](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L28)

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

[src/frontend/core/DataStreamTrackGenerator.ts:37](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrackGenerator.ts#L37)

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

[DataStreamTrack](datastreams_core.DataStreamTrack).[addData](datastreams_core.DataStreamTrack#adddata)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:74](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L74)

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

[DataStreamTrack](datastreams_core.DataStreamTrack).[addEventListener](datastreams_core.DataStreamTrack#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4981

___

### applyConstraints

▸ **applyConstraints**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[applyConstraints](datastreams_core.DataStreamTrack#applyconstraints)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:49](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L49)

___

### clone

▸ **clone**(): `this`

#### Returns

`this`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[clone](datastreams_core.DataStreamTrack#clone)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:54](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L54)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrackGenerator.ts:34](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrackGenerator.ts#L34)

___

### deinit

▸ **deinit**(): `void`

#### Returns

`void`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[deinit](datastreams_core.DataStreamTrack#deinit)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:44](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L44)

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

[DataStreamTrack](datastreams_core.DataStreamTrack).[dispatchEvent](datastreams_core.DataStreamTrack#dispatchevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4983

___

### getCapabilities

▸ **getCapabilities**(): [`DataTrackCapabilities`](datastreams_core.DataTrackCapabilities)

#### Returns

[`DataTrackCapabilities`](datastreams_core.DataTrackCapabilities)

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[getCapabilities](datastreams_core.DataStreamTrack#getcapabilities)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:58](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L58)

___

### getConstraints

▸ **getConstraints**(): [`DataTrackConstraints`](datastreams_core.DataTrackConstraints)

#### Returns

[`DataTrackConstraints`](datastreams_core.DataTrackConstraints)

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[getConstraints](datastreams_core.DataStreamTrack#getconstraints)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:62](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L62)

___

### getSettings

▸ **getSettings**(): [`DataTrackSettings`](datastreams_core.DataTrackSettings)

#### Returns

[`DataTrackSettings`](datastreams_core.DataTrackSettings)

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[getSettings](datastreams_core.DataStreamTrack#getsettings)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:66](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L66)

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

[DataStreamTrack](datastreams_core.DataStreamTrack).[ondata](datastreams_core.DataStreamTrack#ondata)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:81](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L81)

___

### onended

▸ **onended**(): `void`

#### Returns

`void`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[onended](datastreams_core.DataStreamTrack#onended)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:97](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L97)

___

### onisolationchange

▸ **onisolationchange**(): `void`

#### Returns

`void`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[onisolationchange](datastreams_core.DataStreamTrack#onisolationchange)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:100](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L100)

___

### onmute

▸ **onmute**(): `void`

#### Returns

`void`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[onmute](datastreams_core.DataStreamTrack#onmute)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:101](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L101)

___

### onunmute

▸ **onunmute**(): `void`

#### Returns

`void`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[onunmute](datastreams_core.DataStreamTrack#onunmute)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:102](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L102)

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

[DataStreamTrack](datastreams_core.DataStreamTrack).[removeEventListener](datastreams_core.DataStreamTrack#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4985

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrackGenerator.ts:28](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrackGenerator.ts#L28)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[DataStreamTrack](datastreams_core.DataStreamTrack).[stop](datastreams_core.DataStreamTrack#stop)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:70](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L70)

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

[DataStreamTrack](datastreams_core.DataStreamTrack).[subscribe](datastreams_core.DataStreamTrack#subscribe)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:87](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L87)

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

[DataStreamTrack](datastreams_core.DataStreamTrack).[unsubscribe](datastreams_core.DataStreamTrack#unsubscribe)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:93](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrack.ts#L93)

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

[src/frontend/core/DataStreamTrackGenerator.ts:31](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataStreamTrackGenerator.ts#L31)
