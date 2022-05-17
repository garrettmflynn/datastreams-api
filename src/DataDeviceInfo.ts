import { randomUUID } from "./common/id"
import { DeviceConfig } from "./types/Devices.types"

export const DataDeviceInfo = (constraints: DeviceConfig) => {

    const protocols = new Set<string>()
    if (Array.isArray(constraints.protocols)) constraints.protocols.forEach((str:string) => protocols.add(str))
    else {
        if (constraints.serviceUUID) protocols.add('bluetooth')
        if (constraints.usbVendorId)  protocols.add('serial')
        if (constraints.url) {
            protocols.add('wifi')
            protocols.add('websocket')
        } 
    }

    return {
        deviceId: randomUUID(), // TODO: persistent across sessions; reset when cookies cleared
        groupId: randomUUID(), // TODO: represents a single physical device (e.g. hybrig eeg + fnirs)
        kind: constraints.kind,
        label: constraints.label,
        protocols: Array.from(protocols),
        modes: constraints?.modes
    }
}