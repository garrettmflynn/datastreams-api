---
id: "frontend_devices_Device.Device"
title: "Class: Device<T>"
sidebar_label: "Device"
custom_edit_url: null
---

[frontend/devices/Device](../modules/frontend_devices_Device).Device

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Device`**

  ↳ [`Bluetooth`](frontend_devices_Bluetooth_device.Bluetooth)

  ↳ [`EventSourceDevice`](frontend_devices_EventSource_device.EventSourceDevice)

  ↳ [`Serial`](frontend_devices_Serial_device.Serial)

  ↳ [`WebsocketDevice`](frontend_devices_Websocket_device.WebsocketDevice)

## Constructors

### constructor

• **new Device**<`T`\>(`constraints`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | [`DeviceConstraintsType`](../modules/frontend_types_Devices_types#deviceconstraintstype)<`T`\> |

#### Defined in

[src/frontend/devices/Device.ts:25](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L25)

## Properties

### constraints

• **constraints**: [`DeviceConstraintsType`](../modules/frontend_types_Devices_types#deviceconstraintstype)<`T`\>

#### Defined in

[src/frontend/devices/Device.ts:11](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L11)

___

### dataStream

• `Optional` **dataStream**: [`DataStream`](frontend_core_DataStream.DataStream)

#### Defined in

[src/frontend/devices/Device.ts:13](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L13)

___

### datacallbacks

• **datacallbacks**: `Function`[] = `[]`

#### Defined in

[src/frontend/devices/Device.ts:10](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L10)

___

### decoder

• **decoder**: `any`

#### Defined in

[src/frontend/devices/Device.ts:15](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L15)

___

### device

• **device**: [`CoreDeviceType`](../modules/frontend_types_Devices_types#coredevicetype)<`T`\>

#### Defined in

[src/frontend/devices/Device.ts:12](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L12)

___

### encoder

• **encoder**: `any`

#### Defined in

[src/frontend/devices/Device.ts:14](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L14)

___

### id

• **id**: `string`

#### Defined in

[src/frontend/devices/Device.ts:9](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L9)

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

#### Defined in

[src/frontend/devices/Device.ts:23](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L23)

• `set` **ondata**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`data`: `any`, `charName?`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/frontend/devices/Device.ts:22](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L22)

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

#### Defined in

[src/frontend/devices/Device.ts:73](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L73)

___

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/devices/Device.ts:47](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L47)

___

### decode

▸ **decode**(`msg`, `from`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `from` | `string` |

#### Returns

`any`

#### Defined in

[src/frontend/devices/Device.ts:60](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L60)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/devices/Device.ts:51](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L51)

___

### encode

▸ **encode**(`msg`, `from`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `from` | `string` |

#### Returns

`any`

#### Defined in

[src/frontend/devices/Device.ts:59](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L59)

___

### onconnect

▸ **onconnect**(`target?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Device`](frontend_devices_Device.Device)<`T`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/devices/Device.ts:63](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L63)

___

### ondisconnect

▸ **ondisconnect**(`target?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Device`](frontend_devices_Device.Device)<`T`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/devices/Device.ts:65](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L65)

___

### onerror

▸ **onerror**(`err`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/devices/Device.ts:70](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L70)

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

#### Defined in

[src/frontend/devices/Device.ts:69](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L69)

___

### send

▸ **send**(`msg`, `from`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `from` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/frontend/devices/Device.ts:56](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L56)
