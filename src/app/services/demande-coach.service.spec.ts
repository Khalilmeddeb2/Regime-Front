import { TestBed } from '@angular/core/testing';

import { DemandeCoachService } from './demande-coach.service';

describe('DemandeCoachService', () => {
  let service: DemandeCoachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeCoachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
