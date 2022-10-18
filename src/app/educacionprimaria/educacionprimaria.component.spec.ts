import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionprimariaComponent } from './educacionprimaria.component';

describe('EducacionprimariaComponent', () => {
  let component: EducacionprimariaComponent;
  let fixture: ComponentFixture<EducacionprimariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionprimariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionprimariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
