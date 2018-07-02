import { Component, OnInit } from '@angular/core';
import {PREGUNTAS} from '../clases/mock-preguntas';
import {ObtenerPreguntasService} from '../services/obtener-preguntas.service';
import { Pregunta } from '../clases/pregunta';

@Component({
  selector: 'app-test-pureza',
  templateUrl: './test-pureza.component.html',
  styleUrls: ['./test-pureza.component.css']
})
export class TestPurezaComponent implements OnInit {
  titulo = 'inicio test pureza';


  preguntas : Pregunta[];


  constructor(private obtenerPreguntasService : ObtenerPreguntasService ) { }

  getPreguntas(): void{
    this.obtenerPreguntasService.getPreguntas().subscribe(preguntas=>this.preguntas = preguntas);
  }

  ngOnInit() {
    this.getPreguntas();
  }

}
