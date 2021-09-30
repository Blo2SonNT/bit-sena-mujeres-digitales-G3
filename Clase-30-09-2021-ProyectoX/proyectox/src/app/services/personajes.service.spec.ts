import { TestBed } from '@angular/core/testing';

import { PersonajesService } from './personajes.service';

describe('PersonajesService', () => {
  let service: PersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
