import { Producto } from '@domain/producto.model';

export interface ProductoEntrada extends Producto {
	cantidadEntrada: number;
}
