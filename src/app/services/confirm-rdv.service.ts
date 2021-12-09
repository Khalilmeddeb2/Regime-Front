import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from '../models/rendez-vous';

@Injectable({
  providedIn: 'root'
})
export class ConfirmRdvService {
  private _confirmRdv = "http://localhost:5000/api/rdv"


  constructor(private http : HttpClient) { }
  saveConfirm(rdv : RendezVous , id : number ): Observable<RendezVous>{
    return this.http.post<RendezVous>(`${this._confirmRdv}`+'/'+id,rdv);
  
  
  }


}
