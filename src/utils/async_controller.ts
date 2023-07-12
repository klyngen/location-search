import { ReactiveController, ReactiveControllerHost } from "lit";
import { Observable, Subscription } from "rxjs";

export function CreateAsyncController<T>(
  host: ReactiveControllerHost,
  observable: Observable<T>
): AsyncController<T>;
export function CreateAsyncController<T>(
  host: ReactiveControllerHost,
  observable: Observable<T>,
  defaultValue: T
): AsyncControllerWithValue<T>;

export function CreateAsyncController<T>(
  host: ReactiveControllerHost,
  observable: Observable<T>,
  defaultValue?: T
) {
  if (defaultValue) {
    return new AsyncControllerWithValue(host, observable, defaultValue);
  }

  return new AsyncController(host, observable);
}

export class AsyncController<T> implements ReactiveController {
  sub: Subscription | null = null;

  value: T | undefined;

  constructor(
    private host: ReactiveControllerHost,
    private source: Observable<T>
  ) {
    this.host.addController(this);
  }

  hostConnected() {
    this.sub = this.source.subscribe((value) => {
      this.value = value;
      this.host.requestUpdate();
    });
  }

  hostDisconnected() {
    this.sub?.unsubscribe();
  }
}

export class AsyncControllerWithValue<T> implements ReactiveController {
  sub: Subscription | null = null;

  constructor(
    private host: ReactiveControllerHost,
    private source: Observable<T>,
    public value: T
  ) {
    this.host.addController(this);
  }

  hostConnected() {
    this.sub = this.source.subscribe((value) => {
      this.value = value;
      this.host.requestUpdate();
    });
  }

  hostDisconnected() {
    this.sub?.unsubscribe();
  }
}
