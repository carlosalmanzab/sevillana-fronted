import { Pipe, type PipeTransform } from '@angular/core';
import { ArticuloEntrada, ArticuloStock } from '../../core/domain/articulo.model';

@Pipe({
	name: 'ToArticuloEntradaModel',
	standalone: true
})
export class ToArticuloEntradaModelPipe implements PipeTransform {
	transform(articuloStock: ArticuloStock): ArticuloEntrada {
		const articuloEntrada: ArticuloEntrada = {
			codigo: articuloStock.codigo,
			articulo: articuloStock.articulo,
			fecha: articuloStock.fecha,
			cantidadEntrada: articuloStock.cantidadEntrada
		};
		return articuloEntrada;
	}
}
