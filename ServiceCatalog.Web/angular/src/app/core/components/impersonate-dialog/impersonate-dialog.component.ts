import { Component, OnInit } from '@angular/core';
import { UserState, User } from '../../states/User.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { PermissionsState } from '../../states/Permissions.state';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'login-button-impersonate-dialog',
  template: `
  <h1 mat-dialog-title>Who to impersonate?</h1>
  <mat-dialog-content >
    <mat-form-field style="width:100%">
      <input #hawkIdToImpersonate matInput placeholder="HawkId">
    </mat-form-field>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button mat-dialog-close>Cancel</button>
    <a mat-button [disabled]="!hawkIdToImpersonate.value" [attr.href]="'/account/impersonate/' + hawkIdToImpersonate.value">Ok</a>
  </mat-dialog-actions>
  `,
  styles: []
})

export class ImpersonateDialog {

  constructor() { }
}





