import { Component, OnInit, NgModule} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from "./../language.service";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  aboutMeText: string = '';
  showTextOverlay: boolean = false;
  constructor(private languageService: LanguageService, private http: HttpClient ) {}

  ngOnInit(): void {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.onLanguageChange(lang);
    })
  }
  //maby necassary if it used again in btns directly in this component.
  onLanguageChange(lang: string): void {
    this.loadText(lang); 
  }

  loadText(lang: string): void {
    this.http.get<any>('assets/text-data.json').subscribe(data => {
      this.aboutMeText = data[lang]['aboutMe'];
    });
  }

  toggleTextOverlay() {
    // Diese Methode schaltet den Zustand des Overlays um (anzeigen/verstecken)
    this.showTextOverlay = !this.showTextOverlay;
  }
}
