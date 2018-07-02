import { TestBed, inject } from '@angular/core/testing';

import { ObtenerPreguntasService } from './obtener-preguntas.service';

describe('ObtenerPreguntasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObtenerPreguntasService]
    });
  });

  it('should be created', inject([ObtenerPreguntasService], (service: ObtenerPreguntasService) => {
    expect(service).toBeTruthy();
  }));
});
