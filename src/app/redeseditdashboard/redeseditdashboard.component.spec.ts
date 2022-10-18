import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeseditdashboardComponent } from './redeseditdashboard.component';

describe('RedeseditdashboardComponent', () => {
  let component: RedeseditdashboardComponent;
  let fixture: ComponentFixture<RedeseditdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeseditdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedeseditdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
