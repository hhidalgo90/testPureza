import { Injectable } from '@angular/core';
import {Pregunta} from '../clases/pregunta';
import {RespuestaServidor} from '../clases/respuesta-servidor';
import {PREGUNTAS} from '../clases/mock-preguntas';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';//Cliente http
import { catchError, map, tap } from 'rxjs/operators'; // Para capturar errores desde el servidor

//constantes van afuera de la declaracion de la clase.
const cabecera = {
headers: new HttpHeaders({
  'Content-Type':'application/json'
})
};

@Injectable({
  providedIn: 'root'
})
export class GuardarRespuestasService {

  private preguntasUrl = 'http://localhost:8080/testPurezaWeb/rest/testPureza/recibirRespuestas';  // URL to web api
  private json = '';



  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('GuardarRespuestasService: ' + message);
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }

//Metodo que envia datos al servidor mediante post.
//Recibe parametro llamado respuestas pero que son del mismo tipo que las preguntas, se usa la misma clase para persistir datos.
//Pregunta[] es el parametro de entrada y RespuestaServidor[] es la salida desde el servidor.
  guardarRespuestas(respuestas : Pregunta[]): Observable<RespuestaServidor[]> {
  console.log("Respuestas a enviar: " + respuestas);
  console.log("Respuestas en String: " + JSON.stringify(respuestas));
  console.log("Respuestas en Json: " + JSON.parse(JSON.stringify(respuestas)));
  this.json = JSON.stringify(respuestas);
    return this.http.post<RespuestaServidor[]>(this.preguntasUrl, this.json, cabecera).pipe(
      tap(preguntas => this.log('Respuestas guardadas con exito!')),
      catchError(this.handleError('guardarRespuestas', []))
    );
  }

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
