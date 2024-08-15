import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OlympicsData } from '../../interfaces/olympics-data';
import { MatSort } from '@angular/material/sort';
import { GetOlympicsDataService } from '../../services/get-olympics-data.service';

@Component({
  selector: 'app-olympics-info',
  standalone: true,
  imports: [],
  templateUrl: './olympics-info.component.html',
  styleUrl: './olympics-info.component.scss'
})
export class OlympicsInfoComponent implements OnInit {

  displayedColumns = ['Country Name', 'Number of Participants', 'Number of Gold Medals Won', 'Number of Silver Medals Won', 'Number of Bronze Medals Won'];
  dataSource: MatTableDataSource<OlympicsData>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private olympicSvc: GetOlympicsDataService) {
    this.olympicSvc.getOlympicsData().subscribe((resp) => {
      console.log('Response; ===> ' + resp);
    });
  }

  ngOnInit() {
        const olympicInfo: OlympicsData[] = [];
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(olympicInfo);
    
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
