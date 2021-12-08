import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  users :any []=[];
  private _medecinUrl="http://localhost:5000/api/medecins" 
  constructor(private http: HttpClient) { }

  createMedecin(medecin: any):Observable<Object> {
    return this.http.post(`${this._medecinUrl}`,medecin);
  }

  getAllMedecins() :Observable <any> {
    
    return this.http.get(`${this._medecinUrl}`);
}
}
