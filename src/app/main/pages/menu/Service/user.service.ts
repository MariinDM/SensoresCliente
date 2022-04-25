import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/Model/user';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverURL=environment.apiURL  

  constructor(private http:HttpClient) { }

  getall(): Observable<any> {
    return this.http.get(`${this.serverURL}users`);
  }
  getone(id:number): Observable<any> {
    return this.http.get(`${this.serverURL}users/${id}`);
  }
  update(id:number, user:User):Observable<any>{
    return this.http.put(`${this.serverURL}users/${id}`, user)
  }
  delete(id:number):Observable<any>{
    return this.http.delete(`${this.serverURL}users/${id}`)
  }
}
