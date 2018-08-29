import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {
  user: object
  newUser: object
  errorMessages: string[] = []
  loginErrors: string[] = []
  constructor(private _interlink: InterlinkService, private _router: Router) {
    this.user = {
      email:'',
      password:''
    }
    this.newUser = {
      name:'',
      email:'',
      password:'',
      confirm:'',
    }
  }

  login(){
    this.errorMessages = [];
    this.loginErrors = [];
    this._interlink.login(this.user,()=>{
      this.errorMessages = this._interlink.errorArr;
      this.errorMessages.length > 0 ? this._router.navigate(['']) : this._router.navigate(['dashboard']);
    })
  }
  
  register() {
    this.errorMessages = [];
    if (this.newUser['name'] == '' || this.newUser['email'] == '' || this.newUser['password'] == '') {
      this._interlink.errorArr.push("Fields cannot be blank!");
      this.errorMessages = this._interlink.errorArr;
    }
    if (this.newUser['confirm'] != this.newUser['password']) {
      this._interlink.errorArr.push("passwords do not match!");
      this.errorMessages = this._interlink.errorArr;
    }
    if (this.errorMessages.length > 0) {
      this._router.navigate(['']);
    } else {
      this._interlink.register(this.newUser, () => {
        this.errorMessages = this._interlink.errorArr;
        this.errorMessages.length > 0 ? this._router.navigate(['']) : this._router.navigate(['dashboard']);
      })
    }
  }

  ngOnInit() {
  }

}
