import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodydashboardComponent } from './bodydashboard.component';

describe('BodydashboardComponent', () => {
  let component: BodydashboardComponent;
  let fixture: ComponentFixture<BodydashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodydashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
