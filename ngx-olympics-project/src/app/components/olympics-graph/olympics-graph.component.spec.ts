import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympicsGraphComponent } from './olympics-graph.component';

describe('OlympicsGraphComponent', () => {
  let component: OlympicsGraphComponent;
  let fixture: ComponentFixture<OlympicsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlympicsGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlympicsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
