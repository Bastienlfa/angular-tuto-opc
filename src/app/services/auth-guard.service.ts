import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.authService);
      if(this.authService.isAuth) {
        return true;
      } else {
        this.router.navigate(['/auth']);
      }
  }
}