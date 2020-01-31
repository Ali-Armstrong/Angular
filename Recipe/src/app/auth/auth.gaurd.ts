import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({providedIn: "root"})
export class AuthGaurd implements CanActivate{
    constructor(private authService:AuthService, private router:Router){}

    canActivate(route: ActivatedRouteSnapshot,router : RouterStateSnapshot)
    :boolean | Promise<boolean> | Observable<boolean>{
        return this.authService.userSubject.pipe(map(user=>{
            if(user){
                return true;
            }else{
                this.router.navigate(['/auth']);
                return false;
            }
        }));
    }
}