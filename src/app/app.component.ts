import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  features:
    {
      id: number,
      image: string,
      title: string, 
      description: string
    }[] = [
    { 
      id: 0,
      image: "image.jpg",
      title: "Feature", 
      description: "Description" 
    }
  ]

  constructor() {
    this.title = 'jugador(a)';
    this.features = [
      { 
        id: 1,
        image: "image.jpg",
        title: "Reserva", 
        description: "Puedes reservar" 
      },
      { 
        id: 2,
        image: "image.jpg",
        title: "Pago", 
        description: "Puedes pagar" 
      },
    ]
  }
}
