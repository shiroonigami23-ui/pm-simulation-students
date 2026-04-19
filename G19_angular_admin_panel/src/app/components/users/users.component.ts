import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  template: `
    <h1 class="mb-4">Users</h1>
    <div *ngIf="loading" class="text-muted">Loading...</div>
    <table class="table table-hover" *ngIf="!loading">
      <thead class="table-dark"><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th></th></tr></thead>
      <tbody>
        <tr *ngFor="let u of users">
          <td>{{ u.name }}</td>
          <td>{{ u.email }}</td>
          <td><span class="badge bg-secondary">{{ u.role }}</span></td>
          <td><span class="badge" [ngClass]="u.active ? 'bg-success':'bg-secondary'">{{ u.active ? 'Active':'Inactive' }}</span></td>
          <td><button class="btn btn-sm btn-outline-danger" (click)="deleteUser(u._id)">Remove</button></td>
        </tr>
      </tbody>
    </table>
  `
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUsers().subscribe({
      next:  u => { this.users = u; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  deleteUser(id: string) {
    if (!confirm('Remove user?')) return;
    this.api.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(u => u._id !== id);
    });
  }
}
