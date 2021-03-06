import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { ViewCompileResult } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  myList:object
  item:object
  listItems:object[]
  constructor(private _interlink: InterlinkService, private _router: Router, private activatedRoute: ActivatedRoute) {
    this.myList = {
      title:"",
      items:[]
    }
    this.item = {
      title: "",
      checked: Boolean,
      _list: ""
    }
  }
  
  newItem(){
    if(this.item['title'].length > 2){
      this._interlink.newItem(this.item,(res)=>{
        this.item['title'] = ""
        this._interlink.updateList(()=>{
          this.myList = this._interlink.list;
          this.listItems = this.myList['items'];
        })
      })
    }
  }

  deleteItem(id){
    this._interlink.deleteItem(id,()=>{
        this._interlink.updateList(()=>{
          this.myList = this._interlink.list;
          this.listItems = this.myList['items'];
        })
    });
  }

  check(id){
    this._interlink.check(id,()=>{
      this._interlink.updateList(()=>{
        this.myList = this._interlink.list;
        this.listItems = this.myList['items'];
      })
    })
  }
  
  ngOnInit() {
    this._interlink.authenticate((data) => {
      if (data) {
        this.myList = this._interlink.list;
        this.item['_list'] = this._interlink.list['_id']
        this.listItems = this.myList['items'];
      } else {
        this._router.navigate([''])
      }
    });
  }
}
