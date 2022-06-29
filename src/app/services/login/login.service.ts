import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseURL = 'http://192.168.0.108:8080/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any[]> {
    email = 'vijay84@gmail.com';
    password = 'Password';

    return this.http.post<any[]>(this.baseURL, {
      email,
      password,
    });
  }
}
