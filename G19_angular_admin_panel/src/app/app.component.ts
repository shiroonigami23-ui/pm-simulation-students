import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="display:flex">
      <nav class="sidebar p-3">
        <div class="fw-bold mb-4" style="color:#e2e8f0;font-size:1.2rem">
          <i class="fas fa-shield-alt me-2"></i>AdminPro
        </div>
        <a routerLink="/dashboard" routerLinkActive="active">
          <i class="fas fa-tachometer-alt me-2"></i>Dashboard
        </a>
        <a routerLink="/users" routerLinkActive="active">
          <i class="fas fa-users me-2"></i>Users
        </a>
      </nav>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class AppComponent {}
