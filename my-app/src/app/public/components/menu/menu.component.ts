import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../interfaz/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})

export class MenuComponent implements OnInit {
  @Input() dataMenu: Array<Producto> = [];
  @Output() addRequest = new EventEmitter<Producto>();

  constructor() {
  }

  ngOnInit() {
  }

  addProduct(item: Producto) {
    this.addRequest.emit(item);

  }

}
