import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../model/Team';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private baseUrl = 'http://localhost:8080/api/teams';
  constructor(private http: HttpClient) { }

  
  createGroup(data): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/create`, data);
  }

  getGroupsbyid(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.baseUrl}/${id}`);
  }
 
  updateGroup(id: number, value: Team): Observable<Team> {
    return this.http.put<Team>(`${this.baseUrl}/update/${id}`, value);
  }

  deleteGroup(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
 
  getGroupList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
