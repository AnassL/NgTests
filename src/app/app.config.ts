import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { getRoutes } from './utils/route.utils';


export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }), 
    // provideRouter(routes)

    provideRouter(getRoutes())
  ]
};
