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

}
