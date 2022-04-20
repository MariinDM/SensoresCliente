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
    const token:any = localStorage.getItem('token')
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.serverURL}pines`,{headers:reqHeader});
  }

  getall(): Observable<any> {
    const token:any = localStorage.getItem('token')
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.serverURL}sensores`,{headers:reqHeader});
  }
  getone(id:number): Observable<any> {
    const token:any = localStorage.getItem('token')
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.serverURL}sensores/${id}`,{headers:reqHeader});
  }
  register(sensor: Sensor): Observable<any> {
    const token:any = localStorage.getItem('token')
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.serverURL}sensores`, sensor, {headers:reqHeader})
  }
  update(id:number, sensor:Sensor):Observable<any>{
    const token:any = localStorage.getItem('token')
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${this.serverURL}sensores/${id}`, sensor,{headers:reqHeader})
  }
  delete(id:number):Observable<any>{
    const token:any = localStorage.getItem('token')
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.serverURL}sensores/${id}`,{headers:reqHeader})
  }
}
