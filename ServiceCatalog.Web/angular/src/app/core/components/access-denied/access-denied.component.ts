import { Component, OnInit } from '@angular/core';
import { HawkidLoginService } from '../../services/hawkid-login.service';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.css']
})
export class AccessDeniedComponent implements OnInit {
  constructor(
    private readonly loginService: HawkidLoginService,
    public readonly userService: UserService
  ) {}

  ngOnInit() {}
  login() {
    this.loginService.login();
  }
}
