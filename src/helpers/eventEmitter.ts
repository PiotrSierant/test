interface EventCallback<T> {
    (data: T): void;
}

interface EventEmitterType {
    events: { [event: string]: EventCallback<any>[] };
    dispatch<T>(event: string, data: T): void;
    subscribe<T>(event: string, callback: EventCallback<T>): void;
}

const EventEmitter: EventEmitterType = {
    events: {},
    dispatch<T>(event: string, data: T) {
        if (!this.events[event]) return;
        this.events[event].forEach(callback => callback(data));
    },
    subscribe<T>(event: string, callback: EventCallback<T>) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
    }
};

export { EventEmitter };