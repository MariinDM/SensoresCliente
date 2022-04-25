import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TSensor } from 'src/app/main/Model/t-sensor';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TsensorService {

  serverURL=environment.apiURL  

  constructor(private http:HttpClient) { }

  getall(): Observable<any> {
    return this.http.get(`${this.serverURL}sensors`);
  }
  getone(id:number): Observable<any> {
    return this.http.get(`${this.serverURL}sensors/${id}`);
  }
  register(sensor: TSensor): Observable<any> {
    return this.http.post(`${this.serverURL}sensors`, sensor,)
  }
  update(id:number, sensor:TSensor):Observable<any>{
    return this.http.put(`${this.serverURL}sensors/${id}`, sensor)
  }
  delete(id:number):Observable<any>{
    return this.http.delete(`${this.serverURL}sensors/${id}`)
  }
}
