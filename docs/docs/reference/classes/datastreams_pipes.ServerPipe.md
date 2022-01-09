---
id: "datastreams_pipes.ServerPipe"
title: "Class: ServerPipe"
sidebar_label: "ServerPipe"
custom_edit_url: null
---

[datastreams.pipes](../modules/datastreams_pipes).ServerPipe

## Hierarchy

- `Pipe`

  ↳ **`ServerPipe`**

## Constructors

### constructor

• **new ServerPipe**(`settings`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `PipeSettingsType` |

#### Overrides

Pipe.constructor

#### Defined in

[src/frontend/pipes/Server.pipe.ts:14](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Server.pipe.ts#L14)

## Properties

### callback

• **callback**: `PipeCallbackType`

#### Inherited from

Pipe.callback

#### Defined in

[src/frontend/pipes/Pipe.ts:13](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Pipe.ts#L13)

___

### id

• **id**: `string`

#### Inherited from

Pipe.id

#### Defined in

[src/frontend/pipes/Pipe.ts:9](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Pipe.ts#L9)

___

### queue

• **queue**: `any`[] = `[]`

#### Defined in

[src/frontend/pipes/Server.pipe.ts:10](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Server.pipe.ts#L10)

___

### readyForData

• **readyForData**: `boolean` = `false`

#### Defined in

[src/frontend/pipes/Server.pipe.ts:12](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Server.pipe.ts#L12)

___

### settings

• **settings**: `PipeSettingsType`

#### Inherited from

Pipe.settings

#### Defined in

[src/frontend/pipes/Pipe.ts:11](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Pipe.ts#L11)

___

### socket

• `Optional` **socket**: `Websocket`

#### Overrides

Pipe.socket

#### Defined in

[src/frontend/pipes/Server.pipe.ts:11](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Server.pipe.ts#L11)

___

### type

• **type**: `PipeTypes`

#### Inherited from

Pipe.type

#### Defined in

[src/frontend/pipes/Pipe.ts:10](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Pipe.ts#L10)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Overrides

Pipe.\_\_@toStringTag@60

#### Defined in

[src/frontend/pipes/Server.pipe.ts:8](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Server.pipe.ts#L8)

## Methods

### addEventListener

▸ **addEventListener**(`type`, `callback`, `options?`): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

Pipe.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4981

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

Pipe.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4983

___

### ondata

▸ **ondata**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

Pipe.ondata

#### Defined in

[src/frontend/pipes/Pipe.ts:44](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Pipe.ts#L44)

___

### process

▸ **process**(`args`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Overrides

Pipe.process

#### Defined in

[src/frontend/pipes/Server.pipe.ts:64](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Server.pipe.ts#L64)

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `options?`): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

Pipe.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4985

___

### send

▸ **send**(`o`): `Promise`<`DataType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `DataType` |

#### Returns

`Promise`<`DataType`\>

#### Defined in

[src/frontend/pipes/Server.pipe.ts:48](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Server.pipe.ts#L48)

___

### sendData

▸ **sendData**(`data`): `Promise`<`DataType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`DataType`\>

#### Defined in

[src/frontend/pipes/Server.pipe.ts:59](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Server.pipe.ts#L59)

___

### subscribe

▸ **subscribe**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `PipeCallbackType` |

#### Returns

`void`

#### Inherited from

Pipe.subscribe

#### Defined in

[src/frontend/pipes/Pipe.ts:36](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Pipe.ts#L36)

___

### transform

▸ **transform**(`chunk`, `controller`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `controller` | `TransformStreamDefaultController`<`any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/pipes/Server.pipe.ts:73](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Server.pipe.ts#L73)

___

### unsubscribe

▸ **unsubscribe**(): `void`

#### Returns

`void`

#### Inherited from

Pipe.unsubscribe

#### Defined in

[src/frontend/pipes/Pipe.ts:40](https://github.com/brainsatplay/datastreams-api/blob/3bb0d1d/src/frontend/pipes/Pipe.ts#L40)
