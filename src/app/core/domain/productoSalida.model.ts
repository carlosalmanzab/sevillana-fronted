import { Producto } from '@domain/producto.model';

export interface ProductoSalida extends Producto {
	cantidadSalida: number;
}
