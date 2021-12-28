---
id: "backend_classes_Room.Room"
title: "Class: Room"
sidebar_label: "Room"
custom_edit_url: null
---

[backend/classes/Room](../modules/backend_classes_Room).Room

## Constructors

### constructor

• **new Room**(`initiator`, `settings?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initiator` | [`UserType`](../interfaces/backend_types_User_types.UserType) |
| `settings` | `any` |

#### Defined in

[src/backend/classes/Room.ts:14](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/classes/Room.ts#L14)

## Properties

### empty

• **empty**: `boolean` = `false`

#### Defined in

[src/backend/classes/Room.ts:12](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/classes/Room.ts#L12)

___

### initiator

• **initiator**: [`UserType`](../interfaces/backend_types_User_types.UserType)

#### Defined in

[src/backend/classes/Room.ts:9](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/classes/Room.ts#L9)

___

### name

• **name**: `string` = `''`

#### Defined in

[src/backend/classes/Room.ts:8](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/classes/Room.ts#L8)

___

### peers

• **peers**: `Map`<`number`, `any`\>

#### Defined in

[src/backend/classes/Room.ts:11](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/classes/Room.ts#L11)

___

### restrictions

• **restrictions**: `any` = `{}`

#### Defined in

[src/backend/classes/Room.ts:10](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/classes/Room.ts#L10)

___

### uuid

• **uuid**: `number`

#### Defined in

[src/backend/classes/Room.ts:7](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/classes/Room.ts#L7)

## Methods

### addPeer

▸ **addPeer**(`o`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`UserType`](../interfaces/backend_types_User_types.UserType) |

#### Returns

`void`

#### Defined in

[src/backend/classes/Room.ts:34](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/classes/Room.ts#L34)

___

### export

▸ **export**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `initiator` | `number` |
| `name` | `string` |
| `peers` | `any`[] |
| `restrictions` | `any` |
| `uuid` | `number` |

#### Defined in

[src/backend/classes/Room.ts:24](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/classes/Room.ts#L24)

___

### removePeer

▸ **removePeer**(`origin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | `number` |

#### Returns

`void`

#### Defined in

[src/backend/classes/Room.ts:61](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/backend/classes/Room.ts#L61)
