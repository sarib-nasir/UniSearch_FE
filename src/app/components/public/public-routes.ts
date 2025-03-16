import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProgramsViewComponent } from './programs-view/programs-view.component';


export const publicRoutes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'programs', component: ProgramsViewComponent },
];
