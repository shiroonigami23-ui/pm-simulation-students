import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }       from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent }     from './components/users/users.component';

const routes: Routes = [
  { path: '',         redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users',     component: UsersComponent },
];

@NgModule({
  declarations: [AppComponent, DashboardComponent, UsersComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent]
})
export class AppModule {}
