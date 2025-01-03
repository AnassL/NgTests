import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HostService {
  getCurrentHost(): string {
    const host = window.location.hostname;
    const parts = host.split('.');
    return parts.length > 2 ? parts[0] : '';
  }
}