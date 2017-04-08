import { Component, Input, OnInit } from '@angular/core';
import { champion } from './champion';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { championService } from './champion.service';
@Component({
	selector: 'champion-detail',
	templateUrl: './champion-detail.component.html'
})
export class championDetailComponent implements OnInit {
	constructor(private championService: championService, private route: ActivatedRoute, private location: Location) { };
	@Input() champion: champion;
	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.championService.getchampion(+params['id']))
			.subscribe(champion => this.champion = champion);
	}
	goBack(): void {
		this.location.back();
	}
}
