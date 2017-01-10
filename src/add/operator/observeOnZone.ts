import { Observable } from 'rxjs/Observable';
import { observeOnZone as observeOnZoneStatic, ObserveOnZoneSignature } from '../../operator/observeOnZone';

Observable.prototype.observeOnZone = observeOnZoneStatic;

declare module 'rxjs/Observable' {
    interface Observable<T> {
        observeOnZone: ObserveOnZoneSignature<T>;
    }
}
