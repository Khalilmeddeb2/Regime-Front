import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMedecinComponent } from './footer-medecin.component';

describe('FooterMedecinComponent', () => {
  let component: FooterMedecinComponent;
  let fixture: ComponentFixture<FooterMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
