import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeCoachComponent } from './demande-coach.component';

describe('DemandeCoachComponent', () => {
  let component: DemandeCoachComponent;
  let fixture: ComponentFixture<DemandeCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
