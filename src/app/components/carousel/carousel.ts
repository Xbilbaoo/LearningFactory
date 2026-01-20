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
      image: '../../../../IMG/web_basura_orilla_4f151f7a30.png',
      thumbImage: '../../../../IMG/web_basura_orilla_4f151f7a30.png',
      title: 'Image 1',
      alt: 'Image 1',
      whidth: '500px'
    }, {
      image: '../../../../IMG/web_basura_orilla_4f151f7a30.png',
      thumbImage: '../../../../IMG/web_basura_orilla_4f151f7a30.png',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: '../../../../IMG/web_basura_orilla_4f151f7a30.png',
      thumbImage: '../../../../IMG/web_basura_orilla_4f151f7a30.png',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: '../../../../IMG/web_basura_orilla_4f151f7a30.png',
      thumbImage: '../../../../IMG/web_basura_orilla_4f151f7a30.png',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: '../../../../IMG/web_basura_orilla_4f151f7a30.png',
      thumbImage: '../../../../IMG/web_basura_orilla_4f151f7a30.png',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: '../../../../IMG/web_basura_orilla_4f151f7a30.png',
      thumbImage: '../../../../IMG/web_basura_orilla_4f151f7a30.png',
      title: 'Image 6',
      alt: 'Image 6'
    }
  ];

}
