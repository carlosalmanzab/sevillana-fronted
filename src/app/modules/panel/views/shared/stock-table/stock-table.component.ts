import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticuloEntrada, ArticuloSalida, ArticuloStock } from '@domain/articulo.model';
import { StockService } from '@views/control-inventario/services/stock.service';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
	selector: 'app-stock-table',
	standalone: true,
	imports: [
		TagModule,
		TableModule,
		FormsModule,
		CommonModule,
		ButtonModule,
		InputTextModule,
		InputGroupModule,
		InputNumberModule,
		InputSwitchModule,
		InputGroupAddonModule
	],
	templateUrl: './stock-table.component.html',
	styleUrl: './stock-table.component.css'
})
export class StockTableComponent implements OnInit {
	// contenido de la tabla
	articulos: ArticuloEntrada[] | ArticuloSalida[] | ArticuloStock[] = [];
	// productos seleccionados
	selectedArticulos!: ArticuloEntrada[] | ArticuloSalida[] | ArticuloStock[];
	//clon de producto para edicion
	clonedArticulo: { [s: string]: ArticuloEntrada | ArticuloSalida | ArticuloStock } = {};

	constructor(private readonly stockService: StockService) {}

	ngOnInit(): void {
		this.getData();
	}

	getData(): void {
		this.stockService.get().subscribe((data) => {
			this.articulos = data;
		});
	}

	isArticuloEntrada() {
		if (this.articulos.length > 0) {
			return (this.articulos[0] as ArticuloEntrada).cantidadEntrada !== undefined;
		}
		return false;
	}

	isArticuloSalida() {
		if (this.articulos.length > 0) {
			return (this.articulos[0] as ArticuloSalida).cantidadSalida !== undefined;
		}
		return false;
	}

	isArticuloStock() {
		if (this.articulos.length > 0) {
			return (this.articulos[0] as ArticuloStock).stock !== undefined;
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
		if (this.isArticuloEntrada() || this.isArticuloStock()) {
			field.push('entrada');
		}
		if (this.isArticuloSalida() || this.isArticuloStock()) {
			field.push('salida');
		}
		if (this.isArticuloStock()) {
			field.push('stock');
		}

		return field;
	}
	onRowEditInit(articulo: ArticuloEntrada | ArticuloSalida | ArticuloStock) {
		this.clonedArticulo[articulo.codigo as unknown as string] = { ...articulo };
	}

	onRowEditSave(articulo: ArticuloEntrada | ArticuloSalida | ArticuloStock) {
		if (
			this.validStock((articulo as ArticuloEntrada).cantidadEntrada) ||
			this.validStock((articulo as ArticuloSalida).cantidadSalida) ||
			(this.validStock((articulo as ArticuloStock).cantidadEntrada) &&
				this.validStock((articulo as ArticuloStock).cantidadSalida))
		) {
			delete this.clonedArticulo[articulo.codigo as unknown as string];
		}
	}

	private validStock(stock?: number): boolean {
		return stock !== undefined && stock >= 0;
	}

	onRowEditCancel(articulo: ArticuloEntrada | ArticuloSalida | ArticuloStock, index: number) {
		this.articulos[index] = this.clonedArticulo[articulo.codigo as unknown as string];
		delete this.clonedArticulo[articulo.codigo as unknown as string];
	}
}
