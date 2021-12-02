import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-liste-medecin',
  templateUrl: './liste-medecin.component.html',
  styleUrls: ['./liste-medecin.component.css']
})
export class ListeMedecinComponent implements OnInit {

  medecins : User[];

  constructor(private userService : UserServiceService, private router: Router) {
    this.medecins = []
   }

  ngOnInit(): void {
    this.getMedecins();
  }

  private getMedecins()
  {
    this.userService.getAllMedecins().subscribe(data => {
      this.medecins = data;
      console.log(data);
    })
  }

}
