import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseUrl = 'http://localhost:8080/api/formation';
  
  constructor(private http: HttpClient) { }
  
  getFormation(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${this.baseUrl}/${id}`);
  }
  getFormations(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/formations`);
  }
  createFormation(formation: Formation): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/create`, formation);
  }
 
  updateFormation(id: number, value: Formation): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteFormation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
