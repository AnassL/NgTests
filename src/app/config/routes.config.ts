import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { PortConfigService } from '../services/port-config.service';

export const BASE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => inject(PortConfigService).resolveComponent()
  },
  { 
    path: 'land1', 
    loadComponent: () => import('../pages/land-synd.component').then(m => m.LandSyndComponent) 
  },
  { 
    path: 'land2', 
    loadComponent: () => import('../pages/land-perso.component').then(m => m.LandPersoComponent) 
  },
  { 
    path: 'land3', 
    loadComponent: () => import('../pages/land-advert.component').then(m => m.LandAdvertComponent) 
  },
  { 
    path: 'land4', 
    loadComponent: () => import('../pages/land-acad.component').then(m => m.LandAcadComponent) 
  },
  { 
    path: 'adm1', 
    loadComponent: () => import('../pages/adm1.component').then(m => m.Adm1Component) 
  },
  { 
    path: 'adm2', 
    loadComponent: () => import('../pages/adm2.component').then(m => m.Adm2Component) 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];