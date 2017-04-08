import { Injectable } from '@angular/core';

import { champion } from './champion';

import { champions } from './mock-champions';


@Injectable()
export class championService {
	getchampions(): Promise<champion[]> {
		return Promise.resolve(champions);
	};
	getchampion(id: number): Promise<champion> {
		return this.getchampions()
			.then(champions => champions.find(champion => champion.id === id));
	}
}