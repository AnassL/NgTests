import { Routes } from '@angular/router';
import { routes, routesFor4210, routesFor4220, routesFor4240 } from '../routes/port-routes';

export const resolveComponentByPort = (port: string) => {
  console.log('Resolving component for port:', port);
  switch (port) {
    case '4210':
      return import('../pages/land-perso.component').then(m => m.LandPersoComponent);
    case '4220':
      return import('../pages/land-advert.component').then(m => m.LandAdvertComponent);
    case '4240':
      return import('../pages/land-acad.component').then(m => m.LandAcadComponent);
    case '4200':
    default:
      return import('../pages/land-synd.component').then(m => m.LandSyndComponent);
  }
};

export const getRoutesByPort = (port: string): Routes => {
  console.log('Getting routes for port:', port);
  switch (port) {
    case '4210':
      return routesFor4210;
    case '4220':
      return routesFor4220;
    case '4240':
      return routesFor4240;
    default:
      return routes;
  }
};