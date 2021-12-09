import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-medecin',
  templateUrl: './navbar-medecin.component.html',
  styleUrls: ['./navbar-medecin.component.css']
})
export class NavbarMedecinComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logoutUser()
  {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])

  }

}
