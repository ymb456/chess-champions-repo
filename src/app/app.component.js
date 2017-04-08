"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'World Chess Champions';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t\t<header>\n\t\t<h1>{{title}}</h1>\n\t\t</header>\n\t\t<div class=\"tab\">\n\t\t<nav>\n\t \t<a routerLink=\"/dashboard\" routerLinkActive=\"active\">Recent</a>\n\t    <a routerLink=\"/champions\" routerLinkActive=\"active\">Complete list</a>\n\t\t</nav>\n\t\t</div>\n\t\t<router-outlet></router-outlet>\n\t\t<footer>Copyright &copy; Yev</footer>\n\t",
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map