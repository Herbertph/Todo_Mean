import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  applicationId: string;

  constructor(
    private formBuilder: FormBuilder,
    private applicationService: ApplicationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      techStack: ['', [Validators.required, Validators.minLength(5)]],
      deployed: [false],
      monthlyCost: [0, [Validators.required]],
      cloudHostingPlatform: ['', [Validators.required]]
    });
    this.applicationId = '';
  }

  /**
   * OnInit lifecycle hook to load applications when the component initializes.
   */
  ngOnInit(): void {
    this.applicationId = this.route.snapshot.paramMap.get('id')!;
    if (this.applicationId) {
      this.applicationService.getApplicationById(this.applicationId).subscribe(
        (data) => {
          this.editForm.patchValue(data);
        },
        (error) => console.error(error)
      );
    }
  }

  /**
   * Submits the form data to update an existing application.
   * If the form is valid, the application is updated and the user is navigated back to the home page.
   * If the form is invalid, the user is notified of the error.
   */
  onSubmit(): void {
    if (this.editForm.valid) {
      this.applicationService.updateApplicationById(this.applicationId, this.editForm.value).subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (error) => console.error(error)
      );
    }
  }

  /**
   * Navigates back to the home page.
   */
  cancelEdit(): void {
    this.router.navigate(['/']);
  }
}