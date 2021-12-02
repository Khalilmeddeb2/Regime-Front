import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users :any []=[];
  private _userUrl="http://localhost:5000/api/users" 
  private loginUrl="http://localhost:5000/api/users/login"
  private medecinUrl="http://localhost:5000/api/users/medecins"
  constructor(private http: HttpClient) { }

  createPatient(patient: any):Observable<Object> {
    return this.http.post(`${this._userUrl}/inscriptionPatient`,patient);
  }

  getAllMedecins() :Observable <any> {
    

    return this.http.get(`${this._userUrl}/medecins`);
}

loginUser(user)
{
  return this.http.post(`${this.loginUrl}`,user);
}

getToken()
{
  return localStorage.getItem('token')
}

getAllPatients() :Observable <any> {
    

  return this.http.get(`${this._userUrl}/patients`);
}

public deleteUser(id : string):Observable<Object>
      {
        return this.http.delete(`${this._userUrl}/${id}`);
      }  
}
