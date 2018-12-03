import { TestBed } from '@angular/core/testing';

import { SbUiService } from './sb-ui.service';

describe('SbUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SbUiService = TestBed.get(SbUiService);
    expect(service).toBeTruthy();
  });
});
