import { TestBed } from '@angular/core/testing';

import {  PaisesService  } from './paises';

describe('Paises', () => {
  let service:  PaisesService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject( PaisesService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
