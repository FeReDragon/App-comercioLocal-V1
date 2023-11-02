import { TestBed } from '@angular/core/testing';

import { TrocasDoacoesService } from './trocas-doacoes.service';

describe('TrocasDoacoesService', () => {
  let service: TrocasDoacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrocasDoacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
