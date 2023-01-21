import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsServiceAddComponent } from './animals-service-add.component';

describe('AnimalsServiceAddComponent', () => {
  let component: AnimalsServiceAddComponent;
  let fixture: ComponentFixture<AnimalsServiceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsServiceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsServiceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
