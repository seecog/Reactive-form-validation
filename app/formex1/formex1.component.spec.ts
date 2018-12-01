import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formex1Component } from './formex1.component';

describe('Formex1Component', () => {
  let component: Formex1Component;
  let fixture: ComponentFixture<Formex1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formex1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
