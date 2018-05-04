import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumHighlightsComponent } from './museum-highlights.component';

describe('MuseumHighlightsComponent', () => {
  let component: MuseumHighlightsComponent;
  let fixture: ComponentFixture<MuseumHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
