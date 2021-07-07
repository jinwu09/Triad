import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  accountId: any;
  isLoggedIn = false
  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem("account_id")){
      this.accountId = sessionStorage.getItem("account_id")
      this.isLoggedIn = true

    }else{
      this.isLoggedIn = false
    }
  }


  onLogOut(){
    sessionStorage.removeItem("account_id")
    this.isLoggedIn = false
  }
}
