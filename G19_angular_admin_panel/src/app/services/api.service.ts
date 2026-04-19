import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = '/api';
  constructor(private http: HttpClient) {}
  getUsers():               Observable<User[]> { return this.http.get<User[]>(`${this.base}/users`); }
  getStats():               Observable<any>    { return this.http.get(`${this.base}/stats`); }
  deleteUser(id: string):   Observable<any>    { return this.http.delete(`${this.base}/users/${id}`); }
  updateUser(id: string, d: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.base}/users/${id}`, d);
  }
}
