import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-addnode',
  templateUrl: './addnode.component.html',
  styleUrls: ['./addnode.component.scss'],
})
export class AddnodeComponent implements OnInit {
  // 2option s

  id?: number;
  name?: string;

  Skill: Array<any> = [
    {
      id: 1,
      name: 'Vileparle East 400057',
    },
    {
      id: 2,
      name: 'Santacruz East 400056',
    },
  ];

  // 2option e

  createNode: FormGroup = new FormGroup({});
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

  area: Array<any> = [
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

  constructor(
    public as: ApiserviceService,
    public rs: Router,
    public fb: FormBuilder,
    public ar: ActivatedRoute
  ) {
    this.as.nodeList = this.as.nodesData;
    this.createNode = this.fb.group({
      id: new Date(),
      cityList: this.fb.control('', [Validators.required]),
      nodeNum: this.fb.control('', [Validators.required]),
      areaList: this.fb.control('', [Validators.required]),
      chip: this.fb.control('', [Validators.required]),
    });
    // update
    this.ar.queryParams.subscribe((data: any) => {
      let value = this.as.nodeList.find((i: any) => i.id == data.id);
      this.edit(value);
    });
  }

  ngOnInit(): void {}

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  excute() {
    let date = new Date();
    this.createNode.value.id = date.toLocaleString();
    let value = { ...this.createNode.value };
    console.log('excute', value);
    this.as.nodeList.push(value);
    this.rs.navigateByUrl('nodemanage');
    localStorage.setItem('nodesData', JSON.stringify(this.as.nodeList));
  }

  edit(item: any) {
    let value = { ...item };
    this.createNode.patchValue(value);
  }

  update() {
    let index = this.as.nodeList.findIndex((i: any) => {
      i.id == this.createNode.value.id;
    });
    let value = { ...this.createNode.value };
    this.as.nodeList[index] = value;
    console.log('update', (this.as.nodeList[index] = value));
    this.rs.navigateByUrl('nodemanage');
  }
}
