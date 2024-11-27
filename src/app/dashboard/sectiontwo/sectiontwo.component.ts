import { Component, OnInit, Input } from '@angular/core';
import { DASHBOARD_BEST_CLIENTS_LOG } from 'src/app/constant';

@Component({
  selector: 'app-sectiontwo',
  templateUrl: './sectiontwo.component.html',
  styleUrls: ['./sectiontwo.component.scss']
})

export class SectiontwoComponent {
  title = DASHBOARD_BEST_CLIENTS_LOG;
  @Input() clientsLists: IClientsLogo[] = [];
  constructor() {

  }



}

export interface IClientsLogo {
  img: string,
  alt: string,
  designation: string,
  details: string
}
