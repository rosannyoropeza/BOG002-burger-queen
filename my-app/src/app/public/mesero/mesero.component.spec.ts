import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeseroComponent } from './mesero.component';

describe('MeseroComponent', () => {
  let component: MeseroComponent;
  let fixture: ComponentFixture<MeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeseroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
