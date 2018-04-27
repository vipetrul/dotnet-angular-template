import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';
import { HawkidLoginService } from '../services/hawkid-login.service';
import 'rxjs/add/operator/map';

@Injectable()
export class BasicUserRoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private readonly userService: UserService,
    private readonly loginService: HawkidLoginService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.loginService.returnUri = state.url;
    return this.userService.user$.map(u => {
      if (!u.isAuthenticated()) {
        this.router.navigateByUrl('/home');
        return false;
      }
      if (!u.isAuthenticated) {
        this.router.navigateByUrl('/accessDenied');
        return false;
      }
      return true;
    });
  }
}
