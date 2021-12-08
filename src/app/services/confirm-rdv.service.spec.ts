import { TestBed } from '@angular/core/testing';

import { ConfirmRdvService } from './confirm-rdv.service';

describe('ConfirmRdvService', () => {
  let service: ConfirmRdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmRdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
