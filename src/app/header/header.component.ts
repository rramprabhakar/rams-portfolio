// header.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
}
