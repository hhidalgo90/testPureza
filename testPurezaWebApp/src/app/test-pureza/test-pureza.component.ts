import { Component, OnInit } from '@angular/core';
import {PREGUNTAS} from '../clases/mock-preguntas';
import {ObtenerPreguntasService} from '../services/obtener-preguntas.service';
import { Pregunta } from '../clases/pregunta';
import { Location } from '@angular/common';


@Component({
  selector: 'app-test-pureza',
  templateUrl: './test-pureza.component.html',
  styleUrls: ['./test-pureza.component.css']
})
export class TestPurezaComponent implements OnInit {
  titulo = 'inicio test pureza';

  //Declaracion de variable que se le asignaran las preguntas obtenidas desde un servicio.
  preguntas : Pregunta[];


  constructor(private obtenerPreguntasService : ObtenerPreguntasService,private location: Location ) { }

  ngOnInit() {
    this.getPreguntas();
  }

  //Obtiene preguntas desde un servicio
  getPreguntas(): void{
    this.obtenerPreguntasService.getPreguntas().subscribe(preguntas=>this.preguntas = preguntas);
  }

  //Volver atras
  goBack(): void {
  console.log("llegue a goback");
  this.location.back();
  }

}
