export default class DataDeviceInfo {

    deviceId: string = '' // persistent across sessions; reset when cookies cleared
    groupId: string = '' // represents a single physical device (e.g. hybrig eeg + fnirs)
    kind: 'eeginput' | 'emginput' | 'fnirsinput' | 'tdcsoutput' = 'eeginput'
    label: string = ''

    constructor () {
    
    }

}