import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HgComponent } from './hg.component';

describe('HgComponent', () => {
  let component: HgComponent;
  let fixture: ComponentFixture<HgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
