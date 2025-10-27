import type { Pod } from './Pod';

export class Deck {
	id: string;
	name: string;
	expansion: string;
	pods: Pod[];

	constructor(id: string, name: string, expansion: string, pods: Pod[]) {
		this.id = id;
		this.name = name;
		this.expansion = expansion;
		this.pods = pods;
	}
}
