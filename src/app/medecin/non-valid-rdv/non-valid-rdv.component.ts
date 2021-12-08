import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from 'src/app/models/rendez-vous';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-non-valid-rdv',
  templateUrl: './non-valid-rdv.component.html',
  styleUrls: ['./non-valid-rdv.component.css']
})
export class NonValidRdvComponent implements OnInit {
  NonValidRdv : RendezVous[] ;

  constructor(private serviceMedecin : MedecinService,private router : Router) { 
    this.NonValidRdv = [];
  }

  ngOnInit(): void {
    this.getAllNonValidRdv();
  }

   getAllNonValidRdv(){
    this.serviceMedecin.getAllNonValidRdv().subscribe(
      data=>{
        this.NonValidRdv = data
        console.log(data);

      });

  }
   confirmRdv(_id:number){
     console.log("idddd",_id);
    this.router.navigate(['/confirmRdv',_id]);

  }

}
