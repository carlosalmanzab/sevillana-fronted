import { Routes } from '@angular/router';
import { client } from '@endpoints';

const viewsPath = client.routes.home;

export const VIEWS_ROUTES: Routes = [
	{
		path: viewsPath.dashboard.path,
		title: viewsPath.dashboard.title,
		loadComponent: () => import('@views/dashboard/dashboard.component')
	},
	{
		path: viewsPath.calendario.path,
		title: viewsPath.calendario.title,
		loadComponent: () => import('@views/calendar/calendar.component')
	},
	{
		path: viewsPath.ingresos_egresos.path,
		title: viewsPath.ingresos_egresos.title,
		loadComponent: () => import('@views/ingresos-egresos/ingresos-egresos.component')
	},
	{
		path: viewsPath.control_inventario.path,
		title: viewsPath.control_inventario.title,
		loadComponent: () => import('@views/control-inventario/control-inventario.component'),
		loadChildren: () =>
			import('@views/control-inventario/control-inventario.routes').then((r) => r.CONTROL_INVETARIO_ROUTES)
	},
	{
		path: viewsPath.cuentas_cobrar.path,
		title: viewsPath.cuentas_cobrar.title,
		loadComponent: () => import('@views/cuentas-por-cobrar/cuentas-por-cobrar.component')
	},
	{
		path: viewsPath.inventario_materia_prima.path,
		title: viewsPath.inventario_materia_prima.title,
		loadComponent: () => import('@views/inventario-materia-prima/inventario-materia-prima.component')
	},
	{
		path: viewsPath.control_nomina.path,
		title: viewsPath.control_nomina.title,
		loadComponent: () => import('@views/control-nomina/control-nomina.component')
	},
	{
		path: viewsPath.clientes.path,
		title: viewsPath.clientes.title,
		loadComponent: () => import('@views/clientes/clientes.component')
	},
	{
		path: viewsPath.empleados.path,
		title: viewsPath.empleados.title,
		loadComponent: () => import('@views/empleados/empleados.component')
	},
	{
		path: viewsPath.proveedores.path,
		title: viewsPath.proveedores.title,
		loadComponent: () => import('@views/proveedores/proveedores.component')
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: viewsPath.dashboard.path
	}
];
