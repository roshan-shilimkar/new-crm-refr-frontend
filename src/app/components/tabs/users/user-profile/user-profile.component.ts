import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface UsertranData {
  Tranid: string;
  TranDate: string;
  Store_name: string;
  Category: string;
  Sub_category: string;
  // Store_name: string;
  Bill_amt:string;
  Trans_type: string;
  pay_mode:string;
  Refr_E: string;
  Refr_P: string;
}

export interface userorderdata {
  Tranid: string;
  TranDate: string;
  Storename: string;
  Trans_type: string;
  // pay_mode: string;
  Refr_E: string;
  Refr_P: string;
  order_amt: string;
  wal_bal: string;
}
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
  UserorderdataSource!: MatTableDataSource<UsertranData>;
  UsertranSource!: MatTableDataSource<userorderdata>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.execute();
    }, 1000);
  }

  execute() {
    const userorders = [
    {
      Tranid: '1234567890',
      TranDate: '12/1/2022',
      Store_name: '1234567890',
      Category: 'Health',
      Sub_category: 'Dentist',
      Bill_amt: '1000',
      Trans_type: 'Direct',
      pay_mode: 'COD',
      Refr_E: '30',
      Refr_P: '0',
    },
    {
      Tranid: '1234567890',
      TranDate: '12/1/2022',
      Store_name: '1234567890',
      Category: 'Health',
      Sub_category: 'Dentist',
      Bill_amt: '1000',
      Trans_type: 'Burn',
      pay_mode: 'COD',
      Refr_E: '30',
      Refr_P: '0',
    },

    {
      Tranid: '1234567890',
      TranDate: '12/1/2022',
      Store_name: '1234567890',
      Category: 'Health',
      Sub_category: 'Dentist',
      Bill_amt: '1000',
      Trans_type: 'F2F',
      pay_mode: 'COD',
      Refr_E: '30',
      Refr_P: '0',
    },
    {
      Tranid: '1234567890',
      TranDate: '12/1/2022',
      Store_name: '1234567890',
      Category: 'Health',
      Sub_category: 'Dentist',
      Bill_amt: '1000',
      Trans_type: 'Burn',
      pay_mode: 'COD',
      Refr_E: '30',
      Refr_P: '0',
    },
    {
      Tranid: '1234567890',
      TranDate: '12/1/2022',
      Store_name: '1234567890',
      Category: 'Health',
      Sub_category: 'Dentist',
      Bill_amt: '1000',
      Trans_type: 'Burn',
      pay_mode: 'COD',
      Refr_E: '30',
      Refr_P: '0',
    },
    ]
    this.UserorderdataSource = new MatTableDataSource(userorders);
    this.UserorderdataSource.paginator = this.paginator;
    this.UserorderdataSource.sort = this.sort;




    const userstrans = [      {
        Tranid: '1234567890',
        TranDate: '12/1/2022',
        Storename: 'Akkad Bakkad..',
        Trans_type: 'Direct Sale',
        Refr_E: '25',
        Refr_P: '25',
        order_amt: '1000',
        wal_bal: '10000',
      },
      {
        Tranid: '1234567890',
        TranDate: '12/1/2022',
        Storename: 'Akkad Bakkad..',
        Trans_type: 'POS Sale',
        Refr_E: '25',
        Refr_P: '25',
        order_amt: '1000',
        wal_bal: '10000',
      },
      {
        Tranid: '1234567890',
        TranDate: '12/1/2022',
        Storename: 'Akkad Bakkad..',
        Trans_type: 'F2F Sale',
        Refr_E: '25',
        Refr_P: '25',
        order_amt: '1000',
        wal_bal: '10000',
      },
      {
        Tranid: '1234567890',
        TranDate: '12/1/2022',
        Storename: 'Akkad Bakkad..',
        Trans_type: 'Withdrawal',
        Refr_E: '25',
        Refr_P: '25',
        order_amt: '1000',
        wal_bal: '10000',
      },
    ];
    this.UsertranSource = new MatTableDataSource(userstrans);
    this.UsertranSource.paginator = this.paginator;
    this.UsertranSource.sort = this.sort;




    // const userstran = [
    //   {
    //     Tranid: '1234567890',
    //     TranDate: '12/1/2022',
    //     Store_name: 'Akkad Bakkad..',
    //     Trans_type: 'Refr Credits',
    //     Refr_E: '30',
    //     Refr_P: '0',
    //     Amt: '1000',
    //     T_Amt: '1000',
    //   },

    // ];
    // this.UsertranSource = new MatTableDataSource(userstran);
    // this.UsertranSource.paginator = this.paginator;
    // this.UsertranSource.sort = this.sort;


  }

}
