import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import { Order } from '../models/order';
import { CreateOrderRequest } from '../models/create-order-request';

@Injectable()
export class OrderService {
  private orders$: Observable<Order[]> = null;
  private readonly api = `api/orders`;
  constructor(private readonly httpClient: HttpClient) {}

  getOrders(): Observable<Order[]> {
    if (!this.orders$) {
      this.orders$ = this.httpClient
        .get<Order[]>(this.api)
        .publishReplay(1)
        .refCount();
    }
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
