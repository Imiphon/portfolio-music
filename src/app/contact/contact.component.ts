import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatInput,
    MatButton,
    MatCheckbox,
    MatFormField,
    MatLabel,
    MatError,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  }

  prepareSubmit(ngForm: NgForm) {
    this.allTouched(ngForm);
    if (ngForm.valid) {
      this.onSubmit(ngForm);
    }
  }

  private allTouched(ngForm: NgForm) {
    Object.values(ngForm.controls).forEach(control => {
      control.markAsTouched();
    });
    console.log('all touched');    
  }

  onSubmit(ngForm: NgForm) {
    console.log('onSubmit starts');
    
    this.allTouched(ngForm);
    if (ngForm && ngForm.submitted) {
      console.log('Form data:', this.contactData);
    }

  }


}
