import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesListDialogComponent } from './services-list-dialog.component';

describe('ServicesListDialogComponent', () => {
  let component: ServicesListDialogComponent;
  let fixture: ComponentFixture<ServicesListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesListDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
