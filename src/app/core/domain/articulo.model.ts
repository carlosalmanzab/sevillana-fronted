export interface Articulo {
	codigo: number;
	articulo: string;
	fecha: Date;
}

export interface ArticuloEntrada extends Articulo {
	cantidadEntrada: number;
}

export interface ArticuloSalida extends Articulo {
	cantidadSalida: number;
}

export interface ArticuloStock extends Articulo, ArticuloEntrada, ArticuloSalida {
	stock: number;
}
