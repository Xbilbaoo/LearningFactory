import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Compra } from './components/compra/compra';
import { Landing } from './components/landing/landing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Compra],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LearningFactory');
}
