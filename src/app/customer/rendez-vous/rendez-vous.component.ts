import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from 'src/app/models/rendez-vous';
import { User } from 'src/app/models/user';
import { RdvService } from 'src/app/services/rdv.service';
import { UserServiceService } from 'src/app/services/user-service.service';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
  rdv :RendezVous=new RendezVous();
  medecins : any;
  dateAuj = new Date();
  d : string; 
  d1 : string;
  //patient : User = new User();
  constructor(private rdvService :RdvService,private userSevice :UserServiceService,private router :Router) { 
    this.rdv.medecin= new User();
    this.rdv.patient = new User();
    
  }

  ngOnInit(): void {
    this.getMedecins();
    this.d=this.dateAuj.toISOString();
    this.d1= (this.dateAuj.toISOString()).substr(0, 10);
    console.log(this.d1)
  }

  getMedecins(){
    console.log("imed")
      this.userSevice.getAllMedecins().subscribe(e=>{
        this.medecins=e;
        this.rdv.medecin._id = e[0]._id

          console.log("ert")
          console.log(e)
       
       
      
            })
    }
  saveRdv(){
   
     this.rdvService.createPatient(this.rdv).subscribe(data=>{
      console.log('le rdv est : ');
       console.log(data);
       //this.rdv=new RendezVous();
       this.router.navigate(['/profilClient'])
      
       //console.log(this.rdv);
       
 
   },
    );
 
 }

 onSubmit(){
  this.rdv.medecin.id = this.rdv.medecin._id;
 // console.log(this.rdv);
  this.saveRdv();
}
  
}

