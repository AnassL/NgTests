import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  template: `
        <nav class="flex justify-center w-full h-12 bg-gray-100 pt-2 mb-8">
        <div class="flex space-x-2 text-center mx-auto">
            <button (click)="navigateTo('')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Land1</button>
            <button (click)="navigateTo('land2')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Land2</button>
            <button (click)="navigateTo('land3')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Land3</button>
            <button (click)="navigateTo('land4')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Land4</button>

            <button (click)="navigateTo('adm1')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Adm1</button>
            <button (click)="navigateTo('adm2')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Adm2</button>
        </div>
        </nav>
  `,
  imports: [], // Import Router Outlet here
})
export class NavComponent {

  private router = inject(Router); // Inject Router

  navigateTo(route: string): void {
    this.router.navigate([route]);
  } 
}
