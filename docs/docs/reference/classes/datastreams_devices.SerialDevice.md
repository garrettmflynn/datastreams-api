---
id: "datastreams_devices.SerialDevice"
title: "Class: SerialDevice<T>"
sidebar_label: "SerialDevice"
custom_edit_url: null
---

[datastreams.devices](../modules/datastreams_devices).SerialDevice

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `Device`<`T`\>

  ↳ **`SerialDevice`**

## Constructors

### constructor

• **new SerialDevice**<`T`\>(`constraints`)

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

[src/frontend/devices/Serial.device.ts:26](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L26)

## Properties

### \_ondata

• **\_ondata**: (`data`: `any`, `name?`: `string`) => `any`[] \| { [x: string | number]: `any`;  }

#### Type declaration

▸ (`data`, `name?`): `any`[] \| { [x: string | number]: `any`;  }

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `name?` | `string` |

##### Returns

`any`[] \| { [x: string | number]: `any`;  }

#### Inherited from

Device.\_ondata

#### Defined in

[src/frontend/devices/Device.ts:10](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L10)

___

### active

• **active**: `boolean` = `false`

#### Inherited from

Device.active

#### Defined in

[src/frontend/devices/Device.ts:16](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L16)

___

### connected

• **connected**: `boolean` = `false`

#### Defined in

[src/frontend/devices/Serial.device.ts:12](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L12)

___

### constraints

• **constraints**: `DeviceConstraintsType`<`T`\>

#### Inherited from

Device.constraints

#### Defined in

[src/frontend/devices/Device.ts:11](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L11)

___

### decoder

• **decoder**: `TextDecoder`

#### Overrides

Device.decoder

#### Defined in

[src/frontend/devices/Serial.device.ts:16](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L16)

___

### device

• **device**: `CoreDeviceType`<`T`\>

#### Inherited from

Device.device

#### Defined in

[src/frontend/devices/Device.ts:12](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L12)

___

### displayPorts

• **displayPorts**: `any`[] = `[]`

#### Defined in

[src/frontend/devices/Serial.device.ts:10](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L10)

___

### encodedBuffer

• **encodedBuffer**: `string` = `""`

#### Defined in

[src/frontend/devices/Serial.device.ts:11](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L11)

___

### encoder

• **encoder**: `any`

#### Inherited from

Device.encoder

#### Defined in

[src/frontend/devices/Device.ts:14](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L14)

___

### id

• **id**: `string`

#### Inherited from

Device.id

#### Defined in

[src/frontend/devices/Device.ts:9](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L9)

___

### monitorData

• **monitorData**: `any`[] = `[]`

#### Defined in

[src/frontend/devices/Serial.device.ts:23](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L23)

___

### monitorIdx

• **monitorIdx**: `number` = `0`

#### Defined in

[src/frontend/devices/Serial.device.ts:24](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L24)

___

### monitorSamples

• **monitorSamples**: `number` = `10000`

#### Defined in

[src/frontend/devices/Serial.device.ts:22](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L22)

___

### monitoring

• **monitoring**: `boolean` = `false`

#### Defined in

[src/frontend/devices/Serial.device.ts:20](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L20)

___

### newSamples

• **newSamples**: `number` = `0`

#### Defined in

[src/frontend/devices/Serial.device.ts:21](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L21)

___

### port

• **port**: `any` = `null`

#### Defined in

[src/frontend/devices/Serial.device.ts:15](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L15)

___

### readable

• **readable**: ``null`` \| `ReadableStream`<`any`\> = `null`

#### Defined in

[src/frontend/devices/Serial.device.ts:18](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L18)

___

### recordData

• **recordData**: `boolean` = `false`

#### Defined in

[src/frontend/devices/Serial.device.ts:13](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L13)

___

### recorded

• **recorded**: `any`[] = `[]`

#### Defined in

[src/frontend/devices/Serial.device.ts:14](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L14)

___

### stream

• `Optional` **stream**: [`DataStream`](datastreams_core.DataStream)

#### Inherited from

Device.stream

#### Defined in

[src/frontend/devices/Device.ts:13](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L13)

___

### subscribed

• **subscribed**: `boolean` = `false`

#### Defined in

[src/frontend/devices/Serial.device.ts:17](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L17)

___

### writer

• **writer**: ``null`` \| `WritableStream`<`any`\> = `null`

#### Defined in

[src/frontend/devices/Serial.device.ts:19](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L19)

## Methods

### closePort

▸ **closePort**(`port?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/devices/Serial.device.ts:176](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L176)

___

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

Device.connect

#### Defined in

[src/frontend/devices/Serial.device.ts:40](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L40)

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

[src/frontend/devices/Device.ts:81](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L81)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

Device.disconnect

#### Defined in

[src/frontend/devices/Device.ts:71](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L71)

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

[src/frontend/devices/Device.ts:80](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L80)

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

[src/frontend/devices/Serial.device.ts:104](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L104)

___

### init

▸ **init**(`constraints?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints?` | `Partial`<`any`\> |

#### Returns

`void`

#### Inherited from

Device.init

#### Defined in

[src/frontend/devices/Device.ts:33](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L33)

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

[src/frontend/devices/Serial.device.ts:137](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L137)

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

[src/frontend/devices/Serial.device.ts:159](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L159)

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

[src/frontend/devices/Device.ts:85](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L85)

___

### ondata

▸ **ondata**(`data`, `charName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `charName?` | `string` |

#### Returns

`void`

#### Inherited from

Device.ondata

#### Defined in

[src/frontend/devices/Device.ts:95](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L95)

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

[src/frontend/devices/Device.ts:87](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L87)

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

[src/frontend/devices/Device.ts:92](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L92)

___

### oninit

▸ **oninit**(`target?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Device`<`T`\> |

#### Returns

`Promise`<`void`\>

#### Inherited from

Device.oninit

#### Defined in

[src/frontend/devices/Device.ts:84](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L84)

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

[src/frontend/devices/Device.ts:91](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Device.ts#L91)

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

Device.send

#### Defined in

[src/frontend/devices/Serial.device.ts:63](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L63)

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

[src/frontend/devices/Serial.device.ts:81](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/devices/Serial.device.ts#L81)
