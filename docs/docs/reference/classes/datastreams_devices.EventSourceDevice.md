---
id: "datastreams_devices.EventSourceDevice"
title: "Class: EventSourceDevice<T>"
sidebar_label: "EventSourceDevice"
custom_edit_url: null
---

[datastreams.devices](../modules/datastreams_devices).EventSourceDevice

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `Device`<`T`\>

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
| `constraints` | `DeviceConstraintsType`<`T`\> |

#### Overrides

Device&lt;T\&gt;.constructor

#### Defined in

[src/frontend/devices/EventSource.device.ts:21](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L21)

## Properties

### api

• **api**: `Object` = `{}`

#### Index signature

▪ [x: `string`]: `Function`

#### Defined in

[src/frontend/devices/EventSource.device.ts:17](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L17)

___

### constraints

• **constraints**: `DeviceConstraintsType`<`T`\>

#### Inherited from

Device.constraints

#### Defined in

[src/frontend/devices/Device.ts:11](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L11)

___

### customCallbacks

• **customCallbacks**: [`customCallback`](../modules/datastreams_devices#customcallback)[] = `[]`

#### Defined in

[src/frontend/devices/EventSource.device.ts:16](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L16)

___

### dataStream

• `Optional` **dataStream**: [`DataStream`](datastreams_core.DataStream)

#### Inherited from

Device.dataStream

#### Defined in

[src/frontend/devices/Device.ts:13](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L13)

___

### datacallbacks

• **datacallbacks**: `Function`[] = `[]`

#### Inherited from

Device.datacallbacks

#### Defined in

[src/frontend/devices/Device.ts:10](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L10)

___

### decoder

• **decoder**: `any`

#### Inherited from

Device.decoder

#### Defined in

[src/frontend/devices/Device.ts:15](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L15)

___

### device

• **device**: `CoreDeviceType`<`T`\>

#### Inherited from

Device.device

#### Defined in

[src/frontend/devices/Device.ts:12](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L12)

___

### encoder

• **encoder**: `any`

#### Inherited from

Device.encoder

#### Defined in

[src/frontend/devices/Device.ts:14](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L14)

___

### id

• **id**: `string`

#### Inherited from

Device.id

#### Defined in

[src/frontend/devices/Device.ts:9](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L9)

___

### source

• `Optional` **source**: `EventSource`

#### Defined in

[src/frontend/devices/EventSource.device.ts:15](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L15)

___

### url

• **url**: `string` = `''`

#### Defined in

[src/frontend/devices/EventSource.device.ts:14](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L14)

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

[src/frontend/devices/Device.ts:23](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L23)

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

[src/frontend/devices/Device.ts:22](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L22)

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

[src/frontend/devices/Device.ts:73](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L73)

___

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

Device.connect

#### Defined in

[src/frontend/devices/EventSource.device.ts:44](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L44)

___

### createEventListeners

▸ **createEventListeners**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/devices/EventSource.device.ts:61](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L61)

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

[src/frontend/devices/Device.ts:60](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L60)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

Device.disconnect

#### Defined in

[src/frontend/devices/EventSource.device.ts:46](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L46)

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

[src/frontend/devices/Device.ts:59](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L59)

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

[src/frontend/devices/EventSource.device.ts:28](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L28)

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

Device.onconnect

#### Defined in

[src/frontend/devices/EventSource.device.ts:50](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L50)

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

[src/frontend/devices/Device.ts:65](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L65)

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

Device.onerror

#### Defined in

[src/frontend/devices/EventSource.device.ts:52](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L52)

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

[src/frontend/devices/Device.ts:69](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/Device.ts#L69)

___

### removeEventListeners

▸ **removeEventListeners**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/devices/EventSource.device.ts:77](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L77)

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

Device.send

#### Defined in

[src/frontend/devices/EventSource.device.ts:42](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/devices/EventSource.device.ts#L42)
