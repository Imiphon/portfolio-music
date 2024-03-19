import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  aboutMeText: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Laden der JSON-Datei mit den Textdaten
    this.http.get<any>('./../../assets/text-data.json').subscribe(data => {
      // Annahme: 'en' als Standardsprache
      this.aboutMeText = data['en']['aboutMe'];
    });
  }
}
