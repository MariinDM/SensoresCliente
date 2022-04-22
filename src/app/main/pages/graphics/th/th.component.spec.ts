import { ComponentFixture, TestBed } from '@angular/core/testing';

import { THComponent } from './th.component';

describe('THComponent', () => {
  let component: THComponent;
  let fixture: ComponentFixture<THComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ THComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(THComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
