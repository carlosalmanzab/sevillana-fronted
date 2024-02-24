import { Producto } from '@domain/producto.model';
import { ProductoEntrada } from '@domain/productoEntrada.model';
import { ProductoSalida } from '@domain/productoSalida.model';

export interface ProductoStock extends Producto, ProductoEntrada, ProductoSalida {
	stock: number;
}
