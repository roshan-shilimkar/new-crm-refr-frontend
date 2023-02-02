import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-nodemanagement',
  templateUrl: './nodemanagement.component.html',
  styleUrls: ['./nodemanagement.component.scss'],
})
export class NodemanagementComponent implements OnInit {
  parameters: string = '';
  searchvalue: any;
  valuetype: number = 2;
  Valuearr: Array<any> = [];

  nodes!: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  nodeColumns: string[] = ['node', 'area', 'used_in', 'action'];

  constructor(public as: ApiserviceService, public rs: Router) {
    this.as.nodeList = this.as.nodesData;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.execute();
    }, 1000);
  }

  ParaArr: Array<any> = [
    {
      Title: 'Cities',
      titvalue: '',
    },
    {
      Title: 'Mumbai',
      titvalue: 'mumbai',
    },
    {
      Title: 'Andheri',
      titvalue: 'andheri',
    },
    {
      Title: 'Kalyan',
      titvalue: 'kalyan',
    },
  ];

  async execute() {
    this.as.getNodeData().subscribe((data: any) => {
      let dataN:Array<any>=[];
      for(let i = 0; i<data.length;i++){
        console.log(data[i]);
        if(data[i].city != undefined && data[i].city != '' && data[i].created_at != undefined && data[i].used_in != "" )
        dataN.push(data[i]);
      }
      console.log('data', dataN);

      this.nodes = new MatTableDataSource(dataN);
      this.nodes.paginator = this.paginator;
      this.nodes.sort = this.sort;
    });
  }

  editNode(name: any) {
    console.log(name, 'edit');
  }
}
