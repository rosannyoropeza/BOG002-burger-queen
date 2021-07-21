import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { menu } from '../../interfaz/menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  @Input() dataMenu: Array<menu> = [];
  @Output() addRequest = new EventEmitter<menu>();

  constructor() {}

  ngOnInit() {}

  addProduct(item: menu) {
    this.addRequest.emit(item);
  }
}
