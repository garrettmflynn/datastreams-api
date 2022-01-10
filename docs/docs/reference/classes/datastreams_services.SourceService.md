---
id: "datastreams_services.SourceService"
title: "Class: SourceService"
sidebar_label: "SourceService"
custom_edit_url: null
---

[datastreams.services](../modules/datastreams_services).SourceService

## Constructors

### constructor

• **new SourceService**()

#### Defined in

[src/backend/services/source.service.ts:10](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/backend/services/source.service.ts#L10)

## Properties

### device

• `Optional` **device**: `Device`<`any`\>

#### Defined in

[src/backend/services/source.service.ts:8](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/backend/services/source.service.ts#L8)

___

### users

• **users**: `Map`<`string`, `any`\>

#### Defined in

[src/backend/services/source.service.ts:7](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/backend/services/source.service.ts#L7)

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

[src/backend/services/source.service.ts:12](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/backend/services/source.service.ts#L12)

___

### ondata

▸ **ondata**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[src/backend/services/source.service.ts:33](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/backend/services/source.service.ts#L33)

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

[src/backend/services/source.service.ts:28](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/backend/services/source.service.ts#L28)
