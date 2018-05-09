import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fields-main',
  templateUrl: './fields-main.component.html',
  styleUrls: ['./fields-main.component.css']
})
export class FieldsMainComponent implements OnInit {
  addSqlDsToggle = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  addSqlDs() {
    this.addSqlDsToggle = !this.addSqlDsToggle;
    console.log('addSqlDs()' + this.addSqlDsToggle);

    let routeNavigate = ['/topic-data-lib', { outlets: { 'right': ['add'] } }];
    if (!this.addSqlDsToggle) {
      routeNavigate = ['/topic-data-lib'];
    }
    this.router.navigate(routeNavigate);
  }
}
