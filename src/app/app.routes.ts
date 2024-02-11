import { Routes } from '@angular/router';
import { HomeComponent } from '@modules/panel/home/home.component';

export const routes: Routes = [
	{
		path: 'auth/login',
		loadComponent: () => import('@modules/auth/login/login.component')
	},
	{
		path: 'auth/register',
		loadComponent: () => import('@modules/auth/register/register.component')
	},
	{
		path: 'home',
		component: HomeComponent,
		loadChildren: () => import('@modules/panel/views/views.routes').then((r) => r.routes)
	},
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
];
