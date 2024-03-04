import { CommonModule } from '@angular/common';
import { Component, DoCheck, Inject, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IArticuloService } from '@shared/services/iArticuloService.service';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { BehaviorSubject, takeUntil } from 'rxjs';

import { Unsubscribe } from '@core/subs-handler/unsubscribe';
import { ArticuloEntrada, ArticuloSalida, ArticuloStock } from '@domain/articulo.model';
import { MenuActionTableComponent } from '@views/shared/menu-action-table/menu-action-table.component';
import { MenuActionTableService } from '@views/shared/menu-action-table/service/menu-action-table.service';
import { I_ARTICULO_SERVICE_TOKEN } from '@tokens';

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
		InputGroupAddonModule,
		MenuActionTableComponent
	],
	templateUrl: './stock-table.component.html',
	styleUrl: './stock-table.component.css'
})
export class StockTableComponent extends Unsubscribe implements OnInit, DoCheck {
	private menuATService = inject(MenuActionTableService);
	// contenido de la tabla
	articulos: ArticuloEntrada[] | ArticuloSalida[] | ArticuloStock[] = [];
	// productos seleccionados
	selectedArticulos: ArticuloEntrada[] | ArticuloSalida[] | ArticuloStock[];
	//clon de producto para edicion
	clonedArticulo: { [s: string]: ArticuloEntrada | ArticuloSalida | ArticuloStock } = {};

	isEditMode: boolean = false;

	private selectedArticulosSubject$ = new BehaviorSubject<ArticuloEntrada[] | ArticuloSalida[] | ArticuloStock[]>([]);

	constructor(@Inject(I_ARTICULO_SERVICE_TOKEN) private articuloService: IArticuloService) {
		super();
		this.selectedArticulos = [];
	}
	ngDoCheck(): void {
		this.checkSelectedArticulosArray();
	}

	ngOnInit(): void {
		this.getData();
		this.editAction();
		this.deleteAction();
	}

	getData(): void {
		this.articuloService
			.getAll()
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((data) => {
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
		if (stock == 0) return 'warning';
		if (stock < 0) return 'danger';
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

	editAction() {
		//TODO: Add http method logic
		this.menuATService.editingEventListener.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
			this.menuATService.setEditing(!this.isEditMode);
			this.isEditMode = !this.isEditMode;
		});
	}

	checkSelectedArticulosArray() {
		const selectedArticulos = this.selectedArticulos || [];
		if (selectedArticulos.some((articulo) => articulo)) {
			this.selectedArticulosSubject$.next(selectedArticulos);
			this.deleteAction();
		} else {
			this.menuATService.setDeleting(false);
		}
	}

	deleteAction() {
		//TODO: Add http method logic
		this.selectedArticulosSubject$.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
			this.menuATService.setDeleting(true);
		});
	}

	addAction() {
		//TODO: Add http method logic
		this.menuATService.addingEventListener.pipe(takeUntil(this.unsubscribe$)).subscribe();
	}
}
