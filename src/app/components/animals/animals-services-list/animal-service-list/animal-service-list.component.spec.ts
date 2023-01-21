import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalServiceListComponent } from './animal-service-list.component';

describe('AnimalServiceListComponent', () => {
  let component: AnimalServiceListComponent;
  let fixture: ComponentFixture<AnimalServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalServiceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
