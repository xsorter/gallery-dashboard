import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddPostComponent } from './add-post/add-post.component';

const adminRoutes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', component: AdminHomeComponent},
    {path: 'add', component: AddPostComponent}
  ]}
]

@NgModule({
  imports:[RouterModule.forChild(adminRoutes)],
  exports:[RouterModule]
})

export class AdminRoutingModule {};