import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatementService {
  baseURL = 'http://localhost:4000/transactions';

  constructor(private http: HttpClient) {}

  fetchTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL);
  }
}
