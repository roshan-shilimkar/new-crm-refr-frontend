import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

// firebase
import {
  collection,
  doc,
  setDoc,
  getDoc,
  CollectionReference,
  onSnapshot,
  getDocs,
  query,
  where,
  addDoc,
} from 'firebase/firestore';

import { collectionData, Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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

  constructor(
    public as: ApiserviceService,
    public rs: Router,
    public ar: ActivatedRoute,
    public firestore: Firestore,
    public afs: AngularFirestore
  ) {
    // this.as.nodeList = this.as.nodesData;
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
    // const users = [
    //   {
    //     Merch_id: '1',
    //   },
    // ];

    this.as.getNodeData().subscribe((data: any) => {
      console.log('data', data);
      this.nodes = new MatTableDataSource(data);
      this.nodes.paginator = this.paginator;
      this.nodes.sort = this.sort;
    });
  }
}
