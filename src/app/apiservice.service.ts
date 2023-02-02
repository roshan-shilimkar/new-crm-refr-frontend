import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  collectionGroup,
  doc,
  getDoc,
  docData,
  setDoc,
  updateDoc,
  addDoc,
  query,
  limit,
  orderBy,
  where,
  FieldValue,
  increment,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  DocumentReference,
  CollectionReference,
  onSnapshot,
  startAt,
  endAt,
  getDocs,
  startAfter,
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';

import { Storage, ref, uploadString } from '@angular/fire/storage';
import { getDownloadURL } from '@firebase/storage';
//import { Hype, Product } from '../universal.model';
import { deleteDoc, FieldPath, WhereFilterOp } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(
    private firestore: Firestore,
    private fireStorage: Storage,
    private angularFirestore: AngularFirestore
  ) { }

  get getServerTimestamp() {
    return serverTimestamp;
  }

  getuserdata(id: any) {
    console.log(typeof id);
    const catData: CollectionReference = collection(this.firestore, 'users');
    const qu = query(catData, where('uid', '==', id));
    return collectionData(qu);
  }

  getUserList(
    c: number,
    getall: boolean,
    Para?: any,
    operator?: any,
    value?: any
  ) {
    const catData: CollectionReference = collection(this.firestore, 'users');
    let Parametere: WhereFilterOp = Para;
    let conditions: WhereFilterOp = operator;
    let orderbyvalue = 'acBalC';
    if (
      operator == '!==' ||
      operator == '>' ||
      operator == '<' ||
      operator == '>=' ||
      operator == '<='
    ) {
      orderbyvalue = Para;
    }

    let qu;
    if (getall == true) {
      if (
        Parametere != undefined &&
        operator != undefined &&
        value != undefined
      ) {
        qu = query(
          catData,
          where(Parametere, conditions, value),
          orderBy(orderbyvalue, 'desc')
        );
      } else {
        qu = query(catData, orderBy(orderbyvalue, 'desc'));
      }
    } else {
      if (
        Parametere != undefined &&
        operator != undefined &&
        value != undefined
      ) {
        qu = query(
          catData,
          where(Parametere, conditions, value),
          orderBy(orderbyvalue, 'desc'),
          limit(c)
        );
      } else {
        qu = query(catData, orderBy(orderbyvalue, 'desc'), limit(c));
      }
    }
    return collectionData(qu);
  }

  getProductList(
    sid: string //, c:number
  ) {
    const catData: CollectionReference = collection(
      this.firestore,
      `${'things'}`
    );
    const qu = query(
      catData,
      //where("ban", "==", false),
      where('sid', '==', sid),
      orderBy('sin', 'asc')
      //limit(c)
    );
    return collectionData(qu);
  }

  getCampaignList(sid: string) {
    console.log('side = ' + sid);
    const catData: CollectionReference = collection(
      this.firestore,
      `${'hypes'}`
    );
    const qu = query(catData, where('sid', '==', sid), orderBy('sin', 'desc'));
    // const qu = query(catData, where('sid', '==', sid), orderBy('sin', 'desc'));
    return collectionData(qu);
  }

  getRecentAddedOrder(
    c: number,
    getall: boolean,
    Para?: any,
    Para1?: any,
    operator?: any,
    operator1?: any,
    value?: any,
    value1?: any
  ) {
    const catData: CollectionReference = collection(
      this.firestore,
      `${'walt'}`
    );
    let Parametere: WhereFilterOp = Para;
    let Parametere1: WhereFilterOp = Para1;
    let conditions: WhereFilterOp = operator;
    // let conditions1: WhereFilterOp = operator1;

    var qu;
    let orderbyvalue = 'sin';

    if (
      operator == '!==' ||
      operator == '>' ||
      operator == '<' ||
      operator == '>=' ||
      operator == '<='
    ) {
      orderbyvalue = Para;
    }
    if (getall == true) {
      if (
        Parametere != undefined &&
        operator != undefined &&
        value != undefined
      ) {
        console.log(1);

        qu = query(
          catData,
          where(Parametere, conditions, value),
          where('type', 'array-contains', 'storeORDER'),
          orderBy(orderbyvalue, 'desc')
        );
      } else {
        console.log('get ALL');
        qu = query(
          catData,
          where('type', 'array-contains', 'storeORDER'),
          orderBy(orderbyvalue, 'desc')
        );
      }
    } else {
      if (
        Parametere != undefined &&
        operator != undefined &&
        value != undefined
      ) {
        console.log('parameter = ' + Parametere);
        console.log('operator = ' + operator);
        console.log('value = ' + value);
        console.log('orderbyvalue = ' + orderbyvalue);

        qu = query(
          catData,
          where(Parametere, conditions, value),
          where('type', 'array-contains', 'storeORDER'),
          orderBy(orderbyvalue, 'desc'),
          // startAfter()
          limit(c)
        );
      } else {
        console.log(4);

        qu = query(
          catData,
          where('type', 'array-contains', 'storeORDER'),
          orderBy(orderbyvalue, 'desc'),
          limit(c)
        );
      }
    }

    return collectionData(qu);
  }

  getRecentStores(
    c: number,
    getall: boolean,
    Para?: any,
    operator?: any,
    value?: any
  ) {
    console.log('c = ' + c);
    console.log('getall = ' + getall);
    console.log('para = ' + Para);
    console.log('operator = ' + operator);
    console.log('Value ' + value);

    const catData: CollectionReference = collection(this.firestore, 'shops');
    let Parametere: WhereFilterOp = Para;
    let conditions: WhereFilterOp = operator;
    let qu;
    let orderbyvalue = 'sin';
    if (
      operator == '!==' ||
      operator == '>' ||
      operator == '<' ||
      operator == '>=' ||
      operator == '<='
    ) {
      orderbyvalue = Para;
    }

    if (getall == true) {
      if (
        Parametere != undefined &&
        operator != undefined &&
        value != undefined
      ) {
        console.log('1.1');

        qu = query(
          catData,
          where(Parametere, conditions, value),
          orderBy(orderbyvalue, 'desc')
        );
      } else {
        console.log('1.2');
        qu = query(catData, orderBy(orderbyvalue, 'desc'));
      }
    } else {
      if (
        Parametere != undefined &&
        operator != undefined &&
        value != undefined
      ) {
        console.log('2.1');
        qu = query(
          catData,
          where(Parametere, conditions, value),
          orderBy(orderbyvalue, 'desc'),
          limit(c)
        );
      } else {
        console.log('2.2');
        qu = query(catData, orderBy(orderbyvalue, 'desc'), limit(c));
      }
    }
    return collectionData(qu);
  }

  getBurnProductList(c: number) {
    const catData: CollectionReference = collection(
      this.firestore,
      `${'things'}`
    );
    const qu = query(
      catData,
      where('burn', '==', true),
      orderBy('sin', 'asc'),
      limit(c)
    );
    return collectionData(qu);
  }

  getRedemList(
    c: number,
    getall: boolean,
    Para?: any,
    operator?: any,
    value?: any
  ) {
    const catData: CollectionReference = collection(
      this.firestore,
      `${'walt'}`
    );
    let Parametere: WhereFilterOp = Para;
    let conditions: WhereFilterOp = operator;
    let qu;
    let orderbyvalue = 'sin';

    if (
      operator == '!==' ||
      operator == '>' ||
      operator == '<' ||
      operator == '>=' ||
      operator == '<='
    ) {
      orderbyvalue = Para;
    }
    if (getall == true) {
      if (
        Parametere != undefined &&
        operator != undefined &&
        value != undefined
      ) {
        qu = query(
          catData,
          where('type', 'array-contains', 'REDEEM'),
          where(Parametere, conditions, value),
          orderBy(orderbyvalue, 'desc')
        );
      } else {
        qu = query(
          catData,
          where('type', 'array-contains', 'REDEEM'),
          orderBy(orderbyvalue, 'desc')
        );
      }
    } else {
      if (
        Parametere != undefined &&
        operator != undefined &&
        value != undefined
      ) {
        qu = query(
          catData,
          where('type', 'array-contains', 'REDEEM'),
          where(Parametere, conditions, value),
          orderBy(orderbyvalue, 'desc'),
          limit(c)
        );
      } else {
        qu = query(
          catData,
          where('type', 'array-contains', 'REDEEM'),
          orderBy(orderbyvalue, 'desc'),
          limit(c)
        );
      }
    }

    return collectionData(qu);
  }

  getRecentUserTransaction(c: number) {
    const catData: CollectionReference = collection(
      this.firestore,
      `${'walt'}`
    );
    const qu = query(
      catData,
      where('type', 'array-contains', 'clientAc'),
      orderBy('sin', 'desc'),
      limit(c)
    );
    return collectionData(qu);
  }

  getRecentMerchantTransaction(c: number) {
    const catData: CollectionReference = collection(
      this.firestore,
      `${'walt'}`
    );
    const qu = query(
      catData,
      where('type', 'array-contains', 'vendorAc'),
      orderBy('sin', 'desc'),
      limit(c)
    );
    return collectionData(qu);
  }

  getStoreByID(storeID: string) {
    const shopRef = doc(this.firestore, `${'shops'}`, `${storeID}`);
    return getDoc(shopRef);
  }

  // getStoreByID(storeID: string){
  //   const catData: CollectionReference = collection(this.firestore, `${'users'}`)
  //   const qu = query(catData,

  //     where("acBalVr", ">", 0),
  //     // where("storeCam","==",[])
  //     // orderBy("sin", "desc"),
  //   );
  //   return collectionData(qu);
  // }

  getUserByUID(UID: string) {
    const userRef = doc(this.firestore, `${'users'}`, `${UID}`);
    return getDoc(userRef);
  }

  getFormData(c: number, paravalue: string, tab: any) {
    console.log('BILL ME');

    const catData: CollectionReference = collection(
      this.firestore,
      `${'reminders'}`
    );
    if (tab) {
      const qu = query(
        catData,
        orderBy('date', 'desc'),
        where('from', '==', paravalue),
        limit(c)
      );
      return collectionData(qu);
    } else {
      const qu = query(catData, orderBy('date', 'desc'), limit(50));
      return collectionData(qu);
    }
  }

  nodeList: any[] = [];
  nodesData: any[] = JSON.parse(localStorage.getItem('nodesData') || '[]');

  getNodeData() {
    const manageNode: CollectionReference = collection(
      this.firestore,
      `${'node_manager'}`
    );

    const qu = query(manageNode);
    return collectionData(qu);
  }

  updateNodeData(uid: string, nodeData: any) {
    const manageNode: CollectionReference = collection(
      this.firestore,
      `${'node_manager'}`
    );

    const qu = doc(this.firestore, 'node_manager', `${uid}`);

    return updateDoc(qu, {
      name: nodeData.name,
    });
  }
}
