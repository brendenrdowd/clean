(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_log_reg_log_reg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/log-reg/log-reg.component */ "./src/app/components/log-reg/log-reg.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: "",
        pathMatch: 'full',
        component: _components_log_reg_log_reg_component__WEBPACK_IMPORTED_MODULE_2__["LogRegComponent"]
    },
    {
        path: "dashboard",
        pathMatch: 'full',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: "list",
        component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Clean';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _components_log_reg_log_reg_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/log-reg/log-reg.component */ "./src/app/components/log-reg/log-reg.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _interlink_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./interlink.service */ "./src/app/interlink.service.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//material components









//my components






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_log_reg_log_reg_component__WEBPACK_IMPORTED_MODULE_15__["LogRegComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_19__["ListComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"]
            ],
            providers: [_interlink_service__WEBPACK_IMPORTED_MODULE_18__["InterlinkService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type='text']{\r\n    text-align:right;\r\n}"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"paper container\">\r\n  <!-- add a list deletion confirmation warning -->\r\n  <!-- Need to fix navbar glitch -->\r\n  <!-- error catch -->\r\n  <div *ngIf=\"title.invalid && (title.dirty || title.touched)\">\r\n    <div *ngIf=\"title.errors.minlength\" class=\"alert alert-danger\">\r\n      List names must be at least 3 characters!\r\n    </div>\r\n    <div *ngIf=\"title.errors.maxlength\" class=\"alert alert-danger\">\r\n      List names cannot be more than 55 characters!\r\n    </div>\r\n  </div>\r\n\r\n  <!-- list creation and list of lists -->\r\n  <table class=\"table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <td align=\"center\"><i class=\"fas fa-plus fa-3x flex-middle fade\"></i></td>\r\n\r\n        <td>\r\n          <form (submit)=\"newList()\">\r\n            <div class=\"form-group\">\r\n              <input class=\"input-block\" required minlength=\"3\" maxlength=\"55\" placeholder=\"New List\" type=\"text\" id=\"newList\" name=\"title\"\r\n                [(ngModel)]=\"list.title\" #title=\"ngModel\">\r\n              <input type=\"submit\" class=\"hideSubmit\">\r\n            </div>\r\n          </form>\r\n        </td>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tr *ngFor=\"let list of myLists\" class=\"pointer title\">\r\n      <td class=\"showClose danger\"><i class=\"fas fa-times hideClose\" (click)=\"deleteList(list._id)\"></i></td>\r\n      <!-- replace the deleteList function with a modal that asks to confirm and offers the function instead -->\r\n      <td (click)=\"viewList(list._id)\">{{list.title}}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interlink_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interlink.service */ "./src/app/interlink.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_interlink, _router) {
        this._interlink = _interlink;
        this._router = _router;
        // allLists
        this.myLists = [];
        this.list = {
            title: ""
        };
    }
    DashboardComponent.prototype.newList = function () {
        var _this = this;
        if (this.list['title'].length > 2) {
            this._interlink.newList(this.list, function (res) {
                //can skip this callback and do it all in service, will clean up later
                _this.list = res.json();
                _this.viewList(_this.list['_id']);
            });
        }
    };
    DashboardComponent.prototype.viewList = function (id) {
        this._interlink.viewList(id);
    };
    DashboardComponent.prototype.deleteList = function (id) {
        var _this = this;
        this._interlink.deleteList(id, function () {
            _this._interlink.list = null;
            _this._interlink.getLists(function () {
                _this.myLists = _this._interlink.myLists;
            });
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._interlink.authenticate(function (data) {
            if (data) {
                _this.myLists = [];
                _this._interlink.list = null;
                _this._interlink.getLists(function () {
                    _this.myLists = _this._interlink.myLists;
                });
            }
            else {
                _this._router.navigate(['']);
            }
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_interlink_service__WEBPACK_IMPORTED_MODULE_2__["InterlinkService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    background-color: #f5f5f5;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <span class=\"text-muted\">© 2018 Brenden Dowd. Built using the <a href=\"https://cli.angular.io/\">Angular CLI</a> and <a\r\n        href=\"https://www.getpapercss.com/\">PaperCSS</a> </span>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-hover tbody tr:hover {\r\n    color: green;\r\n}\r\ninput[type='text']{\r\n    text-align:right;\r\n}\r\n.red{\r\n    color:red;\r\n}\r\n.crossed{\r\n    text-decoration: line-through;\r\n    opacity: 0.5;\r\n}"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"paper container\">\r\n  <h3>{{myList.title}}</h3>\r\n  <div *ngIf=\"title.invalid && (title.dirty || title.touched)\">\r\n    <div *ngIf=\"title.errors.minlength\" class=\"alert alert-danger\">\r\n      Item names must be at least 3 characters!\r\n    </div>\r\n    <div *ngIf=\"title.errors.maxlength\" class=\"alert alert-danger\">\r\n      Item names cannot be more than 55 characters!\r\n    </div>\r\n  </div>\r\n  <table class=\"table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <td align=\"center\"><i class=\"fas fa-plus fa-3x flex-middle fade\"></i></td>\r\n\r\n        <td>\r\n          <form (submit)=\"newItem()\">\r\n            <div class=\"form-group\">\r\n              <input class=\"input-block\" required minlength=\"3\" maxlength=\"55\" placeholder=\"New Item\" type=\"text\" id=\"newItem\" name=\"title\"\r\n                [(ngModel)]=\"item.title\" #title=\"ngModel\">\r\n              <input type=\"submit\" class=\"hideSubmit\">\r\n            </div>\r\n          </form>\r\n        </td>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngIf=\"listItems\">\r\n      <tr *ngFor=\"let item of listItems\" class=\"pointer title\">\r\n        <td class=\"showClose\"><i class=\"fas fa-times red hideClose\" (click)=\"deleteItem(item._id)\"></i></td>\r\n        <!-- replace the deleteList function with a modal that asks to confirm and offers the function instead -->\r\n        <td *ngIf=\"item.checked\" class=\"crossed\" (click)=\"check(item._id)\">{{item.title}}</td>\r\n        <td *ngIf=\"!item.checked\" (click)=\"check(item._id)\">{{item.title}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interlink_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interlink.service */ "./src/app/interlink.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(_interlink, _router, activatedRoute) {
        this._interlink = _interlink;
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.myList = {
            title: "",
            items: []
        };
        this.item = {
            title: "",
            checked: Boolean,
            _list: ""
        };
    }
    ListComponent.prototype.newItem = function () {
        var _this = this;
        if (this.item['title'].length > 2) {
            this._interlink.newItem(this.item, function (res) {
                _this.item['title'] = "";
                _this._interlink.updateList(function () {
                    _this.myList = _this._interlink.list;
                    _this.listItems = _this.myList['items'];
                });
            });
        }
    };
    ListComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._interlink.deleteItem(id, function () {
            _this._interlink.updateList(function () {
                _this.myList = _this._interlink.list;
                _this.listItems = _this.myList['items'];
            });
        });
    };
    ListComponent.prototype.check = function (id) {
        var _this = this;
        this._interlink.check(id, function () {
            _this._interlink.updateList(function () {
                _this.myList = _this._interlink.list;
                _this.listItems = _this.myList['items'];
            });
        });
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._interlink.authenticate(function (data) {
            if (data) {
                _this.myList = _this._interlink.list;
                _this.item['_list'] = _this._interlink.list['_id'];
                _this.listItems = _this.myList['items'];
            }
            else {
                _this._router.navigate(['']);
            }
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_interlink_service__WEBPACK_IMPORTED_MODULE_1__["InterlinkService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/log-reg/log-reg.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/log-reg/log-reg.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".greeting{\r\n    margin-top:30px;\r\n}"

/***/ }),

/***/ "./src/app/components/log-reg/log-reg.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/log-reg/log-reg.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"paper container greeting\">\r\n  <h2 class=\"display-3\">Welcome to Clean</h2>\r\n  <p>Clean is a simple productivity manager designed to make your life easier. </p>\r\n  <p>Create an account below to get started!</p>\r\n  <hr>\r\n\r\n  <div class=\"errorfield\">\r\n    <div *ngIf=\"errorMessages.length >= 1\" class=\"alert alert-danger\">\r\n      <div *ngFor=\"let error of errorMessages\">\r\n        <p>{{error}}</p>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"name.errors.required\">\r\n        First Name is required!\r\n      </div>\r\n      <div *ngIf=\"name.errors.minlength\">\r\n        First Name must be at least 2 characters long!\r\n      </div>\r\n      <div *ngIf=\"name.errors.maxlength\">\r\n        First Name cannot be more than 15 characters long!\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"newEmail.invalid && (newEmail.dirty || newEmail.touched)\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"newEmail.errors.required\">\r\n        Email is required!\r\n      </div>\r\n      <div *ngIf=\"newEmail.errors.pattern\">\r\n        Please enter a valid email!\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"newPassword.invalid && (newPassword.dirty || newPassword.touched)\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"newPassword.errors.required\">\r\n        Password is required!\r\n      </div>\r\n      <div *ngIf=\"newPassword.errors.pattern\">\r\n        Password must be at least 8 characters long and contain one Uppercase, one lowercase and one numeric character!\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"confirm.invalid && (confirm.dirty || confirm.touched)\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"confirm.errors.required\">\r\n        You need to confirm your password!\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <form (submit)=\"register()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">What's Your Name?</label>\r\n      <input type=\"text\" class=\"input-block\" required minlength=\"2\" maxlength=\"15\" id=\"name\" name=\"name\" [(ngModel)]=\"newUser.name\"\r\n        #name=\"ngModel\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"newEmail\">How About An Email?</label>\r\n      <input type=\"text\" class=\"input-block\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,})+$\" id=\"newEmail\" name=\"newEmail\"\r\n        [(ngModel)]=\"newUser.email\" #newEmail=\"ngModel\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"newPasssword\">Pick a Password</label>\r\n      <input type=\"password\" class=\"input-block\" required pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" id=\"newPassword\" name=\"newPassword\"\r\n        [(ngModel)]=\"newUser.password\" #newPassword=\"ngModel\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"confirm\">Let's Confirm It</label>\r\n      <input type=\"password\" class=\"input-block\" required id=\"confirm\" name=\"confirm\" [(ngModel)]=\"newUser.confirm\" #confirm=\"ngModel\">\r\n    </div>\r\n    <input type=\"submit\" value=\"Register\" class=\"paper-btn margin\">\r\n  </form>\r\n  <div class=\"row flex-spaces child-borders\">\r\n    <label class=\"paper-btn margin\" for=\"login\">Already a user? Log In!</label>\r\n  </div>\r\n\r\n  <!-- login modal -->\r\n  <input class=\"modal-state\" id=\"login\" type=\"checkbox\">\r\n  <div class=\"modal\">\r\n    <label class=\"modal-bg\" for=\"login\"></label>\r\n    <div class=\"modal-body\">\r\n      <label class=\"btn-close\" for=\"login\">X</label>\r\n      <h4 class=\"modal-title\">Log In!</h4>\r\n      <div *ngIf=\"errorMessages.length >= 1\" class=\"alert alert-danger\">\r\n          <div *ngFor=\"let error of errorMessages\">\r\n            <p>{{error}}</p>\r\n          </div>\r\n        </div>\r\n      <form (submit)=\"login()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">What's Your Email?</label>\r\n          <input type=\"email\" class=\"input-block\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"passsword\">What's Your Password?</label>\r\n          <input type=\"password\" class=\"input-block\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\">\r\n        </div>\r\n        <input type=\"submit\" value=\"Log In\" class=\"pointer paper-btn margin\">\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <hr>\r\n  <br>\r\n  <span class=\"text-muted\">© 2018 Brenden Dowd. Built using the <a href=\"https://cli.angular.io/\">Angular CLI</a> and <a\r\n      href=\"https://www.getpapercss.com/\">PaperCSS</a> </span>\r\n\r\n</div> <!-- end container-->"

/***/ }),

/***/ "./src/app/components/log-reg/log-reg.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/log-reg/log-reg.component.ts ***!
  \*********************************************************/
/*! exports provided: LogRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogRegComponent", function() { return LogRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interlink_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interlink.service */ "./src/app/interlink.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogRegComponent = /** @class */ (function () {
    function LogRegComponent(_interlink, _router) {
        this._interlink = _interlink;
        this._router = _router;
        this.errorMessages = [];
        this.loginErrors = [];
        this.user = {
            email: '',
            password: ''
        };
        this.newUser = {
            name: '',
            email: '',
            password: '',
            confirm: '',
        };
    }
    LogRegComponent.prototype.login = function () {
        var _this = this;
        this.errorMessages = [];
        this.loginErrors = [];
        this._interlink.login(this.user, function () {
            _this.errorMessages = _this._interlink.errorArr;
            _this.errorMessages.length > 0 ? _this._router.navigate(['']) : _this._router.navigate(['dashboard']);
        });
    };
    LogRegComponent.prototype.register = function () {
        var _this = this;
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
        }
        else {
            this._interlink.register(this.newUser, function () {
                _this.errorMessages = _this._interlink.errorArr;
                _this.errorMessages.length > 0 ? _this._router.navigate(['']) : _this._router.navigate(['dashboard']);
            });
        }
    };
    LogRegComponent.prototype.ngOnInit = function () {
    };
    LogRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-reg',
            template: __webpack_require__(/*! ./log-reg.component.html */ "./src/app/components/log-reg/log-reg.component.html"),
            styles: [__webpack_require__(/*! ./log-reg.component.css */ "./src/app/components/log-reg/log-reg.component.css")]
        }),
        __metadata("design:paramtypes", [_interlink_service__WEBPACK_IMPORTED_MODULE_1__["InterlinkService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogRegComponent);
    return LogRegComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@media only screen and (max-width: 770px) {\r\n    .nav-brand{\r\n        display:none;\r\n    }\r\n    .paper.container{\r\n        margin-top:100px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"border fixed split-nav\">\r\n  <div class=\"nav-brand\">\r\n    <h3><a [routerLink]=\"['/dashboard']\">Lets get some work done, {{currentUser.name}}!</a></h3>\r\n  </div>\r\n  <div class=\"collapsible\">\r\n    <input id=\"collapsible1\" type=\"checkbox\" name=\"collapsible1\">\r\n    <button>\r\n      <label for=\"collapsible1\">\r\n        <div class=\"bar1\"></div>\r\n        <div class=\"bar2\"></div>\r\n        <div class=\"bar3\"></div>\r\n      </label>\r\n    </button>\r\n    <div class=\"collapsible-body\">\r\n      <ul class=\"inline\">\r\n        <li><a href=\"/logout\">Log Out</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interlink_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interlink.service */ "./src/app/interlink.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_interlink) {
        this._interlink = _interlink;
        this.currentUser = {
            name: ""
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._interlink.authenticate(function () {
            _this.currentUser = _this._interlink.currentUser;
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_interlink_service__WEBPACK_IMPORTED_MODULE_1__["InterlinkService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/interlink.service.ts":
/*!**************************************!*\
  !*** ./src/app/interlink.service.ts ***!
  \**************************************/
/*! exports provided: InterlinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterlinkService", function() { return InterlinkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InterlinkService = /** @class */ (function () {
    function InterlinkService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.errorArr = [];
        this.myLists = [];
        this.listArr = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.list = JSON.parse(localStorage.getItem("list"));
    }
    InterlinkService.prototype.login = function (user, cb) {
        var _this = this;
        this.errorMessage = null;
        this.errorArr = [];
        this._http.post('login', user).subscribe(function (res) {
            if (res.json() == null) {
                _this.errorMessage = "You have entered an invalid username or password";
                _this.errorArr.push(_this.errorMessage);
            }
            cb(res);
        });
    };
    InterlinkService.prototype.register = function (user, cb) {
        var _this = this;
        this.errorMessage = null;
        this.errorArr = [];
        this._http.post('/register', user).subscribe(function (res) {
            if (res.json() == null) {
                _this.errorMessage = "The username or email you've entered already exists, please log in";
                _this.errorArr.push(_this.errorMessage);
            }
            cb(res);
        });
    };
    InterlinkService.prototype.newList = function (list, cb) {
        this._http.post('/newList', list).subscribe(function (res) {
            cb(res);
        });
    };
    InterlinkService.prototype.getLists = function (cb) {
        var _this = this;
        this._http.get('/getLists').subscribe(function (res) {
            _this.myLists = res.json();
            _this.listArr.next(_this.myLists);
            cb();
        });
    };
    InterlinkService.prototype.viewList = function (id) {
        var _this = this;
        this._http.get('/viewList/' + id).subscribe(function (res) {
            _this.list = res.json();
            localStorage.setItem("list", JSON.stringify(_this.list));
            _this._router.navigate(['list']);
        });
    };
    InterlinkService.prototype.deleteList = function (id, cb) {
        var _this = this;
        this._http.get('/deleteList/' + id).subscribe(function (res) {
            _this.myLists = [];
            cb();
        });
    };
    InterlinkService.prototype.updateList = function (cb) {
        var _this = this;
        // console.log("updateList-list:", this.list)
        this._http.get('/viewList/' + this.list['_id']).subscribe(function (res) {
            _this.list = res.json();
            localStorage.setItem("list", JSON.stringify(_this.list));
            cb();
        });
    };
    InterlinkService.prototype.newItem = function (item, cb) {
        this._http.post('/newItem', item).subscribe(function (res) {
            cb(res.json());
        });
    };
    InterlinkService.prototype.deleteItem = function (id, cb) {
        this._http.get('/deleteItem/' + id).subscribe(function (res) {
            cb();
        });
    };
    InterlinkService.prototype.check = function (id, cb) {
        this._http.get('/check/' + id).subscribe(function (res) {
            cb();
        });
    };
    InterlinkService.prototype.authenticate = function (cb) {
        var _this = this;
        this._http.get('/authenticate').subscribe(function (res) {
            _this.currentUser = res.json();
            cb(res.json());
        });
    };
    InterlinkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InterlinkService);
    return InterlinkService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\brend\coding\projects\todolist\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map