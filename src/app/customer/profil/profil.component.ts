import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
   
  }
 


}
