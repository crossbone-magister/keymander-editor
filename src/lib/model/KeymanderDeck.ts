import { Constants } from './Constants';
import type { JsonKeymanderDeck } from './import/JsonImport';
import { Keymander, KEYMANDER_LIST } from './Keymander';
import { Pod } from './Pod';

export class KeymanderDeck {
	keymander: Keymander | null;
	pods: Pod[];
	name: string;
	private houseStats: Map<string, number> = new Map();

	private constructor(
		name: string = 'New Keymander Deck',
		keymander: Keymander | null = null,
		pods: Pod[] = []
	) {
		this.name = name;
		this.keymander = keymander;
		this.pods = pods;
		this.calculateStats();
	}

	addPod(pod: Pod): KeymanderDeck {
		this.canAddPod(pod);
		this.pods.push(pod);
		this.calculateStats();
		return this;
	}

	removePod(pod: Pod): KeymanderDeck {
		this.pods = this.pods.filter((p) => p.id !== pod.id);
		this.calculateStats();
		return this;
	}

	clearPods(): KeymanderDeck {
		this.pods = [];
		this.calculateStats();
		return this;
	}

	canAddPod(pod: Pod) {
		if (this.pods.length >= Constants.MAX_POD_PER_DECK) {
			throw new Error('Keymander Deck is full');
		}
		if (this.pods.find((p) => p.id === pod.id)) {
			throw new Error(`Keymander deck already contains pod ${pod.id}`);
		}
		if (this.houseStats.has(pod.house) && this.houseStats.get(pod.house) >= 2) {
			throw new Error(`Keymander deck cannot contain any more pods of house ${pod.house}`);
		}
		if (!this.houseStats.has(pod.house) && this.houseStats.size >= 3) {
			throw new Error('Keymander deck cannot contain any new houses.');
		}
	}

	isComplete(): boolean {
		return (
			this.name !== '' && this.keymander !== null && this.pods.length == Constants.MAX_POD_PER_DECK
		);
	}

	private calculateStats() {
		this.houseStats = new Map();
		this.pods.forEach((pod) => {
			const house = pod.house;
			if (!this.houseStats.has(house)) {
				this.houseStats.set(house, 0);
			}
			this.houseStats.set(house, this.houseStats.get(house) + 1);
		});
	}

	public static empty(): KeymanderDeck {
		return new this();
	}

	public static fromJson(jsonData: JsonKeymanderDeck): KeymanderDeck {
		const keymander =
			jsonData.keymander !== null
				? KEYMANDER_LIST.find((km) => km?.id == jsonData.keymander.id)
				: null;
		const pods: Pod[] = jsonData.pods.map((pod) => Pod.fromJson(pod));
		return new this(jsonData.name, keymander, pods);
	}
}
