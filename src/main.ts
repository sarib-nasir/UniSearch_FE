import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]), // Ensure router is provided
    provideHttpClient(), // Ensure HttpClient is provided
  ]
}).catch(err => console.error(err));

