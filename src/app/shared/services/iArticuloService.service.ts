import { Observable } from 'rxjs';
import { ProductoArticuloEntrada, ProductoArticuloSalida, ProductoArticuloStock } from '@domain/productoArticulo.model';

export interface IArticuloService {
	getAll(): Observable<ProductoArticuloEntrada[] | ProductoArticuloSalida[] | ProductoArticuloStock[]>;
	// delete(articulos: ProductoArticuloEntrada[] | ProductoArticuloSalida[] | ProductoArticuloStock[]): Observable<string>;
}
