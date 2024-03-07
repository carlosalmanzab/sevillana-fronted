import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { MenuActionTableComponent } from '../views/shared/menu-action-table/menu-action-table.component';
import { PrimeNGConfig } from 'primeng/api';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [HeaderComponent, SideBarComponent, RouterOutlet, BreadcrumbComponent, MenuActionTableComponent],
	styleUrl: './home.component.scss',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	constructor(private primeNGConfig: PrimeNGConfig) {}

	ngOnInit(): void {
		this.primeNGConfig.setTranslation({
			matchAll: 'Coincidir Con Todos',
			matchAny: 'Coincidir Con Alguno',
			startsWith: 'Comienza Con',
			contains: 'Contiene',
			notContains: 'No Contiene',
			endsWith: 'Termina Con',
			equals: 'Igual A ',
			notEquals: 'Diferente A ',
			dateIs: 'La Fecha Es',
			dateIsNot: 'La Fecha No Es',
			dateBefore: 'Fecha Es Antes De',
			dateAfter: 'Fecha Es Posterior De ',
			lt: 'Menor Que',
			lte: 'Menor o Igual Que',
			gt: 'Mayor Que',
			gte: 'Mayor o Igual Que',
			addRule: 'Agregar Filtro',
			clear: 'Limpiar',
			apply: 'Aplicar'
		});
	}
}
