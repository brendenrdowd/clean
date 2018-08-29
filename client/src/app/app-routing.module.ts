import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogRegComponent } from './components/log-reg/log-reg.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    component:LogRegComponent
  },
  {
    path:"dashboard",
    pathMatch:'full',
    component: DashboardComponent
  },
  {
    path:"list",
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
