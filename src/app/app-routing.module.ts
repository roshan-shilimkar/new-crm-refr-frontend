import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnodeComponent } from './components/clientside/nodemanagement/addnode/addnode.component';
import { NodemanagementComponent } from './components/clientside/nodemanagement/nodemanagement.component';
import { DashboardComponent } from './components/tabs/dashboard/dashboard.component';
import { MerchantsProfileComponent } from './components/tabs/merchants/merchants-profile/merchants-profile.component';
import { MerchantsComponent } from './components/tabs/merchants/merchants.component';
import { NotificationComponent } from './components/tabs/notification/notification.component';
import { OrdersComponent } from './components/tabs/orders/orders.component';
import { RedeemreqComponent } from './components/tabs/redeemreq/redeemreq.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TransactionComponent } from './components/tabs/transaction/transaction.component';
import { UserProfileComponent } from './components/tabs/users/user-profile/user-profile.component';
import { UsersComponent } from './components/tabs/users/users.component';
import { WebsiteformComponent } from './components/tabs/websiteform/websiteform.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: '/Dash', pathMatch: 'full' },
      { path: 'websiteform', component: WebsiteformComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'Dash', component: DashboardComponent },
      { path: 'merchant', component: MerchantsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'merchantProfile/:id', component: MerchantsProfileComponent },
      { path: 'userProfile/:id', component: UserProfileComponent },
      { path: 'Redeemreq', component: RedeemreqComponent },
      { path: 'transaction', component: TransactionComponent },
      { path: 'Notification', component: NotificationComponent },
      {
        path: 'nodemanage',
        component: NodemanagementComponent,
        // children: [{ path: 'addnode', component: AddnodeComponent }],
      },
      { path: 'addnode', component: AddnodeComponent },
      // { path: 'homescreen', component: HomescreenComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
