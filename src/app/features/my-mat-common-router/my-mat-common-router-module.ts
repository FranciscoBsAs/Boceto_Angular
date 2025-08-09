import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    MatTableModule,
    CommonModule,
    RouterModule
  ]
})
export class MyMatCommonRouterModule { }
