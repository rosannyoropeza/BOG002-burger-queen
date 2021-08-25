// import { PedidoCliente } from './../../interfaz/menu';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { PedidoProducto } from '../../interfaz/menu'
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form-pedidos',
  templateUrl: './form-pedidos.component.html',
  styleUrls: ['./form-pedidos.component.sass']
})

export class FormPedidosComponent implements OnInit {
  @Input() dataPedido: Array<PedidoProducto> = [];
  @Output () increaseRequest= new EventEmitter();
  @Output () deleteRequest = new EventEmitter();
  @Output () decreaseRequest = new EventEmitter();
  @Output () cancelRequest = new EventEmitter();
  @Output () postRequest = new EventEmitter();
  @Input  () payProduct: any;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
   }

  ngOnInit() {
  }

  pedidoCliente: FormGroup;

  private buildForm(){
    this.pedidoCliente= this.formBuilder.group({
      cliente : ['', Validators.required],
      mesa : ['', Validators.required]
    })
  }

  // this.PedidoCliente!.valueChanges
  // .pipe(
  //   debounceTime(500)
  // )
  // .subscribe((value:any) => console.log(value));

  // pedidoCliente = new FormGroup({
  //   cliente : new FormControl('', Validators.required),
  //   mesa : new FormControl('', Validators.required)
  // },Validators.required)

  onSubmit(){
    this.postRequest.emit(this.pedidoCliente.value)
    this.pedidoCliente.reset();
    this.dataPedido=[];
  }

  increaseProductQuantity(item:PedidoProducto){
    this.increaseRequest.emit(item);
  }

  deleteProductQuantity(item:PedidoProducto){
    this.deleteRequest.emit(item);
  }

  decreaseProductQuantity(item:PedidoProducto){
    this.decreaseRequest.emit(item);
  }

  cancelOrder(){
    this.cancelRequest.emit();
    this.pedidoCliente.reset();
  }
}
