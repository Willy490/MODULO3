import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodashboardComponent } from './infodashboard.component';

describe('InfodashboardComponent', () => {
  let component: InfodashboardComponent;
  let fixture: ComponentFixture<InfodashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfodashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
