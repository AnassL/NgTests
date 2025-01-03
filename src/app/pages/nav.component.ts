import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../models/nav-item.model';
import { getNavItemsByPort } from '../utils/nav.utils';


@Component({
  selector: 'app-nav',
  template: `
        <nav class="flex justify-center w-full h-12 bg-gray-100 pt-2 mb-8">
        <div class="flex space-x-2 text-center mx-auto">
            <!-- <button (click)="navigateTo('')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Land1</button>
            <button (click)="navigateTo('land2')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Land2</button>
            <button (click)="navigateTo('land3')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Land3</button>
            <button (click)="navigateTo('land4')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Land4</button>

            <button (click)="navigateTo('adm1')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Adm1</button>
            <button (click)="navigateTo('adm2')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Adm2</button> -->

            @for (item of navItems; track item.path) {
          <button 
            (click)="navigateTo(item.path)" 
            class="w-24 h-8 pt-1 cursor-pointer bg-gray-200 hover:bg-gray-300">
            {{ item.label }}
          </button>
        }
        </div>
        </nav>
  `,
  imports: [], // Import Router Outlet here
})
export class NavComponent implements OnInit {
  private router = inject(Router);
  navItems: NavItem[] = [];

  ngOnInit(): void {
    this.initializeNavItems();
    // Re-initialize nav items when URL changes
    this.router.events.subscribe(() => {
      this.initializeNavItems();
    });
  }

  private initializeNavItems(): void {
    const currentPort = window.location.port;
    console.log('Current port:', currentPort);
    this.navItems = getNavItemsByPort(currentPort);
    console.log('Nav items:', this.navItems);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
