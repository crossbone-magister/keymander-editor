var T=Object.defineProperty;var R=(i,e,n)=>e in i?T(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var l=(i,e,n)=>R(i,typeof e!="symbol"?e+"":e,n);import{s as P,V as v,t as O,d as G,i as k,f,r as J,e as g,a as L,c as _,b as S,g as z,m as b,h as y,o as H,u as W,v as V,w as X,n as q,C as Q}from"./scheduler.CTfPDUWl.js";import{S as A,i as C,c as B,a as N,m as F,t as m,b as M,d as I,g as U,e as Y}from"./index.m6TkT-m_.js";import{I as Z,C as $}from"./Constants.BzVvR65_.js";function j(i){let e;return{c(){e=O("❌")},l(n){e=G(n,"❌")},m(n,s){k(n,e,s)},d(n){n&&f(e)}}}function x(i){let e,n;return e=new Z({props:{title:"Close",$$slots:{default:[j]},$$scope:{ctx:i}}}),e.$on("click",i[0]),{c(){B(e.$$.fragment)},l(s){N(e.$$.fragment,s)},m(s,a){F(e,s,a),n=!0},p(s,[a]){const c={};a&4&&(c.$$scope={dirty:a,ctx:s}),e.$set(c)},i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){M(e.$$.fragment,s),n=!1},d(s){I(e,s)}}}function ee(i){const e=v();function n(){e("close")}return[n]}class te extends A{constructor(e){super(),C(this,e,ee,x,P,{})}}function E(i){let e,n,s;return n=new te({}),n.$on("close",i[2]),{c(){e=g("p"),B(n.$$.fragment),this.h()},l(a){e=_(a,"P",{class:!0});var c=S(e);N(n.$$.fragment,c),c.forEach(f),this.h()},h(){b(e,"class","svelte-1yc9bl2")},m(a,c){k(a,e,c),F(n,e,null),s=!0},p:q,i(a){s||(m(n.$$.fragment,a),s=!0)},o(a){M(n.$$.fragment,a),s=!1},d(a){a&&f(e),I(n)}}}function ne(i){let e,n,s,a,c,w,o=!i[0]&&E(i);const K=i[5].default,u=J(K,i,i[4],null);return{c(){e=g("dialog"),o&&o.c(),n=L(),s=g("p"),u&&u.c(),this.h()},l(r){e=_(r,"DIALOG",{class:!0});var h=S(e);o&&o.l(h),n=z(h),s=_(h,"P",{class:!0});var p=S(s);u&&u.l(p),p.forEach(f),h.forEach(f),this.h()},h(){b(s,"class","svelte-1yc9bl2"),b(e,"class","message-dialog svelte-1yc9bl2")},m(r,h){k(r,e,h),o&&o.m(e,null),y(e,n),y(e,s),u&&u.m(s,null),i[6](e),a=!0,c||(w=H(e,"close",i[2]),c=!0)},p(r,[h]){r[0]?o&&(U(),M(o,1,1,()=>{o=null}),Y()):o?(o.p(r,h),h&1&&m(o,1)):(o=E(r),o.c(),m(o,1),o.m(e,n)),u&&u.p&&(!a||h&16)&&W(u,K,r,r[4],a?X(K,r[4],h,null):V(r[4]),null)},i(r){a||(m(o),m(u,r),a=!0)},o(r){M(o),M(u,r),a=!1},d(r){r&&f(e),o&&o.d(),u&&u.d(r),i[6](null),c=!1,w()}}}function se(i,e,n){let{$$slots:s={},$$scope:a}=e,{visible:c=!1}=e,{blocking:w=!1}=e,o;const K=v();function u(){K("close")}function r(){n(3,c=!1)}function h(){o&&o.showModal()}function p(){o&&(o.close(),u())}function D(d){Q[d?"unshift":"push"](()=>{o=d,n(1,o)})}return i.$$set=d=>{"visible"in d&&n(3,c=d.visible),"blocking"in d&&n(0,w=d.blocking),"$$scope"in d&&n(4,a=d.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&(c?h():p())},[w,o,r,c,a,s,D]}class he extends A{constructor(e){super(),C(this,e,se,ne,P,{visible:3,blocking:0})}}class t{constructor(e,n,s=null,a=null){l(this,"id");l(this,"frontName");l(this,"backName");l(this,"token");l(this,"name");l(this,"frontImage");l(this,"backImage");l(this,"tokenImage");this.id=e,this.frontName=n,this.backName=s,this.token=a,this.name=this.backName!=null?`${this.frontName}/${this.backName}`:this.frontName,this.frontImage=this.backName!=null?`${this.id}a`:this.id,this.backImage=`${this.id}b`,this.tokenImage=`${this.id}t`}canFlip(){return this.backName!==null}}const ae=[new t("KM001",'"Bananas" Foster',null,"Slips"),new t("KM002",'"Friend" Brenetic',"Brenetic Unleashed"),new t("KM003","Abyssal Kraken"),new t("KM004","Ancient Doll"),new t("KM005","Aurelia, Otherworld Adventurer"),new t("KM006","Æmber Smuggler"),new t("KM007","Anomalous Ooze"),new t("KM008","Arvir of People"),new t("KM009","Bean Goblin"),new t("KM010","Blossom Picker"),new t("KM011","Bonus Bill"),new t("KM012","Bucky Ten Lives"),new t("KM013","Burstling Amalgam"),new t("KM014","Clockwork Fanatic"),new t("KM015","Clumsy Octo-Merchant"),new t("KM016","Community Organizer",null,"Citizen"),new t("KM017","Despond"),new t("KM018","Disembodied Hand"),new t("KM019","Don Keyote"),new t("KM020","Elrick the High","Elrick the Fallen"),new t("KM021","FFG KeyForge Algorithm"),new t("KM022","Fleet Mechanic"),new t("KM023","Ghost of KeyForge Future"),new t("KM024","Ghost Ship"),new t("KM025","The Grand Archivist"),new t("KM026","Greedy Shop Cat"),new t("KM027","Grom-peak"),new t("KM028","Iridescent Murmook"),new t("KM029","Kaiju Kid"),new t("KM030","Kailua the Tumultuous"),new t("KM031","The Keyringmasters"),new t("KM032","Knight in Really Shiny Armor"),new t("KM033","Legatus Rex"),new t("KM034","Lollop the Colossal"),new t("KM035","Mama Bird"),new t("KM036","Memory Bug"),new t("KM037",'Mess Officer "Puddin"'),new t("KM038","Mimic Reed"),new t("KM039","Ms. Menagerie"),new t("KM040","One with Life",null,"Trubble"),new t("KM041","Praefectus Festa"),new t("KM042","Primordial Heart","Primordial Serpent"),new t("KM043","Professor MemNo.0"),new t("KM044","Rat Queen"),new t("KM045","Reclusive Assassin"),new t("KM046","Reepo",null,"Scrap"),new t("KM047","Re-inventor"),new t("KM048","Sampling Blug"),new t("KM049","Sidewinder","Sideloseder"),new t("KM050","Silver Tania"),new t("KM051","Sixuno"),new t("KM052","Smokebeard"),new t("KM053","Soothsaye",null,"Doomer"),new t("KM054","Soul Armorer"),new t("KM055","Soulchainer"),new t("KM056","Sower of Discord"),new t("KM057","Spectral Investigator"),new t("KM058","Splashy Spencer"),new t("KM059","Star Ambassador"),new t("KM060","Student of Nihilism"),new t("KM061","Sue Kortney Shoobs",null,"Buccaneer"),new t("KM062","Transient Benefactor"),new t("KM063","Transmog"),new t("KM064","Trio of Terror"),new t("KM065","Vyxl Juicemaker"),new t("KM066","Weirdo",null,"Wild Worm")];class ie{constructor(e,n){l(this,"name");l(this,"rarity");this.name=e,this.rarity=n}static fromJson(e){return new this(e.name,e.rarity)}}class oe{constructor(e,n,s){l(this,"id");l(this,"house");l(this,"cards");this.id=e,this.house=n,this.cards=s}static fromJson(e){const n=e.cards.map(s=>ie.fromJson(s));return new this(e.id,e.house,n)}}class de{constructor(e="New Keymander Deck",n=null,s=[]){l(this,"keymander");l(this,"pods");l(this,"name");l(this,"houseStats",new Map);this.name=e,this.keymander=n,this.pods=s,this.calculateStats()}addPod(e){return this.canAddPod(e),this.pods.push(e),this.calculateStats(),this}removePod(e){return this.pods=this.pods.filter(n=>n.id!==e.id),this.calculateStats(),this}clearPods(){return this.pods=[],this.calculateStats(),this}canAddPod(e){if(this.pods.length>=$.MAX_POD_PER_DECK)throw new Error("Keymander Deck is full");if(this.pods.find(n=>n.id===e.id))throw new Error(`Keymander deck already contains pod ${e.id}`);if(this.houseStats.has(e.house)&&this.houseStats.get(e.house)>=2)throw new Error(`Keymander deck cannot contain any more pods of house ${e.house}`);if(!this.houseStats.has(e.house)&&this.houseStats.size>=3)throw new Error("Keymander deck cannot contain any new houses.")}isComplete(){return this.name!==""&&this.keymander!==null&&this.pods.length==$.MAX_POD_PER_DECK}calculateStats(){this.houseStats=new Map,this.pods.forEach(e=>{const n=e.house;this.houseStats.has(n)||this.houseStats.set(n,0),this.houseStats.set(n,this.houseStats.get(n)+1)})}static empty(){return new this}static fromJson(e){const n=e.keymander!==null?ae.find(a=>(a==null?void 0:a.id)==e.keymander.id):null,s=e.pods.map(a=>oe.fromJson(a));return new this(e.name,n,s)}}export{ie as C,de as K,he as M,oe as P,ae as a};