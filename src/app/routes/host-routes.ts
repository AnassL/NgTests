import { Routes } from '@angular/router';
import { baseRoutes, adminRoutes, landingRoutes } from './route-configs';

export const routesForPerso: Routes = [
  baseRoutes.home,
  landingRoutes.landing1,
  ...Object.values(adminRoutes),
  baseRoutes.notFound
];

export const routesForAdvert: Routes = [
  baseRoutes.home,
  landingRoutes.landing2,
  adminRoutes.admin1,
  baseRoutes.notFound
];

export const routesForAcadem: Routes = [
  baseRoutes.home,
  landingRoutes.landing4,
  adminRoutes.admin2,
  baseRoutes.notFound
];