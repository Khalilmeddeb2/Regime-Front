import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
