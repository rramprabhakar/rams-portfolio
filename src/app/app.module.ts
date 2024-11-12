import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumePopupComponent } from './resume-popup/resume-popup.component';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,       // Declare AppComponent
    HeaderComponent,    // Declare HeaderComponent
    HomeComponent,     // Declare HomeComponent
    ExperienceComponent, // Declare ExperienceComponent
    ResumeComponent ,   // Declare ResumeComponent
    SkillsComponent ,   // Declare SkillsComponent
    ResumePopupComponent
  ],
  imports: [
    BrowserModule,      // Import required Angular modules
    CommonModule,       // Import CommonModule for ngIf and other common directives
    ReactiveFormsModule ,
    HeaderComponent// Import ReactiveFormsModule for reactive forms
    // AppRoutingModule   // Uncomment this if routing is being used
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap the root component
})
export class AppModule { }
