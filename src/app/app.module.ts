import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './client/gallery/gallery.component';
import { DetailComponent } from './client/detail/detail.component';
import { ListComponent } from './client/list/list.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './client/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './material.module';
import { AdminModule } from './admin/admin.module';
import { SidebarComponent } from './client/sidebar/sidebar.component';

import { DataStorageService } from './shared/data-storage.service';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FirestoreSettingsToken} from '@angular/fire/firestore';
import { ImageUploadService } from './shared/image-upload.service';
import { NotifyComponent } from './core/notify/notify.component';



@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DetailComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    SidebarComponent,
    NotifyComponent,
     
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    AdminModule
  ],
  providers: [
    DataStorageService,
    ImageUploadService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
