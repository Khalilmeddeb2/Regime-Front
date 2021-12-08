import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  patient: User =new User();
  error :boolean=false ;
  eroorMessage :String="Il faut remplir toutes les champs,ils sont obligatoires .";


  constructor(private userService:UserServiceService,private router :Router) { }

  ngOnInit(): void {
  }
  savePatient(){

    if(this.patient.firstName=="" ||this.patient.firstName==undefined || this.patient.lastName=="" ||this.patient.lastName==undefined
      ||this.patient.dateNaissance==undefined || this.patient.e_mail=="" ||this.patient.e_mail==undefined
      ||this.patient.login=="" ||this.patient.login==undefined || this.patient.password=="" ||this.patient.password==undefined
     )
    {
      this.error=true
    }
    else{
    console.log("eeee");
     this.userService.createPatient(this.patient).subscribe(data=>{
      console.log("eeee");
      console.log(data);
       this.goTologin();
 
   },
    );

 }}
 goTologin()
 {
  this.router.navigate(['/login'])
 }

 onSubmit(){
  //console.log(this.contact);
  this.savePatient();
}
}
