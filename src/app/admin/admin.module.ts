import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    BrowserModule,
    SharedMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddPostComponent, 
    DashboardComponent, MenuComponent
  ],
  exports: [],

})


export class AdminModule {}