import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodydashboardfondoComponent } from './bodydashboardfondo.component';

describe('BodydashboardfondoComponent', () => {
  let component: BodydashboardfondoComponent;
  let fixture: ComponentFixture<BodydashboardfondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodydashboardfondoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodydashboardfondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
