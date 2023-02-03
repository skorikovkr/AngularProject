import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOfficesByServiceListComponent } from './branch-offices-by-service-list.component';

describe('BranchOfficesByServiceListComponent', () => {
  let component: BranchOfficesByServiceListComponent;
  let fixture: ComponentFixture<BranchOfficesByServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchOfficesByServiceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchOfficesByServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
