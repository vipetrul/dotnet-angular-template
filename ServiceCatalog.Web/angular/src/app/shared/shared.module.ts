import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Router } from '@angular/router'; 
import { MaterialModule } from './modules/material.module';

import { faBars } from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';
fontawesome.library.add(faBars);

import { BrandingBarComponent } from './components/branding-bar/branding-bar.component';
import { ImpersonateDialog } from './components/impersonate-dialog/impersonate-dialog.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { MoreButtonComponent } from './components/more-button/more-button.component';


@NgModule({
  declarations: [
    BrandingBarComponent,
    ImpersonateDialog,
    LoginButtonComponent,
    MoreButtonComponent,
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
    BrandingBarComponent,
    ImpersonateDialog,
    LoginButtonComponent,
    MoreButtonComponent,
  ],
})
export class SharedModule { }
