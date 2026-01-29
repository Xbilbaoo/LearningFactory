import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { Carousel } from '../carousel/carousel';
import { Router, RouterLink } from '@angular/router';

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
  
  constructor(private router: Router){}

  navigate(where: string) {

    switch (where) {
      case "form":

        this.router.navigate(['/Form'])
        break
    }

}}
