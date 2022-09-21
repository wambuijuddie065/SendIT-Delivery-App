import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginInterface, SignupInterface } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signupUrl = 'http://localhost:5000/clients/register';
  loginUrl = 'http://localhost:5000/clients/login';
  ClientsUrl='http://localhost:5000/clients'

  getToken() {
    return localStorage.getItem('token');
  }

  constructor(private http: HttpClient, private router: Router) {}

  signUp(client: SignupInterface): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.signupUrl}`, client);
  }
  getclients(): Observable<SignupInterface[]> {
    return this.http.get<SignupInterface[]>(`${this.ClientsUrl}`);
  }
  login(client: LoginInterface): Observable<LoginInterface> {
    return this.http.post<LoginInterface>(`${this.loginUrl}`, client);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
  isLoggedIn(){
    return !!localStorage.getItem('token')
  }
 
}
