import { TestBed, inject } from '@angular/core/testing';

import { ApplicationUtilsService } from './application-utils.service';

describe('ApplicationUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationUtilsService]
    });
  });

  it('should ...', inject([ApplicationUtilsService], (service: ApplicationUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
