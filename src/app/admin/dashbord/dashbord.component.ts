import { Component, OnInit } from '@angular/core';
import { ContactMarketingService } from 'src/app/services/contact-marketing.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  nbrePatients;
  nbreMedecins;
  nbreCoachs;
  nbreContacts;
  closeResult = '';
    constructor(private userService:UserServiceService,private contactMarkService :ContactMarketingService) { }
  
    ngOnInit(): void {
      this.totalpatients();
      this.totalMedecins();
      this.totalContactsMark();
      this.totalCoachs();
    }
  
    totalpatients()
    {
      console.log("e")
      this.userService.getNumberPatients().subscribe(data =>{
        console.log(data);
  
        this.nbrePatients=data;
        console.log(this.nbrePatients);
      })
    }

    totalMedecins()
    {
      console.log("e")
      this.userService.getNumberMedecins().subscribe(data =>{
        console.log(data);
  
        this.nbreMedecins=data;
        console.log(this.nbrePatients);
      })
    }

    totalCoachs()
    {
      console.log("e")
      this.userService.getNumberCoachs().subscribe(data =>{
        console.log(data);
  
        this.nbreCoachs=data;
        console.log(this.nbrePatients);
      })
    }
  
  
   
    totalContactsMark()
    {
      console.log("bb")
     this.contactMarkService.totalContacts().subscribe(data =>{
      console.log(data);
  
      this.nbreContacts=data;
      console.log(this.nbreContacts);
    })
    }
    
  
    
  
    

}
