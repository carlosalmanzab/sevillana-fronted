import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (component) => component.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/register/register.component').then(
        (component) => component.RegisterComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'register'
  }
];
