import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule, PlatformLocation } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

import { UserService } from './services/user.service';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { HawkidLoginService } from './services/hawkid-login.service';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { BasicUserRoleGuard } from './guards/basic-user-role.guard';
import { AdminUserRoleGuard } from './guards/admin-user-role.guard.1';
import { AppErrorHandler } from './services/app-errror-handler';

export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [AppFooterComponent, AccessDeniedComponent],
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
    UserService,
    BasicUserRoleGuard,
    AdminUserRoleGuard
  ],
  exports: [AppFooterComponent, AccessDeniedComponent]
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
