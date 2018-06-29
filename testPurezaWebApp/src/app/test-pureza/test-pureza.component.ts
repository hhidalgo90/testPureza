import { Component, OnInit } from '@angular/core';
import {Preguntas} from '../clases/preguntas';

@Component({
  selector: 'app-test-pureza',
  templateUrl: './test-pureza.component.html',
  styleUrls: ['./test-pureza.component.css']
})
export class TestPurezaComponent implements OnInit {

  preguntas : Preguntas = {
    id: 1,
    glosa: 'Glosa de la pregunta'
  };

  constructor() { }

  ngOnInit() {
  }

}
