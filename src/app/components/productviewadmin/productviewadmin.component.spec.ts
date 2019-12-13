import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductviewadminComponent } from './productviewadmin.component';

describe('ProductviewadminComponent', () => {
  let component: ProductviewadminComponent;
  let fixture: ComponentFixture<ProductviewadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductviewadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductviewadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
