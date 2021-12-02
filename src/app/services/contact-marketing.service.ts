import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactMarketing } from '../models/contact-marketing';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


@Injectable({
  providedIn: 'root'
})
export class ContactMarketingService {
  contactMarketing :any []=[];
  private contactUrl="http://localhost:5000/api/contactMarketing" 
  constructor(private http: HttpClient) { }

  public getContacts() :Observable <any> {
    

    return this.http.get<any[]>(this.contactUrl, { 'headers': headers }).pipe(response =>
      response)
      }

       deleteContact(id : string):Observable<Object>
       {
         return this.http.delete(`${this.contactUrl}/${id}`);
     
       }     
       createConatct(contact : ContactMarketing):Observable<Object> {
        return this.http.post(`${this.contactUrl}`,contact);
      }

      totalContacts()
      {
        return this.http.get(`${this.contactUrl}/numberContactMarketing`);
      }
}
