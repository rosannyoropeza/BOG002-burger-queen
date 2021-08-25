import { FirebaseService } from 'src/app/firebase/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-listos',
  templateUrl: './pedidos-listos.component.html',
  styleUrls: ['./pedidos-listos.component.sass'],
})
export class PedidosListosComponent implements OnInit {


  constructor(public firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    this.firebaseService.setStatus();
  }

}
