import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { GetOlympicsDataService } from '../../services/get-olympics-data.service';
import { each as _each } from 'lodash';
import { MaterialComponentsModule } from '../../material-components/material-components.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-olympics-graph',
  standalone: true,
  imports: [MaterialComponentsModule, NgxChartsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './olympics-graph.component.html',
  styleUrl: './olympics-graph.component.scss'
})
export class OlympicsGraphComponent implements OnInit {

  public single: any = [];
  view: any = [600, 400];
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = true;
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Rank';
  timeline = true;
  doughnut = true;
  colorScheme: any = {
    domain: ['#9370DB',
             '#87CEFA', 
             '#FA8072', 
             '#FF7F50',
              '#90EE90', 
              '#9370DB'
            ]
  };

  
  constructor(private getOlympicSvc: GetOlympicsDataService) {

   }

  ngOnInit() {
    let barGraphInfo: any = window.sessionStorage.getItem('data');
    barGraphInfo = JSON.parse(barGraphInfo);
    _each(barGraphInfo, (graph: any) => {
      const info = {
        'name': graph.countryName,
        'value': graph.id
      }
      this.single.push(info);
    });
  } 

  onSelect(e: any) {
    console.log(e);
  }
}
