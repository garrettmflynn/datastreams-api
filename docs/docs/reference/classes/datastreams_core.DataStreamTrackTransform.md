---
id: "datastreams_core.DataStreamTrackTransform"
title: "Class: DataStreamTrackTransform"
sidebar_label: "DataStreamTrackTransform"
custom_edit_url: null
---

[datastreams.core](../modules/datastreams_core).DataStreamTrackTransform

Create a TransformStream for sensor data | modeled after the Insertable Streams API

## Constructors

### constructor

• **new DataStreamTrackTransform**(`dict`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `Object` |
| `dict.transform` | (`value`: `any`, `controller`: `TransformStreamDefaultController`<`any`\>) => `Promise`<`any`\> |

#### Defined in

[src/frontend/core/DataStreamTrackTransformer.ts:11](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataStreamTrackTransformer.ts#L11)

## Properties

### transform

• **transform**: `TransformStream`<`any`, `any`\>

#### Defined in

[src/frontend/core/DataStreamTrackTransformer.ts:9](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/core/DataStreamTrackTransformer.ts#L9)
