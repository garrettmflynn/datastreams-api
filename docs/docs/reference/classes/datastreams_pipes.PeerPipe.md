---
id: "datastreams_pipes.PeerPipe"
title: "Class: PeerPipe"
sidebar_label: "PeerPipe"
custom_edit_url: null
---

[datastreams.pipes](../modules/datastreams_pipes).PeerPipe

## Hierarchy

- `Pipe`

  ↳ **`PeerPipe`**

## Constructors

### constructor

• **new PeerPipe**(`settings`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `PipeSettingsType` |

#### Overrides

Pipe.constructor

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:31](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L31)

## Properties

### callback

• **callback**: `PipeCallbackType`

#### Inherited from

Pipe.callback

#### Defined in

[src/frontend/pipes/Pipe.ts:13](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Pipe.ts#L13)

___

### config

• **config**: `RTCConfiguration`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:20](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L20)

___

### dataChannelQueueLength

• **dataChannelQueueLength**: `number` = `0`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:22](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L22)

___

### dataChannels

• **dataChannels**: `Map`<`string`, `any`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:23](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L23)

___

### hasResolved

• **hasResolved**: `Object` = `{}`

#### Index signature

▪ [x: `string`]: [`DataChannel`](datastreams_core.DataChannel)

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:27](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L27)

___

### id

• **id**: `string`

#### Inherited from

Pipe.id

#### Defined in

[src/frontend/pipes/Pipe.ts:9](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Pipe.ts#L9)

___

### peers

• **peers**: `Map`<`string`, `RTCPeerConnection`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:21](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L21)

___

### rooms

• **rooms**: `Map`<`string`, `RoomInterface`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:24](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L24)

___

### settings

• **settings**: `PipeSettingsType`

#### Inherited from

Pipe.settings

#### Defined in

[src/frontend/pipes/Pipe.ts:11](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Pipe.ts#L11)

___

### socket

• `Optional` **socket**: `Websocket`

#### Inherited from

Pipe.socket

#### Defined in

[src/frontend/pipes/Pipe.ts:12](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Pipe.ts#L12)

___

### sources

• **sources**: `Map`<`string`, `any`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:25](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L25)

___

### toResolve

• **toResolve**: `Object` = `{}`

#### Index signature

▪ [x: `string`]: `any`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:26](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L26)

___

### type

• **type**: `PipeTypes`

#### Inherited from

Pipe.type

#### Defined in

[src/frontend/pipes/Pipe.ts:10](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Pipe.ts#L10)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Overrides

Pipe.\_\_@toStringTag@60

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:29](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L29)

## Methods

### add

▸ **add**(`source?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source?` | [`DataStream`](datastreams_core.DataStream) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:237](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L237)

___

### addDataTracks

▸ **addDataTracks**(`id`, `tracks`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `tracks` | [`DataStreamTrack`](datastreams_core.DataStreamTrack)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:111](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L111)

___

### addEventListener

▸ **addEventListener**(`type`, `callback`, `options?`): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

Pipe.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4981

___

### closeConnection

▸ **closeConnection**(`info`, `peer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `PeerInfoType` |
| `peer?` | `RTCPeerConnection` |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:200](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L200)

___

### closeDataChannel

▸ **closeDataChannel**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:292](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L292)

___

### createPeerConnection

▸ **createPeerConnection**(`peerInfo`, `peerId?`): `Promise`<`RTCPeerConnection`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerInfo` | `PeerInfoType` |
| `peerId?` | `string` |

#### Returns

`Promise`<`RTCPeerConnection`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:204](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L204)

___

### createRoom

▸ **createRoom**(`room`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `room` | `RoomInterface` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:266](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L266)

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

Pipe.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4983

___

### getRooms

▸ **getRooms**(`auth`): `Promise`<{ `cmd`: `string` ; `data`: `any`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `auth` | `string` |

#### Returns

`Promise`<{ `cmd`: `string` ; `data`: `any`  }\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:257](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L257)

___

### handleDataChannelEvent

▸ **handleDataChannelEvent**(`ev`, `_`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `RTCDataChannelEvent` |
| `_` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:150](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L150)

___

### handleICECandidateEvent

▸ **handleICECandidateEvent**(`event`, `id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `RTCPeerConnectionIceEvent` |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:136](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L136)

___

### handleICEConnectionStateChangeEvent

▸ **handleICEConnectionStateChangeEvent**(`_`, `info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `Event` |
| `info` | `PeerInfoType` |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:179](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L179)

___

### handleICEGatheringStateChangeEvent

▸ **handleICEGatheringStateChangeEvent**(`_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `Event` |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:189](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L189)

___

### handleNegotiationNeededEvent

▸ **handleNegotiationNeededEvent**(`localConnection`, `id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `localConnection` | `RTCPeerConnection` |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:128](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L128)

___

### handleSignalingStateChangeEvent

▸ **handleSignalingStateChangeEvent**(`_`, `info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `Event` |
| `info` | `PeerInfoType` |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:191](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L191)

___

### handleTrackEvent

▸ **handleTrackEvent**(`event`, `id`): ``null`` \| ``true``

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `RTCTrackEvent` |
| `id` | `string` |

#### Returns

``null`` \| ``true``

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:140](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L140)

___

### joinRoom

▸ **joinRoom**(`room`, `info`, `auth`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `room` | `RoomInterface` |
| `info` | `Object` |
| `auth` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:262](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L262)

___

### leaveRoom

▸ **leaveRoom**(`room`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `room` | `RoomInterface` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:268](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L268)

___

### ondata

▸ **ondata**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

Pipe.ondata

#### Defined in

[src/frontend/pipes/Pipe.ts:44](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Pipe.ts#L44)

___

### ondatachannel

▸ **ondatachannel**(`_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `CustomEvent`<`any`\> |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:104](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L104)

___

### onoffer

▸ **onoffer**(`peerInfo`, `sdp`, `peerId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerInfo` | `PeerInfoType` |
| `sdp` | `RTCSessionDescriptionInit` |
| `peerId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:119](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L119)

___

### onpeerconnect

▸ **onpeerconnect**(`_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `CustomEvent`<`any`\> |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:103](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L103)

___

### onpeerdisconnect

▸ **onpeerdisconnect**(`_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `CustomEvent`<`any`\> |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:102](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L102)

___

### onroom

▸ **onroom**(`_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `CustomEvent`<`any`\> |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:105](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L105)

___

### onroomclosed

▸ **onroomclosed**(`_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `CustomEvent`<`any`\> |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:108](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L108)

___

### ontrack

▸ **ontrack**(`_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `CustomEvent`<`any`\> |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:106](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L106)

___

### openDataChannel

▸ **openDataChannel**(`__namedParameters`): `Promise`<[`DataChannel`](datastreams_core.DataChannel)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `DataChannelInfoType` |

#### Returns

`Promise`<[`DataChannel`](datastreams_core.DataChannel)\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:277](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L277)

___

### process

▸ **process**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Pipe.process

#### Defined in

[src/frontend/pipes/Pipe.ts:33](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Pipe.ts#L33)

___

### remove

▸ **remove**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:251](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L251)

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `options?`): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

Pipe.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4985

___

### send

▸ **send**(`data`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:273](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L273)

___

### sendMessage

▸ **sendMessage**(`message`, `id`, `reciprocated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `object` |
| `id` | `string` |
| `reciprocated` | `boolean` |

#### Returns

`void`

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:340](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L340)

___

### subscribe

▸ **subscribe**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `PipeCallbackType` |

#### Returns

`void`

#### Inherited from

Pipe.subscribe

#### Defined in

[src/frontend/pipes/Pipe.ts:36](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Pipe.ts#L36)

___

### unsubscribe

▸ **unsubscribe**(): `void`

#### Returns

`void`

#### Inherited from

Pipe.unsubscribe

#### Defined in

[src/frontend/pipes/Pipe.ts:40](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Pipe.ts#L40)

___

### useDataChannel

▸ **useDataChannel**(`dataChannel`, `onMessage?`, `local?`, `reciprocated?`): `Promise`<[`DataChannel`](datastreams_core.DataChannel)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dataChannel` | `RTCDataChannel` | `undefined` |
| `onMessage` | `DataChannelCallbackType` | `undefined` |
| `local` | `boolean` | `false` |
| `reciprocated` | `boolean` | `true` |

#### Returns

`Promise`<[`DataChannel`](datastreams_core.DataChannel)\>

#### Defined in

[src/frontend/pipes/Peer.pipe.ts:298](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/pipes/Peer.pipe.ts#L298)
