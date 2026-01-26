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
  
  constructor(private router: Router){}

  navigate(where: string) {

    switch (where) {
      case "form":

        this.router.navigate(['/Form'])
        break
    }

}}
