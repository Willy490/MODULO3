import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajodashboardComponent } from './trabajodashboard.component';

describe('TrabajodashboardComponent', () => {
  let component: TrabajodashboardComponent;
  let fixture: ComponentFixture<TrabajodashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajodashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
