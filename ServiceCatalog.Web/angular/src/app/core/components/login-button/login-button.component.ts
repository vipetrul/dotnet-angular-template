import { Component, OnInit } from '@angular/core';
import { UserState, User } from '../../states/User.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'login-button',
  template: `
    <a mat-button *ngIf="!(isAuthenticated$ | async)" href="account/Login">Login</a>
    <a mat-button *ngIf="(isAuthenticated$ | async)" fxHide.xs><mat-icon svgIcon="person"></mat-icon>{{(user$ | async).hawkId}}</a>
    <a mat-button mat-icon-button *ngIf="(isAuthenticated$ | async)" fxHide.gt-xs><mat-icon svgIcon="person"></mat-icon></a>
  `,
  styles: []
})
export class LoginButtonComponent implements OnInit {
  @Select(UserState) user$: Observable<User>;
  @Select(UserState.IsAuthenticated) isAuthenticated$ : Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
  }

}
