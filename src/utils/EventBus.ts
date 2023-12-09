/* eslint-disable */
import { ref, readonly } from "vue";

// Define event type
type EventType = Record<string, any>;

// Create an event state using `ref`
const events = ref<EventType>({});

// Create Event Bus object
const EventBus = {
    // Event registration
    on<T extends keyof EventType>(event: T, callback: (payload: EventType[T]) => void) {
        if (!events.value[event]) {
            events.value[event] = [];
        }
        events.value[event].push(callback);
    },

    // Event deregistration
    off<T extends keyof EventType>(event: T, callback: (payload: EventType[T]) => void) {
        if (events.value[event]) {
            events.value[event] = events.value[event].filter((cb: (payload: any) => void) => cb !== callback);
        }
    },

    // Emit event
    emit<T extends keyof EventType>(event: T, payload: EventType[T]) {
        if (events.value[event]) {
            events.value[event].forEach((callback: (arg0: any) => void) => {
                callback(payload);
            });
        }
    },
};

// Export Event Bus as a readonly object
export default readonly(EventBus) as Readonly<EventBusType>;

// Define Event Bus type
export type EventBusType = {
    on<T extends keyof EventType>(event: T, callback: (payload: EventType[T]) => void): void;
    off<T extends keyof EventType>(event: T, callback: (payload: EventType[T]) => void): void;
    emit<T extends keyof EventType>(event: T, payload: EventType[T]): void;
};
