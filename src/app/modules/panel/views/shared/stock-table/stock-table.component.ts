import { Component, OnInit } from '@angular/core';
import { ProductoEntrada } from '@domain/productoEntrada.model';
import { ProductoSalida } from '@domain/productoSalida.model';
import { ProductoStock } from '@domain/productoStock.model';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { StockService } from './../../control-inventario/services/stock.service';

@Component({
	selector: 'app-stock-table',
	standalone: true,
	imports: [TableModule, InputSwitchModule, TagModule],
	templateUrl: './stock-table.component.html',
	styleUrl: './stock-table.component.css'
})
export class StockTableComponent implements OnInit {
	productos: ProductoEntrada[] | ProductoSalida[] | ProductoStock[] = [];

	typeProductos?: unknown;

	selectedProductos!: ProductoEntrada[] | ProductoSalida[] | ProductoStock[];

	constructor(private readonly stockService: StockService) {}

	ngOnInit(): void {
		this.productos = this.stockService.get();
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
}
