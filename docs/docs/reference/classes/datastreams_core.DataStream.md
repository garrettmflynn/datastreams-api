---
id: "datastreams_core.DataStream"
title: "Class: DataStream"
sidebar_label: "DataStream"
custom_edit_url: null
---

[datastreams.core](../modules/datastreams_core).DataStream

## Hierarchy

- `MediaStream`

  ↳ **`DataStream`**

## Constructors

### constructor

• **new DataStream**(`arg?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arg` | [`DataStream`](datastreams_core.DataStream) \| `MediaStream` \| [`DataStreamTrack`](datastreams_core.DataStreamTrack)[] \| `MediaStreamTrack`[] | `[]` |

#### Overrides

MediaStream.constructor

#### Defined in

[src/frontend/core/DataStream.ts:24](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataStream.ts#L24)

## Properties

### \_addTrack

• **\_addTrack**: `Function`

#### Defined in

[src/frontend/core/DataStream.ts:18](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataStream.ts#L18)

___

### \_getTracks

• **\_getTracks**: `Function`

#### Defined in

[src/frontend/core/DataStream.ts:19](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataStream.ts#L19)

___

### active

• `Readonly` **active**: `boolean`

#### Inherited from

MediaStream.active

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9210

___

### addTrack

• **addTrack**: (`track`: [`DataStreamTrack`](datastreams_core.DataStreamTrack) \| `MediaStreamTrack`) => [`DataStreamTrack`](datastreams_core.DataStreamTrack) \| `MediaStreamTrack`

#### Type declaration

▸ (`track`): [`DataStreamTrack`](datastreams_core.DataStreamTrack) \| `MediaStreamTrack`

##### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`DataStreamTrack`](datastreams_core.DataStreamTrack) \| `MediaStreamTrack` |

##### Returns

[`DataStreamTrack`](datastreams_core.DataStreamTrack) \| `MediaStreamTrack`

#### Overrides

MediaStream.addTrack

#### Defined in

[src/frontend/core/DataStream.ts:17](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataStream.ts#L17)

___

### id

• `Readonly` **id**: `string`

#### Inherited from

MediaStream.id

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9211

___

### onaddtrack

• **onaddtrack**: `any`

#### Overrides

MediaStream.onaddtrack

#### Defined in

[src/frontend/core/DataStream.ts:13](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataStream.ts#L13)

___

### onremovetrack

• **onremovetrack**: ``null`` \| (`ev`: `MediaStreamTrackEvent`) => `any`

#### Inherited from

MediaStream.onremovetrack

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9213

___

### tracks

• **tracks**: `Map`<`string` \| `number`, [`DataStreamTrack`](datastreams_core.DataStreamTrack) \| `MediaStreamTrack`\>

#### Defined in

[src/frontend/core/DataStream.ts:12](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataStream.ts#L12)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Defined in

[src/frontend/core/DataStream.ts:22](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataStream.ts#L22)

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

___

### clone

▸ **clone**(): `MediaStream`

#### Returns

`MediaStream`

#### Inherited from

MediaStream.clone

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9215

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

___

### getDataTracks

▸ **getDataTracks**(): ([`DataStreamTrack`](datastreams_core.DataStreamTrack) \| `MediaStreamTrack`)[]

#### Returns

([`DataStreamTrack`](datastreams_core.DataStreamTrack) \| `MediaStreamTrack`)[]

#### Defined in

[src/frontend/core/DataStream.ts:67](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataStream.ts#L67)

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

___

### getTracks

▸ **getTracks**(): `MediaStreamTrack`[]

#### Returns

`MediaStreamTrack`[]

#### Inherited from

MediaStream.getTracks

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9218

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
