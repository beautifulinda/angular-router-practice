import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DataSetsComponent } from './data-sets/data-sets.component';
import { DataFieldsComponent } from './data-fields/data-fields.component';
import { FieldsMainComponent } from './data-sets/fields-main/fields-main.component';
import { TopicsMainComponent } from './data-sets/topics-main/topics-main.component';
import { HomeComponent } from './home/home.component';
import { DSTypeComponent } from './data-sets/fields-main/dstype/dstype.component';
import { DSSqlComponent } from './data-sets/fields-main/dstype/dssql/dssql.component';
import { DSTableComponent } from './data-sets/fields-main/dstype/dstable/dstable.component';
import { DSFileComponent } from './data-sets/fields-main/dstype/dsfile/dsfile.component';

const routes: Routes = [
  { path: '', redirectTo: 'topic-data-lib', pathMatch: 'full' },
  {
    path: 'topic-data-lib', component: HomeComponent, children: [
      {
        path: '', component: DataSetsComponent, outlet: 'left',
        children: [
          { path: '', redirectTo: 'field', pathMatch: 'full' },
          { path: 'field', component: FieldsMainComponent },
          { path: 'topic', component: TopicsMainComponent },
          {
            path: 'newDS', component: DSTypeComponent,
            children: [
              { path: 'sqlDS', component: DSSqlComponent },
              { path: 'tableDS', component: DSTableComponent },
              { path: 'fileDS', component: DSFileComponent }]
          }
        ]
      },
      { path: '', component: DataFieldsComponent, outlet: 'right' },
    ]
  }
  // {
  //   path: 'topic-data-lib', component: DataSetsComponent, outlet: 'left',
  //   children: [
  //     { path: 'field', component: FieldsMainComponent },
  //     { path: 'topic', component: TopicsMainComponent }
  //   ]
  // },
  // { path: '', component: DataFieldsComponent, outlet: 'right' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
