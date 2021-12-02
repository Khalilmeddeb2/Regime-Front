import { TestBed } from '@angular/core/testing';

import { ContactMarketingService } from './contact-marketing.service';

describe('ContactMarketingService', () => {
  let service: ContactMarketingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactMarketingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
