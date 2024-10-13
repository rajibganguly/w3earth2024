import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllAppsComponent } from './dashboard/allapps/allapps.component';
import { DetailserviceComponent } from './detailservice/detailservice.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: './',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'allapps',
    component: AllAppsComponent,
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/project.module').then((m) => m.ProjectModule),
  },
  {
    path: 'details-services',
    component: DetailserviceComponent,
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./explore/explore.module').then((m) => m.ExploreModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'process',
    loadChildren: () =>
      import('./w3eprocess/w3eprocess.module').then((m) => m.W3eprocessModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./w3eservices/w3eservices.module').then((m) => m.W3eservicesModule),
  },
  {
    path: '**',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
