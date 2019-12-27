import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    LoadingSpinnerComponent
  ],
  declarations: [LoadingSpinnerComponent],
  exports: [
    CommonModule,
    LoadingSpinnerComponent
  ],
  providers: []
})
export class SharedModule { }
