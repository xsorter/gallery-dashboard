import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { ListComponent } from './client/list/list.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { DetailComponent } from './client/detail/detail.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'list/:id', component: DetailComponent},
  {path: 'admin', loadChildren: () => AdminModule},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
