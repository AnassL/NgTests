import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav.component';


  @Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavComponent],   
    template: `
    <div class="app-container">
      <app-nav></app-nav>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
    `
  })
  export class AppComponent {
  
    constructor() { }
  
    ngOnInit(): void {}
  }