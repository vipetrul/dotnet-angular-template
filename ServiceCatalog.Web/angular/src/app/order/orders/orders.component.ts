import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../services/order.service';
import { CreateOrderRequest } from '../models/create-order-request';
import { Order } from '../models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  showLoading = false;
  orders: Order[];
  selectedOrder: Order;
  createOrderRequest = new CreateOrderRequest('');
  
  constructor(
    private readonly orderService: OrderService,
    private readonly toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.showLoading = true;
    this.orderService.getOrders().subscribe(x => {
      this.orders = x;
      this.showLoading = false;
    });
  }

  open(content, order: Order) {
    this.selectedOrder = order;
    alert("Opening order: " + order.id)
  }

  deleteOrder() {
    const orderId = this.selectedOrder.id;
    this.orderService.deleteOrder(orderId).subscribe(x => {
      if (x) {
        this.orders = this.orders.filter(o => o.id !== orderId);
        this.toastr.success(`Order #${orderId} is removed.`);
        this.selectedOrder = null;
      } else {
        this.toastr.error(`Failed to remove order.`);
      }
    });
  }
  addOrder() {
    const errorMsg = this.createOrderRequest.validate();
    if (errorMsg) {
      this.toastr.error(errorMsg);
      return;
    }
    this.orderService.createOrder(this.createOrderRequest).subscribe(x => {
      this.orders.push(x);
      this.createOrderRequest = new CreateOrderRequest('');
      this.toastr.success(`New order created.`);
    });
  }
}
