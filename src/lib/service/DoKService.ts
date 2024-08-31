import { Card } from '$lib/model/Card';
import { Deck } from '$lib/model/Deck';
import type {
	DoKCard,
	DoKDeck,
	DoKErrorResponse,
	DoKMyDecksResponse,
	DoKPod
} from '$lib/model/dok/DokTypes';
import { Pod } from '$lib/model/Pod';

class DoKService {
	baseUrl = 'https://decksofkeyforge.com/public-api/v1';

	async retrieveDecks(apiKey: string): Promise<Deck[]> {
		return fetch(`${this.baseUrl}/my-decks`, {
			method: 'GET',
			headers: {
				'Api-Key': apiKey
			}
		}).then((response) =>
			response.json().then((dokResponse: DoKMyDecksResponse | DoKErrorResponse) => {
				if (response.ok) {
					var decks: Deck[] = [];
					(dokResponse as DoKMyDecksResponse).forEach((dokDeckData: DoKDeck) => {
						let dokDeck = dokDeckData.deck;
						const pods = dokDeck.housesAndCards.map(
							(dokPod: DoKPod) =>
								new Pod(
									`${dokDeck.id}-${dokPod.house}`,
									dokPod.house,
									dokPod.cards.map((dokCard: DoKCard) => new Card(dokCard.cardTitle, dokCard.rarity))
								)
						);
						decks.push(new Deck(dokDeck.id, dokDeck.name, pods));
					});
					return decks;
				} else {
					throw new Error((dokResponse as DoKErrorResponse).message);
				}
			})
		);
	}
}

export const DOK_SERVICE = new DoKService();
