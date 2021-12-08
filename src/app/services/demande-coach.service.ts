import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeCoach } from '../models/demande-coach';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class DemandeCoachService {

  private demandeCoachUrl="http://localhost:5000/api/demandecoach" 
  constructor(private http: HttpClient) { }

  createConatct(demande : DemandeCoach):Observable<Object> {
    return this.http.post(`${this.demandeCoachUrl}`,demande);
  }
}
