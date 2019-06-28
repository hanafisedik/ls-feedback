webpackJsonp([1],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseService = /** @class */ (function () {
    function FirebaseService(afd) {
        this.afd = afd;
    }
    FirebaseService.prototype.getFeedbackItems = function () {
        return this.afd.list('/feedbackItems/');
    };
    FirebaseService.prototype.addFeedbackItems = function (name, email, feedback) {
        return this.afd.list('/feedbackItems/').push({ name: name, email: email, feedback: feedback });
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], FirebaseService);
    return FirebaseService;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionSubmittedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_asksmodels__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionSubmittedPage = /** @class */ (function () {
    function QuestionSubmittedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var askcategory = navParams.get('askcategory');
        var ask = navParams.get('ask');
        var answer = navParams.get('answer');
        this.askItem = new __WEBPACK_IMPORTED_MODULE_2__models_asksmodels__["a" /* AsksModels */](askcategory, ask, answer);
    }
    QuestionSubmittedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-question-submitted',template:/*ion-inline-start:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\question-submitted\question-submitted.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Question Submitted\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <ion-list>\n    <ion-item color="none">\n      <p>{{askItem.askcategory}}</p>\n    </ion-item>\n    <ion-item color="none">\n        <h1>{{askItem.ask}}</h1>\n      </ion-item>\n      <ion-item color="none">\n          <p>{{askItem.answer}}</p>\n        </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\question-submitted\question-submitted.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], QuestionSubmittedPage);
    return QuestionSubmittedPage;
}());

//# sourceMappingURL=question-submitted.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsksModels; });
var AsksModels = /** @class */ (function () {
    function AsksModels(ask, askcategory, answer, favIcon) {
        this.ask = ask;
        this.askcategory = askcategory;
        this.answer = answer;
        this.favIcon = favIcon;
    }
    return AsksModels;
}());

//# sourceMappingURL=asksmodels.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_asksmodels__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ask_ask__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_submitted_question_submitted__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    QuestionsPage.prototype.ngOnInit = function () {
        this.asksmodels = [
            new __WEBPACK_IMPORTED_MODULE_2__models_asksmodels__["a" /* AsksModels */]("Where can I get a Nao Robot for free?", "FAQ", "heart-outline"),
            new __WEBPACK_IMPORTED_MODULE_2__models_asksmodels__["a" /* AsksModels */]("Can I take a free Oolong from the Smart Cooler?", "Technical", "heart-outline"),
            new __WEBPACK_IMPORTED_MODULE_2__models_asksmodels__["a" /* AsksModels */]("Is it possible for me to sleep on the theatrette sofa?", "Request", "heart-outline"),
            new __WEBPACK_IMPORTED_MODULE_2__models_asksmodels__["a" /* AsksModels */]("You have a lot of tablets, can I take one home?", "FAQ", "heart-outline")
        ];
    };
    QuestionsPage.prototype.toggleFav = function (item) {
        if (item.favIcon == "heart-outline")
            item.favIcon = "heart";
        else
            item.favIcon = "heart-outline";
    };
    QuestionsPage.prototype.deleteItem = function (item) {
        this.asksmodels.splice(this.asksmodels.indexOf(item), 1);
    };
    QuestionsPage.prototype.getItems = function (ev) {
        this.ngOnInit();
        var val = ev.target.value;
        console.log("search" + val);
        if (val && val.trim() != '') {
            this.asksmodels = this.asksmodels.filter(function (item) { return item.ask.toLowerCase().includes(val.toLowerCase()) ||
                item.askcategory.toLowerCase().includes(val.toLowerCase()); });
        }
    };
    QuestionsPage.prototype.goToQuestionDetail = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__question_submitted_question_submitted__["a" /* QuestionSubmittedPage */], params);
    };
    QuestionsPage.prototype.goToAskQuestion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ask_ask__["a" /* AsksPage */]);
    };
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\questions\questions.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only solid (click)="goToAskQuestion()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Open Questions\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content padding id="page1">\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n        <ion-item-sliding *ngFor = "let askItem of asksmodels">\n            <ion-item color="none">\n              <p (click)="goToQuestionDetail(askItem)">{{askItem.askcategory}}</p>\n              <h1 (click)="goToQuestionDetail(askItem)">{{askItem.ask}}</h1>\n              <ion-icon item-end color="primary" name="{{askItem.favIcon}}" (click)="toggleFav(askItem)"></ion-icon>\n            </ion-item>\n            <ion-item-options side="right">\n              <button ion-button color="danger" (click)="deleteItem(askItem)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\questions\questions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feedback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Feedback = /** @class */ (function () {
    function Feedback(database, navCtrl, firebaseService) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.newFeedbackName = '';
        this.newFeedbackEmail = '';
        this.newFeedbackFeedback = '';
        this.submitted = false;
    }
    Feedback.prototype.addFeedback = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.firebaseService.addFeedbackItems(this.newFeedbackName, this.newFeedbackEmail, this.newFeedbackFeedback);
            alert('Thanks For Your Feedback! Head Over To The Theatrette To Collect A Prize!');
        }
    };
    Feedback = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\feedback\feedback.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Enjoyed Your Tour?\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <img src="http://www.fccsingapore.com/sites/default/files/public/typo3_Events_image_d212b418-70d7-318e-fcad-59cb6b1b3ea7_16.jpg" width="100%" />\n  <h3>Let us know what you think of today\'s Liquid Studio tour!</h3>\n  <form #validationForm="ngForm">\n    <ion-item>\n      <ion-label>\n        Your Name\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="newFeedbackName" name="tbFeedbackName" #namename="ngModel" required></ion-input>\n    </ion-item>\n    <p ion-text *ngIf="namename.invalid && submitted == true" color="danger" padding-left>\n      Please enter your name\n    </p>\n    <ion-item>\n        <ion-label>\n          Your Email\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="newFeedbackEmail" name="tbFeedbackEmail" #emailemail="ngModel" required></ion-input>\n      </ion-item>\n      <p ion-text *ngIf="emailemail.invalid && submitted == true" color="danger" padding-left>\n        Please enter your email\n      </p>\n      <ion-item>\n          <ion-label>\n            Tell Us Your Feedback!\n          </ion-label>\n          <ion-textarea [(ngModel)]="newFeedbackFeedback" name="taFeedbackFeedback" #feedfeedbackback="ngModel" required></ion-textarea>\n        </ion-item>\n        <p ion-text *ngIf="feedfeedbackback.invalid && submitted == true" color="danger" padding-left>\n          Please enter your feedback\n        </p>\n        <button ion-button color="positive" on-click="addFeedback(validationForm)" (click)="addFeedback(newFeedbackName, newFeedbackEmail, newFeedbackFeedback)">\n          Submit\n        </button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\feedback\feedback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseService */]])
    ], Feedback);
    return Feedback;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VotingPage = /** @class */ (function () {
    function VotingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VotingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-voting',template:/*ion-inline-start:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\voting\voting.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            Vote for your favourite demos\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n    <form>\n\n        <!-- List of Text Items -->\n\n            <ion-list>\n\n                    <ion-item>\n\n                      <ion-label>Pokémon Yellow</ion-label>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                      <ion-label>Mega Man X</ion-label>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                      <ion-label>The Legend of Zelda</ion-label>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                      <ion-label>Pac-Man</ion-label>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                      <ion-label>Super Mario World</ion-label>\n\n                    </ion-item>\n\n                  </ion-list>\n\n\n\n                  <!-- List of Input Items -->\n\n            <ion-list>\n\n\n\n                    <ion-item>\n\n                      <ion-label>Input</ion-label>\n\n                      <ion-input></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                      <ion-label>Toggle</ion-label>\n\n                      <ion-toggle slot="end"></ion-toggle>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                      <ion-label>Radio</ion-label>\n\n                      <ion-radio slot="end"></ion-radio>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                      <ion-label>Checkbox</ion-label>\n\n                      <ion-checkbox slot="start"></ion-checkbox>\n\n                    </ion-item>\n\n                  </ion-list>\n\n\n\n                  <!-- List of Sliding Items -->\n\n<ion-list>\n\n        <ion-item-sliding>\n\n          <ion-item>\n\n            <ion-label>Item</ion-label>\n\n          </ion-item>\n\n          <ion-item-options side="end">\n\n            <ion-item-option onClick="unread(item)">Unread</ion-item-option>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      \n\n        <ion-item-sliding>\n\n          <ion-item>\n\n            <ion-label>Item</ion-label>\n\n          </ion-item>\n\n          <ion-item-options side="end">\n\n            <ion-item-option onClick="unread(item)">Unread</ion-item-option>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n\n\n\n\n    <ion-card id="Demo1">\n\n            <ion-list>\n\n              <ion-item color="none" id="votelistitem">\n\n                <h2>\n\n                    <strong>\n\n                            Nao Robot\n\n                    </strong>\n\n                </h2>\n\n              </ion-item>\n\n              <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n                <img src="https://robotgalaxykids.co/wp-content/uploads/2016/08/NAO-1.jpg" alt="Example" width="100%" height="220px"/>\n\n              </div>\n\n              <ion-item id="approveExpense-list-item-container2">\n\n                <div id="approveExpense-markdown2" class="show-list-numbers-and-dots">\n\n                  <p style="margin-top:0px;color:#000000;">\n\n                      The Nao Robot is a blah blah blah.\n\n                  </p>\n\n                </div>\n\n              </ion-item>\n\n              <button id="likebutton1" ion-button outline color="positive">\n\n                Like\n\n              </button>\n\n              <button id="dislikebutton1" ion-button outline color="positive">\n\n                Dislike\n\n              </button>\n\n            </ion-list>\n\n          </ion-card>\n\n\n\n          <ion-card id="Demo2">\n\n                <ion-list>\n\n                  <ion-item color="none" id="votelistitem">\n\n                    <h2>\n\n                        <strong>\n\n                                Redemption Kiosk\n\n                        </strong>\n\n                    </h2>\n\n                  </ion-item>\n\n                  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n                    <img src="https://www.amequipmentsales.com/wp-content/uploads/2015/12/usi3538.png" alt="Example" width="100%" height="220px"/>\n\n                  </div>\n\n                  <ion-item id="approveExpense-list-item-container2">\n\n                    <div id="approveExpense-markdown2" class="show-list-numbers-and-dots">\n\n                      <p style="margin-top:0px;color:#000000;">\n\n                          The Redemption Kiosk is a blah blah blah.\n\n                      </p>\n\n                    </div>\n\n                  </ion-item>\n\n                  <button id="likebutton2" ion-button outline color="positive">\n\n                    Like\n\n                  </button>\n\n                  <button id="dislikebutton2" ion-button outline color="positive">\n\n                    Dislike\n\n                  </button>\n\n                </ion-list>\n\n              </ion-card>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\voting\voting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], VotingPage);
    return VotingPage;
}());

//# sourceMappingURL=voting.js.map

/***/ }),

/***/ 189:
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
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/thankyou/thankyou.module": [
		476,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 230;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SavedPage = /** @class */ (function () {
    function SavedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SavedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-saved',template:/*ion-inline-start:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\saved\saved.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Saved\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <ion-list id="saved-list3">\n    <ion-item color="none" id="saved-list-item13">\n      Item 1\n    </ion-item>\n    <ion-item color="none" id="saved-list-item14">\n      Item 2\n    </ion-item>\n    <ion-item color="none" id="saved-list-item15">\n      Item 3\n    </ion-item>\n  </ion-list>\n  <button id="saved-button2" ion-button color="positive" block>\n    Send to Inbox\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\saved\saved.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SavedPage);
    return SavedPage;
}());

//# sourceMappingURL=saved.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ask_ask__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questions_questions__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feedback_feedback__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voting_voting__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Welcome = /** @class */ (function () {
    function Welcome(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Welcome.prototype.goToAskQuestionPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ask_ask__["a" /* AsksPage */]);
    };
    Welcome.prototype.goToViewQuestionsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__questions_questions__["a" /* QuestionsPage */]);
    };
    Welcome.prototype.goToGiveFeedbackPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__feedback_feedback__["a" /* Feedback */]);
    };
    Welcome.prototype.goToVotingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__voting_voting__["a" /* VotingPage */]);
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\welcome\welcome.html"*/'<ion-header>\n  <ion-navbar>\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>-->\n    <ion-title>\n      Welcome To Liquid Studio Singapore\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <ion-grid>\n    <ion-row class="row">\n      <ion-col (click)="goToAskQuestionPage()" class="col" style="margin:2px; background-color:rgb(232, 235, 239); text-align: center;">\n        <img src="assets/imgs/questionmark.png" width="100%">\n        <h4>Ask A Question</h4>\n      </ion-col>\n      <ion-col (click)="goToViewQuestionsPage()" class="col" style="margin:2px; background-color:rgb(232, 235, 239); text-align: center;">\n          <img src="assets/imgs/logo.png" width="100%">\n          <h4>View All Questions</h4>\n        </ion-col>\n    </ion-row>\n    <ion-row class="row">\n        <ion-col (click)="goToGiveFeedbackPage()" class="col" style="margin:2px; background-color:rgb(232, 235, 239); text-align: center;">\n          <img src="assets/imgs/mynameisnao.png" width="100%">\n          <h4>Give Feedback</h4>\n        </ion-col>\n        <ion-col (click)="goToVotingPage()" class="col" style="margin:2px; background-color:rgb(232, 235, 239); text-align: center;">\n            <img src="assets/imgs/questionmark.png" width="100%">\n            <h4>Vote Favorite Demos</h4>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankYouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ThankyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThankYouPage = /** @class */ (function () {
    function ThankYouPage(database, navCtrl, firebaseService) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.feedbackItems = database.list('feedbackItems').valueChanges();
    }
    ThankYouPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThankyouPage');
    };
    ThankYouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-thankyou',template:/*ion-inline-start:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\thankyou\thankyou.html"*/'<!--\n  Generated template for the ThankyouPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Thank You!</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p>Thank You For Your Feedback!</p>\n<ion-list>\n  <ion-item-sliding *ngFor="let feedback of feedbackItems | async">\n    <ion-item>\n      {{ feedback | json }}\n    </ion-item>\n    <ion-item-options side="right">\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\thankyou\thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseService */]])
    ], ThankYouPage);
    return ThankYouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(409);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ask_ask__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_question_submitted_question_submitted__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_saved_saved__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_questions_questions__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_feedback_feedback__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_voting_voting__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_thankyou_thankyou__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_firebase_service_firebase_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_firebase_config__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_ask_ask__["a" /* AsksPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_question_submitted_question_submitted__["a" /* QuestionSubmittedPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_saved_saved__["a" /* SavedPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_12__pages_feedback_feedback__["a" /* Feedback */],
                __WEBPACK_IMPORTED_MODULE_13__pages_voting_voting__["a" /* VotingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_thankyou_thankyou__["a" /* ThankYouPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/thankyou/thankyou.module#ThankyouPageModule', name: 'ThankYouPage', segment: 'thankyou', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_19__app_firebase_config__["a" /* FIREBASE_CONFIG */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_ask_ask__["a" /* AsksPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_question_submitted_question_submitted__["a" /* QuestionSubmittedPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_saved_saved__["a" /* SavedPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_12__pages_feedback_feedback__["a" /* Feedback */],
                __WEBPACK_IMPORTED_MODULE_13__pages_voting_voting__["a" /* VotingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_thankyou_thankyou__["a" /* ThankYouPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_firebase_service_firebase_service__["a" /* FirebaseService */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_question_submitted_question_submitted__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_saved_saved__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_questions_questions__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ask_ask__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_feedback_feedback__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_voting_voting__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* Welcome */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToWelcome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* Welcome */]);
    };
    MyApp.prototype.goToAsk = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_ask_ask__["a" /* AsksPage */]);
    };
    MyApp.prototype.goToQuestionSubmitted = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_question_submitted_question_submitted__["a" /* QuestionSubmittedPage */]);
    };
    MyApp.prototype.goToSaved = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_saved_saved__["a" /* SavedPage */]);
    };
    MyApp.prototype.goToQuestions = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_questions_questions__["a" /* QuestionsPage */]);
    };
    MyApp.prototype.goToFeedback = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_feedback_feedback__["a" /* Feedback */]);
    };
    MyApp.prototype.goToVotingPage = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_voting_voting__["a" /* VotingPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\app\app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        LSFeedback\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list1">\n        <ion-item color="none" menuClose="" on-click="goToWelcome()" id="menu-list-item1" class="Ask A Question">\n            Home\n          </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToAsk()" id="menu-list-item1" class="Ask A Question">\n        Ask A Question\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToQuestions()" id="menu-list-item2">\n        View All Questions\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToFeedback()" id="menu-list-item16">\n        Give Feedback\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToVotingPage()" id="menu-list-item3">\n        Vote Favorite Demos\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-tabs>\n    <ion-tab tab="home">Home Content</ion-tab>\n    <ion-tab tab="settings">Settings Content</ion-tab>\n  \n    <ion-tab-bar slot="bottom">\n  \n      <ion-tab-button tab="home">\n        <ion-label>Home</ion-label>\n        <ion-icon name="home"></ion-icon>\n        <ion-badge>6</ion-badge>\n      </ion-tab-button>\n  \n      <ion-tab-button tab="settings">\n        <ion-label>Settings</ion-label>\n        <ion-icon name="settings"></ion-icon>\n      </ion-tab-button>\n  \n    </ion-tab-bar>\n  </ion-tabs>\n<ion-nav #mainContent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCJulbJ7pNsZRmNt5m1QeaELb42_nkmY_Q",
    authDomain: "lsfeedback.firebaseapp.com",
    databaseURL: "https://lsfeedback.firebaseio.com",
    projectId: "lsfeedback",
    storageBucket: "",
    messagingSenderId: "580224872962"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_asksmodels__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AsksPage = /** @class */ (function () {
    function AsksPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.submitted = false;
        this.categories = ['FAQ', 'Technical', 'Request'];
        this.asksmodels = new __WEBPACK_IMPORTED_MODULE_2__models_asksmodels__["a" /* AsksModels */]('', this.categories[0]);
    }
    Object.defineProperty(AsksPage.prototype, "testing", {
        get: function () { return JSON.stringify(this.asksmodels); },
        enumerable: true,
        configurable: true
    });
    AsksPage.prototype.onSubmit = function (form) {
        this.submitted = true;
        if (form.valid) {
            alert('Question Submitted:'
                + "\n Your Question: " + this.asksmodels.ask
                + "\n Question Category: " + this.asksmodels.askcategory);
        }
    };
    AsksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ask',template:/*ion-inline-start:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\ask\ask.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        Ask Your Question\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n    <ion-content padding id="page1">\n      <form #submitQuestionForm="ngForm">\n        <ion-item>\n          <ion-label>\n            Got A Question? Ask here!\n          </ion-label>\n          <ion-textarea placeholder="" [(ngModel)]="asksmodels.ask" name="txtask" #askask="ngModel" required></ion-textarea>\n        </ion-item>\n        <p ion-text *ngIf="askask.invalid && submitted == true" color="danger" padding-left>\n          Please enter your question\n        </p>\n        <ion-item>\n          <ion-label>\n            Select Question Category\n          </ion-label>\n          <ion-select [(ngModel)]="asksmodels.askcategory" name="txtaskcategory">\n            <ion-option *ngFor="let cat of categories" [value]="cat">\n              {{cat}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button color="positive" block type="submit" (click)="onSubmit(submitQuestionForm)">\n          Submit\n        </button>\n      </form>\n  </ion-content>'/*ion-inline-end:"C:\Users\hanafi.sedik\Documents\IonicApps\LSFeedback\src\pages\ask\ask.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AsksPage);
    return AsksPage;
}());

//# sourceMappingURL=ask.js.map

/***/ })

},[288]);
//# sourceMappingURL=main.js.map