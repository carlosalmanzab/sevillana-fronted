import { Routes } from '@angular/router';
import { client } from '@endpoints';

const authPath = client.routes.auth;

export const AUTH_ROUTES: Routes = [
	{
		path: authPath.login.path,
		title: authPath.login.title,
		loadComponent: () => import('@modules/auth/login/login.component')
	},
	{
		path: authPath.register.path,
		title: authPath.register.title,
		loadComponent: () => import('@modules/auth/register/register.component')
	},
	{ path: '', redirectTo: authPath.login.path, pathMatch: 'full' }
];
