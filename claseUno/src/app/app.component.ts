import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { ConsoleReporter } from 'jasmine';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected edadUno: string = "0";
  protected edadDos: string = "0";
  protected suma : string = "0";
  protected promedio : string = "0";
  calcular(){
    this.suma= (parseInt(this.edadUno) + parseInt(this.edadDos)).toString();
    this.promedio= ((parseInt(this.edadUno) + parseInt(this.edadDos))/2).toString();
  }
  limpiar(){
    this.suma= "0";
    this.promedio= "0";
    this.edadDos="0";
    this.edadUno="0";
  }

}
/*
1- (app.component.html) Realizar:
  Una aplicación que se le ingresen dos edades en dos cuadro de textos
  edadUno, EdadDos
  mostrar el promedio y la suma en dos cuadros de textos nuevos
  botones "calcular" y "limpiar cuadros de textos"
*/ 