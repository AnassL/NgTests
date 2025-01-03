import { Routes } from '@angular/router';
import { routes, routesFor4210, routesFor4220, routesFor4240 } from '../routes/port-routes';

export const resolveComponentByPort = (port: string) => {
  console.log('Resolving component for port:', port);
  switch (port) {
    case '4210':
      return import('../pages/landing1.component').then(m => m.Landing1Component);
    case '4220':
      return import('../pages/landing2.component').then(m => m.Landing2Component);
    case '4240':
      return import('../pages/landing4.component').then(m => m.Landing4Component);
    case '4200':
    default:
      return import('../pages/landing3.component').then(m => m.Landing3Component);
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