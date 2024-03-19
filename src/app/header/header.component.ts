import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { PrivacyPolicyComponent } from "./../privacy-policy/privacy-policy.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    PrivacyPolicyComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() togglePrivacyPolicyEvent = new EventEmitter<void>();
  togglePrivacyPolicy(): void {
    this.togglePrivacyPolicyEvent.emit();
  } 

  @Output() languageChanged = new EventEmitter<string>();
  changeLang(lang: string): void {
    console.log('Selected language:', lang);
    
    this.languageChanged.emit(lang);
  }

}
