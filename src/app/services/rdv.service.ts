import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from '../models/rendez-vous';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class RdvService {
  private _rdvUrl="http://localhost:5000/api/rdv"
  
  constructor(private http: HttpClient) { }
  

  createPatient(rdv: any):Observable<Object> {
    return this.http.post(`${this._rdvUrl}`,rdv);
  }  
  confirmRdv(id : number , rdv : RendezVous) : Observable<Object>{
    return this.http.put(`${this._rdvUrl}/${id}`,rdv);

  } 

  getRdvById(id: number): Observable<RendezVous>
      {
       return this.http.get<RendezVous>(`${this._rdvUrl}/${id}`);
      }
      
}
