import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-ajout-medecin',
  templateUrl: './ajout-medecin.component.html',
  styleUrls: ['./ajout-medecin.component.css']
})
export class AjoutMedecinComponent implements OnInit {

  medecin: User =new User();
  error :boolean=false ;
  eroorMessage :String="Il faut remplir toutes les champs,ils sont obligatoires .";


  constructor(private coachService:MedecinService,private router :Router) { }

  ngOnInit(): void {
  }
  saveMedecin(){

    if(this.medecin.firstName=="" ||this.medecin.firstName==undefined || this.medecin.lastName=="" ||this.medecin.lastName==undefined
      ||this.medecin.dateNaissance==undefined || this.medecin.e_mail=="" ||this.medecin.e_mail==undefined
      ||this.medecin.login=="" ||this.medecin.login==undefined || this.medecin.password=="" ||this.medecin.password==undefined
     )
    {
      this.error=true
    }
    else{
    console.log("eeee");
     this.coachService.createMedecin(this.medecin).subscribe(data=>{
      console.log("eeee");
      console.log(data);
       this.goTologin();
 
   },
    );

 }}
 goTologin()
 {
  this.router.navigate(['/admin-medecins'])
 }

 onSubmit(){
  //console.log(this.contact);
  this.saveMedecin();
}
}
