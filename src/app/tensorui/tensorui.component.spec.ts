import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TensoruiComponent } from './tensorui.component';

describe('TensoruiComponent', () => {
  let component: TensoruiComponent;
  let fixture: ComponentFixture<TensoruiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TensoruiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TensoruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
