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
			label: 'Dashboard',
			icon: 'pi pi-fw pi-chart-bar',
			routerLink: client.routes.home.dashboard.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: 'Calendario',
			icon: 'pi pi-fw pi-calendar',
			routerLink: client.routes.home.calendar.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: 'Ingresos y Egresos',
			icon: 'pi pi-fw pi-chart-line',
			routerLink: client.routes.home.ingresos_egresos.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: 'Control de Inventario',
			icon: 'pi pi-fw pi-book',
			routerLink: client.routes.home.control_inventario.relative,
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: 'Cuentas por Cobrar',
			icon: 'pi pi-fw pi-credit-card',
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: 'Inv. Materia Prima',
			icon: 'pi pi-fw pi-shopping-bag',
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: 'Control de Nomina',
			icon: 'pi pi-fw pi-money-bill',
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: 'Clientes',
			icon: 'pi pi-fw pi-user',
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: 'Empleados',
			icon: 'pi pi-fw pi-users',
			routerLinkActiveOptions: { exact: true }
		},
		{
			label: 'Proveedores',
			icon: 'pi pi-fw pi-truck',
			routerLinkActiveOptions: { exact: true }
		}
	];
}
