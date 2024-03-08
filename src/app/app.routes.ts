import { Routes } from '@angular/router';
import { HomeComponent } from '@modules/panel/home/home.component';

export const routes: Routes = [
	{
		//TODO: Corregir ruta '' doble uso, y pasar las rutas de auth a un archivo de rutas
		path: '',
		children: [
			{
				path: 'auth/login',
				loadComponent: () => import('@modules/auth/login/login.component')
			},
			{
				path: 'auth/register',
				loadComponent: () => import('@modules/auth/register/register.component')
			}
		]
	},
	{
		path: 'home',
		component: HomeComponent,
		loadChildren: () => import('@modules/panel/views/views.routes').then((r) => r.VIEWS_ROUTES)
	},
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
];
