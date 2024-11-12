// header.component.ts
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

  showResumePopup = false;

  openResumePopup() {
    this.showResumePopup = true;
  }

  closeResumePopup() {
    this.showResumePopup = false;
    // Navigate to home or portfolio after closing
    // Replace 'home' with your desired route path
    window.location.href = '';
  }
  
}
