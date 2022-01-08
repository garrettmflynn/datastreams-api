---
id: "datastreams_core.DataDevices"
title: "Class: DataDevices"
sidebar_label: "DataDevices"
custom_edit_url: null
---

[datastreams.core](../modules/datastreams_core).DataDevices

The DataDevices interface provides access to data sources like webcams, microphones, and BLE / USB devices.
```typescript
import { DataDevices } from "datastreams-api";

const dataDevices = new DataDevices();
```

## Hierarchy

- `EventTarget`

  ↳ **`DataDevices`**

## Constructors

### constructor

• **new DataDevices**()

#### Overrides

EventTarget.constructor

#### Defined in

[src/frontend/core/DataDevices.ts:37](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataDevices.ts#L37)

## Properties

### devices

• **devices**: `any`[]

#### Defined in

[src/frontend/core/DataDevices.ts:33](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataDevices.ts#L33)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Defined in

[src/frontend/core/DataDevices.ts:35](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataDevices.ts#L35)

## Methods

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

### enumerateDevices

▸ **enumerateDevices**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/frontend/core/DataDevices.ts:56](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataDevices.ts#L56)

___

### getSupportedConstraints

▸ **getSupportedConstraints**(): `Promise`<[`DataTrackSupportedConstraints`](datastreams_core.DataTrackSupportedConstraints)\>

#### Returns

`Promise`<[`DataTrackSupportedConstraints`](datastreams_core.DataTrackSupportedConstraints)\>

#### Defined in

[src/frontend/core/DataDevices.ts:77](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataDevices.ts#L77)

___

### getSupportedDevices

▸ **getSupportedDevices**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/frontend/core/DataDevices.ts:72](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataDevices.ts#L72)

___

### getUserStream

▸ **getUserStream**(`constraints`): `Promise`<[`DataStream`](datastreams_core.DataStream)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `any` |

#### Returns

`Promise`<[`DataStream`](datastreams_core.DataStream)\>

#### Defined in

[src/frontend/core/DataDevices.ts:116](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataDevices.ts#L116)

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

### startDataStream

▸ **startDataStream**(`constraints`, `dataStream?`): `Promise`<[`DataStream`](datastreams_core.DataStream)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `any` |
| `dataStream` | [`DataStream`](datastreams_core.DataStream) |

#### Returns

`Promise`<[`DataStream`](datastreams_core.DataStream)\>

#### Defined in

[src/frontend/core/DataDevices.ts:81](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/core/DataDevices.ts#L81)
