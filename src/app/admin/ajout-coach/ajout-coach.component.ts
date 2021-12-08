import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CoachService } from 'src/app/services/coach.service';

@Component({
  selector: 'app-ajout-coach',
  templateUrl: './ajout-coach.component.html',
  styleUrls: ['./ajout-coach.component.css']
})
export class AjoutCoachComponent implements OnInit {

  coach: User =new User();
  error :boolean=false ;
  eroorMessage :String="Il faut remplir toutes les champs,ils sont obligatoires .";


  constructor(private coachService:CoachService,private router :Router) { }

  ngOnInit(): void {
  }
  saveCoach(){

    if(this.coach.firstName=="" ||this.coach.firstName==undefined || this.coach.lastName=="" ||this.coach.lastName==undefined
      ||this.coach.dateNaissance==undefined || this.coach.e_mail=="" ||this.coach.e_mail==undefined
      ||this.coach.login=="" ||this.coach.login==undefined || this.coach.password=="" ||this.coach.password==undefined
     )
    {
      this.error=true
    }
    else{
    console.log("eeee");
     this.coachService.createCoach(this.coach).subscribe(data=>{
      console.log("eeee");
      console.log(data);
       this.goTologin();
 
   },
    );

 }}
 goTologin()
 {
  this.router.navigate(['/admin-coachs'])
 }

 onSubmit(){
  //console.log(this.contact);
  this.saveCoach();
}

}
