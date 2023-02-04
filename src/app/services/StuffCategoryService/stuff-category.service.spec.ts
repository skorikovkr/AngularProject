import { TestBed } from '@angular/core/testing';

import { StuffCategoryService } from './stuff-category.service';

describe('StuffCategoryService', () => {
  let service: StuffCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StuffCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
