import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule, PlatformLocation } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

import { AppErrorHandler } from './services/app-errror-handler';
import { SharedModule } from '../shared/shared.module';


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
  declarations: [],
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
  ],
  exports: []
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
