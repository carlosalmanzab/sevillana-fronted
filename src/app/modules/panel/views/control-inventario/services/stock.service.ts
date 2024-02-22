import { Injectable } from '@angular/core';
import { ProductoStock } from '../../../../../core/domain/productoStock.model';

@Injectable({
	providedIn: 'root'
})
export class StockService {
	private productosStock: ProductoStock[] = [];

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
			},
			{
				codigo: 31,
				articulo: 'Business Services',
				fecha: new Date('3/15/2023'),
				cantidadEntrada: 343,
				cantidadSalida: 40,
				stock: 26
			},
			{
				codigo: 32,
				articulo: 'Major Chemicals',
				fecha: new Date('8/27/2023'),
				cantidadEntrada: 42,
				cantidadSalida: 3,
				stock: 57
			},
			{
				codigo: 33,
				articulo: 'Clothing/Shoe/Accessory Stores',
				fecha: new Date('12/3/2023'),
				cantidadEntrada: 102,
				cantidadSalida: 278,
				stock: 82
			},
			{
				codigo: 34,
				articulo: 'n/a',
				fecha: new Date('4/6/2023'),
				cantidadEntrada: 352,
				cantidadSalida: 387,
				stock: 49
			},
			{
				codigo: 35,
				articulo: 'Semiconductors',
				fecha: new Date('1/2/2024'),
				cantidadEntrada: 465,
				cantidadSalida: 2,
				stock: 64
			},
			{
				codigo: 36,
				articulo: 'Hospital/Nursing Management',
				fecha: new Date('12/20/2023'),
				cantidadEntrada: 53,
				cantidadSalida: 93,
				stock: 81
			},
			{
				codigo: 37,
				articulo: 'Hospital/Nursing Management',
				fecha: new Date('3/16/2023'),
				cantidadEntrada: 11,
				cantidadSalida: 163,
				stock: 15
			},
			{
				codigo: 38,
				articulo: 'Automotive Aftermarket',
				fecha: new Date('9/16/2023'),
				cantidadEntrada: 506,
				cantidadSalida: 304,
				stock: 95
			},
			{
				codigo: 39,
				articulo: 'Accident &Health Insurance',
				fecha: new Date('5/7/2023'),
				cantidadEntrada: 517,
				cantidadSalida: 288,
				stock: 5
			},
			{
				codigo: 40,
				articulo: 'Paper',
				fecha: new Date('5/19/2023'),
				cantidadEntrada: 457,
				cantidadSalida: 359,
				stock: 17
			},
			{
				codigo: 41,
				articulo: 'Industrial Specialties',
				fecha: new Date('6/8/2023'),
				cantidadEntrada: 573,
				cantidadSalida: 134,
				stock: 41
			},
			{
				codigo: 42,
				articulo: 'RETAIL: Building Materials',
				fecha: new Date('6/21/2023'),
				cantidadEntrada: 45,
				cantidadSalida: 386,
				stock: 44
			},
			{
				codigo: 43,
				articulo: 'Major Chemicals',
				fecha: new Date('6/5/2023'),
				cantidadEntrada: 267,
				cantidadSalida: 324,
				stock: 43
			},
			{
				codigo: 44,
				articulo: 'Military/Government/Technical',
				fecha: new Date('10/20/2023'),
				cantidadEntrada: 562,
				cantidadSalida: 90,
				stock: 89
			},
			{
				codigo: 45,
				articulo: 'Real Estate',
				fecha: new Date('3/23/2023'),
				cantidadEntrada: 316,
				cantidadSalida: 123,
				stock: 67
			},
			{
				codigo: 46,
				articulo: 'Publishing',
				fecha: new Date('4/17/2023'),
				cantidadEntrada: 501,
				cantidadSalida: 311,
				stock: 84
			},
			{
				codigo: 47,
				articulo: 'Military/Government/Technical',
				fecha: new Date('4/13/2023'),
				cantidadEntrada: 40,
				cantidadSalida: 196,
				stock: 94
			},
			{
				codigo: 48,
				articulo: 'Restaurants',
				fecha: new Date('1/17/2024'),
				cantidadEntrada: 316,
				cantidadSalida: 322,
				stock: 65
			},
			{
				codigo: 49,
				articulo: 'Broadcasting',
				fecha: new Date('7/21/2023'),
				cantidadEntrada: 57,
				cantidadSalida: 365,
				stock: 1
			},
			{
				codigo: 50,
				articulo: 'Industrial Specialties',
				fecha: new Date('11/28/2023'),
				cantidadEntrada: 376,
				cantidadSalida: 22,
				stock: 76
			}
		];
	}

	get() {
		return this.productosStock;
	}
}
