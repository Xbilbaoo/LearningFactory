import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user/UserService';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {

  private userService = inject(UserService);
  
  // Usamos una Signal para almacenar los usuarios
  users = signal<User[]>([]);

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => this.users.set(data),
      error: (err) => console.error('Error cargando usuarios', err)
    });
  }

  deleteUser(id: string | number) {
    this.userService.deleteUser(id).subscribe(() => {
      // Actualizamos la señal localmente para no recargar toda la lista
      this.users.update(currentUsers => currentUsers.filter(u => u.id !== id));
    });
  }

  createNewUser() {
    const newUser = {
      username: 'nuevo_user',
      email: 'nuevo@test.com',
      fullName: 'Usuario Nuevo',
      role: 'user' as const,
      password: '123',
      avatar: 'https://via.placeholder.com/150'
    };

    this.userService.createUser(newUser).subscribe(userCreated => {
      this.users.update(current => [...current, userCreated]);
    });
  }
}
