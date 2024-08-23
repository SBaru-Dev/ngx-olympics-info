import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialComponentsModule } from '../../material-components/material-components.module';
import { GetOlympicsDataService } from '../../services/get-olympics-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-olympic-results',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MaterialComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-olympic-results.component.html',
  styleUrl: './add-olympic-results.component.scss'
})
export class AddOlympicResultsComponent implements OnInit {
  addResultForm: FormGroup; 

  constructor(private fb: FormBuilder,
              private router: Router,
              private olympicSvc: GetOlympicsDataService
  ) { }
  
  ngOnInit(): void {
    this.addResultForm = this.fb.group({
      countryName: ['', Validators.required],
      rank: ['', Validators.required],
      participants: ['', Validators.required],
      goldMedal: ['', Validators.required],
      silverMedal: ['', Validators.required],
      bronzeMedal: ['', Validators.required]
    });
  }

  back() {
    this.router.navigateByUrl('/dashboard');
  }

  onSubmit() {
    this.addResultForm.reset();
    this.addResultForm.markAsPristine();
    this.addResultForm.markAsUntouched();
    this.addResultForm.updateValueAndValidity();
    if(!!this.addResultForm) {
      const formValues = this.addResultForm.value;
      const req: any = {
        countryName: formValues.countryName,
        id: formValues.rank,
        participants: formValues.participants,
        goldMedal: formValues.goldMedal,
        silverMedal: formValues.silverMedal,
        bronzeMedal: formValues.bronzeMedal
      }
      this.olympicSvc.updateOlympicsData(req).subscribe((resp) => {
        console.log('Updated successfully')

      });
    }
  }

  }

  

