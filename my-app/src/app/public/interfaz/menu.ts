export interface menu {
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


export interface producto{
  name: string;
  precio: number;
  cant: number;
  adicional: {
    adicional1: string;
    adicional2: string;
    precio: number;
  };
}
