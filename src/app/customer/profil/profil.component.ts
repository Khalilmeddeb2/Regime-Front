import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
 patient: any
 p: User = new User()
 msg:string="";
 show=false;

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
   this.patientcourant();
  }
    patientcourant()
   {
    this.userService.getPatientCourant().subscribe(data=>{
      //console.log("eeee");
      //console.log(data);
      this.patient=data
      console.log(this.patient)
   },
    );
 }
 updatePoidaille()
 {
  console.log("iii") 
  this.userService.putPatientCourant(this.p).subscribe( data=>{
   
     console.log("iii")
     console.log(data)
   })
 }

 getImc()
 {
  console.log("iii") 
  this.userService.getImcPatientCourant().subscribe( data=>{
   
     console.log("iii")
     this.patient=data
      console.log(this.patient)
     console.log(data)
     if(this.patient.imc > 20)
     {
         this.msg="gros"
     }
     this.show=true;

   })
 }
}



  



