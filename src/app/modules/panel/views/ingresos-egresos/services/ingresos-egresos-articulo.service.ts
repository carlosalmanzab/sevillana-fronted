import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoArticuloEntrada, ProductoArticuloSalida, ProductoArticuloStock } from '@domain/productoArticulo.model';
import { ToArticuloEntradaModelPipe } from '@shared/pipe/toArticuloEntradaModel.pipe';
import { ToArticuloSalidaModelPipe } from '@shared/pipe/toArticuloSalidaModel.pipe';
import { IArticuloService } from '@shared/services/iArticuloService.service';
import { Observable, from, map, toArray } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class IngresosEgresosArticuloService implements IArticuloService {
	private productosStock: ProductoArticuloStock[];

	private router: Router = inject(Router);
	stocks$: Observable<ProductoArticuloStock>;

	constructor() {
		this.productosStock = [
			{
				codigo: 1,
				articulo: 'Business Services',
				fecha: new Date('4/8/2023'),
				cantidadEntrada: 542,
				cantidadSalida: 328,
				stock: 37
			},
			{
				codigo: 2,
				articulo: 'Major Pharmaceuticals',
				fecha: new Date('7/25/2023'),
				cantidadEntrada: 262,
				cantidadSalida: 230,
				stock: 0
			},
			{
				codigo: 3,
				articulo: 'Computer Software: Prepackaged Software',
				fecha: new Date('4/15/2023'),
				cantidadEntrada: 263,
				cantidadSalida: 238,
				stock: -74
			},
			{
				codigo: 4,
				articulo: 'Diversified Commercial Services',
				fecha: new Date('6/20/2023'),
				cantidadEntrada: 41,
				cantidadSalida: 298,
				stock: 21
			},
			{
				codigo: 5,
				articulo: 'Real Estate Investment Trusts',
				fecha: new Date('3/31/2023'),
				cantidadEntrada: 595,
				cantidadSalida: 266,
				stock: 46
			},
			{
				codigo: 6,
				articulo: 'Business Services',
				fecha: new Date('3/5/2023'),
				cantidadEntrada: 514,
				cantidadSalida: 89,
				stock: 75
			},
			{
				codigo: 7,
				articulo: 'Catalog/Specialty Distribution',
				fecha: new Date('3/23/2023'),
				cantidadEntrada: 415,
				cantidadSalida: 183,
				stock: 3
			},
			{
				codigo: 8,
				articulo: 'Medical/Dental Instruments',
				fecha: new Date('3/9/2023'),
				cantidadEntrada: 170,
				cantidadSalida: 136,
				stock: 21
			},
			{
				codigo: 9,
				articulo: 'Electric Utilities: Central',
				fecha: new Date('3/9/2023'),
				cantidadEntrada: 511,
				cantidadSalida: 150,
				stock: 2
			},
			{
				codigo: 10,
				articulo: 'Diversified Electronic Products',
				fecha: new Date('2/26/2023'),
				cantidadEntrada: 576,
				cantidadSalida: 360,
				stock: 97
			},
			{
				codigo: 11,
				articulo: 'Telecommunications Equipment',
				fecha: new Date('2/20/2023'),
				cantidadEntrada: 28,
				cantidadSalida: 271,
				stock: 14
			},
			{
				codigo: 12,
				articulo: 'Auto Parts:O.E.M.',
				fecha: new Date('11/22/2023'),
				cantidadEntrada: 407,
				cantidadSalida: 326,
				stock: 90
			},
			{
				codigo: 13,
				articulo: 'Real Estate Investment Trusts',
				fecha: new Date('10/7/2023'),
				cantidadEntrada: 370,
				cantidadSalida: 65,
				stock: 95
			},
			{
				codigo: 14,
				articulo: 'Professional Services',
				fecha: new Date('5/15/2023'),
				cantidadEntrada: 401,
				cantidadSalida: 48,
				stock: 19
			},
			{
				codigo: 15,
				articulo: 'Professional Services',
				fecha: new Date('10/28/2023'),
				cantidadEntrada: 70,
				cantidadSalida: 35,
				stock: 92
			},
			{ codigo: 16, articulo: 'n/a', fecha: new Date('6/21/2023'), cantidadEntrada: 338, cantidadSalida: 5, stock: 96 },
			{
				codigo: 17,
				articulo: 'Electric Utilities: Central',
				fecha: new Date('10/19/2023'),
				cantidadEntrada: 52,
				cantidadSalida: 351,
				stock: 35
			},
			{
				codigo: 18,
				articulo: 'RETAIL: Building Materials',
				fecha: new Date('8/10/2023'),
				cantidadEntrada: 187,
				cantidadSalida: 302,
				stock: 11
			},
			{
				codigo: 19,
				articulo: 'n/a',
				fecha: new Date('1/27/2024'),
				cantidadEntrada: 402,
				cantidadSalida: 253,
				stock: 74
			},
			{
				codigo: 20,
				articulo: 'Television Services',
				fecha: new Date('12/28/2023'),
				cantidadEntrada: 94,
				cantidadSalida: 291,
				stock: 32
			},
			{
				codigo: 21,
				articulo: 'Major Chemicals',
				fecha: new Date('12/28/2023'),
				cantidadEntrada: 93,
				cantidadSalida: 227,
				stock: 14
			},
			{
				codigo: 22,
				articulo: 'Property-Casualty Insurers',
				fecha: new Date('11/28/2023'),
				cantidadEntrada: 353,
				cantidadSalida: 20,
				stock: 83
			},
			{
				codigo: 23,
				articulo: 'Medical/Dental Instruments',
				fecha: new Date('3/12/2023'),
				cantidadEntrada: 373,
				cantidadSalida: 53,
				stock: 100
			},
			{
				codigo: 24,
				articulo: 'n/a',
				fecha: new Date('1/13/2024'),
				cantidadEntrada: 553,
				cantidadSalida: 112,
				stock: 67
			},
			{
				codigo: 25,
				articulo: 'Industrial Machinery/Components',
				fecha: new Date('5/9/2023'),
				cantidadEntrada: 2,
				cantidadSalida: 255,
				stock: 5
			},
			{
				codigo: 26,
				articulo: 'Telecommunications Equipment',
				fecha: new Date('8/18/2023'),
				cantidadEntrada: 367,
				cantidadSalida: 372,
				stock: 97
			},
			{
				codigo: 27,
				articulo: 'Specialty Chemicals',
				fecha: new Date('8/2/2023'),
				cantidadEntrada: 437,
				cantidadSalida: 72,
				stock: 72
			},
			{
				codigo: 28,
				articulo: 'Electric Utilities: Central',
				fecha: new Date('8/9/2023'),
				cantidadEntrada: 213,
				cantidadSalida: 244,
				stock: 93
			},
			{
				codigo: 29,
				articulo: 'Computer Software: Programming, Data Processing',
				fecha: new Date('6/1/2023'),
				cantidadEntrada: 170,
				cantidadSalida: 223,
				stock: 56
			},
			{
				codigo: 30,
				articulo: 'Auto Parts:O.E.M.',
				fecha: new Date('3/21/2023'),
				cantidadEntrada: 104,
				cantidadSalida: 365,
				stock: 26
			}
		];

		this.stocks$ = from(this.productosStock);
	}

	getAll(): Observable<ProductoArticuloEntrada[] | ProductoArticuloSalida[] | ProductoArticuloStock[]> {
		if (this.router.url.includes('/salida')) {
			return this.stocks$.pipe(
				map((s) => {
					return new ToArticuloSalidaModelPipe().transform(s) as ProductoArticuloSalida;
				}),
				toArray()
			);
		}

		if (this.router.url.includes('/entrada')) {
			return this.stocks$.pipe(
				map((s) => {
					return new ToArticuloEntradaModelPipe().transform(s) as ProductoArticuloEntrada;
				}),
				toArray()
			);
		}

		return this.stocks$.pipe(toArray());
	}
}
