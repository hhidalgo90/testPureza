import { Injectable } from '@angular/core';
import {Pregunta} from '../clases/pregunta';
import {PREGUNTAS} from '../clases/mock-preguntas';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';//Cliente http
<<<<<<< HEAD
import { catchError, map, tap } from 'rxjs/operators'; // Para capturar errores desde el servidor
=======
>>>>>>> 220ff1fb1f4a0439a2a747fbe7477172576533e0

@Injectable({
  providedIn: 'root'
})
export class ObtenerPreguntasService {

<<<<<<< HEAD
  private preguntasUrl = 'http://localhost:8080/testPurezaWeb/rest/testPureza/obtenerPreguntas';  // URL to web api
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.preguntasUrl).pipe(
      tap(preguntas => this.log(`preguntas obtenidas`)),
      catchError(this.handleError('getPreguntas', []))
    );
=======
  private preguntasUrl = 'api/preguntas';  // URL to web api
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.preguntasUrl)
>>>>>>> 220ff1fb1f4a0439a2a747fbe7477172576533e0
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('Obtener-preguntas-service: ' + message);
  }
<<<<<<< HEAD


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
=======
>>>>>>> 220ff1fb1f4a0439a2a747fbe7477172576533e0
}
