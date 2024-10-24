import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, User } from '../Interfaces/Auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  //private apiUrl = 'http://localhost:8085/api/auth'; // Cambia por tu API
  private apiUrl = 'http://localhost:8089/auth'; // Cambia por tu API

    // Método register
    register(data: User): Observable<any> {
      return this.http.post<any>(this.apiUrl+'/register', data);
    }

    // Método register
    login(data: Login): Observable<any> {
      return this.http.post<any>(this.apiUrl+'/login', data);
    }
}
