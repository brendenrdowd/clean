import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterlinkService } from '../../interlink.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser:object
  list:object
  // allLists
  myLists:object[]=[]
  constructor(private _interlink: InterlinkService, private _router: Router) {
    this.list = {
      title:""
    }
  }

  newList(){
    if(this.list['title'].length > 2){
      this._interlink.newList(this.list,(res)=>{
        //can skip this callback and do it all in service, will clean up later
        this.list = res.json()
        this.viewList(this.list['_id']);
      })
    }
  }
  
  viewList(id){
    this._interlink.viewList(id);
  }

  deleteList(id){
    this._interlink.deleteList(id,()=>{
      this._interlink.list = null;
        this._interlink.getLists(()=>{
          this.myLists = this._interlink.myLists;
        })
    });
  }

  ngOnInit() {
    this._interlink.authenticate((data)=>{
      if(data){
        this.myLists = [];
        this._interlink.list = null;
        this._interlink.getLists(()=>{
          this.myLists = this._interlink.myLists;
        })
      } else {
        this._router.navigate([''])
      }
    });
  }

}
