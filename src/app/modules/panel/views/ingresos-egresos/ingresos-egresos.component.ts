import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { client } from '@endpoints';
import { DynamicTabsComponent } from '@views/shared/dynamic-tabs/dynamic-tabs.component';
import { MenuItem } from 'primeng/api';
import { I_ARTICULO_SERVICE_TOKEN } from '@tokens';
import { IngresosEgresosArticuloService } from '@views/ingresos-egresos/services/ingresos-egresos-articulo.service';

@Component({
	selector: 'app-ingresos-egresos',
	standalone: true,
	imports: [DynamicTabsComponent, RouterOutlet, RouterLink],
	templateUrl: './ingresos-egresos.component.html',
	styleUrl: './ingresos-egresos.component.scss',
	providers: [{ provide: I_ARTICULO_SERVICE_TOKEN, useClass: IngresosEgresosArticuloService }]
})
export default class IngresosEgresosComponent {
	items: MenuItem[];

	constructor() {
		this.items = [
			{ label: 'Stock', routerLink: client.routes.home.ingresos_egresos.stock.relative },
			{ label: 'Entrada', routerLink: client.routes.home.ingresos_egresos.entrada.relative },
			{ label: 'Salida', routerLink: client.routes.home.ingresos_egresos.salida.relative }
		];
	}
}
