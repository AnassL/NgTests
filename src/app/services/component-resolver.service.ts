import { Injectable } from '@angular/core';
import { PortService } from './port.service';
import { Landing1Component } from '../pages/landing1.component';
import { Landing2Component } from '../pages/landing2.component';
import { Landing3Component } from '../pages/landing3.component';
import { Landing4Component } from '../pages/landing4.component';

@Injectable({ providedIn: 'root' })
export class ComponentResolverService {
  resolveComponent(val: string): any {
    console.log('Resolving component for value:', val);
    switch (val) {
      case '4210':
      case 'perso':
        return Landing1Component;
      case '4220':
      case 'advert':
        return Landing2Component;
      case '4200':
      case '':
        return Landing1Component;
      case '4240':
      case 'academ':
        return Landing4Component;
      default:
        console.warn('Unknown value:', val);
        return Landing1Component;
    }
  }
}