import { Routes } from '@angular/router';
import { routes } from '../routes/port-routes';
import { routesForPerso, routesForAdvert, routesForAcadem } from '../routes/host-routes';

export const resolveComponentByHost = (host: string) => {
    switch (host) {
      case 'perso':
        return import('../pages/landing1.component').then(m => m.Landing1Component);
      case 'advert':
        return import('../pages/landing2.component').then(m => m.Landing2Component);
      case 'academ':
        return import('../pages/landing4.component').then(m => m.Landing4Component);
      default:
        return import('../pages/landing3.component').then(m => m.Landing3Component);
    }
  };
  
  export const getRoutesByHost = (host: string): Routes => {
    switch (host) {
      case 'perso':
        return routesForPerso;
      case 'advert':
        return routesForAdvert;
      case 'academ':
        return routesForAcadem;
      default:
        return routes;
    }
  };