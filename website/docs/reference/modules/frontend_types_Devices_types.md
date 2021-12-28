---
id: "frontend_types_Devices_types"
title: "Module: frontend/types/Devices.types"
sidebar_label: "frontend/types/Devices.types"
custom_edit_url: null
---

## Type aliases

### CoreDeviceType

Ƭ **CoreDeviceType**<`T`\>: `T` & { `connect?`: `Function` ; `constructor?`: `Function` ; `disconnect?`: `Function`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[src/frontend/types/Devices.types.ts:5](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/types/Devices.types.ts#L5)

___

### DeviceConstraintsType

Ƭ **DeviceConstraintsType**<`T`\>: [`DeviceType`](frontend_types_Devices_types#devicetype)<`T`\> & { `ble?`: `boolean` ; `dataStream?`: [`DataStream`](../classes/frontend_core_DataStream.DataStream) ; `device?`: [`Device`](../classes/frontend_devices_Device.Device)<`T`\> \| `any` ; `serial?`: `boolean` ; `wifi?`: `boolean`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[src/frontend/types/Devices.types.ts:38](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/types/Devices.types.ts#L38)

___

### DeviceType

Ƭ **DeviceType**<`T`\>: [`CoreDeviceType`](frontend_types_Devices_types#coredevicetype)<`T`\> & { `characteristics?`: { [x: string]: `string`;  } ; `kind`: `string` ; `label`: `string` ; `namePrefix?`: `string` ; `serviceUUID?`: `string` ; `url?`: `string` ; `usbProductId?`: `number` \| `string` ; `usbVendorId?`: `number` \| `string` ; `decode?`: (`data`: `any`, `name?`: `string`) => `any` ; `encode?`: (`data`: `any`, `name?`: `string`) => `any` ; `onconnect?`: (`target`: `any`) => `Promise`<`any`\> ; `ondata?`: (`data`: `any`, `name?`: `string`) => `any`[] ; `ondisconnect?`: (`target`: `any`) => `Promise`<`any`\> ; `onerror?`: (`error`: `Error`) => `Promise`<`any`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[src/frontend/types/Devices.types.ts:11](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/types/Devices.types.ts#L11)
