---
id: "frontend_core_pipeline_worker"
title: "Module: frontend/core/pipeline.worker"
sidebar_label: "frontend/core/pipeline.worker"
custom_edit_url: null
---

## Namespaces

- [default](../namespaces/frontend_core_pipeline_worker.default)

## Variables

### default

• **default**: `Window` & typeof `globalThis`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17212

## Functions

### addSink

▸ **addSink**(`sink`, `bound`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `WritableStream`<`any`\> |
| `bound` | [`boundType`](frontend_core_DataPipeline#boundtype) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/core/pipeline.worker.ts:13](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/pipeline.worker.ts#L13)

___

### addSource

▸ **addSource**(`source`, `bound`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `ReadableStream`<`any`\> |
| `bound` | [`boundType`](frontend_core_DataPipeline#boundtype) |

#### Returns

`number`

#### Defined in

[src/frontend/core/pipeline.worker.ts:12](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/pipeline.worker.ts#L12)

___

### addTransform

▸ **addTransform**(`o`, `pipeline`, `bound`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `TransformStream`<`any`, `any`\> |
| `pipeline` | [`pipelineType`](frontend_core_DataPipeline#pipelinetype) |
| `bound` | [`boundType`](frontend_core_DataPipeline#boundtype) |

#### Returns

`void`

#### Defined in

[src/frontend/core/pipeline.worker.ts:15](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/core/pipeline.worker.ts#L15)
