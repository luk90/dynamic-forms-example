import { TestBed, inject } from '@angular/core/testing';

import { DynamicComponentsService } from './dynamic-components.service';

describe('DynamicComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicComponentsService]
    });
  });

  it('should ...', inject([DynamicComponentsService], (service: DynamicComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
