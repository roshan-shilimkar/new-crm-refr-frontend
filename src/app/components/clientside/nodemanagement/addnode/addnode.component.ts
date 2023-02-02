import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import {
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AuthService } from 'src/app/auth.service';


// firebase
import {
  collection,
  CollectionReference,
  addDoc,
} from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-addnode',
  templateUrl: './addnode.component.html',
  styleUrls: ['./addnode.component.scss'],
})
export class AddnodeComponent implements OnInit {
  usedInList: any = [];
  usedInListItems: any = [];
  usedInSetting!: IDropdownSettings;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings!: IDropdownSettings;
  searchvalue: any;
  valuetype: number = 2;
  Valuearr: Array<any> = [];

  ParaArr: Array<any> = [
    {
      Title: 'Mumbai',
      titvalue: 'mumbai',
    },
    {
      Title: 'New Mumbai',
      titvalue: 'kalyan',
    }
  ];

  cities: Array<any> = [
    {
      Title: 'Select area',
      titvalue: '',
    },
    {
      Title: 'Vileparle West 400056',
      titvalue: 'Vileparle West 400056',
    },
    {
      Title: 'Santacruz East 400056',
      titvalue: 'Santacruz East 400056',
    },
  ];

  // firebase
  @ViewChild('nodeForm') nodeForm?: NgForm;

  constructor(
    public as: ApiserviceService,
    public rs: Router,
    public fb: FormBuilder,
    public ar: ActivatedRoute,
    public auth: AuthService,
    private firestore: Firestore
  ) {
    // firebase
  }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, Node_area_name: 'Vileparle East', node_pincode:'400057' },
      { item_id: 2, Node_area_name: 'Santacruz East', node_pincode:'400056' },
      { item_id: 3, Node_area_name: 'Santacruz East', node_pincode:'400056' },
      { item_id: 4, Node_area_name: 'Vileparle East', node_pincode:'400057' },
      { item_id: 5, Node_area_name: 'Santacruz East', node_pincode:'400056' },
      { item_id: 6, Node_area_name: 'Santacruz East', node_pincode:'400056' },
    ];
    this.usedInList = [
      { item_id: 1, item_text: 'Brands in your neighbourhood' },
      { item_id: 2, item_text: 'New store in your hood' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
    };
    this.usedInSetting = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onUsedIn(item: any) {
    console.log(item);
  }
  onUsed(items: any) {
    console.log(items);
  }

  async execute(nodeData: any) {
    console.log(nodeData, 'exe');

    const manageNode: CollectionReference = collection(
      this.firestore,
      `${'node_manager'}`
    );

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(this.firestore, 'node_manager'), {
      city: nodeData.city,
      name: nodeData.name,
      areas: nodeData.areas,
      used_in: nodeData.used_in,
      created_at: new Date(),
      updated_at: new Date(),
    });
    console.log('Document written with ID: ', docRef.id);
  }
}
