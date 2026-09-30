// Official Aniimo Wiki form typings individually checked 2026-09-30.
const formLabels={"basic-form":"Standard","prismana-form":"Prismatic / Prismana","highland-form":"Highland Form","mountain-woods-form":"Mountain Woods Form","thunderstorm-form":"Thunderstorm Form","rainstorm-form":"Rainstorm Form","beach-form":"Beach Form","forest-form":"Forest Form","grassland-form":"Grassland Form","plateau-form":"Plateau Form","sea-of-flowers-form":"Sea of Flowers Form","snowfield-form":"Snowfield Form","cloudmist-form":"Cloudmist Form","mountain-form":"Mountain Form","mudflat-form":"Mudflat Form","bay-form":"Bay Form","nighttime-form":"Nighttime Form","towerwood-form":"Towerwood Form"};
const aniimoDex = [["001","Emberpup",[],[["basic-form",[0],"Unknown"],["highland-form",[0,5],"Unknown"],["mountain-woods-form",[0],"Unknown"]]],["002","Flameruff",[],[["basic-form",[0],"Unknown"],["highland-form",[0,5],"Unknown"],["mountain-woods-form",[0],"Unknown"]]],["003","Scorchhowl",[],[["basic-form",[0],"Unknown"],["highland-form",[0,5],"Unknown"],["mountain-woods-form",[0],"Unknown"],["thunderstorm-form",[0,3],"Unknown"],["prismana-form",[0],"Unknown"]]],["004","Inferlupa",[],[["basic-form",[0,8],"Unknown"],["prismana-form",[0,8],"Unknown"]]],["005","Celestis",[],[["basic-form",[8],"Unknown"]]],["006","Stellarys",[],[["basic-form",[8],"Fly"],["rainstorm-form",[8,1],"Fly"],["prismana-form",[8,4],"Fly"]]],["007","Chirpi",[],[["basic-form",[6],"Unknown"],["beach-form",[6,1],"Unknown"],["highland-form",[6,2],"Unknown"]]],["008","Tromber",[],[["basic-form",[6],"Fly"],["beach-form",[6,1],"Fly"],["highland-form",[6,2],"Fly"]]],["009","Cornet",[],[["basic-form",[6],"Fly"],["beach-form",[6,1],"Fly"],["highland-form",[6,2],"Fly"],["prismana-form",[6,3],"Fly"]]],["010","Tubster",[],[["basic-form",[6],"Unknown"],["beach-form",[6,1],"Unknown"],["highland-form",[6,2],"Unknown"]]],["011","Iris",[],[["basic-form",[2],"Unknown"],["forest-form",[2],"Unknown"],["grassland-form",[2],"Unknown"],["highland-form",[2],"Unknown"],["mountain-woods-form",[2],"Unknown"],["plateau-form",[2],"Unknown"],["prismana-form",[2],"Unknown"]]],["012","Irisal",[],[["basic-form",[2],"Unknown"],["forest-form",[2],"Unknown"],["grassland-form",[2],"Unknown"],["highland-form",[2],"Unknown"],["mountain-woods-form",[2],"Unknown"],["plateau-form",[2],"Unknown"],["prismana-form",[2],"Unknown"]]],["013","Skippy",[],[["basic-form",[1],"Unknown"],["sea-of-flowers-form",[1],"Unknown"],["snowfield-form",[1,4],"Unknown"]]],["014","Pranky",[],[["basic-form",[1],"Unknown"],["sea-of-flowers-form",[1],"Unknown"],["snowfield-form",[1,4],"Unknown"]]],["015","Glacy",[],[["basic-form",[1,4],"Unknown"],["sea-of-flowers-form",[1,4],"Unknown"],["snowfield-form",[1,4],"Unknown"],["prismana-form",[7,1],"Unknown"]]],["016","Leafy",[],[["basic-form",[2,1],"Unknown"]]],["017","Nimbi",[],[["basic-form",[6],"Unknown"],["cloudmist-form",[6],"Unknown"],["plateau-form",[6,4],"Unknown"],["rainstorm-form",[6,3],"Unknown"]]],["018","Turbo",[],[["basic-form",[6],"Unknown"],["cloudmist-form",[6],"Unknown"],["plateau-form",[6,4],"Unknown"],["rainstorm-form",[6,3],"Unknown"],["prismana-form",[8,6],"Unknown"]]],["019","Dreaple",[],[["basic-form",[8],"Unknown"]]],["020","Hummin",[],[["basic-form",[2],"Unknown"],["mountain-form",[2],"Unknown"]]],["021","Witchin",["Hexxin"],[["basic-form",[8,2],"Unknown"],["mountain-form",[8,2],"Unknown"],["prismana-form",[8,2],"Unknown"]]],["022","Tuckin",[],[["basic-form",[2],"Unknown"],["mountain-form",[5,2],"Unknown"]]],["023","Budclaw",[],[["basic-form",[5,2],"Tunnel"],["bay-form",[5],"Tunnel"],["beach-form",[5],"Tunnel"],["mudflat-form",[5],"Tunnel"]]],["024","Shrubclaw",[],[["basic-form",[5,2],"Tunnel"],["bay-form",[5],"Tunnel"],["beach-form",[5],"Tunnel"],["mudflat-form",[5],"Tunnel"]]],["025","Geoclaw",[],[["basic-form",[4],"Tunnel"]]],["026","Sparki",[],[["basic-form",[0],"Unknown"],["forest-form",[0],"Unknown"],["highland-form",[0],"Unknown"],["sea-of-flowers-form",[0],"Unknown"]]],["027","Flamerion",[],[["basic-form",[0],"Unknown"],["forest-form",[0],"Unknown"],["highland-form",[0],"Unknown"],["sea-of-flowers-form",[0],"Unknown"]]],["028","Flutternym",[],[["basic-form",[6],"Unknown"],["mountain-woods-form",[6,5],"Unknown"],["nighttime-form",[8,6],"Unknown"],["sea-of-flowers-form",[6,2],"Unknown"]]],["029","Gracewing",[],[["basic-form",[6],"Unknown"],["mountain-woods-form",[6,5],"Unknown"],["nighttime-form",[8,6],"Unknown"],["sea-of-flowers-form",[6,2],"Unknown"]]],["031","Eko",[],[["basic-form",[6],"Unknown"]]],["032","Eklue",[],[["basic-form",[6],"Unknown"]]],["033","Budsquire",[],[["basic-form",[2],"Unknown"],["towerwood-form",[2],"Unknown"]]],["034","Thornblade",[],[["basic-form",[2],"Unknown"],["thunderstorm-form",[2,3],"Unknown"],["towerwood-form",[2],"Unknown"],["prismana-form",[2,1],"Unknown"]]],["035","Melloblum",[],[["basic-form",[2],"Unknown"],["prismana-form",[7,2],"Unknown"]]],["036","Pomegg",[],[["basic-form",[2],"Unknown"],["highland-form",[2],"Unknown"],["sea-of-flowers-form",[2],"Unknown"],["snowfield-form",[2,4],"Unknown"]]],["037","Pomawk",[],[["basic-form",[2],"Unknown"],["highland-form",[2],"Unknown"],["sea-of-flowers-form",[2],"Unknown"],["snowfield-form",[2,4],"Unknown"]]],["038","Dewy",[],[["basic-form",[8],"Unknown"]]],["039","Fragrancier",[],[["basic-form",[8],"Fly"]]],["040","Wisptis",[],[["basic-form",[8],"Unknown"],["forest-form",[8,2],"Unknown"],["highland-form",[0,8],"Unknown"]]],["041","Ignitis",[],[["basic-form",[8],"Unknown"],["forest-form",[8,2],"Unknown"],["highland-form",[0,8],"Unknown"],["prismana-form",[0,8],"Unknown"]]],["042","Bonesky",[],[["basic-form",[4],"Unknown"],["nighttime-form",[8,4],"Unknown"]]],["043","Fenrier",[],[["basic-form",[4],"Unknown"],["nighttime-form",[8,4],"Unknown"]]],["044","Glynsera",[],[["basic-form",[4],"Unknown"],["nighttime-form",[8,4],"Unknown"],["prismana-form",[7,4],"Unknown"]]],["045","Bolty",[],[["basic-form",[3],"Unknown"],["mountain-woods-form",[3],"Unknown"]]],["046","Blazen",[],[["basic-form",[3],"Unknown"],["mountain-woods-form",[3],"Unknown"],["prismana-form",[8,3],"Unknown"]]],["047","Squarrel",[],[["basic-form",[0],"Unknown"]]],["048","Squashel",[],[["basic-form",[0],"Unknown"]]],["049","Susuta",[],[["basic-form",[1],"Unknown"],["nighttime-form",[1],"Unknown"]]],["050","Popota",[],[["basic-form",[1],"Unknown"],["nighttime-form",[1],"Unknown"]]],["051","Piopiota",["Pioiota"],[["basic-form",[1],"Unknown"],["nighttime-form",[8,1],"Unknown"]]],["052","Panpanta",[],[["basic-form",[1],"Unknown"],["nighttime-form",[1],"Unknown"],["prismana-form",[1],"Unknown"]]],["053","Shelly",[],[["basic-form",[1],"Unknown"]]],["054","Sheldon",[],[["basic-form",[1],"Unknown"]]],["055","Sherro",[],[["basic-form",[1],"Unknown"],["thunderstorm-form",[3,1],"Unknown"],["prismana-form",[7,1],"Unknown"]]],["056","Baleetle",[],[["basic-form",[5],"Unknown"],["snowfield-form",[5,4],"Unknown"]]],["057","Waleetle",[],[["basic-form",[5],"Unknown"],["snowfield-form",[5,4],"Unknown"],["prismana-form",[8,5],"Unknown"]]],["058","Bouldus",[],[["basic-form",[5],"Unknown"],["snowfield-form",[5,4],"Unknown"]]],["059","Fentuft",[],[["basic-form",[3],"Unknown"]]],["060","Fenmane",[],[["basic-form",[3],"Unknown"],["prismana-form",[7,3],"Unknown"]]],["061","Helmut",[],[["basic-form",[8],"Unknown"],["mountain-woods-form",[8],"Unknown"],["snowfield-form",[8,4],"Unknown"]]],["062","Pawney",[],[["basic-form",[8],"Unknown"],["mountain-woods-form",[8],"Unknown"],["snowfield-form",[8,4],"Unknown"],["prismana-form",[8],"Unknown"]]],["063","Rookey",[],[["basic-form",[8],"Unknown"],["mountain-woods-form",[8],"Unknown"],["snowfield-form",[8,4],"Unknown"]]],["064","Jawling",[],[["basic-form",[6],"Unknown"],["mountain-form",[6],"Unknown"]]],["065","Helmwhelp",[],[["basic-form",[6],"Unknown"],["mountain-form",[6],"Unknown"]]],["066","Helgon",[],[["basic-form",[6],"Unknown"],["mountain-form",[6],"Unknown"]]],["067","Infergon",[],[["basic-form",[0],"Fly"],["prismana-form",[0,6],"Fly"]]],["068","Cubbo",[],[["basic-form",[5],"Unknown"]]],["069","Grizbo",[],[["basic-form",[5],"Unknown"],["prismana-form",[8,5],"Unknown"]]],["070","Pebbling",[],[["basic-form",[5],"Tunnel"]]],["071","Lavazar",[],[["basic-form",[0,5],"Unknown"]]],["072","Magmarex",[],[["basic-form",[0,5],"Unknown"],["prismana-form",[0,8],"Unknown"]]],["073","Geodeback",[],[["basic-form",[5],"Tunnel"]]],["074","Minespine",[],[["basic-form",[5],"Tunnel"]]],["075","Cozite",[],[["basic-form",[5],"Unknown"]]],["076","Bailite",[],[["basic-form",[5],"Unknown"]]],["077","Bulbly",[],[["basic-form",[3],"Unknown"]]],["078","Veilfloat",[],[["basic-form",[3],"Unknown"]]],["079","Luminelle",[],[["basic-form",[3],"Unknown"],["rainstorm-form",[3,1],"Unknown"],["prismana-form",[7,3],"Unknown"]]],["080","Fahloo",[],[["basic-form",[1],"Unknown"]]],["081","Erlath",[],[["basic-form",[1],"Unknown"]]],["082","Besauce",[],[["basic-form",[3],"Unknown"]]],["10002","Dazmand",[],[["basic-form",[3],"Unknown"]]],["10003","Fulmintis",[],[["basic-form",[3],"Unknown"],["prismana-form",[7,3],"Unknown"]]],["11001","Little Fire Spirit",[],[["basic-form",[0],"Unknown"],["prismana-form",[0],"Unknown"]]],["99996","Lunara",[],[["basic-form",[7],"Unknown"]]],["99998","Helion",[],[["basic-form",[7],"Unknown"]]],["10001","Irisalis",[],[["prismana-form",[2],"Unknown"]]]].map(([id,name,aliases,forms])=>({id,name,aliases,forms:forms.map(([key,elements,spatial])=>({key,label:formLabels[key],elements,spatial,source:`https://wiki.aniimo.com/item/${id}/${key}`}))}));


;
const types=['Fire','Water','Grass','Lightning','Ice','Earth','Wind','Light','Dark'];
const colors=['#ff9a78','#77c9ff','#b4dd81','#ffe184','#a4e5ee','#d0ab85','#b8cbff','#fff3b5','#cfadf6'];
const glyphs=['♨','≈','♧','ϟ','❄','⬡','≋','☼','☾'];
const matrix=[ [.625,.625,1.6,1,1.6,.625,1,.625,1], [1.6,.625,.625,1,.625,1.6,1,.625,1], [.625,1.6,.625,1,1,1.6,1,.625,1], [1,1.6,1,.625,.625,.625,1.6,1,1], [.625,1.6,1,1.6,.625,.625,1,1,1], [1.6,.625,.625,1,1.6,.625,1,1,.625], [1,1,1.6,.625,1,1,.625,1,1.6], [1,1,1,.625,1,1,1.6,.625,1.6], [1,.625,1.6,1.6,1,1,.625,1.6,1] ];
const spatialTypes=['Unknown','Ranged','Fly','Pound','Tunnel'];const beats={Ranged:'Fly',Fly:'Pound',Pound:'Tunnel',Tunnel:'Ranged'};
function cls(v){return v>1?'good':v<1?'bad':''}function fmt(v){return Number(v.toFixed(4)).toString()}


;
// Form/skill facts: current official Aniimo Wiki, checked 2026-09-30.
// Pound tags use MetaBot's skill reference; no Spatial damage multiplier assumed.
const move=(name,element,range='Ground',community=false)=>({name,element,range,community});
const entry=(name,id,form,elements,atk,role,moves,mobility='',note='')=>({name,form,elements,atk,role,moves,mobility,note,source:`https://wiki.aniimo.com/item/${id}/${form}`});
const roster=[
entry('Irisalis','10001','prismana-form',[2],130,'DPS',[move('ATK',2,'Ranged')],'','Grass distance attacks; its clone mechanics reward coordinated skill and basic attack use.'),
entry('Grizbo','069','basic-form',[5],124,'DPS',[move('ATK',5)],'','Earth damage with an ATK-speed boost during its Enraged state.'),
entry('Sherro','055','basic-form',[1],121,'DPS',[move('Flowing Water Slash',1),move('Torrent Slam',1,'Pound',true)],'','Water terrain or absorbed water supports its Water damage trait.'),
entry('Scorchhowl','003','basic-form',[0],119,'DPS',[move('Fire Kick',0,'Pound',true)],'','Its trait rewards attacks against elementally countered targets.'),
entry('Infergon','067','basic-form',[0],125,'DPS',[move('ATK',0,'Ranged')],'Fly','Hot Breath attacks from the air; its trait rewards Fire Debuff setup.'),
entry('Thornblade','034','basic-form',[2],121,'DPS',[move('Thorny Rain',2)],'','Skill use builds Sword Dance stacks for stronger basic attacks.'),
entry('Fulmintis','10003','basic-form',[3],130,'DPS',[move('Lightning Rush',3)],'','Lightning Rush is a close-range attack. Exploration flight is not counted as combat flight.'),
entry('Fenmane','060','basic-form',[3],125,'DPS',[move('ATK',3,'Ranged')],'','Official basic attack description confirms distance attacks.'),
entry('Stellarys','006','basic-form',[8],125,'DPS',[move('ATK',8,'Ranged')],'Fly','Shooting Star Glide enables attacks while flying.'),
entry('Cornet','009','beach-form',[6,1],121,'DPS',[move('ATK',6,'Ranged'),move('Water Tornado',1)],'Fly','Use Take Off or its flying skill state for ground-attack evasion.'),
entry('Glynsera','044','prismana-form',[7,4],118,'DPS',[move('Ice Strikes',4),move('Prismana Slash',7)],'','Prismana Slash is explicitly described as firing Light blades. Its ranged counter tag is not assumed.'),
entry('Glynsera','044','nighttime-form',[8,4],118,'DPS',[move('Ice Strikes',4),move('Night Slash',8)],'','Night Slash is described as using Dark blades.'),
entry('Minespine','074','basic-form',[5],90,'BREAK',[move('ATK',5)],'Tunnel','Tunnel avoids ranged attacks while consuming stamina; Pound can launch it out.'),
entry('Panpanta','052','basic-form',[1],85,'BREAK',[move('ATK',1)],'','Water Break option; its trait benefits from an opposite-sex Susuta-family teammate.'),
entry('Glacy','015','basic-form',[1,4],95,'Heal',[move('ATK',1,'Ranged'),move('Ice Orb',4,'Ranged')],'','A healing option with a targeted Ice Orb that can freeze enemies.'),
entry('Sherro','055','prismana-form',[7,1],121,'DPS',[move('Flowing Water Slash',1),move('Torrent Slam',1,'Pound',true)],'','Light is a form element; this recommendation scores only its verified Water attack.'),
entry('Thornblade','034','prismana-form',[2,1],121,'DPS',[move('Thorny Rain',2)],'','Water is a form element; this recommendation scores its verified Grass attack.')
];


;
// Shared, pure matchup scoring. No page state or invented Spatial multiplier.
function spatialFit(a,m,state){if(state==='Tunnel')return m.range==='Pound'?2:m.range==='Ranged'?-2:0;if(state==='Fly')return m.range==='Ranged'?1:0;if(state==='Ranged')return a.mobility==='Tunnel'?1:0;if(state==='Pound')return a.mobility==='Fly'?1:0;return 0}
function comparePicks(a,b,estimate=false){return b.space-a.space||(estimate?b.product-a.product:b.strong-a.strong||a.weak-b.weak)||(b.a.role==='DPS')-(a.a.role==='DPS')||a.incomingWeak-b.incomingWeak||b.incomingResist-a.incomingResist||b.a.atk-a.a.atk||a.a.name.localeCompare(b.a.name)||a.a.form.localeCompare(b.a.form)}
function scoreAgainst(a,elements,state='Unknown',estimate=false){return a.moves.map(m=>{const factors=elements.map(d=>matrix[m.element][d]);return{a,m,factors,space:spatialFit(a,m,state),product:factors.reduce((x,y)=>x*y,1),strong:factors.filter(v=>v>1).length,weak:factors.filter(v=>v<1).length,incomingWeak:elements.reduce((n,d)=>n+a.elements.filter(e=>matrix[d][e]>1).length,0),incomingResist:elements.reduce((n,d)=>n+a.elements.filter(e=>matrix[d][e]<1).length,0)}}).sort((a,b)=>comparePicks(a,b,estimate))[0]}


;
const nameNormalize=s=>s.trim().toLowerCase().replace(/[^a-z0-9]/g,'');
const dexById=new Map(aniimoDex.map(a=>[a.id,a]));
const nameIndex=aniimoDex.map(a=>({a,normalized:nameNormalize(a.name),keys:[a.name,...a.aliases,a.id].map(nameNormalize)}));
function searchDex(query){const q=nameNormalize(query);if(!q)return[];return nameIndex.filter(r=>r.keys.some(n=>n.includes(q))).sort((a,b)=>Number(b.normalized===q)-Number(a.normalized===q)||Number(b.normalized.startsWith(q))-Number(a.normalized.startsWith(q))||a.a.name.localeCompare(b.a.name)).map(r=>r.a)}


;
function teamMatch(a,enemy){
  const r=scoreAgainst(a,enemy.elements,enemy.spatial);
  const reachUnconfirmed=enemy.spatial==='Fly'&&r.m.range!=='Ranged';
  const status=r.space<0?'Blocked':reachUnconfirmed?'Reach unconfirmed':r.strong&&r.weak?'Mixed':r.strong?'Advantage':r.weak?'Resisted':'Neutral';
  return{...r,enemy,status,covered:status==='Advantage'};
}
function compareTeamCounters(a,b){return b.covered-a.covered||a.blocked-b.blocked||a.uncertain-b.uncertain||a.resisted-b.resisted||a.mixed-b.mixed||b.spatialAdvantages-a.spatialAdvantages||(b.a.role==='DPS')-(a.a.role==='DPS')||a.incomingWeak-b.incomingWeak||b.a.atk-a.a.atk||a.a.name.localeCompare(b.a.name)||a.a.form.localeCompare(b.a.form)}
function rankTeamCounters(enemies){if(!enemies.length)return[];return roster.map(a=>{const matches=enemies.map(e=>teamMatch(a,e));return{a,matches,covered:matches.filter(m=>m.covered).length,blocked:matches.filter(m=>m.status==='Blocked').length,uncertain:matches.filter(m=>m.status==='Reach unconfirmed').length,resisted:matches.filter(m=>m.status==='Resisted').length,mixed:matches.filter(m=>m.status==='Mixed').length,spatialAdvantages:matches.filter(m=>m.space>0).length,incomingWeak:matches.reduce((n,m)=>n+m.incomingWeak,0)}}).sort(compareTeamCounters)}
function suggestCoverageCounters(ranked,limit=3){
  const selected=[],covered=new Set();
  while(selected.length<limit){
    const candidates=ranked.filter(r=>!selected.includes(r)).map(r=>({r,gain:r.matches.reduce((n,m,i)=>n+(m.covered&&!covered.has(i)?1:0),0)})).sort((a,b)=>b.gain-a.gain||compareTeamCounters(a.r,b.r));
    if(!candidates.length||candidates[0].gain===0)break;
    const best=candidates[0].r;selected.push(best);best.matches.forEach((m,i)=>{if(m.covered)covered.add(i)});
  }
  return{selected,covered};
}


;
// Official passive effects checked separately on every curated form, 2026-09-30.
// Plans and ordinal fit weights are theorycraft assumptions, not damage calculations.
const traitProfiles=[
  {
    "name": "Irisalis",
    "trait": "Bloom Cluster",
    "trigger": "rotation",
    "tags": [
      "damage",
      "ep",
      "sustain"
    ],
    "effect": "Clone beams deal 15 Might after Whirling Blossom Rain or a completed basic combo. Clone hits build Dance Power; 9 points halve the next skill’s EP cost. A fainted Irisalis can revive, with a 180-second cooldown.",
    "plan": "Create clones with Irisalis Shadow or Florae Descent, then complete basic combos and use Whirling Blossom Rain. The revival is a fallback, not guaranteed sustained healing."
  },
  {
    "name": "Grizbo",
    "trait": "Raging Rampage",
    "trigger": "rotation",
    "tags": [
      "damage",
      "ep"
    ],
    "effect": "Basic hits, EP spending and taking damage build Rage. At 100 Rage, Enraged lasts 20 seconds and grants 30% attack speed and skill damage plus 25% EP recovery.",
    "plan": "Build Rage with attacks and skills; Rock Smash can grant 100 Rage. Schedule damage during Enraged rather than assuming permanent uptime."
  },
  {
    "name": "Sherro",
    "trait": "Tidal Heart",
    "trigger": "water",
    "tags": [
      "damage"
    ],
    "effect": "Water terrain or water absorption grants 25% more Water damage for 20 seconds.",
    "plan": "Fight near water or absorb it before the Water damage window. The trait boosts Water damage; a Light form element does not receive this bonus."
  },
  {
    "name": "Scorchhowl",
    "trait": "Scorching Flames",
    "trigger": "advantage",
    "tags": [
      "damage"
    ],
    "effect": "Deals 25% more damage to elementally countered targets.",
    "plan": "Use the verified Fire attack against clear Fire-advantage targets. Mixed-element targets are left uncertain rather than credited as trait triggers."
  },
  {
    "name": "Infergon",
    "trait": "Power of Fire",
    "trigger": "fire",
    "tags": [
      "damage"
    ],
    "effect": "Deals 30% more damage when the target has over 5 Fire Debuff stacks.",
    "plan": "Lava Breath or Hot Breath applies 8 Fire Debuff stacks. Set up the target before damage; Flaming Claws consumes stacks, so recheck the threshold."
  },
  {
    "name": "Thornblade",
    "trait": "Sword Dance",
    "trigger": "rotation",
    "tags": [
      "damage"
    ],
    "effect": "Skill use adds a Sword Dance stack for 15 seconds, capped at 4. A basic attack spends one stack for 180% extra damage.",
    "plan": "Weave basic attacks between skills to spend Sword Dance. The bonus belongs to the empowered basic hit, not every hit of Thorny Rain."
  },
  {
    "name": "Fulmintis",
    "trait": "Electro Stash",
    "trigger": "crit",
    "tags": [
      "ep"
    ],
    "effect": "A critical skill hit restores 4 EP.",
    "plan": "Lightning Surge raises skill critical rate by 35% for 20 seconds. Use the crit window for repeated skill hits; no critical hit or EP refund is guaranteed."
  },
  {
    "name": "Fenmane",
    "trait": "Thunderbond",
    "trigger": "rotation",
    "tags": [
      "damage"
    ],
    "effect": "Attack hits build Thunderbond. At 30 stacks, the next skill or ultimate enters Thunderwing Stance for 10 seconds.",
    "plan": "Build 30 hits before the burst skill or ultimate. Thunderfeather Volley fires extra arrows and an explosion in the stance; avoid assuming the stance at battle start."
  },
  {
    "name": "Stellarys",
    "trait": "Grand Sorcerer",
    "trigger": "rotation",
    "tags": [
      "damage"
    ],
    "effect": "For 5 seconds after a skill, basic hits gain 6 Might of additional damage.",
    "plan": "Follow a skill with distance basic attacks inside the five-second window. This additional Might is not a universal damage percentage."
  },
  {
    "name": "Cornet",
    "trait": "Air Superiority",
    "trigger": "flight",
    "tags": [
      "damage"
    ],
    "effect": "Flying grants 20% more critical rate.",
    "plan": "Enter combat Fly with Take Off or a suitable skill. Airborne Cornet takes more damage, so the offensive gain comes with a survival tradeoff."
  },
  {
    "name": "Glynsera",
    "trait": "Biting Wind",
    "trigger": "ice",
    "tags": [
      "damage"
    ],
    "effect": "Damage against a target with over 5 Ice Debuff stacks gains 15% critical rate.",
    "plan": "Ice Strikes applies 5 stacks, which alone is below the trigger. Add further stacks, for example with Boomerang Blade, before the damage window. Frost Tail Strike can consume stacks."
  },
  {
    "name": "Minespine",
    "trait": "Earth Affinity",
    "trigger": "tunnel",
    "tags": [
      "break"
    ],
    "effect": "While tunneling, Minespine can cast skills and deals 20% extra BREAK.",
    "plan": "Enter Tunnel before applying BREAK pressure. The bonus improves BREAK rather than ordinary damage; enemy Pound can launch Minespine out of Tunnel."
  },
  {
    "name": "Panpanta",
    "trait": "Appeal",
    "trigger": "family",
    "tags": [
      "break"
    ],
    "effect": "Entering battle with an opposite-sex Susuta-family teammate grants 30% BREAK efficiency for 15 seconds, with a 20-second cooldown.",
    "plan": "An actual opposite-sex Susuta-family ally is required. This planner does not know genders or include a second family member, so it does not credit Appeal as active."
  },
  {
    "name": "Glacy",
    "trait": "Water Spirit",
    "trigger": "water",
    "tags": [
      "ep"
    ],
    "effect": "Standing in water terrain reduces all skill EP costs by 16%.",
    "plan": "Keep Glacy in water terrain for cheaper skills. This is an EP discount, not healing amplification. A Water element or absorbing water alone does not establish water terrain."
  }
];
const traitDefaults={goal:'balanced',water:false,fire:false,ice:false,flight:false,tunnel:false,rotation:false,crit:false};
const traitGoals=['balanced','damage','sustain','break'];
function normalizeTraitOptions(value){
  const clean={...traitDefaults};
  if(!value||typeof value!=='object')return clean;
  if(traitGoals.includes(value.goal))clean.goal=value.goal;
  for(const key of Object.keys(traitDefaults))if(key!=='goal')clean[key]=value[key]===true;
  return clean;
}
const traitProfilesByName=new Map(traitProfiles.map(p=>[p.name,p]));
function traitFor(a){return traitProfilesByName.get(a.name)||null}
function traitFit(r,options=traitDefaults){
  const p=traitFor(r.a),o=normalizeTraitOptions(options);
  if(!p)return{profile:null,ready:false,status:'Not checked',eligible:0,fit:0};
  const reachable=r.matches.filter(m=>!['Blocked','Reach unconfirmed'].includes(m.status));
  const eligible=p.trigger==='advantage'?reachable.filter(m=>m.covered):p.name==='Sherro'?reachable.filter(m=>m.m.element===1):reachable;
  const ready=eligible.length>0&&(p.trigger==='advantage'||o[p.trigger]===true);
  const status=!eligible.length?'No confirmed applicable matchup':p.trigger==='family'?'Family teammate required':ready?p.trigger==='advantage'?'Matchup trigger available':'Planned trigger':'Setup needed';
  const goalTag={damage:'damage',sustain:'ep',break:'break'}[o.goal];
  const weight=o.goal==='balanced'?1:p.tags.includes(goalTag)?2:1;
  return{profile:p,ready,status,eligible:eligible.length,fit:ready?weight:0};
}
function traitSynergyNotes(group){
  const names=new Set(group.map(r=>r.a.name)),notes=[];
  if(names.has('Sherro')&&names.has('Glacy'))notes.push('Water plan: Sherro needs water or absorption; Glacy specifically needs water terrain. Glacy’s Spring of Life creates a water zone, but verify that it satisfies each trigger in combat. No automatic activation is credited.');
  if(names.has('Panpanta')&&(names.has('Sherro')||names.has('Glacy')))notes.push('Puddle setup: Panpanta’s Water Cannon creates a puddle. This may help the Water plan, but a puddle is not automatically credited as water terrain or successful absorption.');
  if(names.has('Fenmane')&&names.has('Fulmintis'))notes.push('Skill-assisted Lightning plan: Fenmane’s Thunder Field responds to Lightning hits; Fulmintis can supply repeated Lightning skill hits. Build Thunderbond and use Fulmintis’s crit window. Buff sharing and stack transfer are not assumed.');
  if(names.has('Glynsera')&&names.has('Glacy'))notes.push('Ice caution: Glacy’s Ice Orb freezes; its listed description does not confirm Ice Debuff stacks. Set up Glynsera’s own stacks rather than treating Frozen as Biting Wind’s trigger.');
  return notes;
}
function scoreTraitGroup(group,options,fitByCandidate=null){
  const o=fitByCandidate?options:normalizeTraitOptions(options),covered=new Set(),reachable=new Set();
  let blocked=0,uncertain=0,resisted=0,fit=0;
  for(const r of group){
    r.matches.forEach((m,i)=>{if(m.covered)covered.add(i);if(!['Blocked','Reach unconfirmed'].includes(m.status))reachable.add(i)});
    blocked+=r.blocked;uncertain+=r.uncertain;resisted+=r.resisted;
    fit+=fitByCandidate?.get(r)??traitFit(r,o).fit;
  }
  const roles=new Set(group.map(r=>r.a.role));
  // Small, explicit preference weights, separate from matchup factors.
  if(o.goal==='balanced')fit+=(roles.has('DPS')?1:0)+(roles.has('Heal')?2:0)+(roles.has('BREAK')?2:0);
  if(o.goal==='damage')fit+=roles.has('DPS')?2:0;
  if(o.goal==='sustain')fit+=roles.has('Heal')?4:0;
  if(o.goal==='break')fit+=roles.has('BREAK')?4:0;
  return{selected:group,covered,reachable,fit,blocked,uncertain,resisted,key:group.map(r=>r.a.name+'/'+r.a.form).sort().join('|')};
}
function compareTraitGroups(a,b){return b.covered.size-a.covered.size||b.reachable.size-a.reachable.size||b.fit-a.fit||a.blocked-b.blocked||a.uncertain-b.uncertain||a.resisted-b.resisted||a.selected.length-b.selected.length||a.key.localeCompare(b.key)}
function suggestTraitTeams(ranked,options=traitDefaults){
  const o=normalizeTraitOptions(options),fitByCandidate=new Map(ranked.map(r=>[r,traitFit(r,o).fit]));
  const candidates=ranked.filter(r=>r.matches.some(m=>!['Blocked','Reach unconfirmed'].includes(m.status))),groups=[];
  function visit(start,group){
    if(group.length)groups.push(scoreTraitGroup(group,o,fitByCandidate));
    if(group.length===3)return;
    for(let i=start;i<candidates.length;i++)if(!group.some(r=>r.a.name===candidates[i].a.name))visit(i+1,[...group,candidates[i]]);
  }
  visit(0,[]);
  return groups.sort(compareTraitGroups).slice(0,3);
}


;
const battleSkillCatalog=[
  {
    "name": "Irisalis",
    "skills": [
      {
        "name": "Whirling Blossom Rain",
        "kind": "skill",
        "element": 2,
        "power": 60,
        "breakPower": 0,
        "cooldown": null,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/irisalis",
        "official": "https://wiki.aniimo.com/item/10001/prismana-form",
        "key": "whirling-blossom-rain",
        "effect": {
          "cloneBeam": true
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Unknown cooldown; model input required"
      },
      {
        "name": "Irisalis Shadow",
        "kind": "skill",
        "element": 2,
        "power": 90,
        "breakPower": 0,
        "cooldown": null,
        "cost": 40,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/irisalis",
        "official": "https://wiki.aniimo.com/item/10001/prismana-form",
        "key": "irisalis-shadow",
        "effect": {
          "addClone": true,
          "duration": 30
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 5,
        "timingStatus": "Unknown cooldown; model input required"
      },
      {
        "name": "Florae Descent",
        "kind": "ultimate",
        "element": 2,
        "power": 240,
        "breakPower": 0,
        "cooldown": null,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/irisalis",
        "official": "https://wiki.aniimo.com/item/10001/prismana-form",
        "key": "florae-descent",
        "effect": {
          "addClone": true,
          "duration": 30
        },
        "cast": 1.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 6,
        "timingStatus": "Unknown cooldown; model input required"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 2,
        "power": 6,
        "breakPower": 0,
        "cooldown": null,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/irisalis",
        "official": "https://wiki.aniimo.com/item/10001/prismana-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 1,
        "timingStatus": "Unknown cooldown; model input required"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/irisalis"
  },
  {
    "name": "Grizbo",
    "skills": [
      {
        "name": "Claw of Madness",
        "kind": "skill",
        "element": 8,
        "power": 30,
        "breakPower": 10,
        "cooldown": null,
        "cost": 10,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/grizbo",
        "official": "https://wiki.aniimo.com/item/069/basic-form",
        "key": "claw-of-madness",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": "prismana-form",
        "weight": 3,
        "timingStatus": "Unknown cooldown; model input required"
      },
      {
        "name": "Fanatic Clawing",
        "kind": "skill",
        "element": 5,
        "power": 30,
        "breakPower": 10,
        "cooldown": null,
        "cost": 10,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/grizbo",
        "official": "https://wiki.aniimo.com/item/069/basic-form",
        "key": "fanatic-clawing",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Unknown cooldown; model input required"
      },
      {
        "name": "Earthquake",
        "kind": "skill",
        "element": 5,
        "power": 38,
        "breakPower": 12.7,
        "cooldown": 10,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/grizbo",
        "official": "https://wiki.aniimo.com/item/069/basic-form",
        "key": "earthquake",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Critical Hit",
        "kind": "skill",
        "element": 5,
        "power": 90,
        "breakPower": 30,
        "cooldown": 1,
        "cost": 30,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/grizbo",
        "official": "https://wiki.aniimo.com/item/069/basic-form",
        "key": "critical-hit",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Rock Smash",
        "kind": "ultimate",
        "element": 5,
        "power": 260,
        "breakPower": 86.7,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 200,
        "source": "https://aniimoguide.com/aniidex/grizbo",
        "official": "https://wiki.aniimo.com/item/069/basic-form",
        "key": "rock-smash",
        "effect": {
          "enrage": true
        },
        "cast": 1.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 5,
        "power": 6,
        "breakPower": 1.6,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/grizbo",
        "official": "https://wiki.aniimo.com/item/069/basic-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/grizbo"
  },
  {
    "name": "Sherro",
    "skills": [
      {
        "name": "Flowing Water Slash",
        "kind": "skill",
        "element": 1,
        "power": 70,
        "breakPower": 23.3,
        "cooldown": 5,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/sherro",
        "official": "https://wiki.aniimo.com/item/055/basic-form",
        "key": "flowing-water-slash",
        "effect": {
          "waterBonus": 0.3
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Prismana Slam",
        "kind": "skill",
        "element": 7,
        "power": 47,
        "breakPower": 23.5,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/sherro",
        "official": "https://wiki.aniimo.com/item/055/basic-form",
        "key": "prismana-slam",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": "prismana-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Torrent Slam",
        "kind": "skill",
        "element": 1,
        "power": 47,
        "breakPower": 23.5,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/sherro",
        "official": "https://wiki.aniimo.com/item/055/basic-form",
        "key": "torrent-slam",
        "effect": {
          "waterBonus": 0.3,
          "waterBuff": 0.15,
          "duration": 20
        },
        "cast": 1,
        "hits": 1,
        "range": "Pound",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Thunder Slam",
        "kind": "skill",
        "element": 3,
        "power": 47,
        "breakPower": 23.5,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/sherro",
        "official": "https://wiki.aniimo.com/item/055/basic-form",
        "key": "thunder-slam",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": "thunderstorm-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Hydro Roll",
        "kind": "skill",
        "element": 1,
        "power": 83,
        "breakPower": 41.5,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/sherro",
        "official": "https://wiki.aniimo.com/item/055/basic-form",
        "key": "hydro-roll",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 1,
        "power": 6,
        "breakPower": 1.6,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/sherro",
        "official": "https://wiki.aniimo.com/item/055/basic-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Torrent Blade",
        "kind": "ultimate",
        "element": 1,
        "power": 160,
        "breakPower": 80,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/sherro",
        "official": "https://wiki.aniimo.com/item/055/basic-form",
        "key": "torrent-blade",
        "effect": {},
        "cast": 1.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/sherro"
  },
  {
    "name": "Scorchhowl",
    "skills": [
      {
        "name": "Fire Kick",
        "kind": "skill",
        "element": 0,
        "power": 72,
        "breakPower": 24,
        "cooldown": 15,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/scorchhowl",
        "official": "https://wiki.aniimo.com/item/003/basic-form",
        "key": "fire-kick",
        "effect": {
          "dodge": true
        },
        "cast": 1,
        "hits": 1,
        "range": "Pound",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Pebble Kick",
        "kind": "skill",
        "element": 5,
        "power": 40,
        "breakPower": 13.3,
        "cooldown": 15,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/scorchhowl",
        "official": "https://wiki.aniimo.com/item/003/basic-form",
        "key": "pebble-kick",
        "effect": {
          "dodge": true
        },
        "cast": 1,
        "hits": 1,
        "range": "Pound",
        "variant": "highland-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Burn Breaker",
        "kind": "skill",
        "element": 0,
        "power": 84,
        "breakPower": 42,
        "cooldown": 1,
        "cost": 30,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/scorchhowl",
        "official": "https://wiki.aniimo.com/item/003/basic-form",
        "key": "burn-breaker",
        "effect": {
          "charge": true
        },
        "cast": 2,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 5,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Lightning Kick",
        "kind": "skill",
        "element": 3,
        "power": 40,
        "breakPower": 13.3,
        "cooldown": 15,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/scorchhowl",
        "official": "https://wiki.aniimo.com/item/003/basic-form",
        "key": "lightning-kick",
        "effect": {
          "dodge": true,
          "control": 5
        },
        "cast": 1,
        "hits": 1,
        "range": "Pound",
        "variant": "thunderstorm-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Fire Bolt",
        "kind": "skill",
        "element": 0,
        "power": 30,
        "breakPower": 10,
        "cooldown": 1,
        "cost": 10,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/scorchhowl",
        "official": "https://wiki.aniimo.com/item/003/basic-form",
        "key": "fire-bolt",
        "effect": {
          "fire": 2,
          "duration": 5
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Falling Star",
        "kind": "ultimate",
        "element": 0,
        "power": 170,
        "breakPower": 56.7,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/scorchhowl",
        "official": "https://wiki.aniimo.com/item/003/basic-form",
        "key": "falling-star",
        "effect": {},
        "cast": 1.5,
        "hits": 1,
        "range": "Pound",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 0,
        "power": 6,
        "breakPower": 1.6,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/scorchhowl",
        "official": "https://wiki.aniimo.com/item/003/basic-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/scorchhowl"
  },
  {
    "name": "Infergon",
    "skills": [
      {
        "name": "Fiery Charge",
        "kind": "skill",
        "element": 0,
        "power": 60,
        "breakPower": 20,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/infergon",
        "official": "https://wiki.aniimo.com/item/067/basic-form",
        "key": "fiery-charge",
        "effect": {
          "shield": 0.05,
          "duration": 10
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Lava Breath",
        "kind": "skill",
        "element": 0,
        "power": 62,
        "breakPower": 31,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/infergon",
        "official": "https://wiki.aniimo.com/item/067/basic-form",
        "key": "lava-breath",
        "effect": {
          "fire": 8,
          "duration": 8
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Flaming Claws",
        "kind": "skill",
        "element": 0,
        "power": 45,
        "breakPower": 15,
        "cooldown": 1,
        "cost": 15,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/infergon",
        "official": "https://wiki.aniimo.com/item/067/basic-form",
        "key": "flaming-claws",
        "effect": {
          "consumeFire": 2,
          "bonusMight": 30
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Hot Breath",
        "kind": "ultimate",
        "element": 0,
        "power": 168,
        "breakPower": 56,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/infergon",
        "official": "https://wiki.aniimo.com/item/067/basic-form",
        "key": "hot-breath",
        "effect": {
          "fire": 8,
          "duration": 8
        },
        "cast": 1.5,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 0,
        "power": 6,
        "breakPower": 1.6,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/infergon",
        "official": "https://wiki.aniimo.com/item/067/basic-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Gale Charge",
        "kind": "skill",
        "element": 6,
        "power": 60,
        "breakPower": 20,
        "cooldown": null,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/infergon",
        "official": "https://wiki.aniimo.com/item/067/basic-form",
        "key": "gale-charge",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": "prismana-form",
        "weight": 3,
        "timingStatus": "Unknown cooldown; model input required"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/infergon"
  },
  {
    "name": "Thornblade",
    "skills": [
      {
        "name": "Thorny Defense",
        "kind": "skill",
        "element": 2,
        "power": 75,
        "breakPower": 33,
        "cooldown": 6,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/thornblade",
        "official": "https://wiki.aniimo.com/item/034/basic-form",
        "key": "thorny-defense",
        "effect": {
          "counter": true,
          "reduction": 0.2,
          "duration": 1
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Aqua Defense",
        "kind": "skill",
        "element": 1,
        "power": 75,
        "breakPower": 33,
        "cooldown": 15,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/thornblade",
        "official": "https://wiki.aniimo.com/item/034/basic-form",
        "key": "aqua-defense",
        "effect": {
          "counter": true,
          "reduction": 0.2,
          "duration": 1
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": "prismana-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Thorny Impact",
        "kind": "skill",
        "element": 2,
        "power": 57,
        "breakPower": 20,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/thornblade",
        "official": "https://wiki.aniimo.com/item/034/basic-form",
        "key": "thorny-impact",
        "effect": {
          "critBuff": 0.15,
          "duration": 15
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 5,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Lightning Impact",
        "kind": "skill",
        "element": 3,
        "power": 57,
        "breakPower": 47,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/thornblade",
        "official": "https://wiki.aniimo.com/item/034/basic-form",
        "key": "lightning-impact",
        "effect": {
          "critBuff": 0.15,
          "duration": 15
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": "thunderstorm-form",
        "weight": 5,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Thorny Rain",
        "kind": "skill",
        "element": 2,
        "power": 30,
        "breakPower": 13.3,
        "cooldown": 1,
        "cost": 10,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/thornblade",
        "official": "https://wiki.aniimo.com/item/034/basic-form",
        "key": "thorny-rain",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Elegant Waltz",
        "kind": "ultimate",
        "element": 2,
        "power": 172,
        "breakPower": 43,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/thornblade",
        "official": "https://wiki.aniimo.com/item/034/basic-form",
        "key": "elegant-waltz",
        "effect": {},
        "cast": 1.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 2,
        "power": 6,
        "breakPower": 1.6,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/thornblade",
        "official": "https://wiki.aniimo.com/item/034/basic-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/thornblade"
  },
  {
    "name": "Fulmintis",
    "skills": [
      {
        "name": "Lightning Rush",
        "kind": "skill",
        "element": 3,
        "power": 35,
        "breakPower": 5.8,
        "cooldown": 1,
        "cost": 10,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/fulmintis",
        "official": "https://wiki.aniimo.com/item/10003/basic-form",
        "key": "lightning-rush",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Lightning Blade Impact",
        "kind": "skill",
        "element": 3,
        "power": 45,
        "breakPower": 7.5,
        "cooldown": 15,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/fulmintis",
        "official": "https://wiki.aniimo.com/item/10003/basic-form",
        "key": "lightning-blade-impact",
        "effect": {
          "control": 6
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Lightning Surge",
        "kind": "skill",
        "element": 3,
        "power": 0,
        "breakPower": 0,
        "cooldown": 18,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/fulmintis",
        "official": "https://wiki.aniimo.com/item/10003/basic-form",
        "key": "lightning-surge",
        "effect": {
          "critBuff": 0.35,
          "critScope": "skill",
          "duration": 20
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 5,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Enhanced Light Blade",
        "kind": "skill",
        "element": 7,
        "power": 0,
        "breakPower": 0,
        "cooldown": 18,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/fulmintis",
        "official": "https://wiki.aniimo.com/item/10003/basic-form",
        "key": "enhanced-light-blade",
        "effect": {
          "critBuff": 0.35,
          "critScope": "skill",
          "duration": 20
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": "prismana-form",
        "weight": 5,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 3,
        "power": 6,
        "breakPower": 1.6,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/fulmintis",
        "official": "https://wiki.aniimo.com/item/10003/basic-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Thunder Lance",
        "kind": "ultimate",
        "element": 3,
        "power": 180,
        "breakPower": 60,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/fulmintis",
        "official": "https://wiki.aniimo.com/item/10003/basic-form",
        "key": "thunder-lance",
        "effect": {
          "control": 3
        },
        "cast": 1.5,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/fulmintis"
  },
  {
    "name": "Fenmane",
    "skills": [
      {
        "name": "Thunder Field",
        "kind": "skill",
        "element": 3,
        "power": 1,
        "breakPower": 0.2,
        "cooldown": 8,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/fenmane",
        "official": "https://wiki.aniimo.com/item/060/basic-form",
        "key": "thunder-field",
        "effect": {
          "field": 8
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 5,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Lightning Dart",
        "kind": "skill",
        "element": 3,
        "power": 50,
        "breakPower": 8.3,
        "cooldown": 5,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/fenmane",
        "official": "https://wiki.aniimo.com/item/060/basic-form",
        "key": "lightning-dart",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Thunder Imprint",
        "kind": "skill",
        "element": 3,
        "power": 1,
        "breakPower": 0.2,
        "cooldown": 10,
        "cost": 30,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/fenmane",
        "official": "https://wiki.aniimo.com/item/060/basic-form",
        "key": "thunder-imprint",
        "effect": {
          "imprint": 8
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Radiant Dart",
        "kind": "skill",
        "element": 7,
        "power": 35,
        "breakPower": 5.8,
        "cooldown": 10,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/fenmane",
        "official": "https://wiki.aniimo.com/item/060/basic-form",
        "key": "radiant-dart",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": "prismana-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 3,
        "power": 6,
        "breakPower": 0.8,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/fenmane",
        "official": "https://wiki.aniimo.com/item/060/basic-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Thunderfeather Volley",
        "kind": "ultimate",
        "element": 3,
        "power": 100,
        "breakPower": 33.3,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/fenmane",
        "official": "https://wiki.aniimo.com/item/060/basic-form",
        "key": "thunderfeather-volley",
        "effect": {},
        "cast": 1.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/fenmane"
  },
  {
    "name": "Stellarys",
    "skills": [
      {
        "name": "Shadow Magic",
        "kind": "skill",
        "element": 8,
        "power": 0,
        "breakPower": 20,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/stellarys",
        "official": "https://wiki.aniimo.com/item/006/basic-form",
        "key": "shadow-magic",
        "effect": {
          "cloneBonus": 0.2,
          "duration": 20
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Chill Glide",
        "kind": "skill",
        "element": 4,
        "power": 74,
        "breakPower": 31,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/stellarys",
        "official": "https://wiki.aniimo.com/item/006/basic-form",
        "key": "chill-glide",
        "effect": {
          "ice": 1,
          "duration": 8
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": "prismana-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Shooting Star Glide",
        "kind": "skill",
        "element": 8,
        "power": 74,
        "breakPower": 31,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/stellarys",
        "official": "https://wiki.aniimo.com/item/006/basic-form",
        "key": "shooting-star-glide",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Starfall",
        "kind": "skill",
        "element": 8,
        "power": 40,
        "breakPower": 23.7,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/stellarys",
        "official": "https://wiki.aniimo.com/item/006/basic-form",
        "key": "starfall",
        "effect": {
          "damageBuff": 0.03,
          "duration": 20
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Aquatic Glide",
        "kind": "skill",
        "element": 1,
        "power": 74,
        "breakPower": 31,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/stellarys",
        "official": "https://wiki.aniimo.com/item/006/basic-form",
        "key": "aquatic-glide",
        "effect": {
          "drainEp": 3
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": "rainstorm-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Comet Aureus",
        "kind": "ultimate",
        "element": 8,
        "power": 166,
        "breakPower": 55.3,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/stellarys",
        "official": "https://wiki.aniimo.com/item/006/basic-form",
        "key": "comet-aureus",
        "effect": {},
        "cast": 1.5,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 8,
        "power": 6,
        "breakPower": 0.8,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/stellarys",
        "official": "https://wiki.aniimo.com/item/006/basic-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/stellarys"
  },
  {
    "name": "Cornet",
    "skills": [
      {
        "name": "Lightning Splitter",
        "kind": "skill",
        "element": 3,
        "power": 30,
        "breakPower": 5,
        "cooldown": 15,
        "cost": 10,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/cornet",
        "official": "https://wiki.aniimo.com/item/009/beach-form",
        "key": "lightning-splitter",
        "effect": {
          "control": 5
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": "prismana-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Wind Bomb Rush",
        "kind": "skill",
        "element": 6,
        "power": 157,
        "breakPower": 52.3,
        "cooldown": 1,
        "cost": 45,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/cornet",
        "official": "https://wiki.aniimo.com/item/009/beach-form",
        "key": "wind-bomb-rush",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Tornado",
        "kind": "skill",
        "element": 6,
        "power": 59,
        "breakPower": 9.8,
        "cooldown": 15,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/cornet",
        "official": "https://wiki.aniimo.com/item/009/beach-form",
        "key": "tornado",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Scream Splitter",
        "kind": "skill",
        "element": 6,
        "power": 30,
        "breakPower": 5,
        "cooldown": 1,
        "cost": 10,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/cornet",
        "official": "https://wiki.aniimo.com/item/009/beach-form",
        "key": "scream-splitter",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Water Tornado",
        "kind": "skill",
        "element": 1,
        "power": 45,
        "breakPower": 7.5,
        "cooldown": 15,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/cornet",
        "official": "https://wiki.aniimo.com/item/009/beach-form",
        "key": "water-tornado",
        "effect": {
          "drainEp": 4
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": "beach-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Leaf Tornado",
        "kind": "skill",
        "element": 2,
        "power": 45,
        "breakPower": 7.5,
        "cooldown": 15,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/cornet",
        "official": "https://wiki.aniimo.com/item/009/beach-form",
        "key": "leaf-tornado",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": "highland-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 6,
        "power": 6,
        "breakPower": 0.8,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/cornet",
        "official": "https://wiki.aniimo.com/item/009/beach-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Avian Harmony Ensemble",
        "kind": "ultimate",
        "element": 6,
        "power": 179,
        "breakPower": 29.8,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/cornet",
        "official": "https://wiki.aniimo.com/item/009/beach-form",
        "key": "avian-harmony-ensemble",
        "effect": {},
        "cast": 1.5,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/cornet"
  },
  {
    "name": "Glynsera",
    "skills": [
      {
        "name": "Frost Tail Strike",
        "kind": "skill",
        "element": 4,
        "power": 60,
        "breakPower": 20,
        "cooldown": 1,
        "cost": 15,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/glynsera",
        "official": "https://wiki.aniimo.com/item/044/prismana-form",
        "key": "frost-tail-strike",
        "effect": {
          "consumeIce": 10,
          "damageBonus": 0.85
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Boomerang Blade",
        "kind": "skill",
        "element": 4,
        "power": 39,
        "breakPower": 13,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/glynsera",
        "official": "https://wiki.aniimo.com/item/044/prismana-form",
        "key": "boomerang-blade",
        "effect": {
          "ice": 1,
          "duration": 8
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Prismana Slash",
        "kind": "skill",
        "element": 7,
        "power": 55,
        "breakPower": 18.3,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/glynsera",
        "official": "https://wiki.aniimo.com/item/044/prismana-form",
        "key": "prismana-slash",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": "prismana-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Ice Strikes",
        "kind": "skill",
        "element": 4,
        "power": 55,
        "breakPower": 18.3,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/glynsera",
        "official": "https://wiki.aniimo.com/item/044/prismana-form",
        "key": "ice-strikes",
        "effect": {
          "ice": 5,
          "duration": 8
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Night Slash",
        "kind": "skill",
        "element": 8,
        "power": 55,
        "breakPower": 18.3,
        "cooldown": 15,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/glynsera",
        "official": "https://wiki.aniimo.com/item/044/prismana-form",
        "key": "night-slash",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": "nighttime-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Ice Tornado",
        "kind": "ultimate",
        "element": 4,
        "power": 155,
        "breakPower": 51.7,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/glynsera",
        "official": "https://wiki.aniimo.com/item/044/prismana-form",
        "key": "ice-tornado",
        "effect": {},
        "cast": 1.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 4,
        "power": 6,
        "breakPower": 1.6,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/glynsera",
        "official": "https://wiki.aniimo.com/item/044/prismana-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/glynsera"
  },
  {
    "name": "Minespine",
    "skills": [
      {
        "name": "Earth Spikes",
        "kind": "skill",
        "element": 5,
        "power": 62,
        "breakPower": 20.7,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/minespine",
        "official": "https://wiki.aniimo.com/item/074/basic-form",
        "key": "earth-spikes",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Seismic Wave",
        "kind": "skill",
        "element": 5,
        "power": 120,
        "breakPower": 60,
        "cooldown": 1,
        "cost": 40,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/minespine",
        "official": "https://wiki.aniimo.com/item/074/basic-form",
        "key": "seismic-wave",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Stone Shell",
        "kind": "skill",
        "element": 5,
        "power": 30,
        "breakPower": 10,
        "cooldown": 1,
        "cost": 10,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/minespine",
        "official": "https://wiki.aniimo.com/item/074/basic-form",
        "key": "stone-shell",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Meteors",
        "kind": "ultimate",
        "element": 5,
        "power": 175,
        "breakPower": 58.3,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/minespine",
        "official": "https://wiki.aniimo.com/item/074/basic-form",
        "key": "meteors",
        "effect": {},
        "cast": 1.5,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 5,
        "power": 6,
        "breakPower": 1.6,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/minespine",
        "official": "https://wiki.aniimo.com/item/074/basic-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/minespine"
  },
  {
    "name": "Panpanta",
    "skills": [
      {
        "name": "Water Cannon",
        "kind": "skill",
        "element": 1,
        "power": 65,
        "breakPower": 32.5,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/panpanta",
        "official": "https://wiki.aniimo.com/item/052/basic-form",
        "key": "water-cannon",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Water Cannonade",
        "kind": "skill",
        "element": 1,
        "power": 40,
        "breakPower": 20,
        "cooldown": 1,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/panpanta",
        "official": "https://wiki.aniimo.com/item/052/basic-form",
        "key": "water-cannonade",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": "prismana-form",
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Hydro Roll",
        "kind": "skill",
        "element": 1,
        "power": 18,
        "breakPower": 7.2,
        "cooldown": 1,
        "cost": 30,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/panpanta",
        "official": "https://wiki.aniimo.com/item/052/basic-form",
        "key": "hydro-roll",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Splash Shield",
        "kind": "skill",
        "element": 1,
        "power": 30,
        "breakPower": 12,
        "cooldown": 15,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/panpanta",
        "official": "https://wiki.aniimo.com/item/052/basic-form",
        "key": "splash-shield",
        "effect": {
          "shield": 0.08,
          "duration": 15
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Home Run",
        "kind": "ultimate",
        "element": 1,
        "power": 176,
        "breakPower": 88,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/panpanta",
        "official": "https://wiki.aniimo.com/item/052/basic-form",
        "key": "home-run",
        "effect": {},
        "cast": 1.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 1,
        "power": 6,
        "breakPower": 1.6,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/panpanta",
        "official": "https://wiki.aniimo.com/item/052/basic-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/panpanta"
  },
  {
    "name": "Glacy",
    "skills": [
      {
        "name": "Healing Water",
        "kind": "skill",
        "element": 1,
        "power": 0,
        "breakPower": 0,
        "cooldown": 20,
        "cost": 20,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/glacy",
        "official": "https://wiki.aniimo.com/item/015/basic-form",
        "key": "healing-water",
        "effect": {
          "heal": 0.08,
          "selfHot": 0.12,
          "hotDuration": 5
        },
        "cast": 1,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 7,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Ice Orb",
        "kind": "skill",
        "element": 4,
        "power": 20,
        "breakPower": 1.3,
        "cooldown": 12,
        "cost": 10,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/glacy",
        "official": "https://wiki.aniimo.com/item/015/basic-form",
        "key": "ice-orb",
        "effect": {
          "control": 2.5
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Glimmer Shot",
        "kind": "skill",
        "element": 7,
        "power": 20,
        "breakPower": 3.3,
        "cooldown": 1,
        "cost": 10,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/glacy",
        "official": "https://wiki.aniimo.com/item/015/basic-form",
        "key": "glimmer-shot",
        "effect": {
          "teamBuff": 0.15,
          "onHit": true,
          "duration": 20
        },
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": "prismana-form",
        "weight": 5,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Bubble Rush",
        "kind": "skill",
        "element": 1,
        "power": 32,
        "breakPower": 2.1,
        "cooldown": 1,
        "cost": 10,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/glacy",
        "official": "https://wiki.aniimo.com/item/015/basic-form",
        "key": "bubble-rush",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Water Orb",
        "kind": "skill",
        "element": 1,
        "power": 30,
        "breakPower": 10,
        "cooldown": 1,
        "cost": 10,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/glacy",
        "official": "https://wiki.aniimo.com/item/015/basic-form",
        "key": "water-orb",
        "effect": {},
        "cast": 1,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 3,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "ATK",
        "kind": "basic",
        "element": 1,
        "power": 6,
        "breakPower": 0.8,
        "cooldown": 0.1,
        "cost": 0,
        "ultimateCost": 0,
        "source": "https://aniimoguide.com/aniidex/glacy",
        "official": "https://wiki.aniimo.com/item/015/basic-form",
        "key": "atk",
        "effect": {},
        "cast": 0.5,
        "hits": 1,
        "range": "Ranged",
        "variant": null,
        "weight": 1,
        "timingStatus": "Community timing reference; live patch unverified"
      },
      {
        "name": "Spring of Life",
        "kind": "ultimate",
        "element": 1,
        "power": 0,
        "breakPower": 0,
        "cooldown": 8,
        "cost": 0,
        "ultimateCost": 100,
        "source": "https://aniimoguide.com/aniidex/glacy",
        "official": "https://wiki.aniimo.com/item/015/basic-form",
        "key": "spring-of-life",
        "effect": {
          "teamHot": 0.36,
          "hotDuration": 6
        },
        "cast": 1.5,
        "hits": 1,
        "range": "Ground",
        "variant": null,
        "weight": 6,
        "timingStatus": "Community timing reference; live patch unverified"
      }
    ],
    "source": "https://aniimoguide.com/aniidex/glacy"
  }
];


;
// Experimental time model. Imported cooldowns are community references.
// Cast durations, stat/damage conversion, BREAK and AI behavior are editable assumptions.
const battleDefaults={trials:200,seed:42,timeLimit:120,epMax:60,epStart:60,epRegen:2,ultGain:20,damageScale:2,baseCrit:.1,critMultiplier:1.5,variance:.15,reachChance:.5,dodgeChance:.3,breakGauge:300,breakDuration:5,recoveryDuration:5,breakMultiplier:1.5,swapEvery:0,swapDelay:.5,stacking:'lowest',basicCombo:3,airborneMultiplier:1};
function battleNumber(value,min,max,fallback){if(value===null||value==='')return fallback;const n=Number(value);return Number.isFinite(n)?Math.min(max,Math.max(min,n)):fallback}
function normalizeBattleSettings(value={}){
  if(!value||typeof value!=='object')value={};
  const c={};
  const ranges={trials:[20,1000],seed:[0,4294967295],timeLimit:[10,300],epMax:[10,200],epStart:[0,200],epRegen:[0,20],ultGain:[0,100],damageScale:[.1,10],baseCrit:[0,1],critMultiplier:[1,3],variance:[0,.5],reachChance:[0,1],dodgeChance:[0,1],breakGauge:[50,2000],breakDuration:[0,20],recoveryDuration:[0,20],breakMultiplier:[1,3],swapEvery:[0,60],swapDelay:[0,5],basicCombo:[1,10],airborneMultiplier:[1,3]};
  for(const key of Object.keys(ranges))c[key]=battleNumber(value[key],...ranges[key],battleDefaults[key]);
  c.trials=Math.round(c.trials);c.seed=Math.round(c.seed);c.basicCombo=Math.round(c.basicCombo);c.epStart=Math.min(c.epStart,c.epMax);
  c.stacking=value.stacking==='product'?'product':'lowest';return c;
}
function battleRng(seed){let state=seed>>>0;return()=>{state=(state+0x6D2B79F5)>>>0;let x=Math.imul(state^(state>>>15),state|1);x^=x+Math.imul(x^(x>>>7),x|61);return((x^(x>>>14))>>>0)/4294967296}}
const battleCatalogByName=new Map(battleSkillCatalog.map(c=>[c.name,c]));
function battleCatalogFor(a){return battleCatalogByName.get(a.name)||null}
function battleFactor(element,elements,stacking){const v=elements.map(e=>matrix[element][e]);return stacking==='product'?v.reduce((a,b)=>a*b,1):Math.min(...v)}
function makeBattleSkill(raw,overrides={}){
  const cooldown=battleNumber(overrides.cooldown,0,120,raw.cooldown);
  return{...raw,cooldown,element:Math.round(battleNumber(overrides.element,0,8,raw.element)),range:['Ground','Ranged','Pound'].includes(overrides.range)?overrides.range:raw.range,cast:battleNumber(overrides.cast,.1,20,raw.cast),hits:Math.round(battleNumber(overrides.hits,1,20,1)),weight:battleNumber(overrides.weight,0,20,raw.weight),power:battleNumber(overrides.power,0,2000,raw.power),cost:battleNumber(overrides.cost,0,200,raw.cost),breakPower:battleNumber(overrides.breakPower,0,2000,raw.breakPower)};
}
function validateBattleSpec(spec){
  if(!spec||!spec.a||!Array.isArray(spec.skills)||spec.skills.length!==2||spec.skills.some(s=>s.kind!=='skill')||spec.skills[0].key===spec.skills[1].key)throw new Error('Each Aniimo needs exactly two distinct active skills.');
  if(spec.basic?.kind!=='basic'||spec.ultimate?.kind!=='ultimate')throw new Error('Each Aniimo needs a basic attack and one ultimate.');
  for(const s of [spec.basic,...spec.skills,spec.ultimate])if(s.cooldown===null||!Number.isFinite(s.cooldown)||s.cooldown<0||!Number.isFinite(s.cast)||s.cast<=0)throw new Error(spec.a.name+': enter the unknown cooldown/cast timing for '+s.name+'.');
  if(spec.script&&!/^(B|1|2|U)(\s*,\s*(B|1|2|U))*$/i.test(spec.script.trim()))throw new Error('Sequence must use B, 1, 2 and U separated by commas.');
}
function battleSkillCost(actor,skill,party,options){return skill.cost*(actor.a.name==='Glacy'&&options.water?.84:1)*(actor.discount&&skill.kind==='skill'?.5:1)}
function battlePriority(actor,target,party,skill,t,preset){
  const effect=skill.effect||{};
  let w=skill.weight;
  if(effect.heal||effect.teamHot){let low=1;for(const a of party.actors)if(a.hp>0)low=Math.min(low,a.hp/a.maxHp);if(low>.85)return 0;w*=1+(1-low)*6;if(preset==='sustain')w*=2}
  if(effect.teamBuff&&party.buffUntil>t+1)return 0;
  if(effect.critBuff&&actor.critUntil>t+1)return 0;
  if(effect.cloneBonus&&actor.cloneUntil>t+1)return 0;
  if(effect.addClone&&actor.clones>=2)return w*.1;
  if(effect.fire&&target.fire>5)w*=.35;
  if(effect.ice&&target.ice>5)w*=.35;
  if(effect.counter||effect.dodge){if(target.pending&&target.pending.at<=t+skill.cast+1)w*=2;else w*=.6}
  if(preset==='burst'&&(effect.charge||skill.kind==='ultimate')&&target.breakUntil<=t&&target.gauge>target.maxGauge*.25)w*=.15;
  if(target.breakUntil>t&&(effect.charge||skill.kind==='ultimate'))w*=3;
  if(preset==='break'&&target.breakUntil<=t)w*=1+skill.breakPower/50;
  if(preset==='aggressive'&&skill.power>0)w*=1+skill.power/100;
  return Math.max(0,w);
}
function selectBattleAction(actor,target,party,t,c,rng,options,metric){
  const equipped=actor.equipped;
  const available=s=>(actor.cooldowns[s.key]||0)<=t+1e-9&&party.ep+1e-9>=battleSkillCost(actor,s,party,options)&&(s.kind!=='ultimate'||actor.ult+1e-9>=s.ultimateCost);
  if(actor.sequence.length){
    const token=actor.sequence[actor.seqIndex%actor.sequence.length],slot={B:0,'1':1,'2':2,U:3}[token],planned=equipped[slot];
    if(available(planned)){actor.seqIndex++;return planned}
    metric.scriptWait+=.1;
    return available(equipped[0])?equipped[0]:null;
  }
  const weights=actor.weights;let total=0;
  for(let i=0;i<equipped.length;i++){weights[i]=available(equipped[i])?battlePriority(actor,target,party,equipped[i],t,actor.spec.preset||'burst'):0;total+=weights[i]}
  if(total<=0)return null;
  let draw=rng()*total;
  for(let i=0;i<equipped.length;i++)if(weights[i]>0){draw-=weights[i];if(draw<=0)return equipped[i]}
  return null;
}
function simulateTimedBattle(ownSpecs,enemySpecs,settings=battleDefaults,traitOptions=traitDefaults,recordTrace=false){
  if(!ownSpecs.length||ownSpecs.length>4||!enemySpecs.length||enemySpecs.length>64)throw new Error('Use one to four counters and at least one enemy.');
  ownSpecs.forEach(validateBattleSpec);enemySpecs.forEach(validateBattleSpec);
  const c=normalizeBattleSettings(settings),options=normalizeTraitOptions(traitOptions),rng=battleRng(c.seed);
  const newMetric=spec=>({name:spec.a.name,label:formLabels[spec.a.form]||spec.a.label||spec.a.form,damage:0,taken:0,healing:0,shielded:0,traitExtra:0,epSpent:0,epRefund:0,activeTime:0,epWait:0,cooldownWait:0,scriptWait:0,casts:0,blocked:0,reachMisses:0,kos:0,breaks:0,actions:{}});
  const result={wins:0,losses:0,draws:0,timeouts:0,duration:0,remainingHp:0,own:ownSpecs.map(newMetric),enemy:enemySpecs.map(newMetric),trace:[],trials:c.trials,config:c};
  function party(specs,side,metrics){return{side,ep:c.epStart,actors:specs.map((spec,i)=>({spec,a:spec.a,profileKnown:!!traitFor(spec.a),equipped:[spec.basic,...spec.skills,spec.ultimate],weights:[0,0,0,0],factors:new Map(),metric:metrics[i],hp:spec.hp||1000,maxHp:spec.hp||1000,atk:spec.atk||spec.a.atk||100,breakStat:spec.breakStat||100,controlResistance:spec.controlResistance||0,spatial:side==='enemy'?spec.a.spatial||'Unknown':spec.a.name==='Cornet'&&options.flight?'Fly':spec.a.name==='Minespine'&&options.tunnel?'Tunnel':'Unknown',ult:0,cooldowns:{},next:0,pending:null,sequence:(spec.script||'').toUpperCase().split(',').map(s=>s.trim()).filter(Boolean),seqIndex:0,gauge:c.breakGauge,maxGauge:c.breakGauge,breakUntil:0,recoveryUntil:0,controlUntil:0,fire:side==='enemy'&&options.fire?6:0,fireUntil:side==='enemy'&&options.fire?Infinity:0,ice:side==='enemy'&&options.ice?6:0,iceUntil:side==='enemy'&&options.ice?Infinity:0,critBuff:0,critScope:null,critUntil:0,buff:0,buffUntil:0,shield:0,shieldUntil:0,cloneBonus:0,cloneUntil:0,clones:0,clonesUntil:0,dance:0,discount:false,sword:0,swordUntil:0,lastSkill:-Infinity,basicHits:0,rage:0,enrageUntil:0,thunder:0,wingUntil:0,hot:[]})),active:0,lastSwap:0,buff:0,buffUntil:0};}
  function active(p){if(p.actors[p.active]?.hp>0)return p.actors[p.active];p.active=p.actors.findIndex(a=>a.hp>0);return p.actors[p.active]||null}
  function heal(actor,amount,metric){if(actor.hp<=0)return;const actual=Math.min(amount,actor.maxHp-actor.hp);actor.hp+=actual;metric.healing+=actual}
  function log(trial,t,text){if(recordTrace&&trial===0&&result.trace.length<160)result.trace.push({time:Number(t.toFixed(1)),text})}
  function apply(actor,target,own,other,skill,t,trial){
    const m=actor.metric,effect=skill.effect||{};
    let action=m.actions[skill.key];
    if(!action)action=m.actions[skill.key]={name:skill.name,casts:0,damage:0,healing:0,ep:0};action.casts++;
    const healingBefore=m.healing;
    if(effect.heal)for(const a of own.actors)heal(a,actor.maxHp*effect.heal,m);
    if(effect.selfHot)actor.hot.push({rate:actor.maxHp*effect.selfHot/effect.hotDuration,until:t+effect.hotDuration,metric:m});
    if(effect.teamHot)for(const a of own.actors)if(a.hp>0)a.hot.push({rate:actor.maxHp*effect.teamHot/effect.hotDuration,until:t+effect.hotDuration,metric:m});
    if(effect.teamBuff&&!effect.onHit){own.buff=effect.teamBuff;own.buffUntil=t+effect.duration}
    if(effect.critBuff){actor.critBuff=effect.critBuff;actor.critScope=effect.critScope||null;actor.critUntil=t+effect.duration}
    if(effect.shield){actor.shield=actor.maxHp*effect.shield;actor.shieldUntil=t+effect.duration}
    if(effect.cloneBonus){actor.cloneBonus=effect.cloneBonus;actor.cloneUntil=t+effect.duration}
    if(effect.addClone){actor.clones=Math.min(2,actor.clones+1);actor.clonesUntil=t+effect.duration}
    if(effect.reduction){actor.reduction=effect.reduction;actor.reductionUntil=t+effect.duration}
    if(effect.enrage){actor.rage=0;actor.enrageUntil=t+20}
    let damage=0;
    for(let hit=0;(skill.power>0||skill.breakPower>0)&&hit<skill.hits;hit++){
      if(target.hp<=0)break;
      if(target.spatial==='Tunnel'&&skill.range==='Ranged'){m.blocked++;continue}
      if(target.spatial==='Fly'&&skill.range!=='Ranged'&&rng()>=c.reachChance){m.reachMisses++;continue}
      let power=skill.power,traitPower=power,traitDamage=1,traitCrit=0;
      const name=actor.a.name,profileKnown=actor.profileKnown;
      if(profileKnown){
        if(name==='Stellarys'&&skill.kind==='basic'&&t-actor.lastSkill<=5)traitPower+=6;
        if(name==='Thornblade'&&skill.kind==='basic'&&actor.sword>0&&actor.swordUntil>t){traitPower*=2.8;actor.sword--}
        if(name==='Scorchhowl'){let strong=false,weak=false;for(const e of target.a.elements){const f=matrix[skill.element][e];strong ||= f>1;weak ||= f<1}if(strong&&!weak)traitDamage*=1.25}
        if(name==='Sherro'&&options.water&&skill.element===1)traitDamage*=1.25;
        if(name==='Infergon'&&target.fire>5)traitDamage*=1.3;
        if(name==='Cornet'&&actor.spatial==='Fly')traitCrit+=.2;
        if(name==='Glynsera'&&target.ice>5)traitCrit+=.15;
        if(name==='Grizbo'&&actor.enrageUntil>t&&skill.kind!=='basic')traitDamage*=1.3;
        if(name==='Fenmane'&&actor.wingUntil>t&&skill.name==='Thunderfeather Volley')traitPower=power*2+20;
      }
      if(effect.consumeFire&&target.fire>=effect.consumeFire){target.fire-=effect.consumeFire;power+=effect.bonusMight;traitPower+=effect.bonusMight}
      if(effect.consumeIce&&target.ice>=effect.consumeIce){target.ice-=effect.consumeIce;power*=1+effect.damageBonus;traitPower*=1+effect.damageBonus}
      if(options.water&&effect.waterBonus){power*=1+effect.waterBonus;traitPower*=1+effect.waterBonus}
      let buff=1+(own.buffUntil>t?own.buff:0)+(actor.buffUntil>t?actor.buff:0)+(actor.cloneUntil>t?actor.cloneBonus:0);
      if(effect.dodge&&rng()<c.dodgeChance){buff*=1.2;actor.buff=.2;actor.buffUntil=t+20}
      if(target.breakUntil>t||target.recoveryUntil>t)buff*=c.breakMultiplier;
      if(target.reductionUntil>t)buff*=1-(target.reduction||0);
      if(target.spatial==='Fly')buff*=c.airborneMultiplier;
      const roll=rng(),baseRate=Math.min(1,c.baseCrit+(actor.critUntil>t&&(!actor.critScope||skill.kind===actor.critScope)?actor.critBuff:0));
      const critical=roll<Math.min(1,baseRate+traitCrit),withoutCrit=roll<baseRate;
      let factors=actor.factors.get(target);if(!factors){factors=types.map((_,element)=>battleFactor(element,target.a.elements,c.stacking));actor.factors.set(target,factors)}
      const scale=c.damageScale*(actor.atk/100)*factors[skill.element]*(1-c.variance+rng()*2*c.variance)*buff;
      let dealt=traitPower*traitDamage*scale*(critical?c.critMultiplier:1);
      let extra=Math.max(0,dealt-power*scale*(withoutCrit?c.critMultiplier:1));
      if(actor.a.name==='Irisalis'&&actor.clones>0&&actor.clonesUntil>t&&(effect.cloneBeam||skill.kind==='basic'&&actor.basicHits%c.basicCombo===c.basicCombo-1)){
        const beams=15*actor.clones*scale;dealt+=beams;extra+=beams;actor.dance+=actor.clones;if(actor.dance>=9){actor.discount=true;actor.dance-=9}
      }
      if(skill.kind==='basic')actor.basicHits++;
      if(name==='Fenmane')actor.thunder++;
      if(name==='Fulmintis'&&skill.kind==='skill'&&critical){const refund=Math.min(4,c.epMax-own.ep);own.ep+=refund;m.epRefund+=refund}
      if(name==='Grizbo'&&actor.enrageUntil<=t){actor.rage+=skill.kind==='basic'?2:0;if(actor.rage>=100){actor.rage=0;actor.enrageUntil=t+20}}
      const absorbed=target.shieldUntil>t?Math.min(target.shield,dealt):0;target.shield-=absorbed;target.metric.shielded+=absorbed;
      const actual=Math.min(Math.max(0,target.hp),Math.max(0,dealt-absorbed));
      m.traitExtra+=dealt>0?extra*(actual/dealt):0;target.hp-=actual;target.metric.taken+=actual;m.damage+=actual;damage+=actual;action.damage+=actual;
      if(target.a.name==='Grizbo'&&target.enrageUntil<=t&&actual>0)target.rage+=2;
      if(skill.range==='Pound'&&target.spatial==='Tunnel')target.spatial='Unknown';
      if(effect.teamBuff&&effect.onHit){own.buff=effect.teamBuff;own.buffUntil=t+effect.duration}
      if(effect.fire){target.fire+=effect.fire;target.fireUntil=t+effect.duration}
      if(effect.ice){target.ice+=effect.ice;target.iceUntil=t+effect.duration}
      if(effect.control&&rng()>=target.controlResistance)target.controlUntil=Math.max(target.controlUntil,t+effect.control);
      if(effect.drainEp)other.ep=Math.max(0,other.ep-effect.drainEp);
      if(effect.damageBuff){actor.buff=Math.min(.15,actor.buff+effect.damageBuff);actor.buffUntil=t+effect.duration}
      if(options.water&&effect.waterBuff){actor.buff=effect.waterBuff;actor.buffUntil=t+effect.duration}
      if(target.breakUntil<=t&&target.recoveryUntil<=t){
        const traitBreak=name==='Minespine'&&actor.spatial==='Tunnel'?1.2:1;
        target.gauge-=skill.breakPower*(actor.breakStat/100)*traitBreak;
        if(target.gauge<=0){target.breakUntil=t+c.breakDuration;target.recoveryUntil=target.breakUntil+c.recoveryDuration;target.gauge=target.maxGauge;m.breaks++}
      }
      if(target.hp<=0){target.metric.kos++;log(trial,t,target.a.name+' KO');break}
    }
    action.healing+=m.healing-healingBefore;
    log(trial,t,actor.a.name+' → '+skill.name+(damage?' · '+Math.round(damage)+' damage':' · setup'));
  }
  for(let trial=0;trial<c.trials;trial++){
    const own=party(ownSpecs,'own',result.own),foes=party(enemySpecs,'enemy',result.enemy);let t=0;const parties=[own,foes];
    for(let tick=0;tick<c.timeLimit*10;tick++){t=tick/10;
      for(const p of parties){
        const a=active(p);
        p.ep=Math.min(c.epMax,p.ep+c.epRegen*.1*(a?.a.name==='Grizbo'&&a.enrageUntil>t?1.25:1));
        for(const actor of p.actors){
          for(const hot of actor.hot)if(hot.until>t)heal(actor,hot.rate*.1,hot.metric);
          if(actor.hot.length)actor.hot=actor.hot.filter(h=>h.until>t);
          if(actor.fireUntil<=t)actor.fire=0;if(actor.iceUntil<=t)actor.ice=0;
          if(actor.swordUntil<=t)actor.sword=0;if(actor.clonesUntil<=t)actor.clones=0;
        }
      }
      let a=active(own),b=active(foes);if(!a||!b)break;
      // Resolve completed casts simultaneously so an action released at the same timestamp still lands.
      const ownSkill=a.pending&&a.pending.at<=t+1e-9?a.pending.skill:null;
      const enemySkill=b.pending&&b.pending.at<=t+1e-9?b.pending.skill:null;
      if(ownSkill){a.pending=null;apply(a,b,own,foes,ownSkill,t,trial)}
      if(enemySkill){b.pending=null;apply(b,a,foes,own,enemySkill,t,trial)}
      a=active(own);b=active(foes);if(!a||!b)break;
      if(c.swapEvery>0&&t-own.lastSwap>=c.swapEvery&&!a.pending&&own.actors.filter(x=>x.hp>0).length>1){
        const start=own.active;do{own.active=(own.active+1)%own.actors.length}while(own.actors[own.active].hp<=0&&own.active!==start);
        own.lastSwap=t;a=active(own);a.next=Math.max(a.next,t+c.swapDelay);log(trial,t,'Swap → '+a.a.name);
      }
      for(let side=0;side<2;side++){
        const actor=side===0?a:b,target=side===0?b:a,p=parties[side];
        actor.metric.activeTime+=.1;
        if(actor.pending||actor.next>t+1e-9||actor.controlUntil>t||actor.breakUntil>t)continue;
        const activeSkills=actor.spec.skills;
        if(activeSkills.some(s=>p.ep<battleSkillCost(actor,s,p,options)))actor.metric.epWait+=.1;
        if(activeSkills.every(s=>(actor.cooldowns[s.key]||0)>t))actor.metric.cooldownWait+=.1;
        let skill=selectBattleAction(actor,target,p,t,c,rng,options,actor.metric);if(!skill){actor.next=t+.1;continue}
        const cost=battleSkillCost(actor,skill,p,options),spent=skill.effect?.charge?p.ep:cost;
        if(skill.effect?.charge)skill={...skill,power:skill.power*(1+.3*Math.max(0,(p.ep-cost)/10))};
        p.ep-=spent;if(skill.kind==='skill')actor.discount=false;actor.metric.epSpent+=spent;actor.metric.casts++;
        if(actor.a.name==='Grizbo'&&actor.enrageUntil<=t){actor.rage+=spent;if(actor.rage>=100){actor.rage=0;actor.enrageUntil=t+20}}
        if(actor.a.name==='Fenmane'&&actor.thunder>=30&&skill.kind!=='basic'){actor.thunder=0;actor.wingUntil=t+10}
        if(skill.kind==='ultimate')actor.ult-=skill.ultimateCost;
        else if(skill.kind==='skill'){actor.ult=Math.min(300,actor.ult+c.ultGain);actor.lastSkill=t;if(actor.a.name==='Thornblade'){actor.sword=Math.min(4,actor.sword+1);actor.swordUntil=t+15}}
        actor.cooldowns[skill.key]=t+skill.cooldown;
        const speed=actor.a.name==='Grizbo'&&actor.enrageUntil>t&&skill.kind==='basic'?1.3:1;
        actor.pending={skill,at:t+skill.cast/speed};actor.next=t+skill.cast/speed+.1;
        const action=actor.metric.actions[skill.key]||(actor.metric.actions[skill.key]={name:skill.name,casts:0,damage:0,healing:0,ep:0});action.ep+=spent;
      }
    }
    result.duration+=Math.min(t+(active(own)&&active(foes) ? .1 : 0),c.timeLimit);result.remainingHp+=own.actors.reduce((n,a)=>n+Math.max(0,a.hp),0);
    const liveOwn=own.actors.some(a=>a.hp>0),liveEnemy=foes.actors.some(a=>a.hp>0);
    if(!liveOwn&&!liveEnemy)result.draws++;else if(!liveEnemy)result.wins++;else if(!liveOwn)result.losses++;else result.timeouts++;
  }
  return result;
}
function battleLoadoutOptions(spec){
  const available=(spec.available||[]).filter(s=>s.kind==='skill'&&s.cooldown!==null),ultimates=(spec.available||[]).filter(s=>s.kind==='ultimate'&&s.cooldown!==null),result=[];
  for(let i=0;i<available.length;i++)for(let j=i+1;j<available.length;j++)for(const u of ultimates){result.push({...spec,skills:[available[i],available[j]],ultimate:u});if(spec.script&&/[12]/.test(spec.script))result.push({...spec,skills:[available[j],available[i]],ultimate:u});}
  return result;
}
function compareBattleResults(a,b){return b.wins/b.trials-a.wins/a.trials||a.losses/a.trials-b.losses/b.trials||b.remainingHp/b.trials-a.remainingHp/a.trials||a.duration/a.trials-b.duration/b.trials}
function optimizeBattleLoadouts(own,enemy,settings,options,progress=()=>{}){
  const base=normalizeBattleSettings(settings),screen={...base,trials:20,seed:(base.seed+1009)>>>0};
  own.forEach(validateBattleSpec);enemy.forEach(validateBattleSpec);
  let selected=own.map(s=>({...s})),evaluations=0;const cache=new Map();
  const signature=team=>JSON.stringify(team.map(s=>[...s.skills.map(k=>k.key),s.ultimate.key]));
  const screenTeam=team=>{const key=signature(team);if(!cache.has(key)){cache.set(key,simulateTimedBattle(team,enemy,screen,options));evaluations++}return cache.get(key)};
  // Two coordinate sweeps consider every permitted two-skill pair and ultimate for each member.
  // This is a local search over the fixed composition, not a proof of global optimality.
  for(let sweep=0;sweep<2;sweep++)for(let i=0;i<selected.length;i++){
    let bestSpec=selected[i],best=screenTeam(selected);
    for(const candidate of battleLoadoutOptions(selected[i])){
      const team=selected.map((s,j)=>j===i?candidate:s),result=screenTeam(team);
      if(compareBattleResults(result,best)<0){best=result;bestSpec=candidate}
    }
    selected[i]=bestSpec;progress({stage:'search',sweep:sweep+1,member:i+1,evaluations});
  }
  const baseline=simulateTimedBattle(own,enemy,base,options,true),validation=signature(selected)===signature(own)?baseline:simulateTimedBattle(selected,enemy,base,options,true);
  // Keep the original if the proposed loadout loses its advantage on independent validation seeds.
  if(compareBattleResults(validation,baseline)>0){selected=own;return{selected,result:baseline,baseline,evaluations,keptBaseline:true}}
  return{selected,result:validation,baseline,evaluations,keptBaseline:false};
}


;
const $=id=>document.getElementById(id);
let team=[],pendingEnemy=null,teamMatches=[],activeTeamMatch=-1,nextTeamId=1;
const teamStorageKey='aniimo-counter-enemy-team-v1';
const traitStorageKey='aniimo-counter-trait-setup-v1';
let traitOptions={...traitDefaults};
function restoreTraitSetup(){try{traitOptions=normalizeTraitOptions(JSON.parse(localStorage.getItem(traitStorageKey)||'null'))}catch{traitOptions={...traitDefaults}}}
function saveTraitSetup(){try{localStorage.setItem(traitStorageKey,JSON.stringify(traitOptions))}catch{}}
function syncTraitControls(){$('traitGoal').value=traitOptions.goal;$('traitControls').querySelectorAll('input[data-trait]').forEach(input=>{input.checked=traitOptions[input.dataset.trait]})}
function traitCard(r){
  const t=traitFit(r,traitOptions),p=t.profile;
  if(!p)return '<p class="hint">Passive not checked for this form.</p>';
  return `<div class="traitCard"><div class="picktop"><strong>${p.trait}</strong><span class="traitStatus${t.ready?' planned':''}">${t.status}</span></div><p><span class="eyebrow">OFFICIAL PASSIVE SUMMARY</span><br>${p.effect}</p><p class="hint"><strong>Theorycraft plan:</strong> ${p.plan}</p><p class="hint">${t.eligible} / ${r.matches.length} confirmed applicable matchups · This is a trigger plan, not a damage forecast.</p><a href="${r.a.source}" target="_blank" rel="noopener">Official passive &amp; setup skills</a></div>`;
}
function traitTeamCard(g,enemies,alternate=false){
  const missing=enemies.filter((e,i)=>!g.covered.has(i)),notes=traitSynergyNotes(g.selected);
  return `<div class="traitTeam"><div class="coverageGroup">${g.selected.map(r=>`<span><strong>${r.a.name}</strong> · ${counterFormLabel(r.a)} · ${r.a.role}</span>`).join('')}</div><p><strong>${g.covered.size} / ${enemies.length}</strong> enemies with an advantage matchup · ${g.reachable.size} / ${enemies.length} with confirmed reach.</p>${missing.length?`<p class="hint">No clear advantage: ${missing.map(e=>e.name+' ('+e.label+')').join(', ')}.</p>`:''}<p class="hint">Some members can still have poor matchups: ${g.blocked} blocked · ${g.uncertain} reach unconfirmed · ${g.resisted} resisted pairings across the group.</p>${notes.length?`<div class="synergyNotes">${notes.map(n=>`<p>${n}</p>`).join('')}</div>`:''}${g.selected.map(r=>`<details class="traitMember"${alternate?'':' open'}><summary>${r.a.name} · ${counterFormLabel(r.a)} · ${traitFor(r.a)?.trait||'Passive'}</summary>${traitCard(r)}<details class="teamMatchDetails"><summary>Assigned matchups &amp; moves</summary>${r.matches.map(matchRow).join('')}</details></details>`).join('')}</div>`;
}
function renderTraitTeams(ranked,enemies){
  const groups=suggestTraitTeams(ranked,traitOptions),labels={balanced:'Balanced roles',damage:'Damage pressure',sustain:'Healing & EP sustain',break:'BREAK pressure'};
  return `<section class="traitSuggestion"><div class="resultHead"><h3>Trait-aware counter team</h3><span class="role">${labels[traitOptions.goal]}</span></div><p class="hint">Theorycraft suggestion from checked species passives. Coverage comes first; planned triggers and role preferences decide ties. Distinct species only, up to three members.</p><p class="traitReminder"><strong>Not a guaranteed win.</strong> Trigger uptime, equipped skills and actual battle mechanics still matter.</p>${groups.length?traitTeamCard(groups[0],enemies):'<p>No confirmed reachable option in the checked roster for these enemy states.</p>'}${groups.length>1?`<details class="teamMore"><summary>Alternative trait teams</summary>${groups.slice(1).map(g=>traitTeamCard(g,enemies,true)).join('')}</details>`:''}</section>`;
}

function formOptions(a,key){return a.forms.map(f=>`<option value="${f.key}"${f.key===key?' selected':''}>${f.label} · ${f.elements.map(e=>types[e]).join(' + ')}</option>`).join('')}
function resolveEnemy(member){const a=dexById.get(member.id),f=a?.forms.find(f=>f.key===member.form);return f?{...member,name:a.name,label:f.label,elements:f.elements,source:f.source}:null}
function saveTeam(){try{localStorage.setItem(teamStorageKey,JSON.stringify(team))}catch{}}
function restoreTeam(){try{const saved=JSON.parse(localStorage.getItem(teamStorageKey)||'[]');if(Array.isArray(saved))team=saved.slice(0,64).filter(m=>m&&spatialTypes.includes(m.spatial)&&resolveEnemy(m)).map(m=>({id:m.id,form:m.form,spatial:m.spatial,uid:nextTeamId++}))}catch{} }
function hideTeamMatches(){teamMatches=[];activeTeamMatch=-1;$('teamSearchResults').innerHTML='';$('teamSearch').setAttribute('aria-expanded','false');$('teamSearch').removeAttribute('aria-activedescendant')}
function clearPendingEnemy(){pendingEnemy=null;$('teamSearch').value='';hideTeamMatches();$('addForm').innerHTML='<option>Select an Aniimo first</option>';$('addForm').disabled=true;$('addEnemy').disabled=true;$('addSpatial').value='Unknown'}
function selectTeamEnemy(id){const a=dexById.get(id);if(!a)return;pendingEnemy=a;$('teamSearch').value=a.name;hideTeamMatches();$('addForm').innerHTML=formOptions(a,a.forms[0].key);$('addForm').value=a.forms[0].key;$('addForm').disabled=false;$('addEnemy').disabled=false;$('addSpatial').value='Unknown';$('addForm').focus()}
function searchTeamEnemies(){pendingEnemy=null;$('addEnemy').disabled=true;$('addForm').disabled=true;const found=searchDex($('teamSearch').value);teamMatches=found.slice(0,8);activeTeamMatch=-1;$('teamSearch').removeAttribute('aria-activedescendant');$('teamSearch').setAttribute('aria-expanded',!!teamMatches.length);$('teamSearchResults').innerHTML=teamMatches.map(a=>`<button class="nameMatch" role="option" aria-selected="false" id="team-match-${a.id}" data-id="${a.id}"><strong>${a.name}</strong><span>${a.forms.length} forms · #${a.id}</span></button>`).join('')+(found.length>8?`<p class="hint">${found.length} matches. Keep typing.</p>`:!found.length&&$('teamSearch').value.trim()?'<p class="hint">No checked species matches. Try another spelling.</p>':'')}
function addTeamEnemy(){if(!pendingEnemy)return;if(team.length>=64){$('teamNotice').textContent='Enemy team limit reached (64). Remove an enemy before adding another.';return;}const form=pendingEnemy.forms.find(f=>f.key===$('addForm').value);if(!form)return;team.push({uid:nextTeamId++,id:pendingEnemy.id,form:form.key,spatial:$('addSpatial').value});$('teamNotice').textContent=`Added ${pendingEnemy.name} · ${form.label}.`;saveTeam();renderTeam();clearPendingEnemy();$('teamSearch').focus()}
function counterFormLabel(a){return formLabels[a.form]||a.form}
function matchRow(m){return `<div class="teamMatch"><div><strong>${m.enemy.name}</strong><span class="hint">${m.enemy.label} · ${m.enemy.spatial}</span></div><span class="factor ${m.covered?'good':['Blocked','Resisted'].includes(m.status)?'bad':''}">${m.status}</span><p>Use ${m.m.name} · ${types[m.m.element]}${m.m.community?' · Pound tag (community)':''}</p><div class="factors">${m.enemy.elements.map((e,i)=>`<span class="factor ${cls(m.factors[i])}">vs ${types[e]} ×${fmt(m.factors[i])}</span>`).join('')}</div>${m.status==='Blocked'?'<p class="hint">This listed ranged move cannot hit the active Tunnel state.</p>':m.status==='Reach unconfirmed'?'<p class="hint">No confirmed distance attack is listed for this pick against Fly.</p>':''}</div>`}
function teamCounterCard(r,i){return `<article class="pick"><div class="picktop"><div><span class="pickrank">${String(i+1).padStart(2,'0')}</span><strong>${r.a.name}</strong><span class="formtag">${counterFormLabel(r.a)}</span></div><span class="role">${r.a.role}</span></div><p class="coverage"><strong>${r.covered} / ${team.length}</strong> enemies with element advantage</p><p class="hint">${r.blocked} blocked · ${r.uncertain} reach unconfirmed · ${r.resisted} resisted · ${r.mixed} mixed</p><details class="traitMember"><summary>Passive trait &amp; rotation plan</summary>${traitCard(r)}</details><details class="teamMatchDetails"><summary>Matchups against the full team</summary>${r.matches.map(matchRow).join('')}</details><div class="pickbottom"><a href="${r.a.source}" target="_blank" rel="noopener">Official counter form &amp; skills</a></div></article>`}
function renderTeam(){
  invalidateBattle('Enemy team or trait setup updated. Run the simulation again.');renderBattleSimulator();
  $('teamCount').textContent=`${team.length} ENEM${team.length===1?'Y':'IES'}`;
  $('clearTeam').disabled=!team.length;
  $('teamMembers').innerHTML=team.length?team.map((m,i)=>{const a=dexById.get(m.id);return `<article class="teamMember"><div class="picktop"><strong>${i+1}. ${a.name}</strong><button class="quiet" data-remove="${m.uid}" aria-label="Remove enemy ${i+1}: ${a.name}">Remove</button></div><label for="form-${m.uid}">Form &amp; types</label><select id="form-${m.uid}" data-member="${m.uid}" data-field="form">${formOptions(a,m.form)}</select><label for="state-${m.uid}">Active Spatial state</label><select id="state-${m.uid}" data-member="${m.uid}" data-field="spatial">${spatialTypes.map(s=>`<option${s===m.spatial?' selected':''}>${s}</option>`).join('')}</select></article>`}).join(''):'<p class="emptyTeam">Your enemy team is empty.</p>';
  const enemies=team.map(resolveEnemy),ranked=rankTeamCounters(enemies);
  if(!enemies.length){$('teamResults').innerHTML='<p class="emptyTeam">Add enemies to see counters for the full team.</p>';return;}
  const coverage=suggestCoverageCounters(ranked);
  const missing=enemies.filter((e,i)=>!coverage.covered.has(i));
  $('teamResults').innerHTML=`<section class="teamCoverage"><h3>Suggested coverage group</h3><p class="hint">Up to three complementary counter forms from the checked roster.</p>${coverage.selected.length?`<div class="coverageGroup">${coverage.selected.map(r=>`<span><strong>${r.a.name}</strong> · ${counterFormLabel(r.a)}</span>`).join('')}</div>`:'<p>No confirmed element-advantage coverage in this roster for the selected states.</p>'}<p><strong>${coverage.covered.size} / ${enemies.length}</strong> enemies covered by an advantage matchup.</p>${missing.length?`<p class="hint">Remaining: ${missing.map(e=>e.name+' ('+e.label+')').join(', ')}. Check the individual matchups below.</p>`:''}</section>${renderTraitTeams(ranked,enemies)}<div class="resultHead"><h3>Main counters for this team</h3><span class="badge">17 CHECKED FORMS</span></div><p class="hint">Ranked by coverage across all ${enemies.length} enemies. Expand each counter to see its move and factors against every member.</p>${ranked.slice(0,3).map(teamCounterCard).join('')}<details class="teamMore"><summary>More overall counters</summary>${ranked.slice(3,8).map((r,i)=>teamCounterCard(r,i+3)).join('')}</details><details class="teamMore"><summary>Best counter for each enemy</summary>${enemies.map((e,i)=>{const matches=ranked.map(r=>r.matches[i]).filter(m=>m.status!=='Blocked'&&m.status!=='Reach unconfirmed').sort((a,b)=>comparePicks(a,b));const best=matches[0];return `<article class="teamIndividual"><h3>${i+1}. ${e.name} · ${e.label}</h3>${best?`<p><strong>${best.a.name}</strong> · ${counterFormLabel(best.a)}</p>${matchRow(best)}`:'<p>No confirmed reachable move in the checked counter roster for this active state.</p>'}</article>`}).join('')}</details>`;
}
$('teamSearch').addEventListener('input',searchTeamEnemies);
$('teamSearch').addEventListener('keydown',e=>{if(e.key==='Escape'){hideTeamMatches();return}if(e.key==='ArrowDown'||e.key==='ArrowUp'){if(!teamMatches.length)searchTeamEnemies();if(!teamMatches.length)return;e.preventDefault();activeTeamMatch=e.key==='ArrowDown'?(activeTeamMatch+1)%teamMatches.length:(activeTeamMatch<=0?teamMatches.length-1:activeTeamMatch-1);$('teamSearchResults').querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-selected',i===activeTeamMatch));$('teamSearch').setAttribute('aria-activedescendant',`team-match-${teamMatches[activeTeamMatch].id}`);return}if(e.key==='Enter'){const chosen=activeTeamMatch>=0?teamMatches[activeTeamMatch]:searchDex($('teamSearch').value)[0];if(chosen){e.preventDefault();selectTeamEnemy(chosen.id)}}});
$('teamSearchResults').addEventListener('click',e=>{const b=e.target.closest('button[data-id]');if(b)selectTeamEnemy(b.dataset.id)});
$('addEnemy').onclick=addTeamEnemy;
$('addForm').addEventListener('change',()=>{$('addSpatial').value='Unknown'});
$('clearTeamSearch').onclick=()=>{clearPendingEnemy();$('teamSearch').focus()};
$('clearTeam').onclick=()=>{team=[];saveTeam();renderTeam();$('teamNotice').textContent='Enemy team cleared.'};
$('teamMembers').addEventListener('click',e=>{const b=e.target.closest('button[data-remove]');if(!b)return;team=team.filter(m=>m.uid!==Number(b.dataset.remove));saveTeam();renderTeam();$('teamNotice').textContent='Enemy removed.'});
$('teamMembers').addEventListener('change',e=>{const field=e.target.dataset.field,m=team.find(m=>m.uid===Number(e.target.dataset.member));if(!m)return;if(field==='form'&&dexById.get(m.id).forms.some(f=>f.key===e.target.value)){m.form=e.target.value;m.spatial='Unknown'}else if(field==='spatial'&&spatialTypes.includes(e.target.value))m.spatial=e.target.value;else return;saveTeam();renderTeam();$('teamNotice').textContent='Team counters updated.'});
document.addEventListener('click',e=>{if(!e.target.closest('.enemylookup'))hideTeamMatches()});
$('traitControls').addEventListener('change',e=>{const key=e.target.dataset.trait;if(!Object.hasOwn(traitDefaults,key))return;traitOptions=normalizeTraitOptions({...traitOptions,[key]:key==='goal'?e.target.value:e.target.checked});saveTraitSetup();renderTeam();$('teamNotice').textContent='Trait team suggestions updated.'});
$('resetTraitSetup').onclick=()=>{traitOptions={...traitDefaults};saveTraitSetup();syncTraitControls();renderTeam();$('teamNotice').textContent='Trait setup reset.'};



;
// Browser UI for the experimental worker-based battle model.
const battleStorageKey='aniimo-counter-battle-v1';
let battleState={ownKeys:[],actors:{},settings:{...battleDefaults},allowGeneric:false},battleResult=null,battleOptimization=null,battleWorker=null,battleMessage='',battleInitialized=false;
const battleOpen=new Set();
const battleEscape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const battleFormKey=a=>a.name+'|'+a.form;
function enemyBattleKey(enemies,i){const e=enemies[i];return 'enemy:'+e.id+'|'+e.form+'|'+enemies.slice(0,i).filter(x=>x.id===e.id&&x.form===e.form).length}
function battleOwnForms(){return battleState.ownKeys.map(k=>roster.find(a=>battleFormKey(a)===k)).filter(Boolean)}
function saveBattleState(){try{localStorage.setItem(battleStorageKey,JSON.stringify(battleState))}catch{}}
function restoreBattleState(){try{
  const s=JSON.parse(localStorage.getItem(battleStorageKey)||'null');
  if(s&&Array.isArray(s.ownKeys)){battleState.ownKeys=s.ownKeys.slice(0,4).map(k=>roster.some(a=>battleFormKey(a)===k)?k:'');battleInitialized=true;}
  if(s&&s.actors&&typeof s.actors==='object'&&!Array.isArray(s.actors))battleState.actors=s.actors;
  battleState.settings=normalizeBattleSettings(s?.settings);battleState.allowGeneric=s?.allowGeneric===true;
}catch{}}
function genericBattleCatalog(a){
  const base=(key,name,kind,power,cost,ultimateCost=0)=>({key,name,kind,power,cost,ultimateCost,element:a.elements[0],cooldown:kind==='basic'?.5:kind==='ultimate'?8:1,cast:kind==='basic'?.5:1,hits:1,weight:kind==='basic'?1:3,breakPower:power/3,range:a.spatial==='Ranged'?'Ranged':'Ground',effect:{},custom:true,source:'',official:a.source,timingStatus:'USER MODEL INPUT — not a known game skill'});
  return{skills:[base('basic','Assumed basic attack','basic',6,0),base('skill-one','Assumed skill 1','skill',30,10),base('skill-two','Assumed skill 2','skill',50,20),base('ultimate','Assumed ultimate','ultimate',170,0,100)],source:''};
}
function actorBattleRecord(key,a){
  const existing=battleState.actors[key],r=existing&&typeof existing==='object'&&!Array.isArray(existing)?existing:{};
  const catalog=r.mode==='custom'?genericBattleCatalog(a):battleCatalogFor(a)||genericBattleCatalog(a);
  const available=catalog.skills.filter(s=>s.kind==='skill'&&r.enabled?.[s.key]!==false&&(r.enabled?.[s.key]===true||!s.variant||s.variant===a.form)),knownDefault=available;
  const preferred=a.name==='Scorchhowl'?['burn-breaker','fire-kick']:a.name==='Glacy'?['healing-water','ice-orb']:null;
  r.hp=battleNumber(r.hp,200,50000,1000);r.atk=battleNumber(r.atk,20,1500,a.atk||roster.find(x=>x.name===a.name)?.atk||100);r.breakStat=battleNumber(r.breakStat,20,500,100);r.controlResistance=battleNumber(r.controlResistance,0,1,0);
  r.preset=['burst','aggressive','sustain','break'].includes(r.preset)?r.preset:'burst';
  r.script=typeof r.script==='string'?r.script.slice(0,200):'';
  r.mode=r.mode==='custom'?'custom':'catalog';
  r.overrides=r.overrides&&typeof r.overrides==='object'?r.overrides:{};
  r.enabled=r.enabled&&typeof r.enabled==='object'?r.enabled:{};
  if(!Array.isArray(r.selected)||r.selected.length!==2||r.selected.some(k=>!available.some(s=>s.key===k))){r.selected=preferred&&preferred.every(k=>knownDefault.some(s=>s.key===k))?preferred:knownDefault.slice(0,2).map(s=>s.key)}
  if(!catalog.skills.some(s=>s.key===r.ultimate&&s.kind==='ultimate'))r.ultimate=catalog.skills.find(s=>s.kind==='ultimate')?.key;
  battleState.actors[key]=r;return r;
}
function battleSpec(key,a){
  const r=actorBattleRecord(key,a),catalog=r.mode==='custom'?genericBattleCatalog(a):battleCatalogFor(a)||genericBattleCatalog(a);
  const list=catalog.skills.map(s=>makeBattleSkill(s,r.overrides[s.key]||{}));
  const available=list.filter(s=>s.kind!=='skill'||r.enabled[s.key]===true||r.enabled[s.key]!==false&&(!s.variant||s.variant===a.form));
  return{a,hp:r.hp,atk:r.atk,breakStat:r.breakStat,controlResistance:r.controlResistance,preset:r.preset,script:r.script.trim(),basic:list.find(s=>s.kind==='basic'),skills:r.selected.map(k=>available.find(s=>s.key===k)).filter(Boolean),ultimate:list.find(s=>s.key===r.ultimate&&s.kind==='ultimate'),available};
}
function battleInput(label,field,value,key,min,max,step=1){return `<label>${label}<input type="number" data-actor="${battleEscape(key)}" data-actor-field="${field}" value="${value}" min="${min}" max="${max}" step="${step}"></label>`}
function battleActorEditor(key,a,side){
  const r=actorBattleRecord(key,a),known=battleCatalogFor(a),catalog=r.mode==='custom'?genericBattleCatalog(a):known||genericBattleCatalog(a);
  const detailsId='actor-'+key,open=battleOpen.has(detailsId);
  const list=catalog.skills.map(s=>makeBattleSkill(s,r.overrides[s.key]||{}));
  const enabled=s=>s.kind!=='skill'||r.enabled[s.key]===true||r.enabled[s.key]!==false&&(!s.variant||s.variant===a.form);
  const options=selected=>list.filter(s=>s.kind==='skill'&&enabled(s)).map(s=>`<option value="${s.key}"${s.key===selected?' selected':''}>${battleEscape(s.name)} · ${types[s.element]}</option>`).join('');
  return `<details class="battleActor" data-sim-detail="${battleEscape(detailsId)}"${open?' open':''}><summary>${battleEscape(a.name)} · ${battleEscape(formLabels[a.form]||a.label)} · Loadout &amp; pacing</summary>${!known||r.mode==='custom'?'<p class="traitReminder"><strong>Custom assumed attacks.</strong> These are placeholders, not this Aniimo’s verified skill list. Enter your observations before relying on the model.</p>':'<p class="hint">All published skill options in the curated species catalog are available below. Confirm variant unlocks. Community cooldowns are not verified for the live patch; cast durations and per-cast hit counts are model inputs.</p>'}${side==='enemy'?`<label>Enemy attack data<select data-actor="${battleEscape(key)}" data-actor-field="mode"><option value="catalog"${r.mode!=='custom'?' selected':''}>Species catalog</option><option value="custom"${r.mode==='custom'?' selected':''}>Custom boss / observed attacks</option></select></label>`:''}<div class="battleFields">${battleInput('HP (relative model units)','hp',r.hp,key,200,50000)}${battleInput('ATK (relative model units)','atk',r.atk,key,20,1500)}${battleInput('BREAK stat (model scale)','breakStat',r.breakStat,key,20,500)}${battleInput('Control resistance (0–1)','controlResistance',r.controlResistance,key,0,1,.05)}</div><div class="battleFields"><label>Active skill 1<select data-actor="${battleEscape(key)}" data-actor-field="skill1">${options(r.selected[0])}</select></label><label>Active skill 2<select data-actor="${battleEscape(key)}" data-actor-field="skill2">${options(r.selected[1])}</select></label><label>Ultimate<select data-actor="${battleEscape(key)}" data-actor-field="ultimate">${list.filter(s=>s.kind==='ultimate').map(s=>`<option value="${s.key}"${s.key===r.ultimate?' selected':''}>${battleEscape(s.name)}</option>`).join('')}</select></label><label>Priority preset<select data-actor="${battleEscape(key)}" data-actor-field="preset">${[['burst','Setup then burst'],['aggressive','Spend for damage'],['sustain','Heal / sustain first'],['break','Build BREAK first']].map(([v,l])=>`<option value="${v}"${v===r.preset?' selected':''}>${l}</option>`).join('')}</select></label></div><label>Observed sequence (optional): B = basic, 1 / 2 = skill slots, U = ultimate<input type="text" data-actor="${battleEscape(key)}" data-actor-field="script" value="${battleEscape(r.script)}" placeholder="e.g. B, B, 1, 2, U"></label><p class="hint">User-observed sequence, not a verified boss script. The next step waits for cooldown, EP and ultimate charge, using basics while waiting. Leave blank for weighted priorities.</p><div class="tablewrap"><table class="skillTable"><thead><tr><th>Unlocked / skill</th><th>Element / reach</th><th>Power</th><th>EP</th><th>Cooldown s</th><th>Cast s*</th><th>Hits / cast*</th><th>Use weight*</th></tr></thead><tbody>${list.map(s=>`<tr><th>${s.kind==='skill'?`<input type="checkbox" aria-label="Allow ${battleEscape(s.name)}" data-actor="${battleEscape(key)}" data-skill="${s.key}" data-skill-field="enabled"${enabled(s)?' checked':''}>`:''}${battleEscape(s.name)}<small>${s.kind}${s.variant?' · needs '+battleEscape(formLabels[s.variant]||s.variant)+' unlock':''}</small></th><td><select aria-label="${battleEscape(s.name)} element" data-actor="${battleEscape(key)}" data-skill="${s.key}" data-skill-field="element">${types.map((type,i)=>`<option value="${i}"${s.element===i?' selected':''}>${type}</option>`).join('')}</select><select aria-label="${battleEscape(s.name)} range" data-actor="${battleEscape(key)}" data-skill="${s.key}" data-skill-field="range">${['Ground','Ranged','Pound'].map(range=>`<option${s.range===range?' selected':''}>${range}</option>`).join('')}</select></td>${[['power',s.power,0,2000,1],['cost',s.cost,0,200,1],['cooldown',s.cooldown??'',0,120,.1],['cast',s.cast,.1,20,.1],['hits',s.hits,1,20,1],['weight',s.weight,0,20,.5]].map(([field,value,min,max,step])=>`<td><input type="number" aria-label="${battleEscape(s.name)} ${field}" data-actor="${battleEscape(key)}" data-skill="${s.key}" data-skill-field="${field}" value="${value}" min="${min}" max="${max}" step="${step}"${field==='cooldown'&&s.cooldown===null?' placeholder="Required"':''}></td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="hint">* Assumed model values, editable. Higher use weight makes an eligible action more likely; priorities change with healing needs, buffs and BREAK. A skill can’t bypass its cooldown or energy cost. Channelled and multi-hit skills need their real total hit count and duration entered. A basic cooldown is not an animation duration.</p><p class="hint">Unmodeled details: terrain placement, precise hitboxes, interruptions, projectile travel, some field/mark reactions, clones’ movement, Irisalis’s revival amount, equipment and enemy AI. Counter stance hits and some follow-ups may be undercounted.</p>${known?`<p class="hint"><a href="${known.source}" target="_blank" rel="noopener">Community skill / cooldown reference</a> · <a href="${a.source}" target="_blank" rel="noopener">Official form, effects &amp; EP</a></p>`:''}</details>`;
}
function battleMetricTable(metrics,trials){return `<div class="tablewrap"><table><thead><tr><th>Aniimo</th><th>Damage dealt</th><th>Taken</th><th>Healing</th><th>Trait contribution*</th><th>KO rate</th><th>EP spent</th><th>EP waits s</th><th>CD waits s</th></tr></thead><tbody>${metrics.map(m=>`<tr><th>${battleEscape(m.name)}<small>${battleEscape(m.label)}</small></th><td>${Math.round(m.damage/trials)}</td><td>${Math.round(m.taken/trials)}</td><td>${Math.round(m.healing/trials)}</td><td>${Math.round(m.traitExtra/trials)}</td><td>${Math.round(m.kos/trials*100)}%</td><td>${(m.epSpent/trials).toFixed(1)}</td><td>${(m.epWait/trials).toFixed(1)}</td><td>${(m.cooldownWait/trials).toFixed(1)}</td></tr>`).join('')}</tbody></table></div>`}
function battleResultsHtml(){
  const r=battleResult;if(!r)return '<p class="emptyTeam">Run a simulation to see modeled outcomes and action metrics.</p>';
  const percent=n=>(n/r.trials*100).toFixed(1),all=[...r.own,...r.enemy];
  return `<div class="battleOutcome"><strong>${percent(r.wins)}% modeled wins</strong><p>${r.trials} trials · seed ${r.config.seed} · ${(r.duration/r.trials).toFixed(1)}s average modeled duration</p><p>Losses ${percent(r.losses)}% · draws ${percent(r.draws)}% · time limit ${percent(r.timeouts)}%</p><p><strong>Experimental model result — not your real chance of winning.</strong> Timing, damage scaling, AI and several mechanics remain assumptions.</p></div>${battleOptimization?`<p class="traitReminder"><strong>Best tested loadout for this composition.</strong> ${battleOptimization.evaluations} loadout tests in two local-search sweeps, then ${r.trials} separate validation trials. Baseline modeled wins: ${(battleOptimization.baseline.wins/battleOptimization.baseline.trials*100).toFixed(1)}%. ${battleOptimization.keptBaseline?'Kept the original loadout because the proposed change did not improve validation.':'The selected skill pairs below have been updated.'} This is not a proven global optimum.</p>`:''}<h3>Recommended / tested skill selection</h3><p class="hint">Exactly two active skills plus one ultimate. Basic attacks remain available.</p>${currentBattleSpecs().own.map(s=>`<p class="testedLoadout"><strong>${battleEscape(s.a.name)}</strong> · ${s.skills.map(k=>battleEscape(k.name)).join(' + ')} · Ultimate: ${battleEscape(s.ultimate?.name||'Missing')}</p>`).join('')}<h3>Your team — per-trial averages</h3>${battleMetricTable(r.own,r.trials)}<h3>Enemy team — per-trial averages</h3>${battleMetricTable(r.enemy,r.trials)}<p class="hint">* Incremental damage credited to modeled passive effects within each hit; not a separate trial without traits. Healing includes modeled healing over time. CD waits measure time both active skills were cooling while the actor was otherwise ready; basics can still fire. KO rate is how often that member fainted.</p><details class="teamMore"><summary>Skill usage &amp; attack weights outcome</summary>${all.map(m=>`<h3>${battleEscape(m.name)}</h3><div class="tablewrap"><table><thead><tr><th>Action</th><th>Casts / trial</th><th>Damage / trial</th><th>Immediate healing</th><th>EP spent</th></tr></thead><tbody>${Object.values(m.actions).map(a=>`<tr><th>${battleEscape(a.name)}</th><td>${(a.casts/r.trials).toFixed(1)}</td><td>${Math.round(a.damage/r.trials)}</td><td>${Math.round(a.healing/r.trials)}</td><td>${(a.ep/r.trials).toFixed(1)}</td></tr>`).join('')}</tbody></table></div>`).join('')}</details><details class="teamMore"><summary>Example battle timeline — one trial, up to 160 events</summary><ol class="battleTrace">${r.trace.map(e=>`<li><time>${e.time.toFixed(1)}s</time> ${battleEscape(e.text)}</li>`).join('')}</ol></details>`;
}
function currentBattleSpecs(){
  const enemies=team.map(resolveEnemy),own=[];
  battleState.ownKeys.forEach((key,i)=>{const a=roster.find(a=>battleFormKey(a)===key);if(a)own.push(battleSpec('own:'+i+':'+key,a))});
  return{own,enemy:enemies.map((e,i)=>battleSpec(enemyBattleKey(enemies,i),e))};
}
function renderBattleSimulator(enemies=team.map(resolveEnemy)){
  if(!battleInitialized&&enemies.length){const g=suggestTraitTeams(rankTeamCounters(enemies),traitOptions)[0];battleState.ownKeys=g?g.selected.map(r=>battleFormKey(r.a)):[];battleInitialized=true;}
  const ownForms=battleOwnForms(),settings=normalizeBattleSettings(battleState.settings);
  const configFields=[['trials','Trials',20,1000,20],['seed','Random seed',0,4294967295,1],['timeLimit','Battle time limit s*',10,300,10],['epMax','Shared EP capacity*',10,200,1],['epStart','Starting EP*',0,200,1],['epRegen','EP regeneration / s*',0,20,.1],['ultGain','Ultimate points / skill*',0,100,1],['damageScale','Power → damage scale*',.1,10,.1],['baseCrit','Base critical chance (0–1)*',0,1,.05],['critMultiplier','Critical multiplier*',1,3,.1],['variance','Damage variation (0–0.5)*',0,.5,.05],['reachChance','Unconfirmed Fly reach chance*',0,1,.05],['dodgeChance','Defensive timing success chance*',0,1,.05],['breakGauge','BREAK gauge*',50,2000,10],['breakDuration','BREAK duration s*',0,20,.5],['recoveryDuration','Recovery duration s*',0,20,.5],['breakMultiplier','BREAK / recovery damage multiplier*',1,3,.1],['swapEvery','Own-team rotation interval s* (0 = KO only)',0,60,1],['swapDelay','Switch delay s*',0,5,.1],['basicCombo','Irisalis basic hits / combo*',1,10,1],['airborneMultiplier','Airborne damage taken multiplier*',1,3,.1]];
  const detailOpen=id=>battleOpen.has(id)?' open':'';
  $('battleSimulator').innerHTML=`<div class="sectionhead"><h2>Battle simulator</h2><span class="role">EXPERIMENTAL</span></div><p class="traitReminder"><strong>Model estimates, not guaranteed wins.</strong> This tests your selected composition and loadouts using a simplified timed battle model. It does not reproduce the full game or provide a verified real-world win probability.</p><p class="hint">Choose up to four counter Aniimo. The enemy team above is used in its listed order. Timing, energy, skill weights, and observed enemy sequences are editable; species passives use the planned setup above and modeled trigger states.</p><div class="battleComposition">${Array.from({length:4},(_,i)=>`<label>Counter slot ${i+1}<select data-own-slot="${i}"><option value="">Empty</option>${roster.map(a=>`<option value="${battleEscape(battleFormKey(a))}"${battleState.ownKeys[i]===battleFormKey(a)?' selected':''}>${battleEscape(a.name)} · ${battleEscape(formLabels[a.form])} · ${a.elements.map(e=>types[e]).join(' + ')}</option>`).join('')}</select></label>`).join('')}</div><div class="battleActions"><button class="quiet" data-battle-action="suggestion">Use trait team suggestion</button><button class="primary" data-battle-action="run"${!enemies.length||!ownForms.length||battleWorker?' disabled':''}>Run current loadout</button><button class="primary" data-battle-action="optimize"${!enemies.length||!ownForms.length||battleWorker?' disabled':''}>Find best tested skill pairs</button><button class="quiet" data-battle-action="cancel"${!battleWorker?' disabled':''}>Cancel</button></div><p id="battleNotice" class="hint" role="status">${battleEscape(battleMessage)}</p><details class="teamMore" data-sim-detail="own-loadouts"${detailOpen('own-loadouts')}><summary>Your skill choices, unlocks &amp; use weights</summary>${battleState.ownKeys.map((key,i)=>{const a=roster.find(a=>battleFormKey(a)===key);return a?battleActorEditor('own:'+i+':'+key,a,'own'):''}).join('')}</details><details class="teamMore" data-sim-detail="enemy-loadouts"${detailOpen('enemy-loadouts')}><summary>Enemy skills, attack patterns &amp; scripts</summary><p class="hint"><strong>No verified fixed boss timetable is bundled.</strong> Published guides describe mechanics, but do not establish exact repeating sequences and timestamps. Regular species skills are not assumed to be the boss’s exact abilities. Use Custom boss / observed attacks and enter your observations to model a specific encounter.</p><label class="battleCheck"><input type="checkbox" data-allow-generic${battleState.allowGeneric?' checked':''}> Allow explicitly assumed enemy attacks when the selected species is outside the 14-species skill catalog</label>${enemies.map((e,i)=>battleActorEditor(enemyBattleKey(enemies,i),e,'enemy')).join('')}${enemies.some(e=>e.name==='Stellarys')?'<p class="traitReminder"><strong>Alpha Stellarys mechanic note:</strong> guides document Energy Waves and a Powerful Charm dodge warning; Fly/Tunnel can help with waves. Exact timing is unpublished. This note does not invent a timing or damage adjustment. <a href="https://aniimo.guide/en/world/bosses/alpha-stellarys" target="_blank" rel="noopener">Mechanic source</a></p>':''}</details><details class="teamMore" data-sim-detail="model-settings"${detailOpen('model-settings')}><summary>Battle model settings &amp; source limits</summary><div class="battleFields">${configFields.map(([key,label,min,max,step])=>`<label>${label}<input type="number" data-battle-setting="${key}" value="${settings[key]}" min="${min}" max="${max}" step="${step}"></label>`).join('')}<label>Multi-element calculation*<select data-battle-setting="stacking"><option value="lowest"${settings.stacking==='lowest'?' selected':''}>Lowest individual factor (assumption)</option><option value="product"${settings.stacking==='product'?' selected':''}>Multiply factors (community estimate)</option></select></label></div><p class="hint">* Editable assumptions. Imported power/EP and passive effects are cross-checked with official pages; elements and cooldowns also use community records, some predating v1.1. Cast durations, animation speed, hit counts, damage scaling, BREAK vulnerability, control susceptibility, dodge chance and ultimate-charge gains are not verified live-patch values. Unknown cooldowns must be supplied before that skill can be used; unresolved options are excluded from loadout search until calibrated. This model resolves actions at 0.1-second steps, keeps off-field cooldowns running, uses one active Aniimo per side, cancels unfinished casts on KO, and shares EP across each party. Ultimate charging is modeled per Aniimo. Pound cancels Tunnel in this model; re-entry is not simulated. Airborne damage penalties are unquantified, so their default multiplier is 1 until you calibrate it.</p><p class="hint">The optimizer checks every permitted two-skill pair and ultimate for each member in two coordinate sweeps, using 20 screening trials per distinct loadout. Repeated loadouts reuse their screening results; scripted rotations test both slot orders. It then validates on a different seed using your selected trial count and keeps the baseline if validation is worse. It searches skill selections for this composition; it does not prove the globally best team, exact live rotation or a universal win chance. Scripted token order stays fixed while both skill-slot assignments are tested.</p><p class="hint">Guide-inspired presets favor efficient setup, healing when needed, and expensive skills/ultimates during BREAK. Numerical use weights are editable author assumptions; guides do not publish measured AI probabilities. <a href="https://www.aniimoverse.com/guides/combat" target="_blank" rel="noopener">Rotation guide</a> · <a href="https://www.aniimoverse.com/guides/builds/scorchhowl" target="_blank" rel="noopener">Scorchhowl burst guide</a> · <a href="https://aniimo.gg/guide/skills/" target="_blank" rel="noopener">EP and active skills</a> · <a href="https://aniimo.gg/guide/ultimate/" target="_blank" rel="noopener">Ultimate charge</a></p><button class="quiet" data-battle-action="reset-model">Reset model assumptions</button></details><div id="battleResults" aria-live="polite">${battleResultsHtml()}</div>`;
}
function invalidateBattle(message='Setup changed. Run the simulation again.'){
  if(battleWorker){battleWorker.terminate();battleWorker=null}
  battleResult=null;battleOptimization=null;battleMessage=message;
}
function startBattleSimulation(optimize=false){
  try{
    const enemies=team.map(resolveEnemy);
    if(enemies.some(e=>!battleCatalogFor(e))&&!battleState.allowGeneric)throw new Error('Some enemies have no audited skill catalog. Enter their observed attacks and explicitly enable assumed enemy attacks.');
    const specs=currentBattleSpecs();specs.own.forEach(validateBattleSpec);specs.enemy.forEach(validateBattleSpec);
    if(!specs.own.length||!specs.enemy.length)throw new Error('Select a counter team and an enemy team first.');
    invalidateBattle(optimize?'Testing permitted two-skill pairs and ultimates…':'Simulating current loadout…');
    const worker=new Worker('simulation.worker.js?v=1.3.1');battleWorker=worker;
    worker.onmessage=e=>{
      if(battleWorker!==worker)return;
      if(e.data.progress){$('battleNotice').textContent='Skill search: sweep '+e.data.progress.sweep+', member '+e.data.progress.member+' · '+e.data.progress.evaluations+' tests';return}
      battleWorker.terminate();battleWorker=null;
      if(e.data.error){battleMessage=e.data.error;renderBattleSimulator();return}
      if(optimize){
        battleOptimization=e.data.optimization;battleResult=battleOptimization.result;
        let j=0;battleState.ownKeys.forEach((key,i)=>{const a=roster.find(a=>battleFormKey(a)===key);if(a){const chosen=battleOptimization.selected[j++],r=actorBattleRecord('own:'+i+':'+key,a);r.selected=chosen.skills.map(s=>s.key);r.ultimate=chosen.ultimate.key}});
      }else battleResult=e.data.result;
      battleMessage='Simulation complete. Outcomes apply only to the displayed model inputs.';saveBattleState();renderBattleSimulator();
    };
    worker.onerror=()=>{if(battleWorker!==worker)return;worker.terminate();battleWorker=null;battleMessage='Simulation failed. Refresh the page and check the model inputs.';renderBattleSimulator()};
    battleWorker.postMessage({optimize,own:specs.own,enemy:specs.enemy,settings:normalizeBattleSettings(battleState.settings),traits:traitOptions});
    renderBattleSimulator();
  }catch(e){invalidateBattle(e.message);renderBattleSimulator()}
}
$('battleSimulator').addEventListener('toggle',e=>{const id=e.target.dataset?.simDetail;if(id){if(e.target.open)battleOpen.add(id);else battleOpen.delete(id)}},true);
$('battleSimulator').addEventListener('change',e=>{
  const target=e.target;
  if(target.dataset.ownSlot!==undefined)battleState.ownKeys[Number(target.dataset.ownSlot)]=roster.some(a=>battleFormKey(a)===target.value)?target.value:'';
  else if(target.dataset.battleSetting){const key=target.dataset.battleSetting;battleState.settings=normalizeBattleSettings({...battleState.settings,[key]:target.value})}
  else if(target.hasAttribute('data-allow-generic'))battleState.allowGeneric=target.checked;
  else if(target.dataset.actor){
    const key=target.dataset.actor,r=battleState.actors[key];if(!r)return;
    if(target.dataset.skillField){
      const field=target.dataset.skillField,skill=target.dataset.skill;
      if(field==='enabled')r.enabled[skill]=target.checked;
      else {r.overrides[skill]=r.overrides[skill]||{};r.overrides[skill][field]=target.value===''?null:target.value}
    }else{
      const field=target.dataset.actorField;
      if(field==='skill1')r.selected[0]=target.value;
      else if(field==='skill2')r.selected[1]=target.value;
      else if(field==='mode'){r.mode=target.value;r.selected=[];r.ultimate=null;r.overrides={};r.enabled={}}
      else r[field]=target.value;
    }
  }else return;
  invalidateBattle();saveBattleState();renderBattleSimulator();
});
$('battleSimulator').addEventListener('click',e=>{
  const button=e.target.closest('button[data-battle-action]');if(!button)return;
  const action=button.dataset.battleAction;
  if(action==='run'||action==='optimize'){startBattleSimulation(action==='optimize');return}
  if(action==='suggestion'){const g=suggestTraitTeams(rankTeamCounters(team.map(resolveEnemy)),traitOptions)[0];battleState.ownKeys=g?g.selected.map(r=>battleFormKey(r.a)):[];battleInitialized=true;}
  if(action==='reset-model')battleState.settings={...battleDefaults};
  invalidateBattle(action==='cancel'?'Simulation cancelled.':'Setup updated. Run the simulation to compare.');saveBattleState();renderBattleSimulator();
});
restoreBattleState();restoreTraitSetup();syncTraitControls();restoreTeam();renderTeam();

