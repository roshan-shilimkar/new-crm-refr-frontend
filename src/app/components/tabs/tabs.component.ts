import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  title = 'Refr';
  infocus = false;
  showMenu = false;

  navRoutes = [
    { tit: 'Dashboard', link: '/Dash' },
    { tit: 'Merchants', link: '/merchant' },
    { tit: 'Users', link: '/users' },
    { tit: 'Orders', link: '/orders' },
    { tit: 'Campaigns', link: '/campaigns' },
    { tit: 'Burn', link: '/burn' },
    { tit: 'Redeem Request', link: '/Redeemreq' },
    { tit: 'Transactions', link: '/transaction' },
    { tit: 'Notification', link: '/Notification' },
    { tit: 'Web Site Enquiry', link: '/websiteform' }
  ];

  constructor(
    public router: Router,

  ) { } 

  ngOnInit(): void { }
}
