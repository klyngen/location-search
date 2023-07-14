import { ReactiveController, ReactiveControllerHost } from "lit";
import { Observable, Subscription } from "rxjs";
export declare function CreateAsyncController<T>(host: ReactiveControllerHost, observable: Observable<T>): AsyncController<T>;
export declare function CreateAsyncController<T>(host: ReactiveControllerHost, observable: Observable<T>, defaultValue: T): AsyncControllerWithValue<T>;
export declare class AsyncController<T> implements ReactiveController {
    private host;
    private source;
    sub: Subscription | null;
    value: T | undefined;
    constructor(host: ReactiveControllerHost, source: Observable<T>);
    hostConnected(): void;
    hostDisconnected(): void;
}
export declare class AsyncControllerWithValue<T> implements ReactiveController {
    private host;
    private source;
    value: T;
    sub: Subscription | null;
    constructor(host: ReactiveControllerHost, source: Observable<T>, value: T);
    hostConnected(): void;
    hostDisconnected(): void;
}
