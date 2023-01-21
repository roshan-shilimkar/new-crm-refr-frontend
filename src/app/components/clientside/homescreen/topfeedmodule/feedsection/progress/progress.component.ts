import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  public fName?: string;
  public fIndex: any;

  constructor(private modalRef: MatDialogRef<ProgressComponent>) {}

  ngOnInit() {}

  confirm() {
    this.modalRef.close(this.fIndex);
  }
  cancel() {
    this.modalRef.close();
  }
}
