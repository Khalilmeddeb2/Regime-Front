import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMarketingComponent } from './contact-marketing.component';

describe('ContactMarketingComponent', () => {
  let component: ContactMarketingComponent;
  let fixture: ComponentFixture<ContactMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
