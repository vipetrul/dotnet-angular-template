import { Component, OnInit } from '@angular/core';
import { UserState, User } from '../../states/User.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'login-button',
  template: `
    <a mat-button *ngIf="!(isAuthenticated$ | async)" href="account/Login">Login</a>
    <a mat-button *ngIf="(isAuthenticated$ | async)" fxHide.xs [matMenuTriggerFor]="userMenu"><mat-icon svgIcon="person" ></mat-icon>{{(user$ | async).hawkId}}</a>
    <a mat-button mat-icon-button *ngIf="(isAuthenticated$ | async)" fxHide.gt-xs [matMenuTriggerFor]="userMenu"><mat-icon svgIcon="person"></mat-icon></a>
  
    <mat-menu #userMenu="matMenu" overlapTrigger="false">
      <button mat-menu-item style="min-width:200px"><mat-icon svgIcon="exit_to_app" aria-label="Logout"></mat-icon>
        <span>Logout</span>
      </button>
    </mat-menu>
    `,
  styles: []
})
export class LoginButtonComponent implements OnInit {
  @Select(UserState) user$: Observable<User>;
  @Select(UserState.IsAuthenticated) isAuthenticated$: Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
  }

}
