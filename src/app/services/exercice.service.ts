import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercice } from '../models/exercice';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  exercices :any []=[];
  private _exerciceUrl="http://localhost:5000/api/exercice" 
  constructor(private http: HttpClient) { }

  public getExercices() :Observable <any> {
    

    return this.http.get<any[]>(this._exerciceUrl, { 'headers': headers }).pipe(response =>
      response)
      }

  public deleteProduct(id : string):Observable<Object>
      {
        return this.http.delete(`${this._exerciceUrl}/${id}`);
    
      }  
      
  public createExercice(exercice):Observable<Object> {
        return this.http.post(`${this._exerciceUrl}`,exercice);
      }

}
