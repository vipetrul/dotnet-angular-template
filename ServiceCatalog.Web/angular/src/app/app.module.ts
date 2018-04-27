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

export function appUserServiceFactory(userService: UserService): Function {
  return () => userService.getUser();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CoreModule,
    AppRoutingModule,
    OrderModule
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
