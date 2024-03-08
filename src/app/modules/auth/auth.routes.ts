import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
	{
		path: 'login',
		title: 'Iniciar Sesion',
		loadComponent: () => import('@modules/auth/login/login.component')
	},
	{
		path: 'register',
		title: 'Registrar',
		loadComponent: () => import('@modules/auth/register/register.component')
	},
	{ path: '', redirectTo: 'login', pathMatch: 'full' }
];
