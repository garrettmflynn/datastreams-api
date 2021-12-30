/**
 * The `datastreams.devices` module allows developers to instantiate their own Device classes.
 * @packageDocumentation
 * @module datastreams.devices
 */

export {Bluetooth as BluetoothDevice} from './Bluetooth.device'
export * from './EventSource.device'
export * from './Serial.device'
export * from './WebSocket.device'