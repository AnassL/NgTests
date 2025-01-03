import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { PortService } from '../services/port.service';

@Component({
  selector: 'app-landing1',
  template: `
  <div class="flex flex-col">
  <div class="w-72 mx-auto mt-24 text-center font-bold text-white bg-fuchsia-600 p-10 space-y-6">
      <h1 class="text-5xl">SYND</h1>
      <!-- <p *ngIf="isProduction" class="text-xl">{{'Production'}}</p>
      <p *ngIf="!isProduction" class="text-xl">{{'Development'}}</p>      
      <p class="text-3xl">{{ currentHost }}</p> -->
      <p class="text-3xl">{{currentPort}}</p>
      <!-- <p class="text-3xl">{{loadChildren}}</p>
      <p class="text-3xl">{{result}}</p> -->
      <div>

    </div>

    </div>
    <div class="w-100 mx-auto mt-16">
      <span class="text-2xl font-semibold mb-8">Notes:</span>
      <ul class="list-disc">
        <li>
          <p class="text-xl">Check if the file app/services/config.service.ts is necessary in the project</p>
        </li>
        <li>
          <p class="text-xl">Check if a vite.config.ts file is necessary in the project root (as per Bolt generated)</p>
        </li>
        <li>
          <p class="text-xl">Ask Bolt to clean the project and then add SSR without perturbating the dynamic routing and navigation based on port or host</p>
        </li>
      </ul>
    </div>
  </div>
  

  `,  
  providers: [] // No need to provide it here as it's already provided in the root
})
export class LandSyndComponent implements OnInit {
  // currentHost: string;
  currentPort: string;
  // isProduction: boolean;
  // // loadChildren: string;
  // // result: string;

  // constructor(private configService: ConfigService, private router: Router) {  
  constructor(private portService: PortService) {  
  //   this.currentHost = this.configService.currentHost; // Access the configuration
  this.currentPort = this.portService.getCurrentPort(); // Access the configuration
  console.log(this.currentPort);
  //   this.isProduction = this.configService.PRODUCTION;
  //   // this.loadChildren = this.configService.loadChildren;
  //   // this.result = this.configService.getLoadFunction;

  } 

  ngOnInit(): void {
      
  }
}
