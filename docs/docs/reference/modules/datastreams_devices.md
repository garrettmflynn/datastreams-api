---
id: "datastreams_devices"
title: "Module: datastreams.devices"
sidebar_label: "datastreams.devices"
custom_edit_url: null
---

The `datastreams.devices` module allows developers to instantiate their own Device classes.

## Classes

- [BluetoothDevice](../classes/datastreams_devices.BluetoothDevice)
- [EventSourceDevice](../classes/datastreams_devices.EventSourceDevice)
- [SerialDevice](../classes/datastreams_devices.SerialDevice)
- [WebSocketDevice](../classes/datastreams_devices.WebSocketDevice)

## Type aliases

### customCallback

Ƭ **customCallback**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `callback` | () => {} |

#### Defined in

[src/frontend/devices/EventSource.device.ts:7](https://github.com/brainsatplay/datastreams-api/blob/12ed679/src/frontend/devices/EventSource.device.ts#L7)
