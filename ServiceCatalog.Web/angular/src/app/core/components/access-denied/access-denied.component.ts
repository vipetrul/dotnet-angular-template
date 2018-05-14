import { Component, OnInit } from '@angular/core';
import { HawkidLoginService } from '../../services/hawkid-login.service';

@Component({
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.css']
})
export class AccessDeniedComponent implements OnInit {
  constructor(
    private readonly loginService: HawkidLoginService
  ) {}

  ngOnInit() {}
  login() {
    this.loginService.login();
  }
}
