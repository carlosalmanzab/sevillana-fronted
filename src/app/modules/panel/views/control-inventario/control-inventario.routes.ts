import { Routes } from '@angular/router';
import { client } from '@endpoints';

const control_invetiarioPath = client.routes.home.control_inventario;

export const CONTROL_INVETARIO_ROUTES: Routes = [
	{
		path: control_invetiarioPath.stock.path,
		loadComponent: () => import('@modules/panel/views/shared/stock-table/stock-table.component')
	},
	{
		path: control_invetiarioPath.entrada.path,
		loadComponent: () => import('@modules/panel/views/shared/stock-table/stock-table.component')
	},
	{
		path: control_invetiarioPath.salida.path,
		loadComponent: () => import('@modules/panel/views/shared/stock-table/stock-table.component')
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: control_invetiarioPath.stock.path
	}
];
