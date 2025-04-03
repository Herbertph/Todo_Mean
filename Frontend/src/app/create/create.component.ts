import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
applicationForm: FormGroup | undefined;


constructor(private fb: FormBuilder, private applicationService: ApplicationService, private router: Router) {
  this.applicationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    techStack: ['', [Validators.required, Validators.minLength(5)]],
    deployed: [false],
    monthlyCost: [0, [Validators.required]],
    cloudHostingPlatform: ['', [Validators.required]]
  });
}

/**
   * OnInit lifecycle hook to load applications when the component initializes.
   */
ngOnInit(): void {
}

/**
 * Submits the form data to create a new application.
 * If the form is valid, the application is created and the user is navigated back to the home page.
 * If the form is invalid, the user is notified of the error.
 */
onSubmit() {
  if (this.applicationForm && this.applicationForm.valid) {
    console.log(this.applicationForm.value);
    this.applicationService.createApplication(this.applicationForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}

/**
 * Navigates back to the home page.
 */
goBack() {
  this.router.navigate(['/']);
}
}
