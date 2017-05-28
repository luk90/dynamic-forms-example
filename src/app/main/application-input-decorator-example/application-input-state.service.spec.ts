import { TestBed, inject } from '@angular/core/testing';

import { ApplicationInputStateService } from './application-input-state.service';

describe('ApplicationInputStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationInputStateService]
    });
  });

  it('should ...', inject([ApplicationInputStateService], (service: ApplicationInputStateService) => {
    expect(service).toBeTruthy();
  }));
});
