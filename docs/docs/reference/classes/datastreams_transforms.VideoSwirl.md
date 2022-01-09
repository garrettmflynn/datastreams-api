---
id: "datastreams_transforms.VideoSwirl"
title: "Class: VideoSwirl"
sidebar_label: "VideoSwirl"
custom_edit_url: null
---

[datastreams.transforms](../modules/datastreams_transforms).VideoSwirl

Applies a warp effect using WebGL.

**`implements`** {FrameTransform} in pipeline.js

## Constructors

### constructor

• **new VideoSwirl**()

#### Defined in

[src/frontend/transforms/video/webgl.transforms.js:16](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/transforms/video/webgl.transforms.js#L16)

## Methods

### attributeSetFloats\_

▸ `Private` **attributeSetFloats_**(`attrName`, `vsize`, `arr`): `void`

Sets a floating point shader attribute to the values in arr.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attrName` | `string` | the name of the shader attribute to set |
| `vsize` | `number` | the number of components of the shader attribute's   type |
| `arr` | `number`[] | the values to set |

#### Returns

`void`

#### Defined in

[src/frontend/transforms/video/webgl.transforms.js:154](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/transforms/video/webgl.transforms.js#L154)

___

### destroy

▸ **destroy**(): `void`

**`override`**

#### Returns

`void`

#### Defined in

[src/frontend/transforms/video/webgl.transforms.js:230](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/transforms/video/webgl.transforms.js#L230)

___

### init

▸ **init**(): `Promise`<`void`\>

**`override`**

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/transforms/video/webgl.transforms.js:43](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/transforms/video/webgl.transforms.js#L43)

___

### loadShader\_

▸ `Private` **loadShader_**(`type`, `shaderSrc`): `WebGLShader`

Creates and compiles a WebGLShader from the provided source code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `number` | either VERTEX_SHADER or FRAGMENT_SHADER |
| `shaderSrc` | `string` |  |

#### Returns

`WebGLShader`

#### Defined in

[src/frontend/transforms/video/webgl.transforms.js:130](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/transforms/video/webgl.transforms.js#L130)

___

### transform

▸ **transform**(`frame`, `controller`): `Promise`<`void`\>

**`override`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `frame` | `any` |
| `controller` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/transforms/video/webgl.transforms.js:164](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/transforms/video/webgl.transforms.js#L164)
