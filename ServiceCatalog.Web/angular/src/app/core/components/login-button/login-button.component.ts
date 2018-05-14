import { Component, OnInit } from '@angular/core';
import { UserState, User } from '../../states/User.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'login-button',
  template: `
    <a mat-button href="account/Login">Login</a>
  `,
  styles: []
})
export class LoginButtonComponent implements OnInit {
  @Select(UserState) user$: Observable<User>;

  constructor() {
   }

  ngOnInit() {
  }

}
