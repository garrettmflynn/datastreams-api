---
id: "datastreams_services.OffloadService"
title: "Class: OffloadService"
sidebar_label: "OffloadService"
custom_edit_url: null
---

[datastreams.services](../modules/datastreams_services).OffloadService

## Constructors

### constructor

• **new OffloadService**()

#### Defined in

[src/backend/services/offload.service.ts:10](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/offload.service.ts#L10)

## Properties

### users

• **users**: `Map`<`string`, `any`\>

#### Defined in

[src/backend/services/offload.service.ts:7](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/offload.service.ts#L7)

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

[src/backend/services/offload.service.ts:14](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/offload.service.ts#L14)

___

### initialize

▸ **initialize**(`o`, `id`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `DataType` |
| `id` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |

#### Defined in

[src/backend/services/offload.service.ts:39](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/offload.service.ts#L39)

___

### ondata

▸ **ondata**(`o`, `id`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `DataType` |
| `id` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |
| `data` | `any` |

#### Defined in

[src/backend/services/offload.service.ts:49](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/offload.service.ts#L49)

___

### onmessage

▸ **onmessage**(`str`, `ws`): `undefined` \| { `cmd`: `string` = 'ready' }

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `ws` | `any` |

#### Returns

`undefined` \| { `cmd`: `string` = 'ready' }

#### Defined in

[src/backend/services/offload.service.ts:23](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/offload.service.ts#L23)

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

[src/backend/services/offload.service.ts:19](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/offload.service.ts#L19)
