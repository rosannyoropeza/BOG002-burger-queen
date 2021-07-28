import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { pedidoProducto, producto } from '../../interfaz/menu';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})

export class ModalComponent implements OnInit {
  @Input() showclass: boolean = false;
  @Input() dataMenu: Array<producto> = [];
  @Input() item: any;
  @Input() productoPedido?: pedidoProducto;
  @Output() closeRequest = new EventEmitter();
  @Output() clearRequest = new EventEmitter();
  @Output() addRequest = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  modalItem = new FormGroup({
    adicional1 : new FormControl(''),
    adicional2 : new FormControl('')
  })

  onSubmit() {
    console.warn(this.modalItem.value);
    let precio= 0;
    if(this.modalItem.value.adicional1 && this.modalItem.value.adicional2){
      precio= 2;
    }
    if(this.modalItem.value.adicional1 || this.modalItem.value.adicional2 ){
      precio= 1;
    }

    this.addRequest.emit(this.item);

    this.closeModal();
  }

  closeModal() {
    this.closeRequest.emit();
  }

  clearModal() {
   this.clearRequest.emit();
  //  this.resetForm(this.modalItem);
   console.log('Limpiando Modal');
  }

  addProductModal(item: producto) {
    this.addRequest.emit(item);
  }

  // resetForm(modalItem: FormGroup) {
  //   throw new Error('Function not implemented.');
  // }
}

