import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule 
  ],
  exports: [
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule 
  ]
})
export class AngularMaterialModule { }
