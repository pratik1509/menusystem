import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  menus = [];

  constructor (http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Menu[]>(baseUrl + 'api/Menu/GetMenus').subscribe(result => {
      this.menus = result;
    }, error => console.error(error));
  }

  ngOnInit () {
    
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

interface Menu {
  name: string;
  path: string;
}
