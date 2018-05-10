import { TestBed, inject } from '@angular/core/testing';

import { BlogEventService } from './blog-event.service';

describe('BlogEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogEventService]
    });
  });

  it('should be created', inject([BlogEventService], (service: BlogEventService) => {
    expect(service).toBeTruthy();
  }));
});
