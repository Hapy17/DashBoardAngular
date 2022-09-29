import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stats } from '../models/stats';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  urlStats = environment.api

  constructor(private httpCLient :  HttpClient) { }

  getStats(): Observable<Stats>{
    return this.httpCLient.get<Stats>(this.urlStats + "stats");
  }

}
