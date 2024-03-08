import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { MenuModule } from 'primeng/menu';
import { client } from '@endpoints';

@Component({
	selector: 'app-side-bar',
	standalone: true,
	imports: [MenuModule],
	templateUrl: './side-bar.component.html',
	styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
	items: MenuItem[] = [
		{
			label: client.routes.home.dashboard.title,
			icon: 'pi pi-fw pi-chart-bar',
			routerLink: client.routes.home.dashboard.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: client.routes.home.calendario.title,
			icon: 'pi pi-fw pi-calendar',
			routerLink: client.routes.home.calendario.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: client.routes.home.ingresos_egresos.title,
			icon: 'pi pi-fw pi-chart-line',
			routerLink: client.routes.home.ingresos_egresos.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: client.routes.home.control_inventario.title,
			icon: 'pi pi-fw pi-book',
			routerLink: client.routes.home.control_inventario.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: client.routes.home.cuentas_cobrar.title,
			icon: 'pi pi-fw pi-credit-card',
			routerLink: client.routes.home.cuentas_cobrar.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: client.routes.home.inventario_materia_prima.title,
			icon: 'pi pi-fw pi-shopping-bag',
			routerLink: client.routes.home.inventario_materia_prima.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: client.routes.home.control_nomina.title,
			icon: 'pi pi-fw pi-money-bill',
			routerLink: client.routes.home.control_nomina.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: client.routes.home.clientes.title,
			icon: 'pi pi-fw pi-user',
			routerLink: client.routes.home.clientes.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: client.routes.home.empleados.title,
			icon: 'pi pi-fw pi-users',
			routerLink: client.routes.home.empleados.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: client.routes.home.proveedores.title,
			icon: 'pi pi-fw pi-truck',
			routerLink: client.routes.home.proveedores.relative,
			routerLinkActiveOptions: { exact: true }
		}
	];
}
