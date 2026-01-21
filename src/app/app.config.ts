import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
//import "zone.js"
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    //provideZoneChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
