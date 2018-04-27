import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrderService } from './services/order.service';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [OrdersComponent],
  providers: [OrderService],
  exports:[]
})
export class OrderModule { }
