export class Keymander {
	id: string;
	version: string;
	frontName: string;
	backName: string | null;
	token: string | null;
	extraCards: string[];
	readonly name: string;
	readonly frontImage: string;
	readonly backImage: string;
	readonly tokenImage: string;

	constructor(
		id: string,
		version: string,
		frontName: string,
		backName: string | null = null,
		token: string | null = null,
		extraCards: string[] = []
	) {
		this.id = `${version}/${id}`;
		this.version = version;
		this.frontName = frontName;
		this.backName = backName;
		this.token = token;
		this.extraCards = extraCards;
		this.name = this.backName != null ? `${this.frontName}/${this.backName}` : this.frontName;
		this.frontImage = this.backName != null ? `${this.id}a` : this.id;
		this.backImage = `${this.id}b`;
		this.tokenImage = `${this.id}t`;
	}

	canFlip(): boolean {
		return this.backName !== null;
	}

	hasToken(): boolean {
		return this.token !== null && this.token != undefined;
	}
}

export const KEYMANDER_LIST: Keymander[] = [
	new Keymander('KM001', '1.1', '"Bananas" Foster', null, 'Slips'),
	new Keymander('KM002', '1.1', '"Friend" Brenetic', 'Brenetic Unleashed'),
	new Keymander('KM003', '1.1', 'Abyssal Kraken'),
	new Keymander('KM004', '1.1', 'Ancient Doll'),
	new Keymander('KM005', '1.1', 'Aurelia, Otherworld Adventurer'),
	new Keymander('KM006', '1.1', 'Æmber Smuggler'),
	new Keymander('KM007', '1.1', 'Anomalous Ooze'),
	new Keymander('KM008', '1.1', 'Arvir of People'),
	new Keymander('KM009', '1.1', 'Bean Goblin'),
	new Keymander('KM010', '1.1', 'Blossom Picker'),
	new Keymander('KM011', '1.1', 'Bonus Bill'),
	new Keymander('KM012', '1.1', 'Bucky Ten Lives'),
	new Keymander('KM013', '1.1', 'Burstling Amalgam'),
	new Keymander('KM014', '1.1', 'Clockwork Fanatic'),
	new Keymander('KM015', '1.1', 'Clumsy Octo-Merchant'),
	new Keymander('KM016', '1.1', 'Community Organizer', null, 'Citizen'),
	new Keymander('KM017', '1.1', 'Despond'),
	new Keymander('KM018', '1.1', 'Disembodied Hand'),
	new Keymander('KM019', '1.1', 'Don Keyote'),
	new Keymander('KM020', '1.1', 'Elrick the High', 'Elrick the Fallen'),
	new Keymander('KM021', '1.1', 'FFG KeyForge Algorithm'),
	new Keymander('KM022', '1.1', 'Fleet Mechanic'),
	new Keymander('KM023', '1.1', 'Ghost of KeyForge Future'),
	new Keymander('KM024', '1.1', 'Ghost Ship'),
	new Keymander('KM025', '1.1', 'The Grand Archivist'),
	new Keymander('KM026', '1.1', 'Greedy Shop Cat'),
	new Keymander('KM027', '1.1', 'Grom-peak'),
	new Keymander('KM028', '1.1', 'Iridescent Murmook'),
	new Keymander('KM029', '1.1', 'Kaiju Kid'),
	new Keymander('KM030', '1.1', 'Kailua the Tumultuous'),
	new Keymander('KM031', '1.1', 'The Keyringmasters'),
	new Keymander('KM032', '1.1', 'Knight in Really Shiny Armor'),
	new Keymander('KM033', '1.1', 'Legatus Rex'),
	new Keymander('KM034', '1.1', 'Lollop the Colossal'),
	new Keymander('KM035', '1.1', 'Mama Bird'),
	new Keymander('KM036', '1.1', 'Memory Bug'),
	new Keymander('KM037', '1.1', 'Mess Officer "Puddin"'),
	new Keymander('KM038', '1.1', 'Mimic Reed'),
	new Keymander('KM039', '1.1', 'Ms. Menagerie'),
	new Keymander('KM040', '1.1', 'One with Life', null, 'Trubble'),
	new Keymander('KM041', '1.1', 'Praefectus Festa'),
	new Keymander('KM042', '1.1', 'Primordial Heart', 'Primordial Serpent'),
	new Keymander('KM043', '1.1', 'Professor MemNo.0'),
	new Keymander('KM044', '1.1', 'Rat Queen'),
	new Keymander('KM045', '1.1', 'Reclusive Assassin'),
	new Keymander('KM046', '1.1', 'Reepo', null, 'Scrap'),
	new Keymander('KM047', '1.1', 'Re-inventor'),
	new Keymander('KM048', '1.1', 'Sampling Blug'),
	new Keymander('KM049', '1.1', 'Sidewinder', 'Sideloseder'),
	new Keymander('KM050', '1.1', 'Silver Tania'),
	new Keymander('KM051', '1.1', 'Sixuno'),
	new Keymander('KM052', '1.1', 'Smokebeard'),
	new Keymander('KM053', '1.1', 'Soothsaye', null, 'Doomer'),
	new Keymander('KM054', '1.1', 'Soul Armorer'),
	new Keymander('KM055', '1.1', 'Soulchainer'),
	new Keymander('KM056', '1.1', 'Sower of Discord'),
	new Keymander('KM057', '1.1', 'Spectral Investigator'),
	new Keymander('KM058', '1.1', 'Splashy Spencer'),
	new Keymander('KM059', '1.1', 'Star Ambassador'),
	new Keymander('KM060', '1.1', 'Student of Nihilism'),
	new Keymander('KM061', '1.1', 'Sue Kortney Shoobs', null, 'Buccaneer'),
	new Keymander('KM062', '1.1', 'Transient Benefactor'),
	new Keymander('KM063', '1.1', 'Transmog'),
	new Keymander('KM064', '1.1', 'Trio of Terror'),
	new Keymander('KM065', '1.1', 'Vyxl Juicemaker'),
	new Keymander('KM066', '1.1', 'Weirdo', null, 'Wild Worm'),
	new Keymander('KM001', '2.0', '"Tiff" the Divider'),
	new Keymander('KM002', '2.0', 'Barrel Titan'),
	new Keymander('KM003', '2.0', 'Being Outside Time'),
	new Keymander('KM004', '2.0', 'Binary Researcher'),
	new Keymander('KM005', '2.0', 'Bräkken Band Manager'),
	new Keymander('KM006', '2.0', 'Crucible Doppelgänger'),
	new Keymander('KM007', '2.0', 'Eirĺkr, the Champ', null, 'Challenger'),
	new Keymander('KM008', '2.0', 'Florticultist'),
	new Keymander('KM009', '2.0', 'Fragment of the Crucible'),
	new Keymander('KM010', '2.0', 'Giltspine Vizier'),
	new Keymander('KM011', '2.0', 'Key Cheetah'),
	new Keymander('KM012', '2.0', 'King Midas'),
	new Keymander('KM013', '2.0', 'Lord Kymoor', null, 'Shadow Agent'),
	new Keymander('KM014', '2.0', 'Master Swindler'),
	new Keymander('KM015', '2.0', 'Miss Baker'),
	new Keymander('KM016', '2.0', 'Multiverse Exploiter', 'Multiversal Mistake'),
	new Keymander('KM017', '2.0', 'Narp Eternal'),
	new Keymander('KM018', '2.0', 'Pit Lady'),
	new Keymander('KM019', '2.0', 'Prisma Golem', null, 'Rough Gem'),
	new Keymander('KM020', '2.0', "Robbin' Hood"),
	new Keymander('KM021', '2.0', 'Rue Tene'),
	new Keymander('KM022', '2.0', 'The Thin One'),
	new Keymander('KM023', '2.0', "Valindra's Bronze Heart", 'Valindra, the Undying Queen', null, [
		'Summon Undead Horde',
		'Ancient Plague',
		'Forbidden Knowledge',
		'Ceaseless Wealth'
	])
];
