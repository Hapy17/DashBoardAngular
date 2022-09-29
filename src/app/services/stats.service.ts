import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TotalSales } from '../models/total-sales';
import { TotalOrders } from '../models/total-orders';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  url = environment.api

  constructor(private httpCLient :  HttpClient) { }

  getTotalSales(): Observable<TotalSales>{
    return this.httpCLient.get<TotalSales>(this.url +'api/total-sales');
  }

  getTotalOrders(): Observable<TotalOrders>{
    return this.httpCLient.get<TotalOrders>(this.url +'api/total-orders');
  }

}
