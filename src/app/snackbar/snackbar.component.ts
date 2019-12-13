import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string): void {
    const snackBarRef = this.snackBar.open(message, action, {duration: 2000});
    snackBarRef.afterDismissed().subscribe( () => {
      console.log('The snackbar was dismissed');
    });
    snackBarRef.onAction().subscribe( () => {
      console.log('The snackbar action was triggered');
    });
  }

}


