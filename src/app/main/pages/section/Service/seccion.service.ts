import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seccion } from 'src/app/main/Model/seccion';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  serverURL=environment.apiURL  

  constructor(private http:HttpClient) { }

  getall(): Observable<any> {
    return this.http.get(`${this.serverURL}secciones`);
  }
  getone(id:number): Observable<any> {
    return this.http.get(`${this.serverURL}secciones/${id}`);
  }
  register(seccion: Seccion): Observable<any> {
    return this.http.post(`${this.serverURL}secciones`, seccion,)
  }
  update(id:number, seccion:Seccion):Observable<any>{
    return this.http.put(`${this.serverURL}secciones/${id}`, seccion)
  }
  delete(id:number):Observable<any>{
    return this.http.delete(`${this.serverURL}secciones/${id}`)
  }
}
