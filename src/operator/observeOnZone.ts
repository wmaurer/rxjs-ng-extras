import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export function observeOnZone<T>(ngZone: NgZone) {
    return Observable.create(observer => {
        const onNext = value => ngZone.run(() => observer.next(value));
        const onError = e => ngZone.run(() => observer.error(e));
        const onComplete = () => ngZone.run(() => observer.complete());
        return this.subscribe(onNext, onError, onComplete);
    });
}

export interface ObserveOnZoneSignature<T> {
    (ngZone: NgZone): Observable<T>;
}
