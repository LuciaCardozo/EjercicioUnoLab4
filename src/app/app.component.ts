import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  edadUno: any;
  edadDos: any;
  resultado: number = 0;
  promedio: number = 0;

  calcular() {
    this.resultado = (this.edadUno+this.edadDos);
    this.promedio = (this.edadUno+this.edadDos) / 2;
  }

  clear() {
    this.edadUno = undefined;
    this.edadDos = undefined;
    this.resultado = 0;
    this.promedio = 0;  
  }
}
