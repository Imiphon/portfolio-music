import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from "./../language.service";
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    PrivacyPolicyComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactOrange: string = '';
  contactHello: string = '';
  constructor(private http: HttpClient, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.onLanguageChange(lang);
    })
  }

  onLanguageChange(lang: string): void {
    this.loadText(lang);
  }

  loadText(lang: string): void {
    this.http.get<any>('assets/text-data.json').subscribe(data => {
      this.contactOrange = data[lang]['contactOrange'];
      this.contactHello = data[lang]['contactHello'];
    });
  }

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  }

  mailTest = false;

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

  @Output() togglePrivacyPolicyEvent = new EventEmitter<void>();
  togglePrivacyPolicy(): void {      
    this.togglePrivacyPolicyEvent.emit();    
  }
}