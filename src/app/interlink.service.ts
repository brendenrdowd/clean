import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterlinkService {
  errorMessage: string
  errorArr: string[] = []
  currentUser: object
  list: object
  myLists: object[] = []
  listArr: BehaviorSubject<any[]> = new BehaviorSubject([])
  constructor(private _http: Http, private _router: Router) {
    this.list = JSON.parse(localStorage.getItem("list"));
  }

  login(user, cb) {
    this.errorMessage = null;
    this.errorArr = [];
    this._http.post('login', user).subscribe((res) => {
      if (res.json() == null) {
        this.errorMessage = "You have entered an invalid username or password";
        this.errorArr.push(this.errorMessage)
      }
      cb(res)
    })
  }

  register(user, cb) {
    this.errorMessage = null;
    this.errorArr = [];
    this._http.post('/register', user).subscribe((res) => {
      if (res.json() == null) {
        this.errorMessage = "The username or email you've entered already exists, please log in";
        this.errorArr.push(this.errorMessage)
      }
      cb(res)
    })
  }

  newList(list, cb) {
    this._http.post('/newList', list).subscribe((res) => {
      cb(res)
    })
  }

  getLists(cb) {
    this._http.get('/getLists').subscribe((res) => {
      this.myLists = res.json();
      this.listArr.next(this.myLists);
      cb();
    })
  }

  viewList(id) {
    this._http.get('/viewList/' + id).subscribe((res) => {
      this.list = res.json();
      localStorage.setItem("list", JSON.stringify(this.list));
      this._router.navigate(['list'])
    })
  }

  deleteList(id, cb) {
    this._http.get('/deleteList/' + id).subscribe((res) => {
      this.myLists = [];
      cb()
    })
  }

  updateList(cb) {
    // console.log("updateList-list:", this.list)
    this._http.get('/viewList/' + this.list['_id']).subscribe((res) => {
      this.list = res.json();
      localStorage.setItem("list", JSON.stringify(this.list));
      cb()
    })
  }

  newItem(item, cb) {
    this._http.post('/newItem', item).subscribe((res) => {
      cb(res.json())
    })
  }

  
  deleteItem(id, cb) {
    this._http.get('/deleteItem/' + id).subscribe((res) => {
      cb();
    })
  }
  
  check(id, cb) {
    this._http.get('/check/' + id).subscribe((res) => {
      cb()
    })
  }


  authenticate(cb) {
    this._http.get('/authenticate').subscribe((res) => {
      this.currentUser = res.json()
      cb(res.json())
    })
  }

}
