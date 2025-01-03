import { Routes } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { getRoutesByHost } from './host.utils';
import { PortConfigService } from '../services/port-config.service';
import { inject } from '@angular/core';

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
    const portConfig = inject(PortConfigService);
    return portConfig.getRoutes();
  }
};