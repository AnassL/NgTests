import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { PortService } from './port.service';
import { HostService } from './host.service';
import { ComponentResolverService } from './component-resolver.service';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private readonly PRODUCTION: boolean;
  private resultSubject = new BehaviorSubject<any>(null);
  public result$ = this.resultSubject.asObservable();

  constructor(
    private portService: PortService,
    private hostService: HostService,
    private componentResolver: ComponentResolverService
  ) {
    this.PRODUCTION = environment.production;
    this.updateResult();
  }

  public updateResult(): void {
    const value = this.PRODUCTION ?
      this.hostService.getCurrentHost() :
      this.portService.getCurrentPort();

    console.log('Current port/subdomain:', value);
    const resolvedComponent = this.componentResolver.resolveComponent(value);
    console.log('Resolved component:', resolvedComponent?.name);
    
    this.resultSubject.next(resolvedComponent);
  }
}