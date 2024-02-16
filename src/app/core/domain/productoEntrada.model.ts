import { Producto } from './producto.model';

export interface ProductoEntrada extends Producto {
	cantidadEntrada?: number;
}
