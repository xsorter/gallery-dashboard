import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class SharedMaterialModule { }