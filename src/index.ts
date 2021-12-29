/**
 * The `datastreams` module is the main module of the Data Capture and Streams API.
 * @packageDocumentation
 * @module datastreams
 */

// Frontend
import * as core from "./frontend/core";
import * as devices from "./frontend/devices";
import * as pipes from "./frontend/pipes";

// Backend
import * as services from "./backend/services";

export {
    core,
    devices,
    pipes,
    services
}