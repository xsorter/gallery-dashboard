import {MatButtonModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule
  ],
})
export class SharedMaterialModule { }