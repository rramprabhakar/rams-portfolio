import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';  // Import CommonModule
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, // Import required Angular modules
    AppComponent, // Import the standalone AppComponent
    HeaderComponent,
    HomeComponent, // Import the standalone HomeComponent
    CommonModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [] // Bootstraps the root component
})
export class AppModule { }