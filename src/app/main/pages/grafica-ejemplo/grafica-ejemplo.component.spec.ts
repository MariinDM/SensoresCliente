import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaEjemploComponent } from './grafica-ejemplo.component';

describe('GraficaEjemploComponent', () => {
  let component: GraficaEjemploComponent;
  let fixture: ComponentFixture<GraficaEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
