---
id: "frontend_devices_Serial_device.Serial"
title: "Class: Serial<T>"
sidebar_label: "Serial"
custom_edit_url: null
---

[frontend/devices/Serial.device](../modules/frontend_devices_Serial_device).Serial

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- [`Device`](frontend_devices_Device.Device)<`T`\>

  ↳ **`Serial`**

## Constructors

### constructor

• **new Serial**<`T`\>(`constraints`)

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

[src/frontend/devices/Serial.device.ts:26](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L26)

## Properties

### connected

• **connected**: `boolean` = `false`

#### Defined in

[src/frontend/devices/Serial.device.ts:12](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L12)

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

• **decoder**: `TextDecoder`

#### Overrides

[Device](frontend_devices_Device.Device).[decoder](frontend_devices_Device.Device#decoder)

#### Defined in

[src/frontend/devices/Serial.device.ts:16](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L16)

___

### device

• **device**: [`CoreDeviceType`](../modules/frontend_types_Devices_types#coredevicetype)<`T`\>

#### Inherited from

[Device](frontend_devices_Device.Device).[device](frontend_devices_Device.Device#device)

#### Defined in

[src/frontend/devices/Device.ts:12](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L12)

___

### displayPorts

• **displayPorts**: `any`[] = `[]`

#### Defined in

[src/frontend/devices/Serial.device.ts:10](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L10)

___

### encodedBuffer

• **encodedBuffer**: `string` = `""`

#### Defined in

[src/frontend/devices/Serial.device.ts:11](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L11)

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

### monitorData

• **monitorData**: `any`[] = `[]`

#### Defined in

[src/frontend/devices/Serial.device.ts:23](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L23)

___

### monitorIdx

• **monitorIdx**: `number` = `0`

#### Defined in

[src/frontend/devices/Serial.device.ts:24](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L24)

___

### monitorSamples

• **monitorSamples**: `number` = `10000`

#### Defined in

[src/frontend/devices/Serial.device.ts:22](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L22)

___

### monitoring

• **monitoring**: `boolean` = `false`

#### Defined in

[src/frontend/devices/Serial.device.ts:20](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L20)

___

### newSamples

• **newSamples**: `number` = `0`

#### Defined in

[src/frontend/devices/Serial.device.ts:21](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L21)

___

### port

• **port**: `any` = `null`

#### Defined in

[src/frontend/devices/Serial.device.ts:15](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L15)

___

### readable

• **readable**: ``null`` \| `ReadableStream`<`any`\> = `null`

#### Defined in

[src/frontend/devices/Serial.device.ts:18](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L18)

___

### recordData

• **recordData**: `boolean` = `false`

#### Defined in

[src/frontend/devices/Serial.device.ts:13](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L13)

___

### recorded

• **recorded**: `any`[] = `[]`

#### Defined in

[src/frontend/devices/Serial.device.ts:14](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L14)

___

### subscribed

• **subscribed**: `boolean` = `false`

#### Defined in

[src/frontend/devices/Serial.device.ts:17](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L17)

___

### writer

• **writer**: ``null`` \| `WritableStream`<`any`\> = `null`

#### Defined in

[src/frontend/devices/Serial.device.ts:19](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L19)

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

### closePort

▸ **closePort**(`port?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/devices/Serial.device.ts:173](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L173)

___

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[Device](frontend_devices_Device.Device).[connect](frontend_devices_Device.Device#connect)

#### Defined in

[src/frontend/devices/Serial.device.ts:40](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L40)

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

#### Inherited from

[Device](frontend_devices_Device.Device).[disconnect](frontend_devices_Device.Device#disconnect)

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

#### Inherited from

[Device](frontend_devices_Device.Device).[encode](frontend_devices_Device.Device#encode)

#### Defined in

[src/frontend/devices/Device.ts:59](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L59)

___

### handleError

▸ **handleError**(`error`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/devices/Serial.device.ts:104](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L104)

___

### onPortSelected

▸ **onPortSelected**(`port`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `SerialPort` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/devices/Serial.device.ts:137](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L137)

___

### onReceive

▸ **onReceive**(`input`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `undefined` \| `ArrayBufferView` \| `ArrayBuffer` |

#### Returns

`void`

#### Defined in

[src/frontend/devices/Serial.device.ts:156](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L156)

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

▸ **send**(`msg`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

[Device](frontend_devices_Device.Device).[send](frontend_devices_Device.Device#send)

#### Defined in

[src/frontend/devices/Serial.device.ts:63](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L63)

___

### subscribe

▸ **subscribe**(`port?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `SerialPort` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/frontend/devices/Serial.device.ts:81](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Serial.device.ts#L81)
