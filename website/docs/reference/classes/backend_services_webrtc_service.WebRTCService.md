---
id: "backend_services_webrtc_service.WebRTCService"
title: "Class: WebRTCService"
sidebar_label: "WebRTCService"
custom_edit_url: null
---

[backend/services/webrtc.service](../modules/backend_services_webrtc_service).WebRTCService

## Constructors

### constructor

• **new WebRTCService**()

#### Defined in

[src/backend/services/webrtc.service.ts:12](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L12)

## Properties

### rooms

• **rooms**: `Map`<`number`, `any`\>

#### Defined in

[src/backend/services/webrtc.service.ts:9](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L9)

___

### users

• **users**: `Map`<`number`, [`UserType`](../interfaces/backend_types_User_types.UserType)\>

#### Defined in

[src/backend/services/webrtc.service.ts:8](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L8)

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

[src/backend/services/webrtc.service.ts:16](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L16)

___

### connect

▸ **connect**(`o`, `origin`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`DataType`](../interfaces/backend_types_Data_types.DataType) |
| `origin` | `number` |

#### Returns

`any`

#### Defined in

[src/backend/services/webrtc.service.ts:64](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L64)

___

### createRoom

▸ **createRoom**(`settings?`, `origin?`): `Promise`<{ `initiator`: `number` ; `name`: `string` ; `peers`: `any`[] ; `restrictions`: `any` ; `uuid`: `number`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `settings` | `Object` | `{}` |
| `origin` | `number` | `0` |

#### Returns

`Promise`<{ `initiator`: `number` ; `name`: `string` ; `peers`: `any`[] ; `restrictions`: `any` ; `uuid`: `number`  }\>

#### Defined in

[src/backend/services/webrtc.service.ts:82](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L82)

___

### disconnect

▸ **disconnect**(`o`, `origin`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`DataType`](../interfaces/backend_types_Data_types.DataType) |
| `origin` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |

#### Defined in

[src/backend/services/webrtc.service.ts:112](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L112)

___

### getRooms

▸ **getRooms**(`filter`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`arg`: [`Room`](backend_classes_Room.Room)) => `boolean` |

#### Returns

`any`[]

#### Defined in

[src/backend/services/webrtc.service.ts:26](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L26)

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

[src/backend/services/webrtc.service.ts:24](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L24)

___

### onmessage

▸ **onmessage**(`o`, `ws`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`DataType`](../interfaces/backend_types_Data_types.DataType) |
| `ws` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/backend/services/webrtc.service.ts:35](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L35)

___

### pass

▸ **pass**(`cmd`, `origin`, `destination`, `msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |
| `origin` | `number` |
| `destination` | `number` |
| `msg` | `any` |

#### Returns

`void`

#### Defined in

[src/backend/services/webrtc.service.ts:134](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L134)

___

### removePeerFromRoom

▸ **removePeerFromRoom**(`room`, `origin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `room` | [`Room`](backend_classes_Room.Room) |
| `origin` | `number` |

#### Returns

`void`

#### Defined in

[src/backend/services/webrtc.service.ts:120](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L120)

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

[src/backend/services/webrtc.service.ts:30](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/services/webrtc.service.ts#L30)
