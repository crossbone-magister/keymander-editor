export type JsonKeymander = { id: string };
export type JsonCard = { name: string, rarity: string };
export type JsonPod = { id: string; house: string; cards: JsonCard[] };
export type JsonKeymanderDeck = {
	name: string;
	pods: JsonPod[];
	keymander: JsonKeymander;
};
