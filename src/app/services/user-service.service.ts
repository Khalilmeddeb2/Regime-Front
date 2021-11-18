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
  constructor(private http: HttpClient) { }

  
}
