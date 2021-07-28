import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { producto } from '../../interfaz/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})

export class MenuComponent implements OnInit {
  @Input() dataMenu: Array<producto> = [];
  @Output() addRequest = new EventEmitter<producto>();

  constructor() {
  }

  ngOnInit() {
  }

  addProduct(item: producto) {
    this.addRequest.emit(item);

  }

}
