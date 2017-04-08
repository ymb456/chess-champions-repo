import { Component, OnInit } from '@angular/core';
import { champion } from './champion';
import { championService } from './champion.service'
import { Router } from '@angular/router';



@Component({
	selector: 'my-champions',
	templateUrl: './champions.component.html',
	styleUrls: ['./champions.component.css']
})

export class championsComponent implements OnInit {
	constructor(private router: Router,
		private championService: championService) {

	};
	selectedchampion: champion;
	champions: champion[];
	onSelect(champion: champion): void {
		this.selectedchampion = champion;
	};
	getchampions(): void {
		this.championService.getchampions().then(champions => this.champions = champions);
	};
	ngOnInit(): void {
		this.getchampions();
	};
	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedchampion.id]);
	}
};

