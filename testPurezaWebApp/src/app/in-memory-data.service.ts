import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const preguntas = [
      { id: 1, glosa: 'Cual es el nombre:' ,
      opciones : ['A','B','C','D']},
      { id: 2, glosa: 'Cual es su edad:' ,
      opciones : ['A','B','C','D']},
      { id: 3, glosa: 'Cual es el nombre de su Madre',
      opciones : ['A','B','C','D']},
      { id: 4, glosa: 'Es usted hombre o mujer' ,
      opciones : ['A','B','C','D']}
    ];
    return {preguntas};
  }
}
