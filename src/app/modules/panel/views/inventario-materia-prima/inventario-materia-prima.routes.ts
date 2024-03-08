import { Routes } from '@angular/router';
import { client } from '@endpoints';

const inventario_materiaPath = client.routes.home.inventario_materia_prima;

export const INVETARIO_MATERIA_PRIMA_ROUTES: Routes = [
	{
		path: inventario_materiaPath.stock.path,
		loadComponent: () => import('@modules/panel/views/shared/stock-table/stock-table.component')
	},
	{
		path: inventario_materiaPath.entrada.path,
		loadComponent: () => import('@modules/panel/views/shared/stock-table/stock-table.component')
	},
	{
		path: inventario_materiaPath.salida.path,
		loadComponent: () => import('@modules/panel/views/shared/stock-table/stock-table.component')
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: inventario_materiaPath.stock.path
	}
];
