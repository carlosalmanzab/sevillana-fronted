import { ArticuloEntrada, ArticuloSalida, ArticuloStock } from '@domain/articulo.model';

export interface ProductoArticuloEntrada extends ArticuloEntrada {}

export interface ProductoArticuloSalida extends ArticuloSalida {}

export interface ProductoArticuloStock extends ArticuloStock, ArticuloEntrada, ArticuloSalida {}
