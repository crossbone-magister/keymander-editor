import { Card } from './Card';
import type { JsonCard, JsonPod } from './import/JsonImport';

export class Pod {
	id: string;
	house: string;
	cards: Card[];

	constructor(id: string, house: string, cards: Card[]) {
		this.id = id;
		this.house = house;
		this.cards = cards;
	}

	static fromJson(jsonData: JsonPod): Pod {
		const cards: Card[] = jsonData.cards.map((card: JsonCard) => Card.fromJson(card));
		return new this(jsonData.id, jsonData.house, cards);
	}
}
