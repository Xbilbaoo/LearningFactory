import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-compra',
  imports: [NgImageSliderModule, Carousel],
  templateUrl: './compra.html',
  styleUrl: './compra.scss',
})

export class Compra {
imagenActual: string = '../../../../IMG/web_basura_orilla_4f151f7a30.png';
imagenAnterior: string = '../../../../IMG/web_basura_orilla_4f151f7a30.png';
vision = true;

cambiarImagen(img : string) {
  this.imagenActual=img;
  if(this.vision){
    this.vision = false
  }
}

imagenb(img : string){
  this.imagenAnterior = this.imagenActual;
  this.vision =true

  if(this.vision){
    this.imagenActual=img;
  }
}

imagena(){
  if(this.vision){
    this.imagenActual=this.imagenAnterior;
  }
}

}
