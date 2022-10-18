import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashboardComponent } from './modaldashboard.component';

describe('ModaldashboardComponent', () => {
  let component: ModaldashboardComponent;
  let fixture: ComponentFixture<ModaldashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
