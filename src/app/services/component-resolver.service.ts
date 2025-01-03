import { Injectable } from '@angular/core';
import { PortService } from './port.service';
import { LandSyndComponent } from '../pages/land-synd.component';
import { LandPersoComponent } from '../pages/land-perso.component';
import { LandAdvertComponent } from '../pages/land-advert.component';
import { LandAcadComponent } from '../pages/land-acad.component';

@Injectable({ providedIn: 'root' })
export class ComponentResolverService {
  resolveComponent(val: string): any {
    console.log('Resolving component for value:', val);
    switch (val) {
      case '4210':
      case 'perso':
        return LandPersoComponent;
      case '4220':
      case 'advert':
        return LandAdvertComponent;
      case '4200':
      case '':
        return LandSyndComponent;
      case '4240':
      case 'academ':
        return LandAcadComponent;
      default:
        console.warn('Unknown value:', val);
        return LandSyndComponent;
    }
  }
}