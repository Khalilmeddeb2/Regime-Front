import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidRdvComponent } from './valid-rdv.component';

describe('ValidRdvComponent', () => {
  let component: ValidRdvComponent;
  let fixture: ComponentFixture<ValidRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
