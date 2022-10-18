import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectodashboardComponent } from './proyectodashboard.component';

describe('ProyectodashboardComponent', () => {
  let component: ProyectodashboardComponent;
  let fixture: ComponentFixture<ProyectodashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectodashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
