import { Component, OnInit } from '@angular/core';
import {PREGUNTAS} from '../clases/mock-preguntas';
import {ObtenerPreguntasService} from '../services/obtener-preguntas.service';
import {GuardarRespuestasService} from '../services/guardar-respuestas.service';
import { Pregunta } from '../clases/pregunta';
import {RespuestaServidor} from '../clases/respuesta-servidor';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-test-pureza',
  templateUrl: './test-pureza.component.html',
  styleUrls: ['./test-pureza.component.css']
})
export class TestPurezaComponent implements OnInit {
  name = new FormControl();
  titulo = 'inicio test pureza';

  //Declaracion de variable que se le asignaran las preguntas obtenidas desde un servicio.
  preguntas : Pregunta[];
  respuestaServer : RespuestaServidor[];


  constructor(private obtenerPreguntasService : ObtenerPreguntasService,private guardarRespuestasService: GuardarRespuestasService,private location: Location ) { }

  ngOnInit() {
    this.getPreguntas();
  }

  //Obtiene preguntas desde un servicio REST
  getPreguntas(): void{
    this.obtenerPreguntasService.getPreguntas().subscribe(preguntas=>this.preguntas = preguntas);
  }

//En el subscribe this.respuestaServer es el tipo de retorno del metodo, y se le puede asignar cualquier nombre, en este caso respuesta.
  guardarRespuestas(){
  console.log("llegue a guardarRespuestas: respuestas " + this.preguntas.values);
    return  this.guardarRespuestasService.guardarRespuestas(this.preguntas).subscribe(respuestaServer=>this.respuestaServer);
  }

  //Volver atras
  goBack(): void {
  console.log("llegue a goback");
  this.location.back();
  }

}
