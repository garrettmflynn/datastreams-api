---
id: "datastreams_core.DataStreamTrackProcessor"
title: "Class: DataStreamTrackProcessor"
sidebar_label: "DataStreamTrackProcessor"
custom_edit_url: null
---

[datastreams.core](../modules/datastreams_core).DataStreamTrackProcessor

Create a ReadableStream of sensor data modeled after the Insertable Streams API

## Constructors

### constructor

• **new DataStreamTrackProcessor**(`o`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.track` | [`DataStreamTrack`](datastreams_core.DataStreamTrack) |

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:15](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/core/DataStreamTrackProcessor.ts#L15)

## Properties

### readable

• **readable**: `ReadableStream`<`any`\>

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:13](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/core/DataStreamTrackProcessor.ts#L13)

___

### subid

• `Optional` **subid**: `string`

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:12](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/core/DataStreamTrackProcessor.ts#L12)

___

### track

• **track**: [`DataStreamTrack`](datastreams_core.DataStreamTrack)

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:11](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/core/DataStreamTrackProcessor.ts#L11)

## Methods

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:45](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/core/DataStreamTrackProcessor.ts#L45)

___

### pull

▸ **pull**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:43](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/core/DataStreamTrackProcessor.ts#L43)

___

### start

▸ **start**(`controller`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `ReadableStreamController`<`any`\> |

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:33](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/core/DataStreamTrackProcessor.ts#L33)
