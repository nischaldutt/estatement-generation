import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatementService {
  constructor(private http: HttpClient) {}

  fetchTransactions(
    email: string,
    fromDate: string,
    toDate: string
  ): Observable<any[]> {
    const baseURL = `http://192.168.0.108:8080/fetch/custom/${email}/${fromDate}/${toDate}`;
    return this.http.get<any[]>(baseURL);
  }

  downloadPdfDocument(
    email: string,
    fromDate: string,
    toDate: string
  ): Observable<Blob> {
    const baseURL = `http://192.168.0.108:8080/pdfreport/${email}/${fromDate}/${toDate}`;
    return this.http.get<Blob>(baseURL, {
      headers: {
        'Content-Type': 'application/pdf',
      },
      responseType: 'blob' as 'json',
    });
  }
}
