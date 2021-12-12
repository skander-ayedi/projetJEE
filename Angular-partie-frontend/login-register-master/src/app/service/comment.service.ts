import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }


  addComment(data): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/comments/create`, data); 
  }
  getCommentbyid(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.baseUrl}/comments/${id}`);
  }
 
  getAllComment(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Allcomments`);
  }
 


 
  updateComment(id: number, value: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.baseUrl}/comments/${id}`, value);
  }


  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/comments/${id}`, { responseType: 'text' });
  }

}
