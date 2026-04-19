import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1 class="mb-4">Dashboard</h1>
    <div class="row g-4 mb-4" *ngIf="stats">
      <div class="col-md-3" *ngFor="let m of metrics">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <p class="text-muted small mb-1">{{ m.label }}</p>
            <h3 class="fw-bold">{{ m.value }}</h3>
            <span class="badge" [ngClass]="m.up ? 'bg-success' : 'bg-danger'">{{ m.change }}</span>
          </div>
        </div>
      </div>
    </div>
    <div *ngIf="!stats" class="text-muted">Loading stats...</div>
  `
})
export class DashboardComponent implements OnInit {
  stats: any;
  metrics: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getStats().subscribe({
      next: s => {
        this.stats = s;
        this.metrics = [
          { label:'Total Users',  value: s.users,   change:'+8%',  up:true  },
          { label:'Active Today', value: s.active,  change:'+3%',  up:true  },
          { label:'New This Week',value: s.newWeek, change:'+12%', up:true  },
          { label:'Admins',       value: s.admins,  change:'0%',   up:false },
        ];
      },
      error: () => {
        this.metrics = [
          { label:'Total Users',  value:'—', change:'N/A', up:false },
          { label:'Active Today', value:'—', change:'N/A', up:false },
        ];
      }
    });
  }
}
