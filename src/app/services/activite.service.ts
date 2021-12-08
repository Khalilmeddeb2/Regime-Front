import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  activites :any []=[];
  private _activiteUrl="http://localhost:5000/api/activite" 
  constructor(private http: HttpClient) { }

  public getActivites() :Observable <any> {
    

    return this.http.get<any[]>(this._activiteUrl, { 'headers': headers }).pipe(response =>
      response)
      }

      createActivite(activite: any):Observable<Object> {
        return this.http.post(`${this._activiteUrl}`,activite);
      }
}
