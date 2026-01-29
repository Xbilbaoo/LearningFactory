import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user/UserService';
import { Auth } from '../../services/auth';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'user-edit.html',
  styleUrl: 'user-edit.scss'
})
export class UserEdit implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private userService = inject(UserService);
  private authService = inject(Auth);

  userId: string | number = '';
  currentUser = this.authService.currentUser(); // Obtenemos quién está logueado
  isAdmin = this.currentUser?.role === 'admin'; // Flag rápido

  editForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    role: ['user'], // Por defecto user
    avatar: [''],
    password: [''] // Mantenemos la pass oculta pero presente
  });

  ngOnInit() {
    // 1. Capturamos el ID y lo forzamos a String para evitar errores de tipo
    const idParam = this.route.snapshot.paramMap.get('id');
    this.userId = idParam ? String(idParam) : '';
  
    console.log('1. ID capturado de la URL:', this.userId); // ¿Sale un número o null?
  
    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe({
        next: (user) => {
          console.log('2. Datos recibidos de la API:', user); // ¿Llegan los datos?
          
          if (user) {
            // Intentamos poner los datos en el formulario
            this.editForm.patchValue(user);
            console.log('3. Formulario actualizado. Valor actual:', this.editForm.value);
          }
        },
        error: (err) => console.error('Error pidiendo usuario:', err)
      });
    } else {
      console.error('No se encontró ID en la URL');
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      // Si el campo role está deshabilitado (usuario normal), Angular no lo incluye en .value
      // Usamos .getRawValue() para incluir todo
      const updatedData = this.editForm.getRawValue() as unknown as User; 

      // Mantenemos el ID original
      const finalData = { ...updatedData, id: this.userId };

      this.userService.updateUser(this.userId, finalData).subscribe(() => {
        alert('Usuario actualizado correctamente');
        
        // Si se editó a sí mismo, actualizamos la sesión local
        if (this.userId == this.currentUser?.id) {
            localStorage.setItem('user_session', JSON.stringify(finalData));
            // Forzamos recarga o actualizamos señal (dependiendo de tu auth service)
            window.location.reload(); 
        }

        this.router.navigate([this.isAdmin ? '/dashboard' : '/home']);
      });
    }
  }

  cancel() {
    this.router.navigate([this.isAdmin ? '/dashboard' : '/home']);
  }
}
