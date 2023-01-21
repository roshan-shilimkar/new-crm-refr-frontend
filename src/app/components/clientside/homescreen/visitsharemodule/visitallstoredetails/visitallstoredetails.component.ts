import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-visitallstoredetails',
  templateUrl: './visitallstoredetails.component.html',
  styleUrls: ['./visitallstoredetails.component.scss'],
})
export class VisitallstoredetailsComponent implements OnInit {
  id: number = 0;

  storedetails: Array<any> = [
    {
      storename: 'Dinshaws Xpress cafe',
      storetype: 'cafe',
    },
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}

  addstorelink(adds: any) {
    // visit share earn
    if (this.router.url == '/storedetails/visitstoresection') {
      this.router.navigate(['/addstore/' + adds]);
    }
    // Brands in your neighbourhood

    if (this.router.url == '/storedetails/brandsallstore') {
      this.router.navigate(['/addstore/' + adds]);
    }
    console.log('click');
  }
}
