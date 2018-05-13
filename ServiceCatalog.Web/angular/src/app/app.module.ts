import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { UserService } from './core/services/user.service';
import { HomeComponent } from './home/home.component';
import { OrderModule } from './order/order.module';
import { SharedModule } from './shared/shared.module';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

export function appUserServiceFactory(userService: UserService): Function {
  return () => userService.getUser();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CoreModule,
    AppRoutingModule,
    OrderModule,
    SharedModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: appUserServiceFactory,
    deps: [UserService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
