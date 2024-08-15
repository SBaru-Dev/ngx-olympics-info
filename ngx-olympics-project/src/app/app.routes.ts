import { Route } from '@angular/router';
import { OlympicsInfoComponent } from './components/olympics-info/olympics-info.component';
import { OlympicsGraphComponent } from './components/olympics-graph/olympics-graph.component';
import { AddOlympicResultsComponent } from './components/add-olympic-results/add-olympic-results.component';

export const routes: Route[] = [
    {
        path: 'dashboard',
        component: OlympicsInfoComponent
    },
    {
        path: 'dashboard-view',
        component: OlympicsGraphComponent
    },
    {
        path: 'add-result',
        component: AddOlympicResultsComponent
    }
];
