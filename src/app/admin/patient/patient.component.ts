import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: User[] = [];
  constructor(private userService :UserServiceService) { }

  ngOnInit(): void {
    this.getPatients();
  }
  getPatients(){
    console.log("imed")
    this.userService.getAllPatients().subscribe(e=>{
     
        this.patients=e;
        console.log("ert")
        console.log(e)
          })
  }

  deletePatient(user:User)
{
this.userService.deleteUser(user._id).subscribe(e=>
  {
    console.log("e")
    this.getPatients();
  })
}

}
