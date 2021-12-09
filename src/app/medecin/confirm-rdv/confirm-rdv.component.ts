import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVous } from 'src/app/models/rendez-vous';
import { RdvService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-confirm-rdv',
  templateUrl: './confirm-rdv.component.html',
  styleUrls: ['./confirm-rdv.component.css']
})

export class ConfirmRdvComponent implements OnInit { 
  _id : number;
  rdv : RendezVous = new RendezVous();
  
  
  constructor(private serviceRdv: RdvService,private router: Router,
    private route : ActivatedRoute) { 
    }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id'];
    this.serviceRdv.getRdvById(this._id).subscribe(data=>{
      this.rdv = data
      console.log("dataaa",data)
    })

    /* console.log("rdv");
    this.id= this.route.snapshot.params['id'];
    console.log("iddd",this.id);
    this.serviceRdv.getRdvById(this.id).subscribe(data => { 
      this.rdv= data;
      console.log("rdvvv",this.rdv);
    },error => console.log(error)); */
  }
  goToRdvList()
  {
    this.router.navigate(['/NonValidRdv'])
  }
  onSubmit()
  {
    this.rdv.valid= true ;
    this.serviceRdv.confirmRdv(this._id,this.rdv).subscribe(data=>{
      console.log("our rdv",this.rdv);
      this.goToRdvList();


    });
  

    /* this.serviceRdv.confirmRdv(this.id, this.rdv).subscribe( data => {
      this.goToRdvList();
    }, error => console.log(error)); */
  }
  
  
}
