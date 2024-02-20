import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'stock',
		loadComponent: () =>
			import('@modules/panel/views/shared/stock-table/stock-table.component').then((c) => c.StockTableComponent)
	},
	{
		path: 'entrada',
		loadComponent: () =>
			import('@modules/panel/views/shared/stock-table/stock-table.component').then((c) => c.StockTableComponent)
	},
	{
		path: 'salida',
		loadComponent: () =>
			import('@modules/panel/views/shared/stock-table/stock-table.component').then((c) => c.StockTableComponent)
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'stock'
	}
];