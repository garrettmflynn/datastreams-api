---
id: "frontend_devices"
title: "Module: frontend/devices"
sidebar_label: "frontend/devices"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### devices

• **devices**: ({ `characteristics`: { `receive`: `string` = '6e400002-b5a3-f393-e0a9-e50e24dcca9e'; `transmit`: `string` = '6e400003-b5a3-f393-e0a9-e50e24dcca9e' } ; `device`: `undefined` = muse.device; `fileCharacteristicUuid`: `string` = '6E400006-B5A3-F393-E0A9-E50E24DCCA9E'; `kind`: `string` = 'fnirsinput'; `label`: `string` = 'HEGduino'; `namePrefix`: `string` = 'HEG'; `onconnect`: `undefined` = muse.onconnect; `ondata`: (`newline`: `string`) => `number`[] = hegduino.ondata; `serviceUUID`: `string` = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'; `url`: `undefined` = 'https://localhost'; `usbProductId`: `number` = 60000; `usbVendorId`: `number` = 4292 } \| { `characteristics`: `undefined` ; `device`: typeof `MuseClient` = muse.device; `fileCharacteristicUuid`: `undefined` = '6E400006-B5A3-F393-E0A9-E50E24DCCA9E'; `kind`: `string` = 'eeginput'; `label`: `string` = 'Muse'; `namePrefix`: `undefined` = 'HEG'; `onconnect`: (`dataDevice`: [`Device`](../classes/frontend_devices_Device.Device)<`MuseClient`\>) => `Promise`<`void`\> = muse.onconnect; `ondata`: `undefined` = bci2000web.ondata; `serviceUUID`: `undefined` = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'; `url`: `undefined` = 'https://localhost'; `usbProductId`: `undefined` = 60000; `usbVendorId`: `undefined` = 4292 } \| { `characteristics`: `undefined` ; `device`: `undefined` = muse.device; `fileCharacteristicUuid`: `undefined` = '6E400006-B5A3-F393-E0A9-E50E24DCCA9E'; `kind`: `string` = 'eegdata'; `label`: `string` = 'Websocket'; `namePrefix`: `undefined` = 'HEG'; `onconnect`: `undefined` = muse.onconnect; `ondata`: (`data`: `any`[]) => `any`[] = bci2000web.ondata; `serviceUUID`: `undefined` = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'; `url`: `string` = 'https://localhost'; `usbProductId`: `undefined` = 60000; `usbVendorId`: `undefined` = 4292 })[]

#### Defined in

[src/frontend/devices/index.ts:7](https://github.com/brainsatplay/datastreams-api-ts/blob/60f94d3/src/frontend/devices/index.ts#L7)
