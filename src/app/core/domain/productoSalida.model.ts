import { Producto } from './producto.model';

export interface ProductoSalida extends Producto {
	cantidadSalida?: number;
}
