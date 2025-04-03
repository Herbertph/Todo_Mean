import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit{
  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * OnInit lifecycle hook to load applications when the component initializes.
   */
  ngOnInit(): void {
    const applicationId = this.route.snapshot.paramMap.get('id');
    if (applicationId) {
      this.deleteApplication(applicationId);
    }
  }

  /**
   * Deletes an application by its unique identifier.
   * 
   * @param {string} id The unique identifier of the application to delete.
   */
  deleteApplication(id: string): void {
    if (confirm('Are you sure you want to delete this application?')) {
      this.applicationService.deleteApplication(id).subscribe({
        next: () => {
          console.log('Application deleted successfully');
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error when deleting application:', error);
        }
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}