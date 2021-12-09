import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-coach',
  templateUrl: './navbar-coach.component.html',
  styleUrls: ['./navbar-coach.component.css']
})
export class NavbarCoachComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logoutUser()
  {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])

  }

}
