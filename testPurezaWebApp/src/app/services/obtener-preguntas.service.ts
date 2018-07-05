import { Injectable } from '@angular/core';
import {Pregunta} from '../clases/pregunta';
import {PREGUNTAS} from '../clases/mock-preguntas';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';//Cliente http

@Injectable({
  providedIn: 'root'
})
export class ObtenerPreguntasService {

  private preguntasUrl = 'api/preguntas';  // URL to web api
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.preguntasUrl)
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('Obtener-preguntas-service: ' + message);
  }
}
