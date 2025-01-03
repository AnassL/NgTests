import { Routes } from '@angular/router';
import { routes, routesFor4210, routesFor4220, routesFor4240 } from '../routes/port-routes';
import { HostService } from '../services/host.service';
import { environment } from '../../environments/environment.prod';
import { getRoutesByHost } from './host.utils';
import { getRoutesByPort } from './port.utils';

// const hostService = new HostService();

// export const getRoutes = (): Routes => {
//   if (environment.production) {
//     const host = hostService.getCurrentHost();
//     return getRoutesByHost(host);
//   } else {
//     const port = window.location.port;
//     return getRoutesByPort(port);
//   }
// };

export const getRoutes = (): Routes => {
  if (environment.production) {
    const host = window.location.hostname.split('.')[0];
    return getRoutesByHost(host);
  } else {
    const port = window.location.port || '4200';
    console.log('Getting routes for port:', port);
    return getRoutesByPort(port);
  }
};