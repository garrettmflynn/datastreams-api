---
id: "datastreams_core.DataStreamTrack"
title: "Class: DataStreamTrack"
sidebar_label: "DataStreamTrack"
custom_edit_url: null
---

[datastreams.core](../modules/datastreams_core).DataStreamTrack

## Hierarchy

- `EventTarget`

  ↳ **`DataStreamTrack`**

  ↳↳ [`DataChannel`](datastreams_core.DataChannel)

  ↳↳ [`DataStreamTrackGenerator`](datastreams_core.DataStreamTrackGenerator)

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

[src/frontend/core/DataStreamTrack.ts:32](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L32)

## Properties

### \_bufferSize

• **\_bufferSize**: `number`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:28](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L28)

___

### callbacks

• **callbacks**: `Map`<`string`, `Function`\>

#### Defined in

[src/frontend/core/DataStreamTrack.ts:26](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L26)

___

### contentHint

• **contentHint**: `string` = `''`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:13](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L13)

___

### data

• **data**: `any`[] = `[]`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:25](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L25)

___

### enabled

• **enabled**: `boolean` = `false`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:14](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L14)

___

### id

• **id**: `string` = `''`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:18](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L18)

___

### isolated

• **isolated**: `boolean` = `false`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:15](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L15)

___

### kind

• **kind**: `string` = `''`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:19](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L19)

___

### label

• **label**: `string` = `''`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:20](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L20)

___

### muted

• **muted**: `boolean` = `false`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:16](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L16)

___

### pipeline

• **pipeline**: `any`[] = `[]`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:27](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L27)

___

### readyState

• **readyState**: `MediaStreamTrackState` = `'live'`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:21](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L21)

___

### remote

• **remote**: `boolean` = `false`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:17](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L17)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:30](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L30)

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

[src/frontend/core/DataStreamTrack.ts:76](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L76)

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

___

### applyConstraints

▸ **applyConstraints**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/core/DataStreamTrack.ts:51](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L51)

___

### clone

▸ **clone**(): `this`

#### Returns

`this`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:56](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L56)

___

### deinit

▸ **deinit**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:46](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L46)

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

___

### getCapabilities

▸ **getCapabilities**(): [`DataTrackCapabilities`](datastreams_core.DataTrackCapabilities)

#### Returns

[`DataTrackCapabilities`](datastreams_core.DataTrackCapabilities)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:60](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L60)

___

### getConstraints

▸ **getConstraints**(): [`DataTrackConstraints`](datastreams_core.DataTrackConstraints)

#### Returns

[`DataTrackConstraints`](datastreams_core.DataTrackConstraints)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:64](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L64)

___

### getSettings

▸ **getSettings**(): [`DataTrackSettings`](datastreams_core.DataTrackSettings)

#### Returns

[`DataTrackSettings`](datastreams_core.DataTrackSettings)

#### Defined in

[src/frontend/core/DataStreamTrack.ts:68](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L68)

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

[src/frontend/core/DataStreamTrack.ts:88](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L88)

___

### onended

▸ **onended**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:104](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L104)

___

### onisolationchange

▸ **onisolationchange**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:107](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L107)

___

### onmute

▸ **onmute**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:108](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L108)

___

### onunmute

▸ **onunmute**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:109](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L109)

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

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrack.ts:72](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L72)

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

[src/frontend/core/DataStreamTrack.ts:94](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L94)

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

[src/frontend/core/DataStreamTrack.ts:100](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataStreamTrack.ts#L100)
