var D=Object.defineProperty;var I=(i,n,t)=>n in i?D(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var l=(i,n,t)=>I(i,typeof n!="symbol"?n+"":n,t);import{s as v,V as B,t as G,d as O,i as y,f as K,r as L,e as p,a as z,c as _,b,g as H,m as k,h as S,o as J,u as V,v as W,w as U,n as Q,C as X}from"./scheduler.CTfPDUWl.js";import{S as E,i as P,c as A,a as T,m as F,t as w,b as f,d as N,g as q,e as Y}from"./index.m6TkT-m_.js";import{I as Z,C}from"./Constants.BzVvR65_.js";function x(i){let n;return{c(){n=G("❌")},l(t){n=O(t,"❌")},m(t,s){y(t,n,s)},d(t){t&&K(n)}}}function j(i){let n,t;return n=new Z({props:{title:"Close",$$slots:{default:[x]},$$scope:{ctx:i}}}),n.$on("click",i[0]),{c(){A(n.$$.fragment)},l(s){T(n.$$.fragment,s)},m(s,a){F(n,s,a),t=!0},p(s,[a]){const c={};a&4&&(c.$$scope={dirty:a,ctx:s}),n.$set(c)},i(s){t||(w(n.$$.fragment,s),t=!0)},o(s){f(n.$$.fragment,s),t=!1},d(s){N(n,s)}}}function ee(i){const n=B();function t(){n("close")}return[t]}class ne extends E{constructor(n){super(),P(this,n,ee,j,v,{})}}function $(i){let n,t,s;return t=new ne({}),t.$on("close",i[2]),{c(){n=p("p"),A(t.$$.fragment),this.h()},l(a){n=_(a,"P",{class:!0});var c=b(n);T(t.$$.fragment,c),c.forEach(K),this.h()},h(){k(n,"class","svelte-1yc9bl2")},m(a,c){y(a,n,c),F(t,n,null),s=!0},p:Q,i(a){s||(w(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){a&&K(n),N(t)}}}function te(i){let n,t,s,a,c,m,o=!i[0]&&$(i);const M=i[5].default,u=L(M,i,i[4],null);return{c(){n=p("dialog"),o&&o.c(),t=z(),s=p("p"),u&&u.c(),this.h()},l(r){n=_(r,"DIALOG",{class:!0});var h=b(n);o&&o.l(h),t=H(h),s=_(h,"P",{class:!0});var g=b(s);u&&u.l(g),g.forEach(K),h.forEach(K),this.h()},h(){k(s,"class","svelte-1yc9bl2"),k(n,"class","message-dialog svelte-1yc9bl2")},m(r,h){y(r,n,h),o&&o.m(n,null),S(n,t),S(n,s),u&&u.m(s,null),i[6](n),a=!0,c||(m=J(n,"close",i[2]),c=!0)},p(r,[h]){r[0]?o&&(q(),f(o,1,1,()=>{o=null}),Y()):o?(o.p(r,h),h&1&&w(o,1)):(o=$(r),o.c(),w(o,1),o.m(n,t)),u&&u.p&&(!a||h&16)&&V(u,M,r,r[4],a?U(M,r[4],h,null):W(r[4]),null)},i(r){a||(w(o),w(u,r),a=!0)},o(r){f(o),f(u,r),a=!1},d(r){r&&K(n),o&&o.d(),u&&u.d(r),i[6](null),c=!1,m()}}}function se(i,n,t){let{$$slots:s={},$$scope:a}=n,{visible:c=!1}=n,{blocking:m=!1}=n,o;const M=B();function u(){M("close")}function r(){t(3,c=!1)}function h(){o&&o.showModal()}function g(){o&&(o.close(),u())}function R(d){X[d?"unshift":"push"](()=>{o=d,t(1,o)})}return i.$$set=d=>{"visible"in d&&t(3,c=d.visible),"blocking"in d&&t(0,m=d.blocking),"$$scope"in d&&t(4,a=d.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&(c?h():g())},[m,o,r,c,a,s,R]}class he extends E{constructor(n){super(),P(this,n,se,te,v,{visible:3,blocking:0})}}class e{constructor(n,t,s,a=null,c=null,m=[]){l(this,"id");l(this,"version");l(this,"frontName");l(this,"backName");l(this,"token");l(this,"extraCards");l(this,"name");l(this,"frontImage");l(this,"backImage");l(this,"tokenImage");this.id=`${t}/${n}`,this.version=t,this.frontName=s,this.backName=a,this.token=c,this.extraCards=m,this.name=this.backName!=null?`${this.frontName}/${this.backName}`:this.frontName,this.frontImage=this.backName!=null?`${this.id}a`:this.id,this.backImage=`${this.id}b`,this.tokenImage=`${this.id}t`}canFlip(){return this.backName!==null}}const ae=[new e("KM001","1.1",'"Bananas" Foster',null,"Slips"),new e("KM002","1.1",'"Friend" Brenetic',"Brenetic Unleashed"),new e("KM003","1.1","Abyssal Kraken"),new e("KM004","1.1","Ancient Doll"),new e("KM005","1.1","Aurelia, Otherworld Adventurer"),new e("KM006","1.1","Æmber Smuggler"),new e("KM007","1.1","Anomalous Ooze"),new e("KM008","1.1","Arvir of People"),new e("KM009","1.1","Bean Goblin"),new e("KM010","1.1","Blossom Picker"),new e("KM011","1.1","Bonus Bill"),new e("KM012","1.1","Bucky Ten Lives"),new e("KM013","1.1","Burstling Amalgam"),new e("KM014","1.1","Clockwork Fanatic"),new e("KM015","1.1","Clumsy Octo-Merchant"),new e("KM016","1.1","Community Organizer",null,"Citizen"),new e("KM017","1.1","Despond"),new e("KM018","1.1","Disembodied Hand"),new e("KM019","1.1","Don Keyote"),new e("KM020","1.1","Elrick the High","Elrick the Fallen"),new e("KM021","1.1","FFG KeyForge Algorithm"),new e("KM022","1.1","Fleet Mechanic"),new e("KM023","1.1","Ghost of KeyForge Future"),new e("KM024","1.1","Ghost Ship"),new e("KM025","1.1","The Grand Archivist"),new e("KM026","1.1","Greedy Shop Cat"),new e("KM027","1.1","Grom-peak"),new e("KM028","1.1","Iridescent Murmook"),new e("KM029","1.1","Kaiju Kid"),new e("KM030","1.1","Kailua the Tumultuous"),new e("KM031","1.1","The Keyringmasters"),new e("KM032","1.1","Knight in Really Shiny Armor"),new e("KM033","1.1","Legatus Rex"),new e("KM034","1.1","Lollop the Colossal"),new e("KM035","1.1","Mama Bird"),new e("KM036","1.1","Memory Bug"),new e("KM037","1.1",'Mess Officer "Puddin"'),new e("KM038","1.1","Mimic Reed"),new e("KM039","1.1","Ms. Menagerie"),new e("KM040","1.1","One with Life",null,"Trubble"),new e("KM041","1.1","Praefectus Festa"),new e("KM042","1.1","Primordial Heart","Primordial Serpent"),new e("KM043","1.1","Professor MemNo.0"),new e("KM044","1.1","Rat Queen"),new e("KM045","1.1","Reclusive Assassin"),new e("KM046","1.1","Reepo",null,"Scrap"),new e("KM047","1.1","Re-inventor"),new e("KM048","1.1","Sampling Blug"),new e("KM049","1.1","Sidewinder","Sideloseder"),new e("KM050","1.1","Silver Tania"),new e("KM051","1.1","Sixuno"),new e("KM052","1.1","Smokebeard"),new e("KM053","1.1","Soothsaye",null,"Doomer"),new e("KM054","1.1","Soul Armorer"),new e("KM055","1.1","Soulchainer"),new e("KM056","1.1","Sower of Discord"),new e("KM057","1.1","Spectral Investigator"),new e("KM058","1.1","Splashy Spencer"),new e("KM059","1.1","Star Ambassador"),new e("KM060","1.1","Student of Nihilism"),new e("KM061","1.1","Sue Kortney Shoobs",null,"Buccaneer"),new e("KM062","1.1","Transient Benefactor"),new e("KM063","1.1","Transmog"),new e("KM064","1.1","Trio of Terror"),new e("KM065","1.1","Vyxl Juicemaker"),new e("KM066","1.1","Weirdo",null,"Wild Worm"),new e("KM001","2.0",'"Tiff" the Divider'),new e("KM002","2.0","Barrel Titan"),new e("KM003","2.0","Being Outside Time"),new e("KM004","2.0","Binary Researcher"),new e("KM005","2.0","Bräkken Band Manager"),new e("KM006","2.0","Crucible Doppelgänger"),new e("KM007","2.0","Eirĺkr, the Champ",null,"Challenger"),new e("KM008","2.0","Florticultist"),new e("KM009","2.0","Fragment of the Crucible"),new e("KM010","2.0","Giltspine Vizier"),new e("KM011","2.0","Key Cheetah"),new e("KM012","2.0","King Midas"),new e("KM013","2.0","Lord Kymoor",null,"Shadow Agent"),new e("KM014","2.0","Master Swindler"),new e("KM015","2.0","Miss Baker"),new e("KM016","2.0","Multiverse Exploiter","Multiversal Mistake"),new e("KM017","2.0","Narp Eternal"),new e("KM018","2.0","Pit Lady"),new e("KM019","2.0","Prisma Golem",null,"Rough Gem"),new e("KM020","2.0","Robbin' Hood"),new e("KM021","2.0","Rue Tene"),new e("KM022","2.0","The Thin One"),new e("KM023","2.0","Valindra's Bronze Heart","Valindra, the Undying Queen",null,["Summon Undead Horde","Ancient Plague","Forbidden Knowledge","Ceaseless Wealth"])];class ie{constructor(n,t){l(this,"name");l(this,"rarity");this.name=n,this.rarity=t}static fromJson(n){return new this(n.name,n.rarity)}}class oe{constructor(n,t,s){l(this,"id");l(this,"house");l(this,"cards");this.id=n,this.house=t,this.cards=s}static fromJson(n){const t=n.cards.map(s=>ie.fromJson(s));return new this(n.id,n.house,t)}}class de{constructor(n="New Keymander Deck",t=null,s=[]){l(this,"keymander");l(this,"pods");l(this,"name");l(this,"houseStats",new Map);this.name=n,this.keymander=t,this.pods=s,this.calculateStats()}addPod(n){return this.canAddPod(n),this.pods.push(n),this.calculateStats(),this}removePod(n){return this.pods=this.pods.filter(t=>t.id!==n.id),this.calculateStats(),this}clearPods(){return this.pods=[],this.calculateStats(),this}canAddPod(n){if(this.pods.length>=C.MAX_POD_PER_DECK)throw new Error("Keymander Deck is full");if(this.pods.find(t=>t.id===n.id))throw new Error(`Keymander deck already contains pod ${n.id}`);if(this.houseStats.has(n.house)&&this.houseStats.get(n.house)>=2)throw new Error(`Keymander deck cannot contain any more pods of house ${n.house}`);if(!this.houseStats.has(n.house)&&this.houseStats.size>=3)throw new Error("Keymander deck cannot contain any new houses.")}isComplete(){return this.name!==""&&this.keymander!==null&&this.pods.length==C.MAX_POD_PER_DECK}calculateStats(){this.houseStats=new Map,this.pods.forEach(n=>{const t=n.house;this.houseStats.has(t)||this.houseStats.set(t,0),this.houseStats.set(t,this.houseStats.get(t)+1)})}static empty(){return new this}static fromJson(n){const t=n.keymander!==null?ae.find(a=>(a==null?void 0:a.id)==n.keymander.id):null,s=n.pods.map(a=>oe.fromJson(a));return new this(n.name,t,s)}}export{ie as C,de as K,he as M,oe as P,ae as a};