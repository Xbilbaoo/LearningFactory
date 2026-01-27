import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})

export class Auth {


  
  private usersURL = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.usersURL)
  }

  login(credentials: LoginData) {

    
  }
}
