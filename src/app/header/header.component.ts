import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ResumePopupComponent } from '../resume-popup/resume-popup.component'; // Import ResumePopupComponent


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule , ResumePopupComponent]
})
export class HeaderComponent {
  @Output() scrollToHome = new EventEmitter<void>();
  @Output() scrollToSkills = new EventEmitter<void>();
  @Output() scrollToExperience = new EventEmitter<void>();
  @Output() scrollToContact = new EventEmitter<void>();
  @Output() scrollToResume = new EventEmitter<void>();

  showResumePopup = false;
  mobileMenuOpen = false;

  constructor() {}

  onHomeClick() {
    this.scrollToHome.emit();
  }

  onSkillsClick() {
    this.scrollToSkills.emit();
  }

  onExperienceClick() {
    this.scrollToExperience.emit();
  }

  onContactClick() {
    this.scrollToContact.emit();
  }

  onResumeClick() {
    this.scrollToResume.emit();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
  

  openResumePopup() {
    this.showResumePopup = true;
  }

  closeResumePopup() {
    this.showResumePopup = false;
    window.location.href = '';
  }
  
}
