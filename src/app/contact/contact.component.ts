import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private http: HttpClient) {}

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  }

  mailTest = false;

  // http = inject(HttpClient); //injected & provided from app.config.ts NOW INJECTED AT CONSTRUCTOR

  post = {
    endPoint: 'https://www.mensching.online/sendMail.php',
    //payload = contactData 
    body: (payload: any) => JSON.stringify(payload),
    headers: {
      'Content-Type': 'text/plain', //'Content-Type': 'application/json', 
      responseType: 'text',
    }
  }

  //to get a reaction if user didn't touch one of the inputs
  private allTouched(ngForm: NgForm) {
    console.log('allTouched starts');
    Object.values(ngForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  onSubmit(ngForm: NgForm) {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // more headers possible
    });

    this.allTouched(ngForm);
    if (ngForm && ngForm.submitted && !this.mailTest) {
      console.log('Form data:', this.contactData);
      
      //conversion to JSON works automaticly with HTTPClient, so I take directly contactData
      this.http.post(this.post.endPoint, this.contactData, { headers, responseType: 'text' }) 
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });

    } else if (ngForm && ngForm.submitted && this.mailTest) {
      ngForm.resetForm();
      this.allTouched(ngForm);
      console.log('mailTest works!');
    }
  }
}



/**
 * old version:
 * 
export class ContactComponent {

  constructor(private http: HttpClient) {}

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  }

  mailTest = false;

  // http = inject(HttpClient); //injected & provided from app.config.ts NOW INJECTED AT CONSTRUCTOR

  post = {
    endPoint: 'https://www.mensching.online/sendMail.php',
    //payload = contactData 
    body: (payload: any) => JSON.stringify(payload),
    headers: {
      'Content-Type': 'text/plain', //'Content-Type': 'application/json', 
      responseType: 'text',
    }
  }

  //to get a reaction if user didn't touch one of the inputs
  private allTouched(ngForm: NgForm) {
    console.log('allTouched starts');
    Object.values(ngForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  onSubmit(ngForm: NgForm) {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // more headers possible
    });

    this.allTouched(ngForm);
    if (ngForm && ngForm.submitted && !this.mailTest) {
      console.log('Form data:', this.contactData);
      //this.http.post(this.post.endPoint, this.post.body(this.contactData))
      this.http.post(this.post.endPoint, this.contactData, { headers, responseType: 'text' }) 
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
 */
