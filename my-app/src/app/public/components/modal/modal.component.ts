import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PedidoProducto, Producto } from '../../interfaz/menu';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})

export class ModalComponent implements OnInit {
  @Input() showclass: boolean = false;
  @Input() dataMenu: Array<Producto> = [];
  @Input() item: any;
  @Input() productoPedido?: PedidoProducto;
  @Output() closeRequest = new EventEmitter();
  @Output() addRequest = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  modalItem = new FormGroup({
    adicional1 : new FormControl(''),
    adicional2 : new FormControl('')
  })

  onSubmit() {
    //console.warn(this.modalItem.value);
    this.addRequest.emit(this.modalItem.value);
    this.closeModal();
  }

  closeModal() {
    this.closeRequest.emit();
  }
}

