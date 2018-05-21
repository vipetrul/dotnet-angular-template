import { Component, OnInit } from '@angular/core';
import { UserState, User } from '../../states/User.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { PermissionsState } from '../../states/Permissions.state';

@Component({
  selector: 'login-button',
  template: `
    <a mat-button *ngIf="!(isAuthenticated$ | async)" href="account/Login">Login</a>
    <a mat-button mat-icon-button *ngIf="(isAuthenticated$ | async)" [matMenuTriggerFor]="userMenu"><mat-icon svgIcon="account_circle"></mat-icon></a>
  
    <mat-menu #userMenu="matMenu" overlapTrigger="false">
      <div class="userProfile">
          <h2 fxLayout style="margin:0; color: rgba(0,0,0,.87)">{{(user$ | async)?.fullName}}</h2>
          <span class="fieldName">HawkID:</span> {{(user$ | async)?.hawkId}}<br>
          <span class="fieldName">UnivID:</span> {{(user$ | async)?.univId}}
      </div>
      <mat-divider></mat-divider>
      <a mat-menu-item *ngIf="canImpersonate$ | async" ><mat-icon svgIcon="supervisor_account" aria-label="Logout"></mat-icon>
        <span>Impersonate</span>
      </a>
      <a mat-menu-item href="/account/Logout"><mat-icon svgIcon="exit_to_app" aria-label="Logout"></mat-icon>
        <span>Logout</span>
      </a>
    </mat-menu>
    `,
  styles: [ ".fieldName{display:inline-block; width:60px}",
            ".userProfile{min-width:200px; padding:0 16px 8px 16px; color: rgba(0,0,0,.54)}"
          ]
})
export class LoginButtonComponent implements OnInit {
  @Select(UserState) user$: Observable<User>;
  @Select(UserState.IsAuthenticated) isAuthenticated$: Observable<boolean>;
  @Select(PermissionsState.CanImpersonate) canImpersonate$: Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
  }

}
