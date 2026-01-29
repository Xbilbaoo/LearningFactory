import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

texto1 = false;
texto2 = false;
/*Recibe numero del html y dependiendo de el muestra un texto u otro*/
descripcion(cardNum : number) {

  switch (cardNum) {

    case 1:

    this.texto1 = !this.texto1
    break;

    case 2:

    this.texto2 = !this.texto2
    break;

  }
}

}
