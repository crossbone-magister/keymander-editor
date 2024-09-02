export class Keymander {
	id: string;
	frontName: string;
	backName: string | null;
	token: string | null;
	readonly name: string;
	readonly frontImage: string;
	readonly backImage: string;
	readonly tokenImage: string;

	constructor(
		id: string,
		frontName: string,
		backName: string | null = null,
		token: string | null = null
	) {
		this.id = id;
		this.frontName = frontName;
		this.backName = backName;
		this.token = token;
		this.name = this.backName != null ? `${this.frontName}/${this.backName}` : this.frontName;
		this.frontImage = this.backName != null ? `${this.id}a` : this.id;
		this.backImage = `${this.id}b`
		this.tokenImage = `${this.id}t`
	}

	canFlip(): boolean {
		return this.backName !== null;
	}
}

export const KEYMANDER_LIST: Keymander[] = [
	new Keymander('KM001', '"Bananas" Foster', null, 'Slips'),
	new Keymander('KM002', '"Friend" Brenetic', 'Brenetic Unleashed'),
	new Keymander('KM003', 'Abyssal Kraken'),
	new Keymander('KM004', 'Ancient Doll'),
	new Keymander('KM005', 'Aurelia, Otherworld Adventurer'),
	new Keymander('KM006', 'Æmber Smuggler'),
	new Keymander('KM007', 'Anomalous Ooze'),
	new Keymander('KM008', 'Arvir of People'),
	new Keymander('KM009', 'Bean Goblin'),
	new Keymander('KM010', 'Blossom Picker'),
	new Keymander('KM011', 'Bonus Bill'),
	new Keymander('KM012', 'Bucky Ten Lives'),
	new Keymander('KM013', 'Burstling Amalgam'),
	new Keymander('KM014', 'Clockwork Fanatic'),
	new Keymander('KM015', 'Clumsy Octo-Merchant'),
	new Keymander('KM016', 'Community Organizer', null, 'Citizen'),
	new Keymander('KM017', 'Despond'),
	new Keymander('KM018', 'Disembodied Hand'),
	new Keymander('KM019', 'Don Keyote'),
	new Keymander('KM020', 'Elrick the High', 'Elrick the Fallen'),
	new Keymander('KM021', 'FFG KeyForge Algorithm'),
	new Keymander('KM022', 'Fleet Mechanic'),
	new Keymander('KM023', 'Ghost of KeyForge Future'),
	new Keymander('KM024', 'Ghost Ship'),
	new Keymander('KM025', 'The Grand Archivist'),
	new Keymander('KM026', 'Greedy Shop Cat'),
	new Keymander('KM027', 'Grom-peak'),
	new Keymander('KM028', 'Iridescent Murmook'),
	new Keymander('KM029', 'Kaiju Kid'),
	new Keymander('KM030', 'Kailua the Tumultuous'),
	new Keymander('KM031', 'The Keyringmasters'),
	new Keymander('KM032', 'Knight in Really Shiny Armor'),
	new Keymander('KM033', 'Legatus Rex'),
	new Keymander('KM034', 'Lollop the Colossal'),
	new Keymander('KM035', 'Mama Bird'),
	new Keymander('KM036', 'Memory Bug'),
	new Keymander('KM037', 'Mess Officer "Puddin"'),
	new Keymander('KM038', 'Mimic Reed'),
	new Keymander('KM039', 'Ms. Menagerie'),
	new Keymander('KM040', 'One with Life', null, 'Trubble'),
	new Keymander('KM041', 'Praefectus Festa'),
	new Keymander('KM042', 'Primordial Heart', 'Primordial Serpent'),
	new Keymander('KM043', 'Professor MemNo.0'),
	new Keymander('KM044', 'Rat Queen'),
	new Keymander('KM045', 'Reclusive Assassin'),
	new Keymander('KM046', 'Reepo', null, 'Scrap'),
	new Keymander('KM047', 'Re-inventor'),
	new Keymander('KM048', 'Sampling Blug'),
	new Keymander('KM049', 'Sidewinder', 'Sideloseder'),
	new Keymander('KM050', 'Silver Tania'),
	new Keymander('KM051', 'Sixuno'),
	new Keymander('KM052', 'Smokebeard'),
	new Keymander('KM053', 'Soothsaye', null, 'Doomer'),
	new Keymander('KM054', 'Soul Armorer'),
	new Keymander('KM055', 'Soulchainer'),
	new Keymander('KM056', 'Sower of Discord'),
	new Keymander('KM057', 'Spectral Investigator'),
	new Keymander('KM058', 'Splashy Spencer'),
	new Keymander('KM059', 'Star Ambassador'),
	new Keymander('KM060', 'Student of Nihilism'),
	new Keymander('KM061', 'Sue Kortney Shoobs', null, 'Buccaneer'),
	new Keymander('KM062', 'Transient Benefactor'),
	new Keymander('KM063', 'Transmog'),
	new Keymander('KM064', 'Trio of Terror'),
	new Keymander('KM065', 'Vyxl Juicemaker'),
	new Keymander('KM066', 'Weirdo', null, 'Wild Worm')
];
