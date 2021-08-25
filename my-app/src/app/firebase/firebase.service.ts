import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import {
  PedidoProducto,
  PedidoCliente,
  Producto,
} from '../public/interfaz/menu';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  ordenes: Array<any> = [];
  ordenes$: Subject<PedidoCliente[]>;
  productos: AngularFirestoreCollection<PedidoProducto>;
  status:number = 0;

  constructor(private db: AngularFirestore,  public miRouter: Router) {
    this.ordenes = [];
    this.ordenes$ = new Subject();
    this.productos = db.collection('detallePedido');
    // this.getOrdenes();
  }

  setStatus(){
    if (this.miRouter.url=='/public/jefe-de-cocina'){
      this.status=1;
    }
    if (this.miRouter.url=='/public/pedidos-listos'){
      this.status=2;
    }
    if (this.miRouter.url=='/public/pedidos'){
      this.status=2;
    }
    if (this.miRouter.url=='/public/pedidos-historial'){
      this.status=3;
    }
  }

  //METODO PARA LISTAR TODOS LOS PEDIDOS
  getPedidosDb(): AngularFirestoreCollection<PedidoCliente> {
    this.setStatus();
    console.log('getPedidosDB status',this.status)
    if (this.status > 0){
      return this.db.collection('pedidos', (ref) => ref.where('status', '==', this.status));
    }else{
      return this.db.collection('pedidos');
    }
  }

  getDetalleDb(idPedido: any): AngularFirestoreCollection<PedidoProducto> {
    return this.db.collection('detallePedido', (ref) =>
      ref.where('id', '==', idPedido)
    );
  }

  lastOrden: number = 0;

  getOrdenes$(): Observable<PedidoCliente[]> {
    return this.ordenes$.asObservable();
  }

  getOrdenes() {
    this.getPedidosDb()
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((el: any) => ({
            id: el.payload.doc.id,
            ...el.payload.doc.data(),
          }))
        )
      )
      .subscribe((data: any) => {
        data.sort((a: any, b: any) => {
          if (b.idOrden > a.idOrden) {
            return -1;
          }
          return 0;
        });

        data.forEach((element: any) => {
          this.lastOrden = element.idOrden + 1;
          this.getDetalle(element);
        });
      });
  }

  getDetalle(pedido: any) {
    this.ordenes = [];
    this.getDetalleDb(pedido.id)
    .snapshotChanges()
      .pipe(
        map((changes: any) =>
        changes.map((el: any) => ({
          ...el.payload.doc.data(),
          }))
          )
          )
          .subscribe((data: any) => {
        this.productos = data;
        this.ordenes.push({
          ...pedido,
          productos: data,
        });
        this.ordenes$.next(this.ordenes);
      });
  }

  // //METODO PARA CREAR UN NUEVO PEDIDO
  createClientePedido(formCliente: any) {
    return this.db.collection('pedidos').add(formCliente);
  }

  createDetallePedido(arrayDetallePedido: Array<PedidoProducto>, id: any) {
    arrayDetallePedido.map((detalle: PedidoProducto) => {
      detalle.id = id;
      const det: any = this.db.collection('detallePedido').add(detalle);
      det.then((res: any) => {});
    });
  }

  // //METODO PARA EDITAR UN PEDIDO
  updatePedido(id: any, pedido: any) {
    const pedidosRef = this.db.collection('pedidos').doc(id);
    return pedidosRef
      .update(pedido)
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  }
}
