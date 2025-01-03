import { Routes } from '@angular/router';
import { resolveComponentByPort } from '../utils/port.utils';


export const baseRoutes = {
  home: {
    path: '',
    loadComponent: () => resolveComponentByPort(window.location.port)
  },
  notFound: {
    path: '**',
    redirectTo: ''
  }
};

export const adminRoutes = {
  admin1: {
    path: 'adm1',
    loadComponent: () => import('../pages/adm1.component').then(m => m.Adm1Component)
  },
  admin2: { path: 'adm2', loadComponent: () => import('../pages/adm2.component').then(m => m.Adm2Component) }
};

export const landingRoutes = {
  landing1: {
    path: 'land1',
    loadComponent: () => import('../pages/landing1.component').then(m => m.Landing1Component)
  },
  landing2: {
    path: 'land2',
    loadComponent: () => import('../pages/landing2.component').then(m => m.Landing2Component)
  },
  landing3: {
    path: 'land3',
    loadComponent: () => import('../pages/landing3.component').then(m => m.Landing3Component)
  },
  landing4: {
    path: 'land4',
    loadComponent: () => import('../pages/landing4.component').then(m => m.Landing4Component)
  }
};