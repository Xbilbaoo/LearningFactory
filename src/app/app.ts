import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { SobreNosotros } from "./sobre-nosotros/sobre-nosotros";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formulario, SobreNosotros],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LearningFactory');
}
