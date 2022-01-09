---
id: "datastreams_devices.WebSocketDevice"
title: "Class: WebSocketDevice<T>"
sidebar_label: "WebSocketDevice"
custom_edit_url: null
---

[datastreams.devices](../modules/datastreams_devices).WebSocketDevice

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `Device`<`T`\>

  ↳ **`WebSocketDevice`**

## Constructors

### constructor

• **new WebSocketDevice**<`T`\>(`constraints`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `any` |

#### Overrides

Device&lt;T\&gt;.constructor

#### Defined in

[src/frontend/devices/WebSocket.device.ts:9](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/WebSocket.device.ts#L9)

## Properties

### constraints

• **constraints**: `DeviceConstraintsType`<`T`\>

#### Inherited from

Device.constraints

#### Defined in

[src/frontend/devices/Device.ts:11](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L11)

___

### dataStream

• `Optional` **dataStream**: [`DataStream`](datastreams_core.DataStream)

#### Inherited from

Device.dataStream

#### Defined in

[src/frontend/devices/Device.ts:13](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L13)

___

### datacallbacks

• **datacallbacks**: `Function`[] = `[]`

#### Inherited from

Device.datacallbacks

#### Defined in

[src/frontend/devices/Device.ts:10](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L10)

___

### decoder

• **decoder**: `any`

#### Inherited from

Device.decoder

#### Defined in

[src/frontend/devices/Device.ts:15](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L15)

___

### device

• **device**: `CoreDeviceType`<`T`\>

#### Inherited from

Device.device

#### Defined in

[src/frontend/devices/Device.ts:12](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L12)

___

### encoder

• **encoder**: `any`

#### Inherited from

Device.encoder

#### Defined in

[src/frontend/devices/Device.ts:14](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L14)

___

### id

• **id**: `string`

#### Inherited from

Device.id

#### Defined in

[src/frontend/devices/Device.ts:9](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L9)

___

### socket

• `Optional` **socket**: `Websocket`

#### Defined in

[src/frontend/devices/WebSocket.device.ts:7](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/WebSocket.device.ts#L7)

## Accessors

### ondata

• `get` **ondata**(): (`data`: `any`, `charName?`: `string`) => `void`

#### Returns

`fn`

▸ (`data`, `charName?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `charName?` | `string` |

##### Returns

`void`

#### Inherited from

Device.ondata

#### Defined in

[src/frontend/devices/Device.ts:23](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L23)

• `set` **ondata**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`data`: `any`, `charName?`: `string`) => `void` |

#### Returns

`void`

#### Inherited from

Device.ondata

#### Defined in

[src/frontend/devices/Device.ts:22](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L22)

## Methods

### \_ondata

▸ **_ondata**(`data`, `charName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `charName?` | `string` |

#### Returns

`void`

#### Inherited from

Device.\_ondata

#### Defined in

[src/frontend/devices/Device.ts:73](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L73)

___

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

Device.connect

#### Defined in

[src/frontend/devices/WebSocket.device.ts:14](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/WebSocket.device.ts#L14)

___

### decode

▸ **decode**(`msg`, `_`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `_` | `string` |

#### Returns

`any`

#### Inherited from

Device.decode

#### Defined in

[src/frontend/devices/Device.ts:60](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L60)

___

### disconnect

▸ **disconnect**(): `Promise`<`undefined` \| `void`\>

#### Returns

`Promise`<`undefined` \| `void`\>

#### Overrides

Device.disconnect

#### Defined in

[src/frontend/devices/WebSocket.device.ts:21](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/WebSocket.device.ts#L21)

___

### encode

▸ **encode**(`msg`, `_`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `_` | `string` |

#### Returns

`any`

#### Inherited from

Device.encode

#### Defined in

[src/frontend/devices/Device.ts:59](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L59)

___

### onconnect

▸ **onconnect**(`target?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Device`<`T`\> |

#### Returns

`Promise`<`void`\>

#### Inherited from

Device.onconnect

#### Defined in

[src/frontend/devices/Device.ts:63](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L63)

___

### ondisconnect

▸ **ondisconnect**(`target?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Device`<`T`\> |

#### Returns

`Promise`<`void`\>

#### Inherited from

Device.ondisconnect

#### Defined in

[src/frontend/devices/Device.ts:65](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L65)

___

### onerror

▸ **onerror**(`err`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Device.onerror

#### Defined in

[src/frontend/devices/Device.ts:70](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L70)

___

### onsend

▸ **onsend**(`msg?`, `from?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `any` |
| `from?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Device.onsend

#### Defined in

[src/frontend/devices/Device.ts:69](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/Device.ts#L69)

___

### send

▸ **send**(`msg`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `object` |

#### Returns

`Promise`<`unknown`\>

#### Overrides

Device.send

#### Defined in

[src/frontend/devices/WebSocket.device.ts:23](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/WebSocket.device.ts#L23)
