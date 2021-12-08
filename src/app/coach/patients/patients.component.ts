import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CoachService } from 'src/app/services/coach.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: User[] = [];
  constructor(private coachService :CoachService) { }

  ngOnInit(): void {
    this.getPatientsByCoach();
  }
  getPatientsByCoach(){
    console.log("imed")
    this.coachService.getPatients().subscribe(e=>{
     
        this.patients=e;
        console.log("ert")
        console.log(e)
     
     
    
          })
  }
}
