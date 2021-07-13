import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefeDeCocinaComponent } from './jefe-de-cocina.component';

describe('JefeDeCocinaComponent', () => {
  let component: JefeDeCocinaComponent;
  let fixture: ComponentFixture<JefeDeCocinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JefeDeCocinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JefeDeCocinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
