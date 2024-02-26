import { ArticuloEntrada, ArticuloSalida, ArticuloStock } from '@domain/articulo.model';

export interface MateriaArticuloEntrada extends ArticuloEntrada {}

export interface MateriaArticuloSalida extends ArticuloSalida {}

export interface MateriaArticuloStock extends ArticuloStock, ArticuloEntrada, ArticuloSalida {}
