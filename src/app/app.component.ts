// app.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, HomeComponent]
})
export class AppComponent {

  constructor() {}

  onScrollToHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }

  onScrollToSkills() {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  }

  onScrollToExperience() {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  }

  onScrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  onScrollToResume() {
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  }
}
