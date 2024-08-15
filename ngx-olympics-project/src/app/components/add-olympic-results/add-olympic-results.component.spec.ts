import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOlympicResultsComponent } from './add-olympic-results.component';

describe('AddOlympicResultsComponent', () => {
  let component: AddOlympicResultsComponent;
  let fixture: ComponentFixture<AddOlympicResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOlympicResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOlympicResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
