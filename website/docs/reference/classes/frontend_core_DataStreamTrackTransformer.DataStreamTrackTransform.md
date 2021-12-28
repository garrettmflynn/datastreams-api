---
id: "frontend_core_DataStreamTrackTransformer.DataStreamTrackTransform"
title: "Class: DataStreamTrackTransform"
sidebar_label: "DataStreamTrackTransform"
custom_edit_url: null
---

[frontend/core/DataStreamTrackTransformer](../modules/frontend_core_DataStreamTrackTransformer).DataStreamTrackTransform

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

[src/frontend/core/DataStreamTrackTransformer.ts:11](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataStreamTrackTransformer.ts#L11)

## Properties

### transform

• **transform**: `TransformStream`<`any`, `any`\>

#### Defined in

[src/frontend/core/DataStreamTrackTransformer.ts:9](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/DataStreamTrackTransformer.ts#L9)
