import type { Pod } from './Pod';

export class Deck {
	id: string;
	name: string;
	pods: Pod[];

	constructor(id: string, name: string, pods: Pod[]) {
		this.id = id;
		this.name = name;
		this.pods = pods;
	}
}
