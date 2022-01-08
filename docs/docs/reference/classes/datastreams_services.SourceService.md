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

[src/backend/services/source.service.ts:10](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/source.service.ts#L10)

## Properties

### device

• `Optional` **device**: `Device`<`any`\>

#### Defined in

[src/backend/services/source.service.ts:8](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/source.service.ts#L8)

___

### users

• **users**: `Map`<`string`, `any`\>

#### Defined in

[src/backend/services/source.service.ts:7](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/source.service.ts#L7)

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

[src/backend/services/source.service.ts:12](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/source.service.ts#L12)

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

[src/backend/services/source.service.ts:26](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/source.service.ts#L26)

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

[src/backend/services/source.service.ts:21](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/source.service.ts#L21)
