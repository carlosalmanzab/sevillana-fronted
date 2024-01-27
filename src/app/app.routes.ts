import { Routes } from '@angular/router';
import { HomeComponent } from './modules/panel/home/home.component';
import { DashboardComponent } from './modules/panel/views/dashboard/dashboard.component';

export const routes: Routes = [

  {
    path: 'auth/login',
    loadComponent: () =>
      import('./modules/auth/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./modules/auth/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home/dashboard',
  },
];
