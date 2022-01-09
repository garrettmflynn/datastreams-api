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

[src/frontend/core/DataDevices.ts:36](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataDevices.ts#L36)

## Properties

### devices

• **devices**: `any`[] = `[]`

#### Defined in

[src/frontend/core/DataDevices.ts:32](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataDevices.ts#L32)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Defined in

[src/frontend/core/DataDevices.ts:34](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataDevices.ts#L34)

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

[src/frontend/core/DataDevices.ts:58](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataDevices.ts#L58)

___

### getDevice

▸ **getDevice**(`constraints`): `undefined` \| [`BluetoothDevice`](datastreams_devices.BluetoothDevice)<`any`\> \| [`SerialDevice`](datastreams_devices.SerialDevice)<`any`\> \| [`WebSocketDevice`](datastreams_devices.WebSocketDevice)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `any` |

#### Returns

`undefined` \| [`BluetoothDevice`](datastreams_devices.BluetoothDevice)<`any`\> \| [`SerialDevice`](datastreams_devices.SerialDevice)<`any`\> \| [`WebSocketDevice`](datastreams_devices.WebSocketDevice)<`any`\>

#### Defined in

[src/frontend/core/DataDevices.ts:90](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataDevices.ts#L90)

___

### getDeviceInfo

▸ **getDeviceInfo**(`constraints`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `deviceId` | `string` |
| `groupId` | `string` |
| `kind` | `any` |
| `label` | `any` |
| `modes` | `any` |
| `protocols` | `string`[] |

#### Defined in

[src/frontend/core/DataDevices.ts:83](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataDevices.ts#L83)

___

### getSupportedConstraints

▸ **getSupportedConstraints**(): `Promise`<[`DataTrackSupportedConstraints`](datastreams_core.DataTrackSupportedConstraints)\>

#### Returns

`Promise`<[`DataTrackSupportedConstraints`](datastreams_core.DataTrackSupportedConstraints)\>

#### Defined in

[src/frontend/core/DataDevices.ts:85](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataDevices.ts#L85)

___

### getSupportedDevices

▸ **getSupportedDevices**(`filter?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | ``"data"`` \| ``"media"`` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[src/frontend/core/DataDevices.ts:74](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataDevices.ts#L74)

___

### getUserStream

▸ **getUserStream**(`constraints`): `Promise`<[`SerialDevice`](datastreams_devices.SerialDevice)<`any`\> \| [`WebSocketDevice`](datastreams_devices.WebSocketDevice)<`any`\> \| `Device`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `any` |

#### Returns

`Promise`<[`SerialDevice`](datastreams_devices.SerialDevice)<`any`\> \| [`WebSocketDevice`](datastreams_devices.WebSocketDevice)<`any`\> \| `Device`<`any`\>\>

#### Defined in

[src/frontend/core/DataDevices.ts:144](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataDevices.ts#L144)

___

### load

▸ **load**(`devices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `devices` | `any` |

#### Returns

`void`

#### Defined in

[src/frontend/core/DataDevices.ts:53](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataDevices.ts#L53)

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

▸ **startDataStream**(`constraints`, `stream?`): `Promise`<[`SerialDevice`](datastreams_devices.SerialDevice)<`any`\> \| [`WebSocketDevice`](datastreams_devices.WebSocketDevice)<`any`\> \| `Device`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `any` |
| `stream` | [`DataStream`](datastreams_core.DataStream) |

#### Returns

`Promise`<[`SerialDevice`](datastreams_devices.SerialDevice)<`any`\> \| [`WebSocketDevice`](datastreams_devices.WebSocketDevice)<`any`\> \| `Device`<`any`\>\>

#### Defined in

[src/frontend/core/DataDevices.ts:101](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataDevices.ts#L101)
