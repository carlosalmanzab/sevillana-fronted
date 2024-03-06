import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { client } from '@endpoints';
import { I_ARTICULO_SERVICE_TOKEN } from '@tokens';

import { DynamicTabsComponent } from '@views/shared/dynamic-tabs/dynamic-tabs.component';
import { MenuActionTableComponent } from '@views/shared/menu-action-table/menu-action-table.component';
import { StockTableComponent } from '@views/shared/stock-table/stock-table.component';
import { MenuItem } from 'primeng/api';
import { ControlInventarioArticuloService } from './services/control-inventario-articulo.service';

@Component({
	selector: 'app-control-inventario',
	standalone: true,
	templateUrl: './control-inventario.component.html',
	styleUrl: './control-inventario.component.css',
	imports: [StockTableComponent, MenuActionTableComponent, DynamicTabsComponent, RouterOutlet, RouterLink],
	providers: [{ provide: I_ARTICULO_SERVICE_TOKEN, useClass: ControlInventarioArticuloService }]
})
export default class ControlInventarioComponent {
	items: MenuItem[];

	constructor() {
		this.items = [
			{ label: 'Stock', routerLink: client.routes.home.control_inventario.stock.relative },
			{ label: 'Entrada', routerLink: client.routes.home.control_inventario.entrada.relative },
			{ label: 'Salida', routerLink: client.routes.home.control_inventario.salida.relative }
		];
	}
}
