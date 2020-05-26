import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getAuthUser() {
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

  getAuthUserServices() {
    return this.http.get(`${this.baseUrl}/getAuthUserServices`);
  }

  postAvailableTime(data) {
    return this.http.post(`${this.baseUrl}/addAvailableTime`, data);
  }

  getAuthUserAvailableTimes() {
    return this.http.get(`${this.baseUrl}/getAuthUserAvailableTimes`);
  }

  getServices() {
    return this.http.get(`${this.baseUrl}/getServices`);
  }

  getServiceInfo(id) {
    return this.http.get(`${this.baseUrl}/getServices/${id}`, id);
  }

  getUser(id) {
    return this.http.get(`${this.baseUrl}/getUser/${id}`, id);
  }

  getUserServices(id) {
    return this.http.get(`${this.baseUrl}/getUser/${id}/services`, id);
  }

  getUserAvailableTimes(id) {
    return this.http.get(`${this.baseUrl}/getUser/${id}/availableTimes`, id)
  }

  getAuthClasses() {
    return this.http.get(`${this.baseUrl}/getAuthClasses`);
  }

  postClass(data) {
    return this.http.post(`${this.baseUrl}/addClass`, data);
  }

  getClassInfo(id) {
    return this.http.get(`${this.baseUrl}/getServices/${id}`, id);
  }

  updateClassStatus(status, id) {
    return this.http.post(`${this.baseUrl}/updateClassStatus/${status}/${id}`, status, id);
  }

  updateStudentClassStatus(status, id) {
    return this.http.post(`${this.baseUrl}/updateStudentClassStatus/${status}/${id}`, status, id);
  }

}
