import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympicsInfoComponent } from './olympics-info.component';

describe('OlympicsInfoComponent', () => {
  let component: OlympicsInfoComponent;
  let fixture: ComponentFixture<OlympicsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlympicsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlympicsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
