[datastreams-api](../README.md) / DataStreamTrackProcessor

# Class: DataStreamTrackProcessor

Create a ReadableStream of sensor data modeled after the Insertable Streams API

## Table of contents

### Constructors

- [constructor](DataStreamTrackProcessor.md#constructor)

### Properties

- [readable](DataStreamTrackProcessor.md#readable)
- [subid](DataStreamTrackProcessor.md#subid)
- [track](DataStreamTrackProcessor.md#track)

### Methods

- [cancel](DataStreamTrackProcessor.md#cancel)
- [pull](DataStreamTrackProcessor.md#pull)
- [start](DataStreamTrackProcessor.md#start)

## Constructors

### constructor

• **new DataStreamTrackProcessor**(`o`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |
| `o.track` | [`DataStreamTrack`](DataStreamTrack.md) |

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:15](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackProcessor.ts#L15)

## Properties

### readable

• **readable**: `ReadableStream`<`any`\>

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:13](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackProcessor.ts#L13)

___

### subid

• `Optional` **subid**: `string`

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:12](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackProcessor.ts#L12)

___

### track

• **track**: [`DataStreamTrack`](DataStreamTrack.md)

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:11](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackProcessor.ts#L11)

## Methods

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:45](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackProcessor.ts#L45)

___

### pull

▸ **pull**(): `void`

#### Returns

`void`

#### Defined in

[src/frontend/core/DataStreamTrackProcessor.ts:43](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackProcessor.ts#L43)

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

[src/frontend/core/DataStreamTrackProcessor.ts:33](https://github.com/brainsatplay/datastreams-api-ts/blob/a9b1282/src/frontend/core/DataStreamTrackProcessor.ts#L33)
