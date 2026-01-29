import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map, of } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:3000/users';

  // Signal para saber quién está logueado y reaccionar en la UI
  currentUser = signal<User | null>(this.getUserFromStorage());

  login(username: string, password: string): Observable<boolean> {
    // TRUCO JSON-SERVER: Filtramos por username y password
    return this.http.get<User[]>(`${this.apiUrl}?username=${username}&password=${password}`)
      .pipe(
        map(users => {
          if (users.length > 0) {
            const user = users[0];
            this.setSession(user);
            return true;
          }
          return false;
        })
      );
  }

  logout() {
    localStorage.removeItem('user_session');
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  // Métodos auxiliares privados
  private setSession(user: User) {
    // Guardamos en localStorage para no perder la sesión al recargar
    localStorage.setItem('user_session', JSON.stringify(user));
    this.currentUser.set(user);
  }

  private getUserFromStorage(): User | null {
    const stored = localStorage.getItem('user_session');
    return stored ? JSON.parse(stored) : null;
  }
}
