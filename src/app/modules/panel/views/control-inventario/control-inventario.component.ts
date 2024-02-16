import { Component } from '@angular/core';
import { StockTableComponent } from '@views/shared/stock-table/stock-table.component';

@Component({
	selector: 'app-control-inventario',
	standalone: true,
	templateUrl: './control-inventario.component.html',
	styleUrl: './control-inventario.component.css',
	imports: [StockTableComponent]
})
export default class ControlInventarioComponent {}
