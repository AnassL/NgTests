import { Routes } from '@angular/router';

export interface RouteConfig {
  path: string;
  loadComponent: () => Promise<any>;
}

export interface BaseRoutes {
  home: RouteConfig;
  notFound: {
    path: string;
    redirectTo: string;
  };
}