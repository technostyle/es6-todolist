import { EVENT_TYPES } from "./Events";
import dispatcher  from "./Dispatcher";

const EVENT_QUEUE = [];
EVENT_QUEUE.push = Array.prototype.unshift;

export function pushEvent({ type, payload }) {
    if (!EVENT_TYPES.some(t => t === type)) {
        console.error(`no such event of type ${type}`);
        return;
    }

    EVENT_QUEUE.push({
        type: type,
        payload: payload
    })

    console.log(`Event ${type} pushed with payload ${payload}`);
}

export function popEvent() {
    if (!EVENT_TYPES.length) {
        console.error("event queue is empty",);
        return;
    }

    return EVENT_QUEUE.pop();
}