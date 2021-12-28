---
id: "backend_services_offload_service.OffloadService"
title: "Class: OffloadService"
sidebar_label: "OffloadService"
custom_edit_url: null
---

[backend/services/offload.service](../modules/backend_services_offload_service).OffloadService

## Constructors

### constructor

• **new OffloadService**()

#### Defined in

[src/backend/services/offload.service.ts:9](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/offload.service.ts#L9)

## Properties

### users

• **users**: `Map`<`string`, `any`\>

#### Defined in

[src/backend/services/offload.service.ts:6](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/offload.service.ts#L6)

## Methods

### addUser

▸ **addUser**(`ws`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | `any` |

#### Returns

`void`

#### Defined in

[src/backend/services/offload.service.ts:13](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/offload.service.ts#L13)

___

### initialize

▸ **initialize**(`o`, `id`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`DataType`](../interfaces/backend_types_Data_types.DataType) |
| `id` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |

#### Defined in

[src/backend/services/offload.service.ts:38](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/offload.service.ts#L38)

___

### ondata

▸ **ondata**(`o`, `id`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`DataType`](../interfaces/backend_types_Data_types.DataType) |
| `id` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |
| `data` | `any` |

#### Defined in

[src/backend/services/offload.service.ts:48](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/offload.service.ts#L48)

___

### onmessage

▸ **onmessage**(`o`, `ws`): `undefined` \| { `cmd`: `string` = 'ready' }

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`DataType`](../interfaces/backend_types_Data_types.DataType) |
| `ws` | `any` |

#### Returns

`undefined` \| { `cmd`: `string` = 'ready' }

#### Defined in

[src/backend/services/offload.service.ts:22](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/offload.service.ts#L22)

___

### removeUser

▸ **removeUser**(`ws`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | `any` |

#### Returns

`void`

#### Defined in

[src/backend/services/offload.service.ts:18](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/offload.service.ts#L18)
