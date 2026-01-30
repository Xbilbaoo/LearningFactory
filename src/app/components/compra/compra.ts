import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { Carousel } from '../carousel/carousel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  imports: [NgImageSliderModule, Carousel],
  templateUrl: './compra.html',
  styleUrl: './compra.scss',
})

export class Compra {

  constructor(private router: Router) { }

  imagenActual: string = '../../../../IMG/fotos/Plastic-pelletizing-machine-2.jpg';
  imagenAnterior: string = '../../../../IMG/fotos/Plastic-pelletizing-machine-2.jpg';
  vision = true;

  cambiarImagen(img: string) {
    this.imagenActual = img;
    if (this.vision) {
      this.vision = false;
    }
  }

  imagenb(img: string) {
    this.imagenAnterior = this.imagenActual;
    this.vision = true;

    if (this.vision) {
      this.imagenActual = img;
    }
  }

  imagena() {
    if (this.vision) {
      this.imagenActual = this.imagenAnterior;
    }
  }



  navigate() { this.router.navigate(['/Formulario']); }
}
