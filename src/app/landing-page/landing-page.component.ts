import { Component, importProvidersFrom } from '@angular/core';
import { HeaderComponent } from "./../header/header.component";
import { CodingHomeComponent } from "./../coding-home/coding-home.component";
import { AboutMeComponent } from "./../about-me/about-me.component";
import { MyScillsComponent } from "./../my-scills/my-scills.component";
import { PortfolioComponent } from "./../portfolio/portfolio.component";
import { ContactComponent } from "./../contact/contact.component";
import { FooterComponent } from "./../footer/footer.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    CodingHomeComponent,
    FooterComponent,
    AboutMeComponent,
    MyScillsComponent,
    PortfolioComponent,
    ContactComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
