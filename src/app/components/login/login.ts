import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { Auth } from '../../services/user/auth';

interface LoginData {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private authService = inject(Auth)

  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });
  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.password, { message: 'Password is required' });
  })

  onSubmit(event: Event) {
    event.preventDefault()
    submit(this.loginForm, async () => {
      const credentials = this.loginModel()
      await this.authService.login(credentials)
    });
  }
}
