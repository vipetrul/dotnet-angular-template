import { Component, OnInit } from '@angular/core';
import { UserState, User } from '../../states/User.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'login-button',
  template: `
    <a mat-button *ngIf="!(isAuthenticated$ | async)" href="account/Login">Login</a>
    <a mat-button mat-icon-button *ngIf="(isAuthenticated$ | async)" [matMenuTriggerFor]="userMenu"><mat-icon svgIcon="account_circle"></mat-icon></a>
  
    <mat-menu #userMenu="matMenu" overlapTrigger="false">
      <div style="padding:0 16px 8px 16px; color: rgba(0,0,0,.54)">
          <h2 fxLayout style="margin:0; color: rgba(0,0,0,.87)">{{(user$ | async).fullName}}</h2>
          <span class="fieldName">HawkID:</span> {{(user$ | async).hawkId}}<br>
          <span class="fieldName">UnivID:</span> {{(user$ | async).univId}}
      </div>
      <mat-divider></mat-divider>
      <button mat-menu-item style="min-width:200px"><mat-icon svgIcon="exit_to_app" aria-label="Logout"></mat-icon>
        <span>Logout</span>
      </button>
    </mat-menu>
    `,
  styles: [".fieldName{display:inline-block; width:60px}"]
})
export class LoginButtonComponent implements OnInit {
  @Select(UserState) user$: Observable<User>;
  @Select(UserState.IsAuthenticated) isAuthenticated$: Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
  }

}
