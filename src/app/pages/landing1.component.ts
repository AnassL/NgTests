import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { PortService } from '../services/port.service';

@Component({
  selector: 'app-landing1',
  imports: [ NgIf],
  template: `
    <div class="w-72 mx-auto mt-24 text-center font-bold text-white bg-fuchsia-600 p-10 space-y-6">
      <h1 class="text-5xl">1</h1>
      <!-- <p *ngIf="isProduction" class="text-xl">{{'Production'}}</p>
      <p *ngIf="!isProduction" class="text-xl">{{'Development'}}</p>      
      <p class="text-3xl">{{ currentHost }}</p> -->
      <p class="text-3xl">{{currentPort}}</p>
      <!-- <p class="text-3xl">{{loadChildren}}</p>
      <p class="text-3xl">{{result}}</p> -->
      <div>
    </div>
    </div>
  `,  
  providers: [] // No need to provide it here as it's already provided in the root
})
export class Landing1Component implements OnInit {
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
