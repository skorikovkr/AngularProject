import { TestBed } from '@angular/core/testing';

import { AnimalServiceCategoryService } from './animal-service-category.service';

describe('AnimalServiceCategoryService', () => {
  let service: AnimalServiceCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalServiceCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
