import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-adm-1',
  template: `
        <div class="flex justify-center w-full bg-gray-100 pt-2 mb-8">
          <div class="flex flex-col space-x-2 space-y-8 pb-8 text-center mx-auto ">
                <h1 class="text-5xl pt-16">Adm1</h1>
                <button (click)="navigateTo('adm1')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Adm1</button>
                <button (click)="navigateTo('adm2')" class="w-24 h-8 pt-1 cursor-pointer bg-gray-200">Adm2</button>
            </div>
        </div>
  `,
  imports: [], // Import Router Outlet here
})
export class Adm1Component {

  private router = inject(Router); // Inject Router
  // private configService = inject(ConfigService);

  navigateTo(route: string): void {
    // this.configService.updateResult();
    this.router.navigate([route]);
  }
}
