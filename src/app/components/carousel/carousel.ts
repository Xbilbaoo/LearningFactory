import { Component} from '@angular/core';
import { NgImageSliderModule } from "ng-image-slider";
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [NgImageSliderModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})

export class Carousel implements OnInit{
  constructor(){}

  ngOnInit(): void {

  }

  imgCollection: Array<object> = [
    {
      image: '../../../../IMG/fotos/Plastic-pelletizing-machine-2.jpg',
      thumbImage: '../../../../IMG/fotos/Plastic-pelletizing-machine-2.jpg',
      title: 'Image 1',
      alt: 'Image 1',
      whidth: '500px'
    }, {
      image: '../../../../IMG/fotos/Captura de pantalla 2026-01-30 101034.png',
      thumbImage: '../../../../IMG/fotos/Captura de pantalla 2026-01-30 101034.png',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: '../../../../IMG/fotos/Captura de pantalla 2026-01-30 101329.png',
      thumbImage: '../../../../IMG/fotos/Captura de pantalla 2026-01-30 101329.png',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: '../../../../IMG/fotos/Captura de pantalla 2026-01-30 101446.png',
      thumbImage: '../../../../IMG/fotos/Captura de pantalla 2026-01-30 101446.png',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: '../../../../IMG/fotos/Plastic-pelletizing-machine-2.jpg',
      thumbImage: '../../../../IMG/fotos/Plastic-pelletizing-machine-2.jpg',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: '../../../../IMG/fotos/Captura de pantalla 2026-01-30 101446.png',
      thumbImage: '../../../../IMG/fotos/Captura de pantalla 2026-01-30 101446.png',
      title: 'Image 6',
      alt: 'Image 6'
    }
  ];

}
