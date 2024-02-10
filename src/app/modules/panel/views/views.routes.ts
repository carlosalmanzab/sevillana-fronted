import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () =>
      import('@modules/panel/views/dashboard/dashboard.component'),
  },
  {
    path: 'calendar',
    title: 'Calendario',
    loadComponent: () =>
      import('@modules/panel/views/calendar/calendar.component'),
  },
  {
    path: 'ingresos-egresos',
    title: 'Ingresos & Egresos',
    loadComponent: () =>
      import(
        '@modules/panel/views/ingresos-egresos/ingresos-egresos.component'
      ),
  },
  {
    path: 'control-inventario',
    title: 'Control de Inventario',
    loadComponent: () =>
      import(
        '@modules/panel/views/control-inventario/control-inventario.component'
      ),
  },
  {
    path: 'cuentas-cobrar',
    title: 'Cuentas por Cobrar',
    loadComponent: () =>
      import(
        '@modules/panel/views/cuentas-por-cobrar/cuentas-por-cobrar.component'
      ),
  },
  {
    path: 'inventario-materia-prima',
    title: 'Inventario de Materia Prima',
    loadComponent: () =>
      import(
        '@modules/panel/views/inventario-materia-prima/inventario-materia-prima.component'
      ),
  },
  {
    path: 'control-nomina',
    title: 'Control de Nomina',
    loadComponent: () =>
      import('@modules/panel/views/control-nomina/control-nomina.component'),
  },
  {
    path: 'clientes',
    title: 'Clientes',
    loadComponent: () =>
      import('@modules/panel/views/clientes/clientes.component'),
  },
  {
    path: 'empleados',
    title: 'Empleados',
    loadComponent: () =>
      import('@modules/panel/views/empleados/empleados.component'),
  },
  {
    path: 'proveedores',
    title: 'Proveedores',
    loadComponent: () =>
      import('@modules/panel/views/proveedores/proveedores.component'),
  },
];
