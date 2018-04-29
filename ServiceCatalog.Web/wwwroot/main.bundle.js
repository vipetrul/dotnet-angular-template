webpackJsonp(["main"],{

/***/ "./angular/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./angular/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./angular/src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  Header is here\r\n</header>\r\n<main class=\"container-fluid full-height\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n<footer class=\"container-fluid\">\r\n  <app-footer></app-footer>\r\n</footer>\r\n\r\n"

/***/ }),

/***/ "./angular/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_user_service__ = __webpack_require__("./angular/src/app/core/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.applicationName = 'ServiceCatalog';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.userService.user$.subscribe(function (user) {
            console.log(user);
            _this.startTimer = user.isAuthenticated();
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./angular/src/app/app.component.html"),
            styles: [__webpack_require__("./angular/src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./angular/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appUserServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("./angular/src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./angular/src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./angular/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_user_service__ = __webpack_require__("./angular/src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./angular/src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_order_module__ = __webpack_require__("./angular/src/app/order/order.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










function appUserServiceFactory(userService) {
    return function () { return userService.getUser(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__order_order_module__["a" /* OrderModule */]
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* APP_INITIALIZER */],
                    useFactory: appUserServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_7__core_services_user_service__["a" /* UserService */]],
                    multi: true
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./angular/src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_access_denied_access_denied_component__ = __webpack_require__("./angular/src/app/core/components/access-denied/access-denied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./angular/src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_orders_orders_component__ = __webpack_require__("./angular/src/app/order/orders/orders.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'orders',
        component: __WEBPACK_IMPORTED_MODULE_4__order_orders_orders_component__["a" /* OrdersComponent */]
    },
    {
        path: 'accessDenied',
        component: __WEBPACK_IMPORTED_MODULE_2__core_components_access_denied_access_denied_component__["a" /* AccessDeniedComponent */]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./angular/src/app/core/components/access-denied/access-denied.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/src/app/core/components/access-denied/access-denied.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"text-danger my-4\">Access Denied.</h2>\r\n</div>\r\n"

/***/ }),

/***/ "./angular/src/app/core/components/access-denied/access-denied.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessDeniedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hawkid_login_service__ = __webpack_require__("./angular/src/app/core/services/hawkid-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./angular/src/app/core/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent(loginService, userService) {
        this.loginService = loginService;
        this.userService = userService;
    }
    AccessDeniedComponent.prototype.ngOnInit = function () { };
    AccessDeniedComponent.prototype.login = function () {
        this.loginService.login();
    };
    AccessDeniedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./angular/src/app/core/components/access-denied/access-denied.component.html"),
            styles: [__webpack_require__("./angular/src/app/core/components/access-denied/access-denied.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_hawkid_login_service__["a" /* HawkidLoginService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



/***/ }),

/***/ "./angular/src/app/core/components/app-footer/app-footer.component.css":
/***/ (function(module, exports) {

module.exports = ".copyright {\r\n  bottom: 0;\r\n  right: 0;\r\n  position: fixed;\r\n  background-color: black;\r\n  font-size: 0.8rem;\r\n  color: #ffcd00;\r\n}\r\n.copyright a {\r\n  color: #ffcd00;\r\n  text-decoration: underline;\r\n}\r\n"

/***/ }),

/***/ "./angular/src/app/core/components/app-footer/app-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"copyright text-center py-1 w-100\">\r\n  <div class=\"d-flex flex-wrap justify-content-center\">\r\n    <div class=\"d-inline-flex mr-2\">\r\n      <span class=\"mr-2\">Copyright &copy; {{year}}</span>\r\n      <a href=\"https://uiowa.edu\" title=\"University of Iowa\" target=\"_blank\">University of Iowa</a>\r\n    </div>\r\n    <div class=\"d-none d-sm-inline-flex mx-5\"> </div>\r\n    <div class=\"d-inline-flex\">\r\n      <span class=\"mr-1\">\r\n        <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\r\n      </span>\r\n      <span class=\"mr-1\">E-mail any questions to</span>\r\n      <a href=\"{{emailHref}}\">{{emailLinkText}}</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./angular/src/app/core/components/app-footer/app-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
        this.year = 0;
        this.emailLinkText = 'Business Services IT';
        this.emailDistributionList = 'FBIS-DL_Developer-Parking@iowa.uiowa.edu';
        this.emailSubject = 'Questions about the ServiceCatalog Website';
    }
    AppFooterComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.year = today.getFullYear();
        this.emailHref = "mailto:" + this.emailDistributionList + "?subject=" + this.emailSubject.replace(' ', '%20');
    };
    AppFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./angular/src/app/core/components/app-footer/app-footer.component.html"),
            styles: [__webpack_require__("./angular/src/app/core/components/app-footer/app-footer.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./angular/src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getBaseHref */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./angular/src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_app_footer_app_footer_component__ = __webpack_require__("./angular/src/app/core/components/app-footer/app-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_hawkid_login_service__ = __webpack_require__("./angular/src/app/core/services/hawkid-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_access_denied_access_denied_component__ = __webpack_require__("./angular/src/app/core/components/access-denied/access-denied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_basic_user_role_guard__ = __webpack_require__("./angular/src/app/core/guards/basic-user-role.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_admin_user_role_guard_1__ = __webpack_require__("./angular/src/app/core/guards/admin-user-role.guard.1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_app_errror_handler__ = __webpack_require__("./angular/src/app/core/services/app-errror-handler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











function getBaseHref(platformLocation) {
    return platformLocation.getBaseHrefFromDOM();
}
var CoreModule = /** @class */ (function () {
    function CoreModule(core) {
        if (core) {
            throw new Error('Core Module can only be imported in AppModule.');
        }
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__components_app_footer_app_footer_component__["a" /* AppFooterComponent */], __WEBPACK_IMPORTED_MODULE_7__components_access_denied_access_denied_component__["a" /* AccessDeniedComponent */]],
            providers: [
                {
                    provide: 'baseUri',
                    useFactory: getBaseHref,
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* PlatformLocation */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_10__services_app_errror_handler__["a" /* AppErrorHandler */]
                },
                __WEBPACK_IMPORTED_MODULE_6__services_hawkid_login_service__["a" /* HawkidLoginService */],
                __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__guards_basic_user_role_guard__["a" /* BasicUserRoleGuard */],
                __WEBPACK_IMPORTED_MODULE_9__guards_admin_user_role_guard_1__["a" /* AdminUserRoleGuard */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__components_app_footer_app_footer_component__["a" /* AppFooterComponent */], __WEBPACK_IMPORTED_MODULE_7__components_access_denied_access_denied_component__["a" /* AccessDeniedComponent */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./angular/src/app/core/guards/admin-user-role.guard.1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserRoleGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./angular/src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hawkid_login_service__ = __webpack_require__("./angular/src/app/core/services/hawkid-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminUserRoleGuard = /** @class */ (function () {
    function AdminUserRoleGuard(router, userService, loginService) {
        this.router = router;
        this.userService = userService;
        this.loginService = loginService;
    }
    AdminUserRoleGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        this.loginService.returnUri = state.url;
        return this.userService.user$.map(function (u) {
            if (!u.isAuthenticated()) {
                _this.router.navigateByUrl('/home');
                return false;
            }
            if (!u.isAdmin()) {
                _this.router.navigateByUrl('/accessDenied');
                return false;
            }
            return true;
        });
    };
    AdminUserRoleGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_hawkid_login_service__["a" /* HawkidLoginService */]])
    ], AdminUserRoleGuard);
    return AdminUserRoleGuard;
}());



/***/ }),

/***/ "./angular/src/app/core/guards/basic-user-role.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicUserRoleGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./angular/src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hawkid_login_service__ = __webpack_require__("./angular/src/app/core/services/hawkid-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BasicUserRoleGuard = /** @class */ (function () {
    function BasicUserRoleGuard(router, userService, loginService) {
        this.router = router;
        this.userService = userService;
        this.loginService = loginService;
    }
    BasicUserRoleGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        this.loginService.returnUri = state.url;
        return this.userService.user$.map(function (u) {
            if (!u.isAuthenticated()) {
                _this.router.navigateByUrl('/home');
                return false;
            }
            if (!u.isAuthenticated) {
                _this.router.navigateByUrl('/accessDenied');
                return false;
            }
            return true;
        });
    };
    BasicUserRoleGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_hawkid_login_service__["a" /* HawkidLoginService */]])
    ], BasicUserRoleGuard);
    return BasicUserRoleGuard;
}());



/***/ }),

/***/ "./angular/src/app/core/models/application-user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationUser; });
var ApplicationUser = /** @class */ (function () {
    /**
     * Application User View Model.
     */
    function ApplicationUser(hawkId, originalUser) {
        if (hawkId === void 0) { hawkId = ''; }
        this.hawkId = hawkId;
        this.originalUser = originalUser;
    }
    ApplicationUser.prototype.isAuthenticated = function () {
        return !!this.hawkId;
    };
    ApplicationUser.prototype.isAdmin = function () {
        return false;
    };
    return ApplicationUser;
}());



/***/ }),

/***/ "./angular/src/app/core/services/app-errror-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppErrorHandler = /** @class */ (function (_super) {
    __extends(AppErrorHandler, _super);
    function AppErrorHandler(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(AppErrorHandler.prototype, "toastrService", {
        get: function () {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]);
        },
        enumerable: true,
        configurable: true
    });
    AppErrorHandler.prototype.handleError = function (error) {
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
            this.toastrError(error.error.message, "" + error.statusText);
        }
        else if (error instanceof TypeError) {
            this.toastrError(error.message, 'TypeScript Type error.');
        }
        else if (error instanceof Error) {
            this.toastrError(error.message);
        }
        else {
            this.toastrError('Something unexpected happened...');
        }
        _super.prototype.handleError.call(this, error);
    };
    AppErrorHandler.prototype.toastrError = function (msg, title) {
        this.toastrService.error(msg, title, {
            closeButton: true,
            timeOut: 5000,
            onActivateTick: true
        });
    };
    AppErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], AppErrorHandler);
    return AppErrorHandler;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */]));



/***/ }),

/***/ "./angular/src/app/core/services/hawkid-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HawkidLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var HawkidLoginService = /** @class */ (function () {
    function HawkidLoginService(baseUri) {
        this.baseUri = baseUri;
        this.returnUri = '';
    }
    HawkidLoginService.prototype.login = function () {
        window.location.href = __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */].joinWithSlash(this.baseUri, "account/login?returnUri=" + this.returnUri);
        return null;
    };
    HawkidLoginService.prototype.logout = function () {
        window.location.href = __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */].joinWithSlash(this.baseUri, "account/logout");
        return null;
    };
    HawkidLoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('baseUri')),
        __metadata("design:paramtypes", [String])
    ], HawkidLoginService);
    return HawkidLoginService;
}());



/***/ }),

/***/ "./angular/src/app/core/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_application_user__ = __webpack_require__("./angular/src/app/core/models/application-user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this._user = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_2__models_application_user__["a" /* ApplicationUser */]());
        this.user$ = this._user.asObservable();
    }
    UserService.prototype.getUser = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_2__models_application_user__["a" /* ApplicationUser */]();
        return this.httpClient
            .get('account/user')
            .toPromise()
            .then(function (x) {
            if (x) {
                user = new __WEBPACK_IMPORTED_MODULE_2__models_application_user__["a" /* ApplicationUser */](x.hawkId, x.originalUser);
            }
            _this._user.next(user);
            return user;
        })
            .catch(function () {
            _this._user.next(user);
            return user;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./angular/src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"my-2\">\r\n    Angular CLI\r\n  </h2>\r\n\r\n  <p>\r\n    <a href=\"https://github.com/angular/angular-cli/wiki\">Angular CLI documentation</a>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./angular/src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./angular/src/app/home/home.component.html"),
            styles: [__webpack_require__("./angular/src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./angular/src/app/order/models/create-order-request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderRequest; });
var CreateOrderRequest = /** @class */ (function () {
    function CreateOrderRequest(description) {
        this.description = description;
    }
    CreateOrderRequest.prototype.validate = function () {
        if (this.description.length > 100) {
            return 'Order Description should be less than 100 characters';
        }
        return null;
    };
    return CreateOrderRequest;
}());



/***/ }),

/***/ "./angular/src/app/order/order.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./angular/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("./angular/src/app/order/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_orders_component__ = __webpack_require__("./angular/src/app/order/orders/orders.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__orders_orders_component__["a" /* OrdersComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]],
            exports: []
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ }),

/***/ "./angular/src/app/order/orders/orders.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./angular/src/app/order/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"my-2\">Orders</h2>\r\n\r\n<div class=\"my-4 text-center\" *ngIf=\"showLoading\">\r\n  <loading-bar [size]=\"1.5\">Loading ... </loading-bar>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!showLoading\">\r\n  <div class=\"table-responsive\" *ngIf=\"orders\" style=\"max-height: 600px;\">\r\n    <table class=\"table table-striped table-bordered table-sm\">\r\n      <thead class=\"thead-dark\">\r\n        <th>ID</th>\r\n        <th>Description</th>\r\n        <th>CreatedBy</th>\r\n        <th>CreatedAt</th>\r\n        <th></th>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of orders\">\r\n          <td>{{item.id}}</td>\r\n          <td class=\"text-nowrap\">{{item.description}}</td>\r\n          <td>{{item.createdBy}}</td>\r\n          <td>{{item.createdAt}}</td>\r\n          <td>\r\n            <button class=\"btn btn-danger btn-sm\" (click)=\"open(deleteOrderModal, item)\">Delete</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td> </td>\r\n          <td class=\"text-nowrap\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"createOrderRequest.description\">\r\n          </td>\r\n          <td> </td>\r\n          <td> </td>\r\n          <td class=\"align-middle\">\r\n            <button class=\"btn btn-success btn-sm\" (click)=\"addOrder()\">Add Order</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #deleteOrderModal let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title background-danger\">Are you sure to delete Order #{{selectedOrder.id}}?</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Description:</p>\r\n    <p>\r\n      {{selectedOrder.description}}</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteOrder()\">Delete</button>\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c()\">Cancel</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./angular/src/app/order/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("./angular/src/app/order/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_create_order_request__ = __webpack_require__("./angular/src/app/order/models/create-order-request.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(orderService, toastr) {
        this.orderService = orderService;
        this.toastr = toastr;
        this.showLoading = false;
        this.createOrderRequest = new __WEBPACK_IMPORTED_MODULE_3__models_create_order_request__["a" /* CreateOrderRequest */]('');
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoading = true;
        this.orderService.getOrders().subscribe(function (x) {
            _this.orders = x;
            _this.showLoading = false;
        });
    };
    OrdersComponent.prototype.open = function (content, order) {
        this.selectedOrder = order;
        alert("Opening order: " + order.id);
    };
    OrdersComponent.prototype.deleteOrder = function () {
        var _this = this;
        var orderId = this.selectedOrder.id;
        this.orderService.deleteOrder(orderId).subscribe(function (x) {
            if (x) {
                _this.orders = _this.orders.filter(function (o) { return o.id !== orderId; });
                _this.toastr.success("Order #" + orderId + " is removed.");
                _this.selectedOrder = null;
            }
            else {
                _this.toastr.error("Failed to remove order.");
            }
        });
    };
    OrdersComponent.prototype.addOrder = function () {
        var _this = this;
        var errorMsg = this.createOrderRequest.validate();
        if (errorMsg) {
            this.toastr.error(errorMsg);
            return;
        }
        this.orderService.createOrder(this.createOrderRequest).subscribe(function (x) {
            _this.orders.push(x);
            _this.createOrderRequest = new __WEBPACK_IMPORTED_MODULE_3__models_create_order_request__["a" /* CreateOrderRequest */]('');
            _this.toastr.success("New order created.");
        });
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-orders',
            template: __webpack_require__("./angular/src/app/order/orders/orders.component.html"),
            styles: [__webpack_require__("./angular/src/app/order/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./angular/src/app/order/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishReplay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = /** @class */ (function () {
    function OrderService(httpClient) {
        this.httpClient = httpClient;
        this.orders$ = null;
        this.api = "api/orders";
    }
    OrderService.prototype.getOrders = function () {
        if (!this.orders$) {
            this.orders$ = this.httpClient
                .get(this.api)
                .publishReplay(1)
                .refCount();
        }
        return this.orders$;
    };
    OrderService.prototype.createOrder = function (request) {
        this.orders$ = null;
        return this.httpClient.post(this.api, request);
    };
    OrderService.prototype.deleteOrder = function (id) {
        this.orders$ = null;
        return this.httpClient.delete(this.api + "/" + id);
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./angular/src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fbis_spinner__ = __webpack_require__("./node_modules/@fbis/spinner/esm5/fbis-spinner.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__fbis_spinner__["a" /* SpinnerModule */]],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__fbis_spinner__["a" /* SpinnerModule */]],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./angular/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./angular/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./angular/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./angular/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./angular/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map