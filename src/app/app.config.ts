import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { icons } from './icons-provider';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { NzSelectModule } from 'ng-zorro-antd/select';
registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    // provideRouter(routes),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    provideNzIcons(icons),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    BrowserAnimationsModule
  ]
};
