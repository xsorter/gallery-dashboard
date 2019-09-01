import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadProgressComponent } from './upload-progress/upload-progress.component';
import { DragimagesDirective } from './dragimages.directive';

@NgModule({
  declarations: [
    DragimagesDirective,
    AddPostComponent, 
    DashboardComponent, 
    MenuComponent, 
    AdminHomeComponent, UploaderComponent, UploadProgressComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [],
})

export class AdminModule {}