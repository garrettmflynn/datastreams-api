---
id: "frontend_pipes_WebSocket.Websocket"
title: "Class: Websocket"
sidebar_label: "Websocket"
custom_edit_url: null
---

[frontend/pipes/WebSocket](../modules/frontend_pipes_WebSocket).Websocket

## Constructors

### constructor

• **new Websocket**(`url?`, `auth?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `'http://localhost'` |
| `auth` | `string` | `''` |

#### Defined in

[src/frontend/pipes/WebSocket.ts:13](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L13)

## Properties

### callbacks

• **callbacks**: `Map`<`string`, (`data`: `object`) => `any`\>

#### Defined in

[src/frontend/pipes/WebSocket.ts:9](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L9)

___

### onclose

• **onclose**: (`arg?`: `any`) => `any`

#### Type declaration

▸ (`arg?`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | `any` |

##### Returns

`any`

#### Defined in

[src/frontend/pipes/WebSocket.ts:84](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L84)

___

### onerror

• **onerror**: (`arg?`: `any`) => `any`

#### Type declaration

▸ (`arg?`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | `any` |

##### Returns

`any`

#### Defined in

[src/frontend/pipes/WebSocket.ts:85](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L85)

___

### onmessage

• **onmessage**: (`arg?`: `any`) => `any`

#### Type declaration

▸ (`arg?`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | `any` |

##### Returns

`any`

#### Defined in

[src/frontend/pipes/WebSocket.ts:86](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L86)

___

### onopen

• **onopen**: (`arg?`: `any`) => `any`

#### Type declaration

▸ (`arg?`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | `any` |

##### Returns

`any`

#### Defined in

[src/frontend/pipes/WebSocket.ts:83](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L83)

___

### ready

• **ready**: `boolean` = `false`

#### Defined in

[src/frontend/pipes/WebSocket.ts:10](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L10)

___

### sendBuffer

• **sendBuffer**: `any`[] = `[]`

#### Defined in

[src/frontend/pipes/WebSocket.ts:8](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L8)

___

### url

• **url**: `string`

#### Defined in

[src/frontend/pipes/WebSocket.ts:7](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L7)

___

### ws

• `Optional` **ws**: `WebSocket`

#### Defined in

[src/frontend/pipes/WebSocket.ts:11](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L11)

## Methods

### \_onclose

▸ **_onclose**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/pipes/WebSocket.ts:45](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L45)

___

### \_onerror

▸ **_onerror**(`e`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Event` |

#### Returns

`Event`

#### Defined in

[src/frontend/pipes/WebSocket.ts:50](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L50)

___

### \_onmessage

▸ **_onmessage**(`res`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | [`MessageType`](../modules/frontend_types_Core_types#messagetype) |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/WebSocket.ts:56](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L56)

___

### \_onopen

▸ **_onopen**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/pipes/WebSocket.ts:36](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L36)

___

### addEventListener

▸ **addEventListener**(`name`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | (`val`: `object`) => `any` |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/WebSocket.ts:88](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L88)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/pipes/WebSocket.ts:95](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L95)

___

### send

▸ **send**(`data`, `service?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `object` | `undefined` |
| `service` | `string` | `'websocket'` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/frontend/pipes/WebSocket.ts:99](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/pipes/WebSocket.ts#L99)
