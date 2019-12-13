import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-dialogues',
  templateUrl: './dialogues.component.html',
  styleUrls: ['./dialogues.component.scss']
})
export class DialoguesComponent implements OnInit {

  public name: string;

  constructor(public dialog: MatDialog) {
    this.name = null;
  }

  ngOnInit() {
  }

  login(): void {
    this.name = 'Elena';
  }

  openDialog(): void {
    const d = {name: this.name};

    const dialogRef = this.dialog.open(DialogExampleComponent, {data: d});
    dialogRef.afterClosed().subscribe( result => {
      const log: boolean = JSON.parse(result);
      if (log) { this.logout(); }
    });
  }

  logout(): void {
    this.name = null;
  }

}
