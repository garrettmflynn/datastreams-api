---
id: "common_source_device"
title: "Module: common/source.device"
sidebar_label: "common/source.device"
custom_edit_url: null
---

## Variables

### kind

• **kind**: ``"eeginput"``

#### Defined in

[src/common/source.device.ts:8](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/common/source.device.ts#L8)

___

### label

• **label**: ``"Dummy Source"``

#### Defined in

[src/common/source.device.ts:7](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/common/source.device.ts#L7)

## Functions

### onconnect

▸ `Const` **onconnect**(`device`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | [`Device`](../classes/frontend_devices_Device.Device)<`any`\> |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/common/source.device.ts:15](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/common/source.device.ts#L15)

___

### ondata

▸ `Const` **ondata**(`decoded`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoded` | `string` |

#### Returns

`number`[]

#### Defined in

[src/common/source.device.ts:10](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/common/source.device.ts#L10)

___

### ondisconnect

▸ `Const` **ondisconnect**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/common/source.device.ts:39](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/common/source.device.ts#L39)
