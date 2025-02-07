import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  perfil:string;
  constructor(
    public miRouter: Router,
  ) {}

  ngOnInit(): void {
    this.perfil=localStorage.getItem('perfil');
  }
}
