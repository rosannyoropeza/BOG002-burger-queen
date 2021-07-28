export interface producto {
  id: number;
  name: string;
  url: string;
  precio: number;
  tipo: string;
  subTipo: string;
  adicional: {
    adicional1: string;
    adicional2: string;
    precio: number;
  };
}

export interface pedidoProducto{
  id:number;
  idProducto: number;
  name: string;
  precio: number;
  cant: number;
  adicional: {
    adicional1: string;
    adicional2: string;
    precio: number;
  };
}

