---
id: "backend_services_source_service.SourceService"
title: "Class: SourceService"
sidebar_label: "SourceService"
custom_edit_url: null
---

[backend/services/source.service](../modules/backend_services_source_service).SourceService

## Constructors

### constructor

• **new SourceService**()

#### Defined in

[src/backend/services/source.service.ts:9](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/source.service.ts#L9)

## Properties

### device

• `Optional` **device**: [`Device`](frontend_devices_Device.Device)<`any`\>

#### Defined in

[src/backend/services/source.service.ts:7](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/source.service.ts#L7)

___

### users

• **users**: `Map`<`string`, `any`\>

#### Defined in

[src/backend/services/source.service.ts:6](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/source.service.ts#L6)

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

[src/backend/services/source.service.ts:11](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/source.service.ts#L11)

___

### onmessage

▸ **onmessage**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[src/backend/services/source.service.ts:24](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/source.service.ts#L24)

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

[src/backend/services/source.service.ts:19](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/source.service.ts#L19)
