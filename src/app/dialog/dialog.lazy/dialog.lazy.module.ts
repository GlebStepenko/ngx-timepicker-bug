import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogLazyComponent } from './dialog.lazy.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    DialogLazyComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    NgxMatTimepickerModule,
    MatIconModule,
    MatButtonModule
  ]
})

export class DialogLazyModule {
  static getDialog(): typeof DialogLazyComponent {
    return DialogLazyComponent;
  }
}
