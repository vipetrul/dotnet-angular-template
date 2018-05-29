import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Router } from '@angular/router'; 
import { MaterialModule } from './material.module';

import { faBars } from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';
fontawesome.library.add(faBars);

import { ImpersonateDialog } from './components/impersonate-dialog/impersonate-dialog.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';


@NgModule({
  declarations: [
    ImpersonateDialog,
    LoginButtonComponent,
  ],
  entryComponents: [
    ImpersonateDialog
  ],
  imports: [
    CommonModule,
    HttpClientModule, 
    FormsModule, 
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    CommonModule, 
    FormsModule, 
    FlexLayoutModule,
    MaterialModule,
    ImpersonateDialog,
    LoginButtonComponent,
  ],
})
export class SharedModule { }
