import { TestBed } from '@angular/core/testing';

import { PlatCantiniereService } from './plat-cantiniere.service';

describe('PlatCantiniereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatCantiniereService = TestBed.get(PlatCantiniereService);
    expect(service).toBeTruthy();
  });
});
