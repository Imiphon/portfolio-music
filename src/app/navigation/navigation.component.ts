
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from "./../privacy-policy/privacy-policy.component";
import { LanguageService } from "./../language.service";
import { LegalNoticeComponent } from '../legal-notice/legal-notice.component';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    PrivacyPolicyComponent,
    LegalNoticeComponent,

  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  constructor(private languageService: LanguageService, private toggleService: ToggleService) {
  }

  /**
   * Gives the current language click to the languageService
   * And from there to the affected components
   * @param lang 
   */
  changeLang(lang: string): void {
    this.languageService.changeLanguage(lang);
  }

  togglePrivacyPolicy(): void {
    this.toggleService.togglePrivacyPolicy();
    this.close();
  }

  toggleLegalNotice(): void {
    this.toggleService.toggleLegalNotice();
  }

  @Output() closeEvent = new EventEmitter<void>();
  close(): void {
    this.closeEvent.emit();
  }
}
