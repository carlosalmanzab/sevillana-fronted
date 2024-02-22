import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoEntrada } from '@domain/productoEntrada.model';
import { ProductoSalida } from '@domain/productoSalida.model';
import { ProductoStock } from '@domain/productoStock.model';
import { InputSwitchModule } from 'primeng/inputswitch';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { StockService } from './../../control-inventario/services/stock.service';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
	selector: 'app-stock-table',
	standalone: true,
	imports: [
		TableModule,
		InputSwitchModule,
		TagModule,
		CommonModule,
		ButtonModule,
		InputTextModule,
		InputGroupModule,
		InputGroupAddonModule
	],
	templateUrl: './stock-table.component.html',
	styleUrl: './stock-table.component.css'
})
export class StockTableComponent implements OnInit {
	productos: ProductoEntrada[] | ProductoSalida[] | ProductoStock[] = [];

	typeProductos?: unknown;

	selectedProductos!: ProductoEntrada[] | ProductoSalida[] | ProductoStock[];

	constructor(
		private readonly stockService: StockService,
		private primeNGConfig: PrimeNGConfig
	) {}

	ngOnInit(): void {
		this.productos = this.stockService.get();
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
	isProductoEntrada() {
		if (this.productos.length > 0) {
			return (this.productos[0] as ProductoEntrada).cantidadEntrada !== undefined;
		}
		return false;
	}

	isProductoSalida() {
		if (this.productos.length > 0) {
			return (this.productos[0] as ProductoSalida).cantidadSalida !== undefined;
		}
		return false;
	}

	isProductoStock() {
		if (this.productos.length > 0) {
			return (this.productos[0] as ProductoStock).stock !== undefined;
		}
		return false;
	}

	getStockSeverity(stock: number) {
		if (stock > 0) return 'success';
		if (stock == 0) return 'info';
		if (stock < 0) return 'negotiation';
		return undefined;
	}

	clear(table: Table) {
		table.clear();
	}

	applyFilterGlobal(_$event: Event, stringVal: string, dt: Table) {
		if (_$event != null) {
			dt.filterGlobal((_$event.target as HTMLInputElement).value, stringVal);
		}
	}

	globalFilterFieldsData(): string[] {
		const field: string[] = ['codigo', 'articulo', 'fecha'];
		if (this.isProductoEntrada() || this.isProductoStock()) {
			field.push('entrada');
		}
		if (this.isProductoSalida() || this.isProductoStock()) {
			field.push('salida');
		}
		if (this.isProductoStock()) {
			field.push('stock');
		}

		return field;
	}
}
