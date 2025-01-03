import { Routes } from '@angular/router';
import { baseRoutes, adminRoutes, landingRoutes } from './route-configs';

export const routes: Routes = [
  baseRoutes.home,
  ...Object.values(landingRoutes),
  ...Object.values(adminRoutes),
  baseRoutes.notFound
];

export const routesFor4210: Routes = [
  baseRoutes.home,
  ...Object.values(adminRoutes),
  baseRoutes.notFound
];

export const routesFor4220: Routes = [
  baseRoutes.home,
  adminRoutes.admin1,
  baseRoutes.notFound
];

export const routesFor4240: Routes = [
  baseRoutes.home,
  adminRoutes.admin2,
  baseRoutes.notFound
];