import { Injectable } from '@angular/core';
import {Pregunta} from '../clases/pregunta';
import {PREGUNTAS} from '../clases/mock-preguntas';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';//Cliente http
import { catchError, map, tap } from 'rxjs/operators'; // Para capturar errores desde el servidor


@Injectable({
  providedIn: 'root'
})
export class ObtenerPreguntasService {

  private preguntasUrl = 'http://localhost:8080/testPurezaWeb/rest/testPureza/obtenerPreguntas';  // URL to web api

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('Obtener-preguntas-service: ' + message);
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.preguntasUrl).pipe(
      tap(preguntas => this.log(`preguntas obtenidas`)),
      catchError(this.handleError('getPreguntas', []))
    ); 

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
