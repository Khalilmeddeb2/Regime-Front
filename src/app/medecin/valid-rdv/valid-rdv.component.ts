import { Component, OnInit } from '@angular/core';
import { RendezVous } from 'src/app/models/rendez-vous';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-valid-rdv',
  templateUrl: './valid-rdv.component.html',
  styleUrls: ['./valid-rdv.component.css']
})
export class ValidRdvComponent implements OnInit {
  validRdv : RendezVous[];


  constructor( private serviceMedecin : MedecinService) { 
    this.validRdv = [];

  }

  ngOnInit(): void {
    this.getValidRdv();
  }

  private getValidRdv(){
    this.serviceMedecin.getAllRdvValid().subscribe(
      data=>{
        this.validRdv= data
        console.log(data);

      });
  }

}
