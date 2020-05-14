import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  currentUserValue() {
    return this.http.get(`${this.baseUrl}/me`);
  }

  register(data) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
  }

  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data);
  }

  getSubjects() {
    return this.http.get(`${this.baseUrl}/getSubjects`);
  }

  postService(data) {
    return this.http.post(`${this.baseUrl}/addService`, data);
  }

  getUserServices() {
    return this.http.get(`${this.baseUrl}/getUserServices`);
  }

  postAvailableTime(data) {
    return this.http.post(`${this.baseUrl}/addAvailableTime`, data);
  }

  getUserAvailableTimes() {
    return this.http.get(`${this.baseUrl}/getUserAvailableTimes`);
  }

  getServices() {
    return this.http.get(`${this.baseUrl}/getServices`);
  }
}
