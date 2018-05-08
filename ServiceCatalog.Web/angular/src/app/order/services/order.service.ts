import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { CreateOrderRequest } from '../models/create-order-request';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
  private orders$: Observable<Order[]> = null;
  private readonly api = `api/orders`;
  constructor(private readonly httpClient: HttpClient) {}

  getOrders(): Observable<Order[]> {
    alert("getting orders");
    return this.orders$;
  }

  createOrder(request: CreateOrderRequest): Observable<Order> {
    this.orders$ = null;
    return this.httpClient.post<Order>(this.api, request);
  }

  deleteOrder(id: number): Observable<boolean> {
    this.orders$ = null;
    return this.httpClient.delete<boolean>(`${this.api}/${id}`);
  }
}
