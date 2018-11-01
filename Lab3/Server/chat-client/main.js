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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _connected_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connected.guard */ "./src/app/connected.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_connected_guard__WEBPACK_IMPORTED_MODULE_4__["ConnectedGuard"]] },
    { path: 'join', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid flex-fill d-flex flex-column\">\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1qa25pZ2h0L0RvY3VtZW50cy9VTUtDL2dpdGh1Yi9DU0VFNTU1MV9UZWFtXzExLTJfTGFiQXNzaWdubWVudHMvTGFiMy9DbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIl19 */"

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
        this.title = 'chat-client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_2__);
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




var httpUrl = location.origin + "/chatroom";
var webSocketUrl = location.origin.replace(/^http/, 'ws');
var ChatService = /** @class */ (function () {
    function ChatService(http, router) {
        this.http = http;
        this.router = router;
        this.isConnected = false;
        this.listener = (function (json) {
            console.log('json', json);
        });
    }
    ChatService.prototype.join = function (nickname) {
        var _this = this;
        var uuid = uuid_v4__WEBPACK_IMPORTED_MODULE_2__();
        this.webSocket = new WebSocket(webSocketUrl);
        this.webSocket.onopen = function (event) {
            console.log('event', event);
            _this.me = { nickname: nickname, uuid: uuid };
            _this.webSocket.send(JSON.stringify({ join: _this.me }));
        };
        this.webSocket.onmessage = function (message) {
            var json = JSON.parse(message.data);
            if (json.joined && json.joined.uuid && json.joined.uuid === uuid) {
                _this.isConnected = true;
                _this.router.navigate(['/']);
            }
            else {
                _this.listener(json);
            }
        };
    };
    ChatService.prototype.send = function (topic, text) {
        var sender = this.me;
        this.webSocket.send(JSON.stringify({ send: { topic: topic, text: text, sender: sender } }));
    };
    ChatService.prototype.getTopics = function () {
        var sender = this.me;
        return this.http.get(httpUrl);
    };
    ChatService.prototype.addTopic = function (topic) {
        var sender = this.me;
        return this.http.post(httpUrl, { topic: topic, sender: sender }).subscribe(function (results) {
            console.log(results);
        }, function (error) {
            console.log(error);
        });
    };
    ChatService.prototype.deleteTopic = function (topic) {
        var sender = this.me;
        return this.http.delete(httpUrl, { params: { topic: topic, sender: sender } }).subscribe(function (results) {
            console.log(results);
        }, function (error) {
            console.log(error);
        });
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/connected.guard.ts":
/*!************************************!*\
  !*** ./src/app/connected.guard.ts ***!
  \************************************/
/*! exports provided: ConnectedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedGuard", function() { return ConnectedGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectedGuard = /** @class */ (function () {
    function ConnectedGuard(chat, router) {
        this.chat = chat;
        this.router = router;
    }
    ConnectedGuard.prototype.canActivate = function (next, state) {
        if (this.chat.isConnected) {
            return true;
        }
        this.router.navigate(['/join']);
        return false;
    };
    ConnectedGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConnectedGuard);
    return ConnectedGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row flex-fill\">\n\n  <div class=\"col-4 p-0\">\n    <header class=\"navbar sticky-top navbar-dark bg-dark\">\n      <span class=\"navbar-brand mb-0 h1\">Topics</span>\n      <form class=\"inline-form\" (ngSubmit)=\"addTopic()\" #topicForm=\"ngForm\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Add Topic\" id=\"topic\" name=\"topic\"\n                 [(ngModel)]=\"newTopic\" required>\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" type=\"submit\" [disabled]=\"!topicForm.form.valid\"><i\n              class=\"fa fa-plus\"></i></button>\n          </div>\n        </div>\n      </form>\n    </header>\n    <div class=\"list-group list-group-flush\">\n\n      <a *ngFor=\"let topic of topics | keyvalue\" (click)=\"changeTopic(topic.key)\"\n         class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\"\n         [class.list-group-item-secondary]=\"topic.key == currentTopic\">\n        <span class=\"flex-fill\">{{topic.key}}</span>\n        <span class=\"badge badge-primary badge-pill mx-3\" *ngIf=\"topic.value.unread\">{{topic.value.unread}}</span>\n        <button class=\"btn btn-outline-danger\" (click)=\"deleteTopic(topic.key)\" type=\"button\"><i\n          class=\"fa fa-trash\"></i></button>\n      </a>\n    </div>\n  </div>\n  <div class=\"col-8 border-left p-0 d-flex flex-column\">\n    <div class=\"p-3 flex-fill\" id=\"messages\">\n      <ng-container *ngIf=\"topics[currentTopic]\">\n\n\n        <div *ngFor=\"let message of topics[currentTopic].messages\" class=\"media p-3 mb-2\" [ngClass]=\"styled(message)\">\n          <div class=\"media-body\">\n            <em *ngIf=\"message.typing && !mine(message)\">{{message.sender.nickname}} is typing&hellip;</em>\n            <em *ngIf=\"message.joined && !mine(message)\">{{message.sender.nickname}} has joined!</em>\n            <div *ngIf=\"message.text\">\n              <b class=\"mt-0\" *ngIf=\"!mine(message)\">{{message.sender.nickname}}</b>\n              {{message.text}}\n            </div>\n          </div>\n        </div>\n      </ng-container>\n\n    </div>\n\n    <form (ngSubmit)=\"onSubmit()\" class=\"navbar navbar-light bg-light border-top shadow\" #messageForm=\"ngForm\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Send Message\" id=\"message\" name=\"message\"\n               [(ngModel)]=\"currentMessage\" required>\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!messageForm.form.valid\"><i\n            class=\"fa fa-paper-plane\"></i></button>\n        </div>\n      </div>\n\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n#messages {\n  overflow: auto;\n  height: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1qa25pZ2h0L0RvY3VtZW50cy9VTUtDL2dpdGh1Yi9DU0VFNTU1MV9UZWFtXzExLTJfTGFiQXNzaWdubWVudHMvTGFiMy9DbGllbnQvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDYjs7QUFFRDtFQUNFLGVBQWM7RUFDZCxVQUFTLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuI21lc3NhZ2VzIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(chat) {
        var _this = this;
        this.chat = chat;
        this.currentMessage = '';
        this.topics = {};
        this.currentTopic = '';
        this.newTopic = '';
        this.chat.listener = function (json) {
            console.log('home json', json);
            if (json.message) {
                var key = json.message.topic;
                var topic = _this.topics[key];
                topic.messages.push({ sender: json.message.sender, text: json.message.text });
                if (_this.currentTopic !== key) {
                    topic.unread = (topic.unread || 0) + 1;
                }
            }
            else if (json.joined) {
                Object.values(_this.topics).forEach(function (topic) {
                    topic.messages.push({ sender: json.joined, joined: true });
                });
            }
            else if (json.topic) {
                _this.topics[json.topic] = { messages: [] };
            }
            else if (json.deleteTopic) {
                var key = json.deleteTopic;
                if (_this.currentTopic === key) {
                    _this.currentTopic = '';
                }
                delete _this.topics[key];
            }
        };
        this.chat.getTopics().subscribe(function (topics) {
            _this.topics = topics;
        });
    }
    HomeComponent.prototype.mine = function (message) {
        return message.sender.uuid === this.chat.me.uuid;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onSubmit = function () {
        if (!this.currentMessage.length || !this.currentTopic.length) {
            return;
        }
        this.chat.send(this.currentTopic, this.currentMessage);
        this.currentMessage = '';
    };
    HomeComponent.prototype.addTopic = function () {
        if (!this.newTopic.length) {
            return;
        }
        this.chat.addTopic(this.newTopic);
        this.newTopic = '';
    };
    HomeComponent.prototype.styled = function (message) {
        if (message.typing || message.joined) {
            return this.mine(message) ? 'd-none' : '';
        }
        if (this.mine(message)) {
            return 'rounded-left bg-gradient-primary ml-5 text-white rounded-top';
        }
        return 'rounded-right bg-gradient-dark mr-5 text-white rounded-top';
    };
    HomeComponent.prototype.changeTopic = function (key) {
        this.currentTopic = key;
        this.topics[key].unread = 0;
    };
    HomeComponent.prototype.deleteTopic = function (key) {
        this.chat.deleteTopic(key);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"justify-content-center align-items-center d-flex flex-fill\">\n  <div class=\"card shadow text-center\" style=\"width: 18rem;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Welcome</h5>\n      <p class=\"card-text\">Please Enter a Nickname {{hostname}}</p>\n      <form (ngSubmit)=\"onSubmit()\" #form=\"ngForm\">\n        <input type=\"text\" class=\"form-control\" id=\"nickname\" name=\"nickname\" [(ngModel)]=\"nickname\" required>\n        <button type=\"submit\" class=\"btn btn-primary mt-3\" [disabled]=\"!form.form.valid\">Join</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1qa25pZ2h0L0RvY3VtZW50cy9VTUtDL2dpdGh1Yi9DU0VFNTU1MV9UZWFtXzExLTJfTGFiQXNzaWdubWVudHMvTGFiMy9DbGllbnQvc3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(chat) {
        this.chat = chat;
        this.nickname = '';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.onSubmit = function () {
        if (!this.nickname.length) {
            return;
        }
        this.chat.join(this.nickname);
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/camjknight/Documents/UMKC/github/CSEE5551_Team_11-2_LabAssignments/Lab3/Client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map