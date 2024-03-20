import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from "./../language.service";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    //HeaderComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  aboutMeText: string = '';
  constructor(private languageService: LanguageService, private http: HttpClient ) {}

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
      this.aboutMeText = data[lang]['aboutMe'];
    });
  }
}

/**
 *  
  ngOnInit(): void {  
    //standard language     
    this.loadText('en'); 
  }

  loadText(lang: string): void {
    this.http.get<any>('assets/text-data.json').subscribe(data => {
      this.aboutMeText = data[lang]['aboutMe'];
    });
  }

  onLanguageChange(lang: string): void {
    debugger
    console.log('onLanguageChanged in about-me.comp runs');
    this.loadText(lang); 
  }
 */