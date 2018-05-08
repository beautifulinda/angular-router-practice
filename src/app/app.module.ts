import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataSetsComponent } from './data-sets/data-sets.component';
import { DataFieldsComponent } from './data-fields/data-fields.component';
import { FieldsMainComponent } from './data-sets/fields-main/fields-main.component';
import { TopicsMainComponent } from './data-sets/topics-main/topics-main.component';
import { HomeComponent } from './home/home.component';
import { DSTypeComponent } from './data-sets/fields-main/dstype/dstype.component';
import { DSFileComponent } from './data-sets/fields-main/dstype/dsfile/dsfile.component';
import { DSSqlComponent } from './data-sets/fields-main/dstype/dssql/dssql.component';
import { DSTableComponent } from './data-sets/fields-main/dstype/dstable/dstable.component';


@NgModule({
  declarations: [
    AppComponent,
    DataSetsComponent,
    DataFieldsComponent,
    FieldsMainComponent,
    TopicsMainComponent,
    HomeComponent,
    DSTypeComponent,
    DSFileComponent,
    DSSqlComponent,
    DSTableComponent,
    // ClarityModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
