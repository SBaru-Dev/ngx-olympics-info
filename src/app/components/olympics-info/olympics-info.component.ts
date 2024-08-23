import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OlympicsData } from '../../interfaces/olympics-data';
import { MatSort } from '@angular/material/sort';
import { GetOlympicsDataService } from '../../services/get-olympics-data.service';
import { MaterialComponentsModule } from '../../material-components/material-components.module';
import {each as _each} from 'lodash';
import {Router} from '@angular/router';

@Component({
  selector: 'app-olympics-info',
  standalone: true,
  imports: [MaterialComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './olympics-info.component.html',
  styleUrl: './olympics-info.component.scss'
})
export class OlympicsInfoComponent implements OnInit {
  displayedColumns = ['countryName', 'id', 'goldMedal', 'silverMedal', 'participants', 'bronzeMedal'];
  
  olympicDataSource = new MatTableDataSource<OlympicsData>;

  public olympicData: OlympicsData[];
  @ViewChild('datasort') datasort!: MatSort | null;

  constructor(private olympicSvc: GetOlympicsDataService,
             private changeDetectorRefs: ChangeDetectorRef,
             private _router: Router
  ) {  }

  ngOnInit(): void {
    this.olympicSvc.getOlympicsData().subscribe((resp: any) => {      
      this.olympicData = resp;
      this.olympicDataSource.data = this.olympicData;
      window.sessionStorage.setItem('data', JSON.stringify(this.olympicData));
      this.changeDetectorRefs.detectChanges();
    });
  }

  /**
   * sort after the view init
   */
  ngAfterViewInit() {
    this.olympicDataSource.sort = this.datasort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  }

  onButtonClick() {
    this._router.navigateByUrl('/dashboard-view');
    
  }

  onAddResult() {
    this._router.navigateByUrl('/add-result');
  }
  
}
