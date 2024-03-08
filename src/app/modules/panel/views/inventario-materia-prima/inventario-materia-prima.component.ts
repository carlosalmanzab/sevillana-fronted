import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { I_ARTICULO_SERVICE_TOKEN } from '@tokens';
import { MenuItem } from 'primeng/api';
import { client } from '@endpoints';
import { DynamicTabsComponent } from '@views/shared/dynamic-tabs/dynamic-tabs.component';
import { InventarioMateriaPrimaArticuloService } from './services/inventario-materia-prima-articulo.service';

@Component({
	selector: 'app-inventario-materia-prima',
	standalone: true,
	templateUrl: './inventario-materia-prima.component.html',
	styleUrl: './inventario-materia-prima.component.scss',
	imports: [DynamicTabsComponent, RouterOutlet, RouterLink],
	providers: [{ provide: I_ARTICULO_SERVICE_TOKEN, useClass: InventarioMateriaPrimaArticuloService }]
})
export default class InventarioMateriaPrimaComponent {
	items: MenuItem[];

	constructor() {
		this.items = [
			{ label: 'Stock', routerLink: client.routes.home.inventario_materia_prima.stock.relative },
			{ label: 'Entrada', routerLink: client.routes.home.inventario_materia_prima.entrada.relative },
			{ label: 'Salida', routerLink: client.routes.home.inventario_materia_prima.salida.relative }
		];
	}
}
