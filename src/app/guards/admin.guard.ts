import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  
  // Obtenemos el usuario actual de la Signal
  const user = authService.currentUser();

  // Verificamos si existe el usuario Y si es admin
  if (user && user.role === 'admin') {
    return true; // Acceso concedido
  }

  // Si no es admin (o no está logueado)
  if (user) {
    // Si está logueado pero es 'user', lo mandamos a una pagina de "Acceso Denegado" o Home
    alert('Acceso restringido: Solo para Administradores'); // Opcional: Feedback visual rápido
    router.navigate(['/home-user']); 
    
  } else {
    // Si ni siquiera está logueado
    router.navigate(['/login']);
  }
  
  return false;
};