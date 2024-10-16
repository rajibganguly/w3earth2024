import { Component, OnInit } from '@angular/core';
import { DASHBOARD_ADDITIONAL_INVOLVEMENT_TITLE, SECTIONONE_CONTENT } from './../../constant';
import {IDashboardPromo} from './../dashboard.model';

@Component({
  selector: 'app-allapps',
  templateUrl: './allapps.component.html',
  styleUrls: ['./allapps.component.scss']
})

export class AllAppsComponent {
  dashboardPromo: IDashboardPromo[] | undefined;
  additionalInvolvement = DASHBOARD_ADDITIONAL_INVOLVEMENT_TITLE;
  content: IDashboardPromo[] | undefined = SECTIONONE_CONTENT;
  constructor() { }


}


