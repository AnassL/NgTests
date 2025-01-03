import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';


@Injectable({ providedIn: 'root' })
export class PortService {
  getCurrentPort(): string {
    const portNumber = window.location.port ? parseInt(window.location.port, 10) : 80;
    console.log('Current port:', portNumber);
    return portNumber.toString();
  }
}