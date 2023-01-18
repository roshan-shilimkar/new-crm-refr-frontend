import { Component, OnInit } from '@angular/core';
import { DndDirective } from './dnd.directive';
import { ProgressComponent } from './progress/progress.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-feedsection',
  templateUrl: './feedsection.component.html',
  styleUrls: ['./feedsection.component.scss'],
})
export class FeedsectionComponent implements OnInit {
  public files: any[] = [];

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onFileChange(pFileList: File[]) {
    this.files = Object.keys(pFileList).map((key: any) => pFileList[key]);
    this._snackBar.open('Successfully upload!', 'Close', {
      duration: 2000,
    });
  }

  deleteFile(f: any) {
    this.files = this.files.filter(function (w) {
      return w.name != f.name;
    });
    this._snackBar.open('Successfully delete!', 'Close', {
      duration: 2000,
    });
  }

  openConfirmDialog(pIndex: any): void {
    const dialogRef = this.dialog.open(ProgressComponent, {
      panelClass: 'modal-xs',
    });
    dialogRef.componentInstance.fName = this.files[pIndex].name;
    dialogRef.componentInstance.fIndex = pIndex;

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.deleteFromArray(result);
      }
    });
  }

  deleteFromArray(index: any) {
    console.log(this.files);
    this.files.splice(index, 1);
  }
}
