import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransferService } from '../transfer/transfer.service';

@Injectable({
  providedIn: 'root',
})
export class MailServiceService {
  constructor(private http: HttpClient) {}

  sendMail(email: string, fromDate: string, toDate: string): Observable<any[]> {
    const baseURL = `http://192.168.0.108:8080/send/${email}/${fromDate}/${toDate}`;

    return this.http.get<any[]>(baseURL);
  }
}
