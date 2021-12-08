import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-navbar-customer',
  templateUrl: './navbar-customer.component.html',
  styleUrls: ['./navbar-customer.component.css']
})
export class NavbarCustomerComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logoutUser()
  {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])

  }

}
