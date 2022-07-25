import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListTableComponent } from './catalog-list-table.component';

describe('CatalogListTableComponent', () => {
  let component: CatalogListTableComponent;
  let fixture: ComponentFixture<CatalogListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
