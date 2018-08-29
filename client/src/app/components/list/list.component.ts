import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  myList:object
  item:string
  constructor(private _interlink: InterlinkService, private _router: Router) {
    this.myList = {
      title:"",
      items:[]
    }
    this.item = ""
  }

  ngOnInit() {
    this._interlink.authenticate((data) => {
      if (data) {
        this.myList = this._interlink.list;
      } else {
        this._router.navigate([''])
      }
    });
  }
}
