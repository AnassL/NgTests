import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { NavItem } from '../models/nav-item.model';
import { getNavItemsByPort, getNavItemsByHost } from '../utils/nav.utils';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="flex justify-center w-full h-12 bg-gray-100 pt-2 mb-8">
      <div class="flex space-x-2 text-center mx-auto">
        @for (item of navItems; track item.path) {
          <button 
            (click)="navigateTo(item.path)" 
            class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">
            {{ item.label }}
          </button>
        }
      </div>
    </nav>
  `
})
export class NavComponent {
  private router = inject(Router);
  navItems: NavItem[] = [];

  constructor() {
    this.initializeNavItems();
  }

  private initializeNavItems(): void {
    if (environment.production) {
      const host = window.location.hostname.split('.')[0];
      this.navItems = getNavItemsByHost(host);
    } else {
      const port = window.location.port;
      this.navItems = getNavItemsByPort(port);
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}