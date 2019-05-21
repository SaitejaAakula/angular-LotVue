import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardService } from './dashboard/dashboard.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login',      component: LoginComponent },
  { path: '',    redirectTo: '/login',    pathMatch: 'full' },
  { path: '**',   redirectTo: '/login',    pathMatch: 'full' }
];
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  declarations: [ AppComponent, HelloComponent, LoginComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DashboardService]
})
export class AppModule { }
