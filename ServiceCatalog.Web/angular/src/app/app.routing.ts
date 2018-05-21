import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './order/orders/orders.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'Page2',
    component: Page2Component
  },
  {
    path: 'Page3',
    component: Page3Component
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    //,{ enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
