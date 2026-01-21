import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Compra } from './components/compra/compra';
import { Landing } from './components/landing/landing';
import { Formulario } from "./components/formulario/formulario";
import { SobreNosotros } from "./components/sobre-nosotros/sobre-nosotros";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Compra, Header, Landing, Formulario, SobreNosotros],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LearningFactory');
}
