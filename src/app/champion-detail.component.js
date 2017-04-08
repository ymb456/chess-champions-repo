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
var champion_1 = require("./champion");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var champion_service_1 = require("./champion.service");
var championDetailComponent = (function () {
    function championDetailComponent(championService, route, location) {
        this.championService = championService;
        this.route = route;
        this.location = location;
    }
    ;
    championDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.championService.getchampion(+params['id']); })
            .subscribe(function (champion) { return _this.champion = champion; });
    };
    championDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return championDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", champion_1.champion)
], championDetailComponent.prototype, "champion", void 0);
championDetailComponent = __decorate([
    core_1.Component({
        selector: 'champion-detail',
        templateUrl: './champion-detail.component.html'
    }),
    __metadata("design:paramtypes", [champion_service_1.championService, router_1.ActivatedRoute, common_1.Location])
], championDetailComponent);
exports.championDetailComponent = championDetailComponent;
//# sourceMappingURL=champion-detail.component.js.map