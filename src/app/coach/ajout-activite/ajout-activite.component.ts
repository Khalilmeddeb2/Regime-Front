import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activite } from 'src/app/models/activite';
import { Exercice } from 'src/app/models/exercice';
import { User } from 'src/app/models/user';
import { ActiviteService } from 'src/app/services/activite.service';
import { CoachService } from 'src/app/services/coach.service';
import { ExerciceService } from 'src/app/services/exercice.service';

@Component({
  selector: 'app-ajout-activite',
  templateUrl: './ajout-activite.component.html',
  styleUrls: ['./ajout-activite.component.css']
})
export class AjoutActiviteComponent implements OnInit {

  activite : Activite=new Activite();
  patients : any;
  exercices :any;
  patId:any
  exeId:any;
  constructor(private activiteService :ActiviteService,private coachSevice :CoachService,private exerciceService :ExerciceService,private router :Router) { 
    this.activite.patient= new User();
    this.activite.patient.id=""

    console.log("activite:",this.activite)
    console.log(this.activite.patient)
    this.activite.exercices= new Exercice();
    this.activite.exercices.id=""
    console.log(this.activite.exercices)
  }

  ngOnInit(): void {
    this.getPatients();
    this.getExercices();
  }

  async getPatients(){
    //console.log("imed")
      this.coachSevice.getPatients().subscribe(e=>{
        this.patients=e;
        this.activite.patient.id = e[0]._id

          console.log("ert")
          console.log(e)
       
       
      
            })
    }

    getExercices(){
      //console.log("imed")
        this.exerciceService.getExercices().subscribe(e=>{
          this.exercices=e;
          this.activite.exercices.id = e[0]._id
  
            //console.log("ert")
            //console.log(e)
         
         
        
              })
      }


  saveRdv(){
     console.log('patientId',this.patId)
     console.log('eId',this.exeId)
     this.activite.patient._id=this.patId
     this.activite.exercices._id=this.exeId
     this.activiteService.createActivite(this.activite).subscribe(data=>{
       console.log(data);
       console.log('vfrv')
       //this.demande=new DemandeCoach();
       this.router.navigate(['/listesActivites'])
       
 
   },
    );
 
 }

 onSubmit(){
  //console.log(this.demande);
  this.saveRdv();
}

}
