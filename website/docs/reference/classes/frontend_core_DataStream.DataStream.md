---
id: "frontend_core_DataStream.DataStream"
title: "Class: DataStream"
sidebar_label: "DataStream"
custom_edit_url: null
---

[frontend/core/DataStream](../modules/frontend_core_DataStream).DataStream

## Hierarchy

- `MediaStream`

  ↳ **`DataStream`**

## Constructors

### constructor

• **new DataStream**(`arg?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arg` | [`DataStream`](frontend_core_DataStream.DataStream) \| `MediaStream` \| [`DataStreamTrack`](frontend_core_DataStreamTrack.DataStreamTrack)[] \| `MediaStreamTrack`[] | `[]` |

#### Overrides

MediaStream.constructor

#### Defined in

[src/frontend/core/DataStream.ts:23](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataStream.ts#L23)

## Properties

### \_addTrack

• **\_addTrack**: `Function`

#### Defined in

[src/frontend/core/DataStream.ts:17](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataStream.ts#L17)

___

### \_getTracks

• **\_getTracks**: `Function`

#### Defined in

[src/frontend/core/DataStream.ts:18](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataStream.ts#L18)

___

### active

• `Readonly` **active**: `boolean`

#### Inherited from

MediaStream.active

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9210

___

### addTrack

• **addTrack**: (`track`: [`DataStreamTrack`](frontend_core_DataStreamTrack.DataStreamTrack) \| `MediaStreamTrack`) => [`DataStreamTrack`](frontend_core_DataStreamTrack.DataStreamTrack) \| `MediaStreamTrack`

#### Type declaration

▸ (`track`): [`DataStreamTrack`](frontend_core_DataStreamTrack.DataStreamTrack) \| `MediaStreamTrack`

##### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`DataStreamTrack`](frontend_core_DataStreamTrack.DataStreamTrack) \| `MediaStreamTrack` |

##### Returns

[`DataStreamTrack`](frontend_core_DataStreamTrack.DataStreamTrack) \| `MediaStreamTrack`

#### Overrides

MediaStream.addTrack

#### Defined in

[src/frontend/core/DataStream.ts:16](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataStream.ts#L16)

___

### id

• `Readonly` **id**: `string`

#### Inherited from

MediaStream.id

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9211

___

### onaddtrack

• **onaddtrack**: ``null`` \| (`ev`: `MediaStreamTrackEvent`) => `any`

#### Inherited from

MediaStream.onaddtrack

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9212

___

### onremovetrack

• **onremovetrack**: ``null`` \| (`ev`: `MediaStreamTrackEvent`) => `any`

#### Inherited from

MediaStream.onremovetrack

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9213

___

### tracks

• **tracks**: ([`DataStreamTrack`](frontend_core_DataStreamTrack.DataStreamTrack) \| `MediaStreamTrack`)[] = `[]`

#### Defined in

[src/frontend/core/DataStream.ts:12](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataStream.ts#L12)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Defined in

[src/frontend/core/DataStream.ts:21](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataStream.ts#L21)

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MediaStreamEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: `MediaStreamEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

MediaStream.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9221

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

MediaStream.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9222

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MediaStreamEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: `MediaStreamEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

MediaStream.addEventListener

#### Defined in

node_modules/@types/web/index.d.ts:9268

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

MediaStream.addEventListener

#### Defined in

node_modules/@types/web/index.d.ts:9269

___

### clone

▸ **clone**(): `MediaStream`

#### Returns

`MediaStream`

#### Inherited from

MediaStream.clone

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9215

▸ **clone**(): `MediaStream`

#### Returns

`MediaStream`

#### Inherited from

MediaStream.clone

#### Defined in

node_modules/@types/web/index.d.ts:9262

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

MediaStream.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4983

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

MediaStream.dispatchEvent

#### Defined in

node_modules/@types/web/index.d.ts:4982

___

### getAudioTracks

▸ **getAudioTracks**(): `MediaStreamTrack`[]

#### Returns

`MediaStreamTrack`[]

#### Inherited from

MediaStream.getAudioTracks

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9216

▸ **getAudioTracks**(): `MediaStreamAudioTrack`[]

#### Returns

`MediaStreamAudioTrack`[]

#### Inherited from

MediaStream.getAudioTracks

#### Defined in

node_modules/@types/dom-mediacapture-transform/index.d.ts:33

▸ **getAudioTracks**(): `MediaStreamTrack`[]

#### Returns

`MediaStreamTrack`[]

#### Inherited from

MediaStream.getAudioTracks

#### Defined in

node_modules/@types/web/index.d.ts:9263

___

### getDataTracks

▸ **getDataTracks**(): ([`DataStreamTrack`](frontend_core_DataStreamTrack.DataStreamTrack) \| `MediaStreamTrack`)[]

#### Returns

([`DataStreamTrack`](frontend_core_DataStreamTrack.DataStreamTrack) \| `MediaStreamTrack`)[]

#### Defined in

[src/frontend/core/DataStream.ts:62](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataStream.ts#L62)

___

### getTrackById

▸ **getTrackById**(`trackId`): ``null`` \| `MediaStreamTrack`

#### Parameters

| Name | Type |
| :------ | :------ |
| `trackId` | `string` |

#### Returns

``null`` \| `MediaStreamTrack`

#### Inherited from

MediaStream.getTrackById

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9217

▸ **getTrackById**(`trackId`): ``null`` \| `MediaStreamTrack`

#### Parameters

| Name | Type |
| :------ | :------ |
| `trackId` | `string` |

#### Returns

``null`` \| `MediaStreamTrack`

#### Inherited from

MediaStream.getTrackById

#### Defined in

node_modules/@types/web/index.d.ts:9264

___

### getTracks

▸ **getTracks**(): `MediaStreamTrack`[]

#### Returns

`MediaStreamTrack`[]

#### Inherited from

MediaStream.getTracks

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9218

▸ **getTracks**(): `MediaStreamTrack`[]

#### Returns

`MediaStreamTrack`[]

#### Inherited from

MediaStream.getTracks

#### Defined in

node_modules/@types/web/index.d.ts:9265

___

### getVideoTracks

▸ **getVideoTracks**(): `MediaStreamTrack`[]

#### Returns

`MediaStreamTrack`[]

#### Inherited from

MediaStream.getVideoTracks

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9219

▸ **getVideoTracks**(): `MediaStreamVideoTrack`[]

#### Returns

`MediaStreamVideoTrack`[]

#### Inherited from

MediaStream.getVideoTracks

#### Defined in

node_modules/@types/dom-mediacapture-transform/index.d.ts:34

▸ **getVideoTracks**(): `MediaStreamTrack`[]

#### Returns

`MediaStreamTrack`[]

#### Inherited from

MediaStream.getVideoTracks

#### Defined in

node_modules/@types/web/index.d.ts:9266

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MediaStreamEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: `MediaStreamEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

MediaStream.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9223

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

MediaStream.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9224

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MediaStreamEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: `MediaStreamEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

MediaStream.removeEventListener

#### Defined in

node_modules/@types/web/index.d.ts:9270

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

MediaStream.removeEventListener

#### Defined in

node_modules/@types/web/index.d.ts:9271

___

### removeTrack

▸ **removeTrack**(`track`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | `MediaStreamTrack` |

#### Returns

`void`

#### Inherited from

MediaStream.removeTrack

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9220

▸ **removeTrack**(`track`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | `MediaStreamTrack` |

#### Returns

`void`

#### Inherited from

MediaStream.removeTrack

#### Defined in

node_modules/@types/web/index.d.ts:9267
