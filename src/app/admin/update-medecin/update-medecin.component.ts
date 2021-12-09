import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { MedecinService } from 'src/app/services/medecin.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {
  medecin : User = new User();
  id : string;
  error :boolean=false ;
  eroorMessage :String="Il faut remplir toutes les champs,ils sont obligatoires .";

  constructor(private medecinService : MedecinService, private router:Router, private route : ActivatedRoute, private serviceUser : UserServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medecinService.getMedecinById(this.id).subscribe(data => {
      this.medecin=data;
      console.log('get by id medecin');
      console.log(data);
    },error => console.log(error));
  }


  goToMedecinList()
  {
    this.router.navigate(['/admin-medecins'])
  }
  onSubmit()
  {
    this.medecinService.updateMedecin(this.id, this.medecin).subscribe( data=> {
      this.goToMedecinList();
    }, error => console.log(error));
    

  }

}
