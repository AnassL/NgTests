import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { PortService } from '../services/port.service';

@Component({
  selector: 'app-landing4',
  imports: [ NgIf],
  template: `
    <div class="w-72 mx-auto mt-24 text-center font-bold text-white bg-teal-600 p-10 space-y-6">
      <h1 class="text-5xl">4</h1>
      <!-- <p *ngIf="isProduction" class="text-xl">{{'Production'}}</p>
      <p *ngIf="!isProduction" class="text-xl">{{'Development'}}</p>      
      <p class="text-3xl">{{ currentHost }}</p> -->
      <p class="text-3xl">{{currentPort}}</p>
    </div>
  `
})
export class Landing4Component {
  // currentHost: string;
  currentPort: string; 
  // isProduction: boolean;

    constructor(
      // private configService: ConfigService, 
      // private router: Router
    private portService: PortService
    ) {  
    //   this.currentHost = this.configService.currentHost; // Access the configuration

    //   this.currentHost = this.configService.result$.subscribe(x => x.);

    this.currentPort = this.portService.getCurrentPort(); // Access the configuration
    console.log(this.currentPort);
      // this.isProduction = this.configService.PRODUCTION;
    } 
}
