import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CoachService } from 'src/app/services/coach.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  coachs: User[] = [];
  constructor(private coachService :CoachService, private userService:UserServiceService) { }

  ngOnInit(): void {
    this.getCoachs();
  }
  getCoachs(){
    console.log("imed")
    this.coachService.getAllCoachs().subscribe(e=>{
     
        this.coachs=e;
        console.log("ert")
        console.log(e)
          })
  }

  deleteCoach(user:User)
  {
  this.userService.deleteUser(user._id).subscribe(e=>
    {
      console.log("e")
      this.getCoachs();
    })
  
  }

}
