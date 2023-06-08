import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { StreamsComponent } from './screens/streams/streams.component';
import { TablesComponent } from './screens/tables/tables.component';
import { QueriesComponent } from './screens/queries/queries.component';
import { EditorComponent } from './screens/editor/editor.component';
import { DetailsComponent } from './screens/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StreamsComponent,
    TablesComponent,
    QueriesComponent,
    EditorComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
