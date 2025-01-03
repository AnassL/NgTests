import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavItem } from '../models/nav-item.model';
import { Routes } from '@angular/router';
import { getNavItemsByPort } from '../config/nav-items.config';
import { BASE_ROUTES } from '../config/routes.config';


@Injectable({ providedIn: 'root' })
export class PortConfigService {
  private currentPort = new BehaviorSubject<string>('');
  currentPort$ = this.currentPort.asObservable();

  constructor() {
    this.updatePort(window.location.port || '4200');
  }

  updatePort(port: string): void {
    console.log('Updating port configuration:', port);
    this.currentPort.next(port);
  }

  getNavItems(): NavItem[] {
    return getNavItemsByPort(this.currentPort.value);
  }

  getRoutes(): Routes {
    return BASE_ROUTES;
  }

  async resolveComponent(): Promise<any> {
    const port = this.currentPort.value;
    console.log('Resolving component for port:', port);
    
    switch (port) {
      case '4210':
        return (await import('../pages/land-advert.component')).LandAdvertComponent;
      case '4220':
        return (await import('../pages/land-perso.component')).LandPersoComponent;
      case '4240':
        return (await import('../pages/land-acad.component')).LandAcadComponent;
      default:
        return (await import('../pages/land-synd.component')).LandSyndComponent;
    }
  }
}