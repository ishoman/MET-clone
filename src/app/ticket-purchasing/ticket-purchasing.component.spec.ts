import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPurchasingComponent } from './ticket-purchasing.component';

describe('TicketPurchasingComponent', () => {
  let component: TicketPurchasingComponent;
  let fixture: ComponentFixture<TicketPurchasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketPurchasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPurchasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
