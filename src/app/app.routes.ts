import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';
import { ProgramsViewComponent } from './components/public/programs-view/programs-view.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: LandingPageComponent },
    { path: 'programs', component: ProgramsViewComponent },
];
