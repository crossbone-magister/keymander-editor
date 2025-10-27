export type DoKCard = { cardTitle: string; rarity: string; cardTitleUrl: string };
export type DoKPod = { house: string; cards: DoKCard[] };
export type DoKDeck = {
	deck: { id: string; name: string; expansion: string; housesAndCards: DoKPod[] };
};
export type DoKMyDecksResponse = DoKDeck[];
export type DoKErrorResponse = { message: string };
