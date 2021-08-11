export interface Producto {
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
export interface PedidoProducto{
  id:number;
  idProducto: number;
  name: string;
  precio: number;
  cant: number;
  precioTotal:number;
  adicional: {
    adicional1: string;
    adicional2: string;
    precio: number;
  };
}

export interface PedidoCliente{
  cliente?:string;
  mesa?:number;
  idOrden?:number;
  status?:number;
};
