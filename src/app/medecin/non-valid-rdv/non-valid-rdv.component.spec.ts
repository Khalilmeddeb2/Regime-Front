import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonValidRdvComponent } from './non-valid-rdv.component';

describe('NonValidRdvComponent', () => {
  let component: NonValidRdvComponent;
  let fixture: ComponentFixture<NonValidRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonValidRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonValidRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
