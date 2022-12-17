import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { ApiserviceService } from 'src/app/apiservice.service';
import { TransactionDetailsComponent } from '../../transaction-details/transaction-details.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  displayedColumns: string[] = [
    'TranDetail',
    'Contact_No',
    'Category&Sub-category',
    'bill_amt',
    'Trans_Type',
    'Pay_mode',
    'Refr_E',
    'Refr_P',
    'action',
  ];

  UserTrancolumn: string[] = [
    'TranDetail',
    'Store_N',
    'Trans_Type',
    'Refr_E',
    'Refr_P',
    'order_amt',
    'wal_bal',
    'action',
  ]

  Ordercolumns: string[] = [
    'Sr_no',
    'orderDate',
    'StoreName',
    'Cust_Name',
    'journey',
    'Vendor_Amt',
    'Tax',
    'tcsTax',
    'Gatway',
    'Total',
    'ordStatus',
    'action',
  ];

  orderdataSource!: MatTableDataSource<any>;
  UsertranSource!: MatTableDataSource<any>;
  userdata: any = "";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('MatTabGroupss') mattab?: MatTabGroup;
  @ViewChild(MatSort) sort!: MatSort;
  userID: string = "";

  constructor(private actRoute: ActivatedRoute, private apiservice: ApiserviceService,private dialog :MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.execute();
    }, 1000);
  }

  execute() {
    this.userID = this.actRoute.snapshot.params["id"];
    this.apiservice.getuserdata(this.userID).pipe().subscribe((userdata: any) => {
      this.userdata = userdata[0];
      console.log((this.userdata));
    });
  }
  userorders() {
    this.apiservice.getRecentAddedOrder(25, false, "by", "==", this.userID).pipe(take(1)).subscribe((recentorders: any) => {
      console.log(recentorders)
      this.orderdataSource = new MatTableDataSource(recentorders);
      this.orderdataSource.sort = this.sort;
    });
  }

  tabchange() {
    console.log(this.mattab?.selectedIndex);
    if (this.mattab?.selectedIndex == 1) {
      this.userorders();
    }
    else if (this.mattab?.selectedIndex == 2) {

    }
  }

  openDialog(data:any) {
    this.dialog.open(TransactionDetailsComponent, {
      width: '90%',
      minWidth: '90%',
      maxWidth: '90%',
      maxHeight: '80%',
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout',
      data: {Orderdata:data,id: 1 },
    });
  }
}
