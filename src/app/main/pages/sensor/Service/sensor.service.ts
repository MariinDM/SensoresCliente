import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sensor } from 'src/app/main/Model/sensor';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  serverURL=environment.apiURL  

  constructor(private http:HttpClient) { }

  getpines(): Observable<any> {
    return this.http.get(`${this.serverURL}pines`);
  }
  getall(): Observable<any> {
    return this.http.get(`${this.serverURL}sensores`);
  }
  getone(id:number): Observable<any> {
    return this.http.get(`${this.serverURL}sensores/${id}`);
  }
  register(sensor: Sensor): Observable<any> {
    return this.http.post(`${this.serverURL}sensores`, sensor)
  }
  update(id:number, sensor:Sensor):Observable<any>{
    return this.http.put(`${this.serverURL}sensores/${id}`, sensor)
  }
  delete(id:number):Observable<any>{
    return this.http.delete(`${this.serverURL}sensores/${id}`)
  }
}
