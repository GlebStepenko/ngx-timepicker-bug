import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pickertest';

  constructor(private readonly _d: MatDialog) {
  }


  async openDialog() {
    const {DialogLazyModule} = await import( './dialog/dialog.lazy/dialog.lazy.module');
    this._d.open(DialogLazyModule.getDialog(), {
      panelClass: 'dialog-close-big',
      data: {}
    }).afterClosed().pipe(

    ).subscribe();
  }
}
