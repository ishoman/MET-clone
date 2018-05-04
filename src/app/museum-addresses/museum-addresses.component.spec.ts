import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumAddressesComponent } from './museum-addresses.component';

describe('MuseumAddressesComponent', () => {
  let component: MuseumAddressesComponent;
  let fixture: ComponentFixture<MuseumAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
