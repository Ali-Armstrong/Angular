import {Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class CanComponentDeactivate{
    canDeactivate : () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGaurd implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component : CanComponentDeactivate,currentRoute : ActivatedRouteSnapshot,currentState : RouterStateSnapshot,nextState?:RouterStateSnapshot)
    :Observable<boolean> | Promise<boolean> | boolean{
        return component.canDeactivate();
    }
}