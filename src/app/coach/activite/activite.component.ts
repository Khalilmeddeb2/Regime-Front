import { Component, OnInit } from '@angular/core';
import { Activite } from 'src/app/models/activite';
import { ActiviteService } from 'src/app/services/activite.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {

  activites: Activite[] = [];
  constructor(private activiteService :ActiviteService) { }

  ngOnInit(): void {
    this.getActivites();
  }
  getActivites(){
    console.log("imed")
    this.activiteService.getActivites().subscribe(e=>{
     
        this.activites=e;
        console.log("ert")
        console.log(e)
     
     
    
          })
  }

}
