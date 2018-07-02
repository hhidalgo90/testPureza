import { Injectable } from '@angular/core';
import {Pregunta} from '../clases/pregunta';
import {PREGUNTAS} from '../clases/mock-preguntas';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerPreguntasService {

getPreguntas(): Observable<Pregunta[]> {
  return of (PREGUNTAS);
}
  constructor() { }
}
