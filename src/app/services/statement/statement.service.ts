import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatementService {
  baseURL =
    'http://192.168.0.108:8080/fetch/custom/vijay84@gmail.com/2020-01-01/2021-12-31';

  constructor(private http: HttpClient) {}

  fetchTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL);
  }
}
