"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var champion_service_1 = require("./champion.service");
var router_1 = require("@angular/router");
var championsComponent = (function () {
    function championsComponent(router, championService) {
        this.router = router;
        this.championService = championService;
    }
    ;
    championsComponent.prototype.onSelect = function (champion) {
        this.selectedchampion = champion;
    };
    ;
    championsComponent.prototype.getchampions = function () {
        var _this = this;
        this.championService.getchampions().then(function (champions) { return _this.champions = champions; });
    };
    ;
    championsComponent.prototype.ngOnInit = function () {
        this.getchampions();
    };
    ;
    championsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedchampion.id]);
    };
    return championsComponent;
}());
championsComponent = __decorate([
    core_1.Component({
        selector: 'my-champions',
        templateUrl: './champions.component.html',
        styleUrls: ['./champions.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        champion_service_1.championService])
], championsComponent);
exports.championsComponent = championsComponent;
;
//# sourceMappingURL=champions.component.js.map