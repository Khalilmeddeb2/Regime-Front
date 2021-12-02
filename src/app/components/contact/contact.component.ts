import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactMarketing } from 'src/app/models/contact-marketing';
import { ContactMarketingService } from 'src/app/services/contact-marketing.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact :ContactMarketing = new ContactMarketing();
  error: boolean=false;
  errormessage:string="Il faut remplir toutes les champs, ils sont obligatoires"
  constructor(private contactMarketingService : ContactMarketingService ,private router :Router) { 
   
  }

  ngOnInit(): void {
  }
  saveConatct(){
    if(this.contact.name=="" ||this.contact.name==undefined || this.contact.email=="" ||this.contact.email==undefined
    
    || this.contact.message=="" ||this.contact.message==undefined )
    {
      this.error=true;
    }
    else{
    this.contactMarketingService.createConatct(this.contact).subscribe(data=>{
      
      //console.log(data);
      this.goToDesignPage();

  },
   );
}
  }  
goToDesignPage(){
  this.contact = new ContactMarketing();
  }


  onSubmit(){
    //console.log(this.contact);
    this.saveConatct();
  }

}
