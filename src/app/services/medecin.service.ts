import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, RendererFactory2 } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RendezVous } from '../models/rendez-vous';
import { User } from '../models/user';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  users :any []=[];
  private _medecinUrl="http://localhost:5000/api/medecins" 
  private _rdvValid = "http://localhost:5000/api/rdv/valid"
  private _rdvNonValid = "http://localhost:5000/api/rdv/nonvalid"

  constructor(private http: HttpClient,private router : Router) { }

  createMedecin(medecin: any):Observable<Object> {
    return this.http.post(`${this._medecinUrl}`,medecin);
  }


  getAllMedecins() :Observable <any> {
    return this.http.get(`${this._medecinUrl}`);
}

   getPatients(): Observable<User[]>{
  return this.http.get<User[]>(`${this._medecinUrl}/patient`);
}

   getAllRdvValid(): Observable <RendezVous[]>{
  return this.http.get<RendezVous[]>(`${this._rdvValid}`);
}

   getAllNonValidRdv(): Observable<RendezVous[]>{
  return this.http.get<RendezVous[]>(`${this._rdvNonValid}`)
}


  


}
