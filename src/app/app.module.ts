import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './components/tabs/tabs.component';
import { MatmodulesModule } from './materialmodules/matmodules/matmodules.module';
import { OrdersComponent } from './components/tabs/orders/orders.component';
import { DashboardComponent } from './components/tabs/dashboard/dashboard.component';
import { MerchantsComponent } from './components/tabs/merchants/merchants.component';
import { MerchantsProfileComponent } from './components/tabs/merchants/merchants-profile/merchants-profile.component';
import { UsersComponent } from './components/tabs/users/users.component';
import { UserProfileComponent } from './components/tabs/users/user-profile/user-profile.component';
import { RedeemreqComponent } from './components/tabs/redeemreq/redeemreq.component';
import { TransactionComponent } from './components/tabs/transaction/transaction.component';
import { TransactionDetailsComponent } from './components/tabs/transaction-details/transaction-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  provideFirebaseApp,
  getApp,
  initializeApp,
  FirebaseApp,
} from '@angular/fire/app';
import { provideAuth, initializeAuth } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  enableIndexedDbPersistence,
  connectFirestoreEmulator,
} from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  indexedDBLocalPersistence,
  browserPopupRedirectResolver,
} from 'firebase/auth';
import { MatRadioModule } from '@angular/material/radio';
import { NotificationComponent } from './components/tabs/notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { WebsiteformComponent } from './components/tabs/websiteform/websiteform.component';
import { QrViewerComponent } from './components/tabs/merchants/merchants-profile/qr-viewer/qr-viewer.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NodemanagementComponent } from './components/clientside/nodemanagement/nodemanagement.component';
import { AddnodeComponent } from './components/clientside/nodemanagement/addnode/addnode.component';

// npm select
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    OrdersComponent,
    DashboardComponent,
    MerchantsComponent,
    MerchantsProfileComponent,
    UsersComponent,
    UserProfileComponent,
    RedeemreqComponent,
    TransactionComponent,
    WebsiteformComponent,
    TransactionDetailsComponent,
    QrViewerComponent,
    NotificationComponent,
    NodemanagementComponent,
    AddnodeComponent,
  ],
  imports: [
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatmodulesModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    // 3. Initialize
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    //provideFirestore(() => getFirestore()),
    provideFirestore(() => {
      const firestore = getFirestore();
      //connectFirestoreEmulator(firestore, 'localhost', 8080);
      enableIndexedDbPersistence(firestore);
      return firestore;
    }),
    provideAuth(() =>
      initializeAuth(getApp(), {
        persistence: indexedDBLocalPersistence,
        popupRedirectResolver: browserPopupRedirectResolver,
      })
    ),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}
