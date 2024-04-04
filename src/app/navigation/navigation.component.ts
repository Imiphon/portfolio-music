
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from "./../privacy-policy/privacy-policy.component";
import { LanguageService } from "./../language.service";
import { LegalNoticeComponent } from '../legal-notice/legal-notice.component';

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
  constructor(private languageService: LanguageService) {
  }

  /**
   * Gives the current language click to the languageService
   * And from there to the affected components
   * @param lang 
   */
  changeLang(lang: string): void {
    this.languageService.changeLanguage(lang);
  }

  @Output() togglePrivacyPolicyEvent = new EventEmitter<void>();
  togglePrivacyPolicy(): void {
    this.togglePrivacyPolicyEvent.emit();
  }

  @Output() toggleLegalNoticeEvent = new EventEmitter<void>();  
  toggleLegalNotice(): void {
    this.toggleLegalNoticeEvent.emit();
    console.log('toggleLegalNotice starts');
  }

  @Output() closeEvent = new EventEmitter<void>();
  close(): void {
    this.closeEvent.emit();
  }
}
