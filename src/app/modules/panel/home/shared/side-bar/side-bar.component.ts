import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { client } from '@endpoints';

@Component({
	selector: 'app-side-bar',
	standalone: true,
	imports: [PanelMenuModule, PanelModule],
	templateUrl: './side-bar.component.html',
	styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
	items: MenuItem[] = [
		{
			label: 'Dashboard',
			icon: 'pi pi-fw pi-chart-bar',
			routerLink: client.routes.home.dashboard.relative
		},
		{
			label: 'Calendario',
			icon: 'pi pi-fw pi-calendar',
			routerLink: client.routes.home.calendar.relative
		},
		{
			label: 'Ingresos y Egresos',
			icon: 'pi pi-fw pi-chart-line',
			routerLink: client.routes.home.ingresos_egresos.relative
		},
		{
			label: 'Control de Inventario',
			icon: 'pi pi-fw pi-book',
			routerLink: client.routes.home.control_inventario.relative
		},
		{
			label: 'Cuentas por Cobrar',
			icon: 'pi pi-fw pi-credit-card'
		},
		{
			label: 'Inv. Materia Prima',
			icon: 'pi pi-fw pi-shopping-bag'
		},
		{
			label: 'Control de Nomina',
			icon: 'pi pi-fw pi-money-bill'
		},
		{
			label: 'Clientes',
			icon: 'pi pi-fw pi-user'
		},
		{
			label: 'Empleados',
			icon: 'pi pi-fw pi-users'
		},
		{
			label: 'Proveedores',
			icon: 'pi pi-fw pi-truck'
		}
	];
}
