import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { PipePipe } from './pipe.pipe';
import { pipe } from 'rxjs';



@NgModule({
  declarations: [
    AlertModalComponent,
    ConfirmModalComponent,
    PipePipe
   ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertModalComponent,
    ConfirmModalComponent,
    PipePipe
  ]
})
export class SharedModule { }
