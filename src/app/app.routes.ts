import { Routes } from '@angular/router';
import { resolveComponentByPort } from './utils/port.utils';

export const routes: Routes = [
    { path: '', loadComponent: () => resolveComponentByPort(window.location.port) },
    { path: 'land1', loadComponent: () => import('./pages/landing1.component').then(m => m.Landing1Component) },
    { path: 'land2', loadComponent: () => import('./pages/landing2.component').then(m => m.Landing2Component) },
    { path: 'land3', loadComponent: () => import('./pages/landing3.component').then(m => m.Landing3Component) },
    { path: 'land4', loadComponent: () => import('./pages/landing4.component').then(m => m.Landing4Component) },
    { path: 'adm1', loadComponent: () => import('./pages/adm1.component').then(m => m.Adm1Component) },
    { path: 'adm2', loadComponent: () => import('./pages/adm2.component').then(m => m.Adm2Component) },
    { path: '**', redirectTo: '' }
  ];
