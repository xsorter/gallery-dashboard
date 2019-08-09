import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    SharedMaterialModule,
    //ReactiveFormsModule
  ],
  declarations: [
    AddPostComponent, 
    DashboardComponent
  ],
  exports: [],

})


export class AdminModule {}