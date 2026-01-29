import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})

export class UserService {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/users';

  // 1. CREATE (Crear)
  createUser(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // 2. READ (Leer todos)
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // 2.1 READ (Leer uno por ID)
  getUserById(id: string | number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
  
  updateUser(id: string | number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  // 4. DELETE (Eliminar)
  deleteUser(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
