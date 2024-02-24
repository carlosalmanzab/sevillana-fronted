import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoEntrada } from '@domain/productoEntrada.model';
import { ProductoSalida } from '@domain/productoSalida.model';
import { ProductoStock } from '@domain/productoStock.model';
import { StockService } from '@views/control-inventario/services/stock.service';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumber, InputNumberModule } from 'primeng/inputnumber';
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
	@ViewChildren(InputNumber) inputNumbers?: QueryList<InputNumber>;
	// contenido de la tabla
	productos: ProductoEntrada[] | ProductoSalida[] | ProductoStock[] = [];
	// productos seleccionados
	selectedProductos!: ProductoEntrada[] | ProductoSalida[] | ProductoStock[];
	//clon de producto para edicion
	clonedProductos: { [s: string]: ProductoEntrada | ProductoSalida | ProductoStock } = {};

	constructor(private readonly stockService: StockService) {}

	ngOnInit(): void {
		this.productos = this.stockService.get();
	}

	setInputNumberWith() {
		const inputElements = this.getInputNumberStyle();
		inputElements.forEach((iE) => {
			(iE as ElementRef).nativeElement().style.width = '100px';
		});
	}

	getInputNumberStyle() {
		const inputElements: unknown[] = [];
		this.inputNumbers?.forEach((inputN) => {
			const inputElement = (inputN.el as ElementRef).nativeElement.querySelector('p-inputnumber > span > input');
			inputElements.push(inputElement);
		});
		return inputElements;
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
	onRowEditInit(producto: ProductoEntrada | ProductoSalida | ProductoStock) {
		this.clonedProductos[producto.codigo as unknown as string] = { ...producto };
		this.setInputNumberWith();
	}

	onRowEditSave(producto: ProductoEntrada | ProductoSalida | ProductoStock) {
		if (
			this.validStock((producto as ProductoEntrada).cantidadEntrada) ||
			this.validStock((producto as ProductoSalida).cantidadSalida) ||
			(this.validStock((producto as ProductoStock).cantidadEntrada) &&
				this.validStock((producto as ProductoStock).cantidadSalida))
		) {
			delete this.clonedProductos[producto.codigo as unknown as string];
		}
	}

	private validStock(stock?: number): boolean {
		return stock !== undefined && stock >= 0;
	}

	onRowEditCancel(producto: ProductoEntrada | ProductoSalida | ProductoStock, index: number) {
		this.productos[index] = this.clonedProductos[producto.codigo as unknown as string];
		delete this.clonedProductos[producto.codigo as unknown as string];
	}
}
