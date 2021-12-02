import { Component, OnInit } from '@angular/core';
import { ContactMarketing } from 'src/app/models/contact-marketing';
import { ContactMarketingService } from 'src/app/services/contact-marketing.service';

@Component({
  selector: 'app-contact-marketing',
  templateUrl: './contact-marketing.component.html',
  styleUrls: ['./contact-marketing.component.css']
})
export class ContactMarketingComponent implements OnInit {

  contacts: ContactMarketing[] = [];
  constructor(private contactMarketingService :ContactMarketingService) { }

  ngOnInit(): void {
    this.getcontacts();
  }
  getcontacts(){
    console.log("imed")
    this.contactMarketingService.getContacts().subscribe(e=>{
     
        this.contacts=e;
        console.log("ert")
        console.log(e)
     
     
    
          })
  }

  deleteContact(contact:ContactMarketing)
  {
    console.log("e")
  
  this.contactMarketingService.deleteContact(contact._id).subscribe(e=>
    {
      console.log("e")
      this.getcontacts()
    })
  }

}
