import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { MedecinService } from 'src/app/services/medecin.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {

  medecins: User[] = [];
  constructor(private medecinService :MedecinService,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.getMedecins();
  }
  getMedecins(){
    console.log("imed")
    this.medecinService.getAllMedecins().subscribe(e=>{
     
        this.medecins=e;
        console.log("ert")
        console.log(e)
     
     
    
          })
  }
  deleteMedecin(user:User)
{
this.userService.deleteUser(user._id).subscribe(e=>
  {
    console.log("e")
    this.getMedecins();
  })

}


}