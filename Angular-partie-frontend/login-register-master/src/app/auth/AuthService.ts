import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginInfo} from './LoginInfo';
import {Observable} from 'rxjs';
import {RegisterInfo} from './RegisterInfo';
import {ProfileInfo} from './ProfileInfo';


const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  login(creadentials: LoginInfo): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/auth/login', creadentials, httpOptions);
  }
  register(info: RegisterInfo): Observable<RegisterInfo> {
    return this.http.post<RegisterInfo>('http://localhost:8080/api/auth/register', info, httpOptions);
  }
  findUserByUsername(username: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/auth/getUserByUsername/${username}`);
  }
  findUserById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/auth/getUserById/${id}`);
  }
  updateUser(user: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/auth/updateUser/${id}`, user);
  }
  deleteUser(id: number) {
    return this.http.delete(`http://localhost:8080/api/auth/deleteUser/${id}`, { responseType: 'text' });
  }
  findAllUsers(): Observable<ProfileInfo[]> {
    return this.http.get<ProfileInfo[]>(`http://localhost:8080/api/auth/findAllUsers`);
  }


}
