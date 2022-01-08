---
id: "datastreams_transforms.Transform"
title: "Class: Transform"
sidebar_label: "Transform"
custom_edit_url: null
---

[datastreams.transforms](../modules/datastreams_transforms).Transform

The Transform class allows you to specify arbitrary transforms in the ontransform callback.
```typescript
import { transforms } from "datastreams-api";

const transform = new transforms.Transform();
transform.addEventListener('transform', (chunk, controller) => {
     let data = chunk.copy()
     chunk.close()
     controller.enqueue(chunk)
})
```

## Hierarchy

- `EventTarget`

  ↳ **`Transform`**

## Constructors

### constructor

• **new Transform**()

#### Overrides

EventTarget.constructor

#### Defined in

[src/frontend/transforms/Transform.ts:18](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/transforms/Transform.ts#L18)

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

EventTarget.addEventListener

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

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4983

___

### end

▸ **end**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/transforms/Transform.ts:34](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/transforms/Transform.ts#L34)

___

### onend

▸ **onend**(`e`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Event` |

#### Returns

`any`

#### Defined in

[src/frontend/transforms/Transform.ts:40](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/transforms/Transform.ts#L40)

___

### onstart

▸ **onstart**(`e`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Event` |

#### Returns

`any`

#### Defined in

[src/frontend/transforms/Transform.ts:38](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/transforms/Transform.ts#L38)

___

### ontransform

▸ **ontransform**(`e`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `CustomEvent`<`any`\> |

#### Returns

`any`

#### Defined in

[src/frontend/transforms/Transform.ts:39](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/transforms/Transform.ts#L39)

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

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4985

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/frontend/transforms/Transform.ts:26](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/transforms/Transform.ts#L26)

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

[src/frontend/transforms/Transform.ts:30](https://github.com/brainsatplay/datastreams-api/blob/b373a8f/src/frontend/transforms/Transform.ts#L30)
