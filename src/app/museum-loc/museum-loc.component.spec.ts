import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumLocComponent } from './museum-loc.component';

describe('MuseumLocComponent', () => {
  let component: MuseumLocComponent;
  let fixture: ComponentFixture<MuseumLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
