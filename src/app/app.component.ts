import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumePopupComponent } from './resume-popup/resume-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    SkillsComponent,
    ExperienceComponent,
    ResumeComponent,
    ResumePopupComponent
  ]
})
export class AppComponent {
  // Simple scroll logic for each section
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('header')?.clientHeight || 0;
      let offset = 20; // Default offset for most sections

      // Increase the offset specifically for the 'home' section to fix the header overlap
      if (sectionId === 'home') {
        offset = 50; // Adjust the offset for the home section (increase to ensure it doesn't go under the header)
      }

      window.scrollTo({
        top: section.offsetTop - headerHeight - offset, // Adjusted scroll position with custom offset
        behavior: 'smooth'
      });
    }
  }

  // Event handlers to trigger smooth scrolling
  onScrollToHome() {
    this.scrollToSection('home');
  }

  onScrollToSkills() {
    this.scrollToSection('skills');
  }

  onScrollToExperience() {
    this.scrollToSection('experience');
  }

  onScrollToContact() {
    this.scrollToSection('contact');
  }

  onScrollToResume() {
    this.scrollToSection('resume');
  }
}
