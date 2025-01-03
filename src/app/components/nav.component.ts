import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { NavItem } from '../models/nav-item.model';
import { getNavItemsByPort, getNavItemsByHost } from '../utils/nav.utils';
import { PortConfigService } from '../services/port-config.service';
import { Subscription } from 'rxjs';

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
            class="w-24 h-8 pt-1 cursor-pointer bg-gray-200 hover:bg-gray-300">
            {{ item.label }}
          </button>
        }
      </div>
    </nav>
  `
})
export class NavComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private portConfig = inject(PortConfigService);
  private subscription: Subscription | null = null;
  
  navItems: NavItem[] = [];

  ngOnInit(): void {
    this.subscription = this.portConfig.currentPort$.subscribe(() => {
      this.navItems = this.portConfig.getNavItems();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}