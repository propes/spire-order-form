import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { Order } from "../models/order.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class OrderService {
   constructor (
      private http: Http,
      @Inject('BASE_URL') private baseUrl: string
   ) { }

   getOrders(companyName: string): Observable<any> {
      return this.http.get(`${this.baseUrl}api/Orders/Companies/${companyName}`);
   }

   createOrder(order: Order): Observable<any> {
      return this.http.post(`${this.baseUrl}api/Orders/Create`, order);
   }
}