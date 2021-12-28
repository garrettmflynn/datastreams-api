---
id: "frontend_core_DataDevices.DataDevices"
title: "Class: DataDevices"
sidebar_label: "DataDevices"
custom_edit_url: null
---

[frontend/core/DataDevices](../modules/frontend_core_DataDevices).DataDevices

## Hierarchy

- `EventTarget`

  ↳ **`DataDevices`**

## Constructors

### constructor

• **new DataDevices**()

#### Overrides

EventTarget.constructor

#### Defined in

[src/frontend/core/DataDevices.ts:27](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataDevices.ts#L27)

## Properties

### devices

• **devices**: `any`[]

#### Defined in

[src/frontend/core/DataDevices.ts:23](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataDevices.ts#L23)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Defined in

[src/frontend/core/DataDevices.ts:25](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataDevices.ts#L25)

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

### enumerateDevices

▸ **enumerateDevices**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/frontend/core/DataDevices.ts:46](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataDevices.ts#L46)

___

### getSupportedConstraints

▸ **getSupportedConstraints**(): `Promise`<[`DataTrackSupportedConstraints`](frontend_core_DataTrackSupportedConstraints.DataTrackSupportedConstraints)\>

#### Returns

`Promise`<[`DataTrackSupportedConstraints`](frontend_core_DataTrackSupportedConstraints.DataTrackSupportedConstraints)\>

#### Defined in

[src/frontend/core/DataDevices.ts:67](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataDevices.ts#L67)

___

### getSupportedDevices

▸ **getSupportedDevices**(): `Promise`<(`MediaDeviceInfo` \| { `characteristics`: { `receive`: `string` = '6e400002-b5a3-f393-e0a9-e50e24dcca9e'; `transmit`: `string` = '6e400003-b5a3-f393-e0a9-e50e24dcca9e' } ; `device`: `undefined` = muse.device; `fileCharacteristicUuid`: `string` = '6E400006-B5A3-F393-E0A9-E50E24DCCA9E'; `kind`: `string` = 'fnirsinput'; `label`: `string` = 'HEGduino'; `namePrefix`: `string` = 'HEG'; `onconnect`: `undefined` = muse.onconnect; `ondata`: (`newline`: `string`) => `number`[] = hegduino.ondata; `serviceUUID`: `string` = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'; `url`: `undefined` = 'https://localhost'; `usbProductId`: `number` = 60000; `usbVendorId`: `number` = 4292 } \| { `characteristics`: `undefined` ; `device`: typeof `MuseClient` = muse.device; `fileCharacteristicUuid`: `undefined` = '6E400006-B5A3-F393-E0A9-E50E24DCCA9E'; `kind`: `string` = 'eeginput'; `label`: `string` = 'Muse'; `namePrefix`: `undefined` = 'HEG'; `onconnect`: (`dataDevice`: [`Device`](frontend_devices_Device.Device)<`MuseClient`\>) => `Promise`<`void`\> = muse.onconnect; `ondata`: `undefined` = bci2000web.ondata; `serviceUUID`: `undefined` = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'; `url`: `undefined` = 'https://localhost'; `usbProductId`: `undefined` = 60000; `usbVendorId`: `undefined` = 4292 } \| { `characteristics`: `undefined` ; `device`: `undefined` = muse.device; `fileCharacteristicUuid`: `undefined` = '6E400006-B5A3-F393-E0A9-E50E24DCCA9E'; `kind`: `string` = 'eegdata'; `label`: `string` = 'Websocket'; `namePrefix`: `undefined` = 'HEG'; `onconnect`: `undefined` = muse.onconnect; `ondata`: (`data`: `any`[]) => `any`[] = bci2000web.ondata; `serviceUUID`: `undefined` = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'; `url`: `string` = 'https://localhost'; `usbProductId`: `undefined` = 60000; `usbVendorId`: `undefined` = 4292 })[]\>

#### Returns

`Promise`<(`MediaDeviceInfo` \| { `characteristics`: { `receive`: `string` = '6e400002-b5a3-f393-e0a9-e50e24dcca9e'; `transmit`: `string` = '6e400003-b5a3-f393-e0a9-e50e24dcca9e' } ; `device`: `undefined` = muse.device; `fileCharacteristicUuid`: `string` = '6E400006-B5A3-F393-E0A9-E50E24DCCA9E'; `kind`: `string` = 'fnirsinput'; `label`: `string` = 'HEGduino'; `namePrefix`: `string` = 'HEG'; `onconnect`: `undefined` = muse.onconnect; `ondata`: (`newline`: `string`) => `number`[] = hegduino.ondata; `serviceUUID`: `string` = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'; `url`: `undefined` = 'https://localhost'; `usbProductId`: `number` = 60000; `usbVendorId`: `number` = 4292 } \| { `characteristics`: `undefined` ; `device`: typeof `MuseClient` = muse.device; `fileCharacteristicUuid`: `undefined` = '6E400006-B5A3-F393-E0A9-E50E24DCCA9E'; `kind`: `string` = 'eeginput'; `label`: `string` = 'Muse'; `namePrefix`: `undefined` = 'HEG'; `onconnect`: (`dataDevice`: [`Device`](frontend_devices_Device.Device)<`MuseClient`\>) => `Promise`<`void`\> = muse.onconnect; `ondata`: `undefined` = bci2000web.ondata; `serviceUUID`: `undefined` = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'; `url`: `undefined` = 'https://localhost'; `usbProductId`: `undefined` = 60000; `usbVendorId`: `undefined` = 4292 } \| { `characteristics`: `undefined` ; `device`: `undefined` = muse.device; `fileCharacteristicUuid`: `undefined` = '6E400006-B5A3-F393-E0A9-E50E24DCCA9E'; `kind`: `string` = 'eegdata'; `label`: `string` = 'Websocket'; `namePrefix`: `undefined` = 'HEG'; `onconnect`: `undefined` = muse.onconnect; `ondata`: (`data`: `any`[]) => `any`[] = bci2000web.ondata; `serviceUUID`: `undefined` = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'; `url`: `string` = 'https://localhost'; `usbProductId`: `undefined` = 60000; `usbVendorId`: `undefined` = 4292 })[]\>

#### Defined in

[src/frontend/core/DataDevices.ts:62](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataDevices.ts#L62)

___

### getUserStream

▸ **getUserStream**(`constraints`): `Promise`<[`DataStream`](frontend_core_DataStream.DataStream)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `any` |

#### Returns

`Promise`<[`DataStream`](frontend_core_DataStream.DataStream)\>

#### Defined in

[src/frontend/core/DataDevices.ts:105](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataDevices.ts#L105)

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

### startDataStream

▸ **startDataStream**(`constraints`, `dataStream?`): `Promise`<[`DataStream`](frontend_core_DataStream.DataStream)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `any` |
| `dataStream` | [`DataStream`](frontend_core_DataStream.DataStream) |

#### Returns

`Promise`<[`DataStream`](frontend_core_DataStream.DataStream)\>

#### Defined in

[src/frontend/core/DataDevices.ts:71](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataDevices.ts#L71)
