import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invernadero } from 'src/app/main/Model/invernadero';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InvernaderoService {

  serverURL=environment.apiURL  

  constructor(private http:HttpClient) { }

  getall(): Observable<any> {
    return this.http.get(`${this.serverURL}invernaderos`);
  }
  getone(id:number): Observable<any> {
    return this.http.get(`${this.serverURL}invernaderos/${id}`);
  }
  register(inv: Invernadero): Observable<any> {
    return this.http.post(`${this.serverURL}invernaderos`, inv)
  }
  update(id:number, invernadero:Invernadero):Observable<any>{
    return this.http.put(`${this.serverURL}invernaderos/${id}`, invernadero)
  }
  delete(id:number):Observable<any>{
    return this.http.delete(`${this.serverURL}invernaderos/${id}`)
  }
}
