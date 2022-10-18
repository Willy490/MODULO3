import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasdashboardComponent } from './referenciasdashboard.component';

describe('ReferenciasdashboardComponent', () => {
  let component: ReferenciasdashboardComponent;
  let fixture: ComponentFixture<ReferenciasdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciasdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenciasdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
