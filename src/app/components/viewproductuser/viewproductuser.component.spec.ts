import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductuserComponent } from './viewproductuser.component';

describe('ViewproductuserComponent', () => {
  let component: ViewproductuserComponent;
  let fixture: ComponentFixture<ViewproductuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproductuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
