import type { JsonCard } from './import/JsonImport';

export class Card {
	name: string;
	rarity: string;

	constructor(name: string, rarity: string) {
		this.name = name;
		this.rarity = rarity;
	}

	static fromJson(jsonData: JsonCard): Card {
		return new this(jsonData.name, jsonData.rarity);
	}
}
