import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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

  getServices(subject) {
    return this.http.get(`${this.baseUrl}/search/${subject}`, subject);
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

  getAuthClassesCurrent() {
    return this.http.get(`${this.baseUrl}/getAuthClassesCurrent`);
  }

  getAuthClassesHistory() {
    return this.http.get(`${this.baseUrl}/getAuthClassesHistory`);
  }

  postClass(data) {
    return this.http.post(`${this.baseUrl}/addClass`, data);
  }

  getAuthClassInfo(id) {
    return this.http.get(`${this.baseUrl}/getAuthClasses/${id}`, id);
  }

  updateClassStatus(status, id) {
    return this.http.put(`${this.baseUrl}/updateClassStatus/${status}/${id}`, status, id);
  }

  updateStudentClassStatus(status, id) {
    return this.http.put(`${this.baseUrl}/updateStudentClassStatus/${status}/${id}`, status, id);
  }

  getUserReviews(id) {
    return this.http.get(`${this.baseUrl}/getUserReviews/${id}`, id);
  }

  getAuthReviews() {
    return this.http.get(`${this.baseUrl}/getAuthReviews`);
  }

  postReview(data) {
    return this.http.post(`${this.baseUrl}/addReview`, data);
  }

  deleteAT(id) {
    return this.http.delete(`${this.baseUrl}/deleteAT/${id}`, id);
  }

  deleteService(id) {
    return this.http.delete(`${this.baseUrl}/deleteService/${id}`, id);
  }

  editProfile(data) {
    return this.http.put(`${this.baseUrl}/updateInfo`, data);
  }

  editService(data, id) {
    return this.http.put(`${this.baseUrl}/updateService/${id}`, data, id);
  }

  editAT(data, id) {
    return this.http.put(`${this.baseUrl}/updateAT/${id}`, data, id);
  }

  getAT(id) {
    return this.http.get(`${this.baseUrl}/getAvailableTime/${id}`, id);
  }

  getAuthService(id) {
    return this.http.get(`${this.baseUrl}/getAuthService/${id}`, id);
  }
}
