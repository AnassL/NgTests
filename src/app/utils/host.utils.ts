import { Routes } from '@angular/router';
import { routes } from '../routes/port-routes';
import { routesForPerso, routesForAdvert, routesForAcadem } from '../routes/host-routes';

export const resolveComponentByHost = (host: string) => {
    switch (host) {
      case 'perso':
        return import('../pages/land-synd.component').then(m => m.LandSyndComponent);
      case 'advert':
        return import('../pages/land-perso.component').then(m => m.LandPersoComponent);
      case 'academ':
        return import('../pages/land-acad.component').then(m => m.LandAcadComponent);
      default:
        return import('../pages/land-advert.component').then(m => m.LandAdvertComponent);
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