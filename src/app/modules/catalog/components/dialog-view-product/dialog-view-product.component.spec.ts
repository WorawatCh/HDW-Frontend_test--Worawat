import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewProductComponent } from './dialog-view-product.component';

describe('DialogViewProductComponent', () => {
  let component: DialogViewProductComponent;
  let fixture: ComponentFixture<DialogViewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogViewProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
