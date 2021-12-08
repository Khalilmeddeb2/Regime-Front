import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-medecin-home',
  templateUrl: './medecin-home.component.html',
  styleUrls: ['./medecin-home.component.css']
})
export class MedecinHomeComponent implements OnInit {
  patients: User[];

  constructor(private serviceMedecin : MedecinService,private router : Router ) {
    this.patients = [];    
   }

  ngOnInit(): void {
    this.getAllPatients();

  }
  private getAllPatients(){
    this.serviceMedecin.getPatients().subscribe(
      data=>{
        this.patients = data 
        console.log(data);

      });

  }

  

}
