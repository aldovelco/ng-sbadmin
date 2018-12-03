import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './shared/page/page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
  {
    path: 'dashboard',
    data: { title: 'Dashboard' },
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'charts',
    data: { title: 'Charts' },
    component: PageComponent
  },
  {
    path: 'tables',
    data: { title: 'Tables' },
    component: PageComponent
  },
  {
    path: 'forms',
    data: { title: 'Forms' },
    component: PageComponent
  },
  {
    path: 'ui-elements',
    data: { title: 'UI Elements' },
    component: PageComponent
  },
  {
    path: 'sample-pages',
    data: { title: 'Sample Pages' },
    component: PageComponent
  },
  {
    path: '**',
    component: PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
