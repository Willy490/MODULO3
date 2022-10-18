import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionsecundariaComponent } from './educacionsecundaria.component';

describe('EducacionsecundariaComponent', () => {
  let component: EducacionsecundariaComponent;
  let fixture: ComponentFixture<EducacionsecundariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionsecundariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionsecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
