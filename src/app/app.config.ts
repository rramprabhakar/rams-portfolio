import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// Remove the router-related import
// import { provideRouter } from '@angular/router';  

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),  // Keeps change detection optimized
  ]
};
