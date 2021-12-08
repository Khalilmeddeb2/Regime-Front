import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeCoach } from 'src/app/models/demande-coach';
import { User } from 'src/app/models/user';
import { CoachService } from 'src/app/services/coach.service';
import { DemandeCoachService } from 'src/app/services/demande-coach.service';

@Component({
  selector: 'app-demande-coach',
  templateUrl: './demande-coach.component.html',
  styleUrls: ['./demande-coach.component.css']
})
export class DemandeCoachComponent implements OnInit {
  demande : DemandeCoach=new DemandeCoach();
  coachs : any;
  constructor(private demandeService :DemandeCoachService,private coachSevice :CoachService,private router :Router) { 
    this.demande.coach= new User();
    this.demande.coach.id=""
    console.log(this.demande.coach)
  }

  ngOnInit(): void {
    this.getCoachs();
  }

  getCoachs(){
    //console.log("imed")
      this.coachSevice.getAllCoachs().subscribe(e=>{
        this.coachs=e;
        this.demande.coach.id = e[0]._id

          //console.log("ert")
          //console.log(e)
       
       
      
            })
    }
  saveRdv(){
     this.demande.coach._id=this.demande.coach.id
     this.demandeService.createConatct(this.demande).subscribe(data=>{
       console.log(data);
       console.log('vfrv')
       //this.demande=new DemandeCoach();
       //this.router.navigate(['/RDvClient'])
       
 
   },
    );
 
 }

 onSubmit(){
  //console.log(this.demande);
  this.saveRdv();
}
}
