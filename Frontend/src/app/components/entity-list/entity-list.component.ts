import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { Application } from '../../models/application.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrl: './entity-list.component.css'
})
export class EntityListComponent implements OnInit {
  applications: Application[] = [];
  
  /**
   * Constructor to inject services.
   * @param router - Router to navigate to different components.
   * @param applicationService - ApplicationService to make API calls.
   */
  constructor(private router: Router, private applicationService: ApplicationService) { }

  /**
   * OnInit lifecycle hook to load applications when the component initializes.
   */
  ngOnInit(): void {
    this.applicationService.getAllApplications().subscribe((data) => {
      this.applications = data;
    }), (error: any) => {
      console.log(error);
    }
  }

 /**
   * Navigates to the delete view for a specific application.
   * 
   * @param {string} id The unique identifier of the application to delete.
   */
  navigateToDelete(id: string): void {
    this.router.navigate(['/delete', id]);
  }

   /**
   * Navigates to the edit view for a specific application.
   * 
   * @param {string} id The unique identifier of the application to edit.
   */
  navigateToEdit(id: string): void {
    this.router.navigate(['/edit', id]);
  }

    /**
    * Navigates to the details view for a specific application.
    * 
    * @param {string} id The unique identifier of the application to view details.
    */
  navigateToDetails(id: string): void {
    this.router.navigate(['/details', id]);
  }

}
