import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { StreamsComponent } from './screens/streams/streams.component';
import { TablesComponent } from './screens/tables/tables.component';
import { QueriesComponent } from './screens/queries/queries.component';
import { DetailsComponent } from './screens/details/details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'streams', component: StreamsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'details/:type/:name', component: DetailsComponent },
  { path: 'queries', component: QueriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
