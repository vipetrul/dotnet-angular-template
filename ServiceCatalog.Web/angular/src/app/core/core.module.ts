import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule, PlatformLocation } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

import { HawkidLoginService } from './services/hawkid-login.service';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AppErrorHandler } from './services/app-errror-handler';
import { SharedModule } from '../shared/shared.module';
import { LoginButtonComponent } from './components/login-button/login-button.component';

export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  declarations: [AccessDeniedComponent, LoginButtonComponent],
  providers: [
    {
      provide: 'baseUri',
      useFactory: getBaseHref,
      deps: [PlatformLocation]
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    HawkidLoginService,
  ],
  exports: [AccessDeniedComponent, LoginButtonComponent]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    core: CoreModule
  ) {
    if (core) {
      throw new Error('Core Module can only be imported in AppModule.');
    }
  }
}
