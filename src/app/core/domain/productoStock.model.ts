import { Producto } from './producto.model';

export interface ProductoStock extends Producto {
	cantidadEntrada?: number;
	cantidadSalida?: number;
	stock?: number;
}
