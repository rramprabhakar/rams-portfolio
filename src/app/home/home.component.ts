import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('homeSection') homeSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('experienceSection') experienceSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;
  @ViewChild('resumeSection') resumeSection!: ElementRef;

  private headerHeight = 60; // this is to adjust based on  header height

  constructor() {}

  // Scroll methods to bring each section into view, considering header height
  scrollToHome() {
    this.scrollToSection(this.homeSection);
  }

  scrollToSkills() {
    this.scrollToSection(this.skillsSection);
  }

  scrollToExperience() {
    this.scrollToSection(this.experienceSection);
  }

  scrollToContact() {
    this.scrollToSection(this.contactSection);
  }

  scrollToResume() {
    this.scrollToSection(this.resumeSection);
  }

  // to Scroll to the specific section while considering header height
  private scrollToSection(section: ElementRef) {
    window.scrollTo({
      top: section.nativeElement.offsetTop - this.headerHeight,
      behavior: 'smooth'
    });
  }
}
