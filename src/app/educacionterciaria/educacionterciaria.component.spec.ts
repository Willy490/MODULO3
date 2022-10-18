import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionterciariaComponent } from './educacionterciaria.component';

describe('EducacionterciariaComponent', () => {
  let component: EducacionterciariaComponent;
  let fixture: ComponentFixture<EducacionterciariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionterciariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionterciariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
