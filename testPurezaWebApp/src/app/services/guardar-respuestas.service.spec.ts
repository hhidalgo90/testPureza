import { TestBed, inject } from '@angular/core/testing';

import { GuardarRespuestasService } from './guardar-respuestas.service';

describe('GuardarRespuestasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardarRespuestasService]
    });
  });

  it('should be created', inject([GuardarRespuestasService], (service: GuardarRespuestasService) => {
    expect(service).toBeTruthy();
  }));
});
