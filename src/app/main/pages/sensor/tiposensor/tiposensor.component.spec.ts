import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposensorComponent } from './tiposensor.component';

describe('TiposensorComponent', () => {
  let component: TiposensorComponent;
  let fixture: ComponentFixture<TiposensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
