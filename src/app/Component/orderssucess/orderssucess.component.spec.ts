import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderssucessComponent } from './orderssucess.component';

describe('OrderssucessComponent', () => {
  let component: OrderssucessComponent;
  let fixture: ComponentFixture<OrderssucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderssucessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderssucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
