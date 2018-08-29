import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: object
  constructor(private _interlink: InterlinkService) {
    this.currentUser = {
      name: ""
    }
  }

  ngOnInit() {
    this._interlink.authenticate(()=>{
      this.currentUser = this._interlink.currentUser;
    })
  }

}
