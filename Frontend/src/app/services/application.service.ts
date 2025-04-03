import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
    /**
   * The base URL for the applications API.
   */
  private apiUrl = 'http://localhost:3000/applications';

    /**
   * Constructs the application service.
   * 
   * @param {HttpClient} http The HTTP client service for making API calls.
   */
  constructor(private http: HttpClient) { }

    /**
   * Retrieves all applications from the server.
   * 
   * @returns {Observable<Application[]>} An Observable of an array of applications.
   */
  getAllApplications(): Observable<any> {
    return this.http.get<Application[]>(this.apiUrl);
  }

  /**
   * Creates a new application by posting to the API server.
   * 
   * @param {any} applicationData The application data to create a new application.
   * @returns {Observable<Application>} An Observable of the newly created application.
   */
  createApplication(applicationData: any): Observable<any> {
    return this.http.post<Application>(this.apiUrl, applicationData);
  }

  /**
   * Deletes an application by its ID.
   * 
   * @param {string} id The unique identifier of the application to be deleted.
   * @returns {Observable<any>} An Observable for the HTTP DELETE request.
   */
  deleteApplication(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  /**
   * Retrieves an application by its ID.
   * 
   * @param {string} id The unique identifier of the application to be retrieved.
   * @returns {Observable<Application>} An Observable of the requested application.
   */
  getApplicationById(id: string): Observable<any> {
    return this.http.get<Application>(`${this.apiUrl}/${id}`);
  }

  /**
   * Updates an application by its ID.
   * 
   * @param {string} id The unique identifier of the application to be updated.
   * @param {any} applicationData The updated application data.
   * @returns {Observable<any>} An Observable for the HTTP PUT request.
   */
  updateApplicationById(id: string, applicationData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, applicationData);
  }
}
