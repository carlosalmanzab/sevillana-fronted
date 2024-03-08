import { Routes } from '@angular/router';
import { HomeComponent } from '@modules/panel/home/home.component';
import { client } from '@endpoints';

const appRoutes = client.routes;

export const routes: Routes = [
	{
		path: appRoutes.auth.path,
		loadChildren: () => import('@modules/auth/auth.routes').then((r) => r.AUTH_ROUTES)
	},
	{
		path: appRoutes.home.path,
		component: HomeComponent,
		loadChildren: () => import('@modules/panel/views/views.routes').then((r) => r.VIEWS_ROUTES)
	},
	{ path: '', redirectTo: appRoutes.home.path, pathMatch: 'full' }
];
