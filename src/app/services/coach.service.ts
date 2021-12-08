import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  
@Injectable({
  providedIn: 'root'
})
export class CoachService {

  users :any []=[];
  private _coachnUrl="http://localhost:5000/api/coachs" 
  constructor(private http: HttpClient) { }

  createCoach(coach: any):Observable<Object> {
    return this.http.post(`${this._coachnUrl}`,coach);
  }

  getAllCoachs() :Observable <any> {
    

    return this.http.get(`${this._coachnUrl}`);
}
   
  getPatients() :Observable <any> {

    return this.http.get(`${this._coachnUrl}/patients`);
}
}
