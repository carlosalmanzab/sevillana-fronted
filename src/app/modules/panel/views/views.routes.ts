import { Routes } from '@angular/router';
import DashboardComponent from '@modules/panel/views/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard"
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('@modules/panel/views/dashboard/dashboard.component'),
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('@modules/panel/views/calendar/calendar.component'),
  },
  {
    path: 'ingresos_egresos',
    loadComponent: () =>
      import(
        '@modules/panel/views/ingresos-egresos/ingresos-egresos.component'
      ),
  },
];
