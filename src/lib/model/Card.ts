import type { JsonCard } from './import/JsonImport';

export class Card {
	name: string;
	rarity: string;
	image: string;

	constructor(name: string, rarity: string, image: string) {
		this.name = name;
		this.rarity = rarity;
		this.image = image;
	}

	static fromJson(jsonData: JsonCard): Card {
		return new this(jsonData.name, jsonData.rarity, jsonData.image);
	}
}
