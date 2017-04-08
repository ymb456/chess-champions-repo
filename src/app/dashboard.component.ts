import {championService} from './champion.service';
import {champion} from './champion'
import {Component, OnInit} from '@angular/core';

@Component ({
	selector: '<my-dashboard></my-dashboard>',
	templateUrl: "./dashboard.component.html",
	styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
	champions: champion[] = [];
	constructor (private championService: championService) {};
	ngOnInit(): void { this.championService.getchampions().then(champions => this.champions = champions.slice(12,16))};


};