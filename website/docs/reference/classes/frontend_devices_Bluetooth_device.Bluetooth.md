---
id: "frontend_devices_Bluetooth_device.Bluetooth"
title: "Class: Bluetooth<T>"
sidebar_label: "Bluetooth"
custom_edit_url: null
---

[frontend/devices/Bluetooth.device](../modules/frontend_devices_Bluetooth_device).Bluetooth

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- [`Device`](frontend_devices_Device.Device)<`T`\>

  ↳ **`Bluetooth`**

## Constructors

### constructor

• **new Bluetooth**<`T`\>(`constraints`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `any` |

#### Overrides

[Device](frontend_devices_Device.Device).[constructor](frontend_devices_Device.Device#constructor)

#### Defined in

[src/frontend/devices/Bluetooth.device.ts:28](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Bluetooth.device.ts#L28)

## Properties

### characteristics

• **characteristics**: `Object` = `{}`

#### Index signature

▪ [x: `string`]: `BluetoothRemoteGATTCharacteristic`

#### Defined in

[src/frontend/devices/Bluetooth.device.ts:19](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Bluetooth.device.ts#L19)

___

### constraints

• **constraints**: [`DeviceConstraintsType`](../modules/frontend_types_Devices_types#deviceconstraintstype)<`T`\>

#### Inherited from

[Device](frontend_devices_Device.Device).[constraints](frontend_devices_Device.Device#constraints)

#### Defined in

[src/frontend/devices/Device.ts:11](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L11)

___

### dataStream

• `Optional` **dataStream**: [`DataStream`](frontend_core_DataStream.DataStream)

#### Inherited from

[Device](frontend_devices_Device.Device).[dataStream](frontend_devices_Device.Device#datastream)

#### Defined in

[src/frontend/devices/Device.ts:13](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L13)

___

### datacallbacks

• **datacallbacks**: `Function`[] = `[]`

#### Inherited from

[Device](frontend_devices_Device.Device).[datacallbacks](frontend_devices_Device.Device#datacallbacks)

#### Defined in

[src/frontend/devices/Device.ts:10](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L10)

___

### decoder

• **decoder**: `any`

#### Inherited from

[Device](frontend_devices_Device.Device).[decoder](frontend_devices_Device.Device#decoder)

#### Defined in

[src/frontend/devices/Device.ts:15](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L15)

___

### device

• **device**: [`CoreDeviceType`](../modules/frontend_types_Devices_types#coredevicetype)<`T`\>

#### Inherited from

[Device](frontend_devices_Device.Device).[device](frontend_devices_Device.Device#device)

#### Defined in

[src/frontend/devices/Device.ts:12](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L12)

___

### encoder

• **encoder**: `any`

#### Inherited from

[Device](frontend_devices_Device.Device).[encoder](frontend_devices_Device.Device#encoder)

#### Defined in

[src/frontend/devices/Device.ts:14](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L14)

___

### id

• **id**: `string`

#### Inherited from

[Device](frontend_devices_Device.Device).[id](frontend_devices_Device.Device#id)

#### Defined in

[src/frontend/devices/Device.ts:9](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L9)

___

### server

• `Optional` **server**: `BluetoothRemoteGATTServer`

#### Defined in

[src/frontend/devices/Bluetooth.device.ts:24](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Bluetooth.device.ts#L24)

___

### service

• `Optional` **service**: `BluetoothRemoteGATTService`

#### Defined in

[src/frontend/devices/Bluetooth.device.ts:25](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Bluetooth.device.ts#L25)

___

### source

• `Optional` **source**: `BluetoothDevice`

#### Defined in

[src/frontend/devices/Bluetooth.device.ts:18](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Bluetooth.device.ts#L18)

___

### transmitCharacteristic

• `Optional` **transmitCharacteristic**: `BluetoothRemoteGATTCharacteristic`

#### Defined in

[src/frontend/devices/Bluetooth.device.ts:26](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Bluetooth.device.ts#L26)

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

[src/frontend/devices/Device.ts:23](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L23)

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

#### Inherited from

[Device](frontend_devices_Device.Device).[_ondata](frontend_devices_Device.Device#_ondata)

#### Defined in

[src/frontend/devices/Device.ts:73](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L73)

___

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[Device](frontend_devices_Device.Device).[connect](frontend_devices_Device.Device#connect)

#### Defined in

[src/frontend/devices/Bluetooth.device.ts:34](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Bluetooth.device.ts#L34)

___

### connectCharacteristic

▸ **connectCharacteristic**(`name`, `value`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/frontend/devices/Bluetooth.device.ts:87](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Bluetooth.device.ts#L87)

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

#### Inherited from

[Device](frontend_devices_Device.Device).[decode](frontend_devices_Device.Device#decode)

#### Defined in

[src/frontend/devices/Device.ts:60](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L60)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[Device](frontend_devices_Device.Device).[disconnect](frontend_devices_Device.Device#disconnect)

#### Defined in

[src/frontend/devices/Bluetooth.device.ts:69](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Bluetooth.device.ts#L69)

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

#### Inherited from

[Device](frontend_devices_Device.Device).[encode](frontend_devices_Device.Device#encode)

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

#### Inherited from

[Device](frontend_devices_Device.Device).[onconnect](frontend_devices_Device.Device#onconnect)

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

#### Inherited from

[Device](frontend_devices_Device.Device).[ondisconnect](frontend_devices_Device.Device#ondisconnect)

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

#### Inherited from

[Device](frontend_devices_Device.Device).[onerror](frontend_devices_Device.Device#onerror)

#### Defined in

[src/frontend/devices/Device.ts:70](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L70)

___

### onnotification

▸ **onnotification**(`e`, `charName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |
| `charName` | `string` |

#### Returns

`void`

#### Defined in

[src/frontend/devices/Bluetooth.device.ts:80](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Bluetooth.device.ts#L80)

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

[Device](frontend_devices_Device.Device).[onsend](frontend_devices_Device.Device#onsend)

#### Defined in

[src/frontend/devices/Device.ts:69](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L69)

___

### send

▸ **send**(`msg`, `charName`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `charName` | `any` |

#### Returns

`Promise`<`void`\>

#### Overrides

[Device](frontend_devices_Device.Device).[send](frontend_devices_Device.Device#send)

#### Defined in

[src/frontend/devices/Bluetooth.device.ts:74](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Bluetooth.device.ts#L74)
