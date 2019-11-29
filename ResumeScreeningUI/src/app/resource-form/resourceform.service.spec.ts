import { TestBed } from '@angular/core/testing';

import { ResourceformService } from './resourceform.service';

describe('ResourceformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceformService = TestBed.get(ResourceformService);
    expect(service).toBeTruthy();
  });
});
