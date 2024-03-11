import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { HttpClient } from '@angular/common/http';

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

  mailTest = false;

  http = inject(HttpClient); //injected & provided from app.config.ts

  post = {
    endPoint: 'https://mensching.online/sendMail.php',
    //payload = contactData 
    body: (payload: any) => JSON.stringify(payload),
    headers: {
      'Content-Type': 'text/plain', //'Content-Type': 'application/json', 
      responseType: 'text',
    }
  }

  //to get a reaction if user didn't touch on of the inputs
  private allTouched(ngForm: NgForm) {
    console.log('allTouched starts');
    Object.values(ngForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  onSubmit(ngForm: NgForm) {
    console.log('onSubmit starts');

    this.allTouched(ngForm);
    if (ngForm && ngForm.submitted && !this.mailTest) {
      console.log('Form data:', this.contactData);

      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('next in subscribe is running');
            
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });

    } else if (ngForm && ngForm.submitted && this.mailTest) {
      ngForm.resetForm();
      console.log('mailTest works!');

    }
  }
}
