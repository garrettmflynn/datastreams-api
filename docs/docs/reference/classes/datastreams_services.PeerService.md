---
id: "datastreams_services.PeerService"
title: "Class: PeerService"
sidebar_label: "PeerService"
custom_edit_url: null
---

[datastreams.services](../modules/datastreams_services).PeerService

## Constructors

### constructor

• **new PeerService**()

#### Defined in

[src/backend/services/peer.service.ts:13](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L13)

## Properties

### rooms

• **rooms**: `Map`<`string`, `any`\>

#### Defined in

[src/backend/services/peer.service.ts:11](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L11)

___

### users

• **users**: `Map`<`string`, `UserType`\>

#### Defined in

[src/backend/services/peer.service.ts:10](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L10)

## Methods

### addUser

▸ **addUser**(`ws`, `auth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | `any` |
| `auth` | `string` |

#### Returns

`void`

#### Defined in

[src/backend/services/peer.service.ts:17](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L17)

___

### connect

▸ **connect**(`o`, `origin`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `DataType` |
| `origin` | `string` |

#### Returns

`any`

#### Defined in

[src/backend/services/peer.service.ts:65](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L65)

___

### createRoom

▸ **createRoom**(`settings`, `origin?`): `Promise`<`RoomInterface`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `settings` | `RoomInterface` | `undefined` |
| `origin` | `string` | `'server'` |

#### Returns

`Promise`<`RoomInterface`\>

#### Defined in

[src/backend/services/peer.service.ts:83](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L83)

___

### disconnect

▸ **disconnect**(`o`, `origin`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `DataType` |
| `origin` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |

#### Defined in

[src/backend/services/peer.service.ts:113](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L113)

___

### getRooms

▸ **getRooms**(`filter`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`arg`: `Room`) => `boolean` |

#### Returns

`any`[]

#### Defined in

[src/backend/services/peer.service.ts:27](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L27)

___

### getRoomsByAuth

▸ **getRoomsByAuth**(`auth`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `auth` | `string` |

#### Returns

`any`[]

#### Defined in

[src/backend/services/peer.service.ts:25](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L25)

___

### onmessage

▸ **onmessage**(`str`, `ws`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `ws` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/backend/services/peer.service.ts:36](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L36)

___

### pass

▸ **pass**(`cmd`, `origin`, `destination`, `msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |
| `origin` | `string` |
| `destination` | `string` |
| `msg` | `any` |

#### Returns

`void`

#### Defined in

[src/backend/services/peer.service.ts:135](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L135)

___

### removePeerFromRoom

▸ **removePeerFromRoom**(`room`, `origin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `room` | `Room` |
| `origin` | `string` |

#### Returns

`void`

#### Defined in

[src/backend/services/peer.service.ts:121](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L121)

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

[src/backend/services/peer.service.ts:31](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/backend/services/peer.service.ts#L31)
