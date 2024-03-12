import { Component, importProvidersFrom } from '@angular/core';
import { HeaderComponent } from "./../header/header.component";
import { CodingHomeComponent } from "./../coding-home/coding-home.component";
import { AboutMeComponent } from "./../about-me/about-me.component";
import { MySkillsComponent } from "./../my-skills/my-skills.component";
import { PortfolioComponent } from "./../portfolio/portfolio.component";
import { ContactComponent } from "./../contact/contact.component";
import { FooterComponent } from "./../footer/footer.component";
import { PrivacyPolicyComponent } from "./../privacy-policy/privacy-policy.component";
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    CodingHomeComponent,
    FooterComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    CommonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(public dialog: MatDialog) { }

  showPrivacyPolicy: boolean = false;

  togglePrivacyPolicy(): void {
    this.showPrivacyPolicy = !this.showPrivacyPolicy;
  }
}
