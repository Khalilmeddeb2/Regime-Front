import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMedecinComponent } from './navbar-medecin.component';

describe('NavbarMedecinComponent', () => {
  let component: NavbarMedecinComponent;
  let fixture: ComponentFixture<NavbarMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
