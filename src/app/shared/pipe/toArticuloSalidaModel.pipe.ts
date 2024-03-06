import { Pipe, type PipeTransform } from '@angular/core';
import { ArticuloSalida, ArticuloStock } from '@domain/articulo.model';

@Pipe({
	name: 'ToArticuloSalidaModel',
	standalone: true
})
export class ToArticuloSalidaModelPipe implements PipeTransform {
	transform(articuloStock: ArticuloStock): ArticuloSalida {
		const articuloSalida: ArticuloSalida = {
			codigo: articuloStock.codigo,
			articulo: articuloStock.articulo,
			fecha: articuloStock.fecha,
			cantidadSalida: articuloStock.cantidadSalida
		};
		return articuloSalida;
	}
}
