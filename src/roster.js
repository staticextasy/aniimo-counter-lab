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
