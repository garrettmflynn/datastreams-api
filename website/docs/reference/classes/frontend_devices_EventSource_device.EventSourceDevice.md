---
id: "frontend_devices_EventSource_device.EventSourceDevice"
title: "Class: EventSourceDevice<T>"
sidebar_label: "EventSourceDevice"
custom_edit_url: null
---

[frontend/devices/EventSource.device](../modules/frontend_devices_EventSource_device).EventSourceDevice

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- [`Device`](frontend_devices_Device.Device)<`T`\>

  ↳ **`EventSourceDevice`**

## Constructors

### constructor

• **new EventSourceDevice**<`T`\>(`constraints`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | [`DeviceConstraintsType`](../modules/frontend_types_Devices_types#deviceconstraintstype)<`T`\> |

#### Overrides

[Device](frontend_devices_Device.Device).[constructor](frontend_devices_Device.Device#constructor)

#### Defined in

[src/frontend/devices/EventSource.device.ts:21](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L21)

## Properties

### api

• **api**: `Object` = `{}`

#### Index signature

▪ [x: `string`]: `Function`

#### Defined in

[src/frontend/devices/EventSource.device.ts:17](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L17)

___

### constraints

• **constraints**: [`DeviceConstraintsType`](../modules/frontend_types_Devices_types#deviceconstraintstype)<`T`\>

#### Inherited from

[Device](frontend_devices_Device.Device).[constraints](frontend_devices_Device.Device#constraints)

#### Defined in

[src/frontend/devices/Device.ts:11](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/Device.ts#L11)

___

### customCallbacks

• **customCallbacks**: [`customCallback`](../modules/frontend_devices_EventSource_device#customcallback)[] = `[]`

#### Defined in

[src/frontend/devices/EventSource.device.ts:16](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L16)

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

### source

• `Optional` **source**: `EventSource`

#### Defined in

[src/frontend/devices/EventSource.device.ts:15](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L15)

___

### url

• **url**: `string` = `''`

#### Defined in

[src/frontend/devices/EventSource.device.ts:14](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L14)

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

[src/frontend/devices/EventSource.device.ts:44](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L44)

___

### createEventListeners

▸ **createEventListeners**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/devices/EventSource.device.ts:61](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L61)

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

[src/frontend/devices/EventSource.device.ts:46](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L46)

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

### newPostCommand

▸ **newPostCommand**(`name?`, `url?`, `data?`, `user?`, `pass?`): () => `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `"post"` |
| `url` | `undefined` \| `string` | `undefined` |
| `data` | `undefined` | `undefined` |
| `user` | `undefined` | `undefined` |
| `pass` | `undefined` | `undefined` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/frontend/devices/EventSource.device.ts:28](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L28)

___

### onconnect

▸ **onconnect**(`e`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`Promise`<`void`\>

#### Overrides

[Device](frontend_devices_Device.Device).[onconnect](frontend_devices_Device.Device#onconnect)

#### Defined in

[src/frontend/devices/EventSource.device.ts:50](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L50)

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

▸ **onerror**(`e`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`Promise`<`void`\>

#### Overrides

[Device](frontend_devices_Device.Device).[onerror](frontend_devices_Device.Device#onerror)

#### Defined in

[src/frontend/devices/EventSource.device.ts:52](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L52)

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

### removeEventListeners

▸ **removeEventListeners**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/devices/EventSource.device.ts:77](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L77)

___

### send

▸ **send**(`body`, `url?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `any` |
| `url` | `string` |

#### Returns

`Promise`<`Response`\>

#### Overrides

[Device](frontend_devices_Device.Device).[send](frontend_devices_Device.Device#send)

#### Defined in

[src/frontend/devices/EventSource.device.ts:42](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/EventSource.device.ts#L42)
