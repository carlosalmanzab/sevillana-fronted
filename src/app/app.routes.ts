import { Routes } from '@angular/router';
import { HomeComponent } from '@modules/panel/home/home.component';

export const routes: Routes = [
	{
		//TODO: Corregir ruta '' doble uso, y pasar las rutas de auth a un archivo de rutas
		path: 'auth',
		loadChildren: () => import('@modules/auth/auth.routes').then((r) => r.AUTH_ROUTES)
	},
	{
		path: 'home',
		component: HomeComponent,
		loadChildren: () => import('@modules/panel/views/views.routes').then((r) => r.VIEWS_ROUTES)
	},
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
];
