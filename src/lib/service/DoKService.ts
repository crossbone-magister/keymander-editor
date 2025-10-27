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

	async retrieveDecks(apiKey: string, page: number = 0): Promise<Deck[]> {
		const query = new URLSearchParams();
		query.append('page', page.toString());
		return fetch(`${this.baseUrl}/my-decks?${query}`, {
			method: 'GET',
			headers: {
				'Api-Key': apiKey
			}
		}).then((response) =>
			response.json().then((dokResponse: DoKMyDecksResponse | DoKErrorResponse) => {
				if (response.ok) {
					const decks: Deck[] = [];
					(dokResponse as DoKMyDecksResponse).forEach((dokDeckData: DoKDeck) => {
						const dokDeck = dokDeckData.deck;
						const pods = dokDeck.housesAndCards.map(
							(dokPod: DoKPod) =>
								new Pod(
									`${dokDeck.id}-${dokPod.house}`,
									dokPod.house,
									dokPod.cards.map(
										(dokCard: DoKCard) =>
											new Card(dokCard.cardTitle, dokCard.rarity, dokCard.cardTitleUrl)
									)
								)
						);
						decks.push(new Deck(dokDeck.id, dokDeck.name, dokDeck.expansion, pods));
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
