---
id: "datastreams_core.DataPipeline"
title: "Class: DataPipeline"
sidebar_label: "DataPipeline"
custom_edit_url: null
---

[datastreams.core](../modules/datastreams_core).DataPipeline

## Constructors

### constructor

• **new DataPipeline**(`__namedParameters?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | `Object` | `undefined` |
| `__namedParameters.thread` | `boolean` | `true` |

#### Defined in

[src/frontend/core/DataPipeline.ts:31](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L31)

## Properties

### bound

• **bound**: [`boundType`](../modules/datastreams_core#boundtype) = `[]`

#### Defined in

[src/frontend/core/DataPipeline.ts:20](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L20)

___

### id

• **id**: `string`

#### Defined in

[src/frontend/core/DataPipeline.ts:18](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L18)

___

### kind

• **kind**: `string` = `''`

#### Defined in

[src/frontend/core/DataPipeline.ts:24](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L24)

___

### output

• `Optional` **output**: [`DataStreamTrackGenerator`](datastreams_core.DataStreamTrackGenerator) \| `MediaStreamTrackGenerator`<`any`\>

#### Defined in

[src/frontend/core/DataPipeline.ts:23](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L23)

___

### pipeline

• **pipeline**: [`pipelineType`](../modules/datastreams_core#pipelinetype) = `[]`

#### Defined in

[src/frontend/core/DataPipeline.ts:19](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L19)

___

### sink

• **sink**: ``null`` \| `WritableStream`<`any`\> = `null`

#### Defined in

[src/frontend/core/DataPipeline.ts:22](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L22)

___

### source

• **source**: ``null`` \| `ReadableStream`<`any`\> = `null`

#### Defined in

[src/frontend/core/DataPipeline.ts:21](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L21)

___

### thread

• **thread**: `boolean` = `true`

#### Defined in

[src/frontend/core/DataPipeline.ts:27](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L27)

___

### worker

• `Optional` **worker**: `Worker`

#### Defined in

[src/frontend/core/DataPipeline.ts:28](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L28)

## Methods

### add

▸ **add**(`settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `any` |

#### Returns

`void`

#### Defined in

[src/frontend/core/DataPipeline.ts:84](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L84)

___

### setSink

▸ **setSink**(`kind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind` | `string` |

#### Returns

`void`

#### Defined in

[src/frontend/core/DataPipeline.ts:68](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L68)

___

### setSource

▸ **setSource**(`track`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`DataStreamTrack`](datastreams_core.DataStreamTrack) \| `MediaStreamTrack` |

#### Returns

`void`

#### Defined in

[src/frontend/core/DataPipeline.ts:51](https://github.com/brainsatplay/datastreams-api/blob/2f2731a/src/frontend/core/DataPipeline.ts#L51)
