import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AuthService } from 'src/app/auth.service';
import { take } from 'rxjs';

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
      Title: 'Cities',
      titvalue: '',
    },
    {
      Title: 'Mumbai',
      titvalue: 'mumbai',
    },
    {
      Title: 'Kalyan',
      titvalue: 'kalyan',
    },
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
      { item_id: 1, item_text: 'Vileparle East 400057' },
      { item_id: 2, item_text: 'Santacruz East 400056' },
      { item_id: 3, item_text: 'Santacruz East 400056' },
      { item_id: 4, item_text: 'Vileparle East 400057' },
      { item_id: 5, item_text: 'Santacruz East 400056' },
      { item_id: 6, item_text: 'Santacruz East 400056' },
    ];
    this.usedInList = [
      { item_id: 1, item_text: 'Brands in your neighbourhood' },
      { item_id: 2, item_text: 'New store in your hood' },
    ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    // ];
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

    //

    // const get = doc(this.firestore, 'node_manager', 'z0Tkmf4weXGQNWsvccZD');
    // const docSnap = await getDoc(get);

    // if (docSnap.exists()) {
    //   console.log('Document data:', docSnap.data());
    //   // let x = docSnap.data();
    //   // this.rs.navigate(['/nodemanage'], {
    //   //   queryParams: { x: JSON.stringify(x) },
    //   // });
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log('No such document!');
    // }
  }
}
