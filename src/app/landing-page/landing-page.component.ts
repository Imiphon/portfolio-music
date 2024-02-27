import { Component } from '@angular/core';
import { HeaderComponent } from "./../header/header.component";
import { CodingHomeComponent } from "./../coding-home/coding-home.component";
import { FooterComponent } from "./../footer/footer.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    CodingHomeComponent,
    FooterComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
