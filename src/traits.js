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
function traitFor(a){return traitProfiles.find(p=>p.name===a.name)||null}
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
function scoreTraitGroup(group,options){
  const o=normalizeTraitOptions(options),covered=new Set(),reachable=new Set();
  let blocked=0,uncertain=0,resisted=0,fit=0;
  for(const r of group){
    r.matches.forEach((m,i)=>{if(m.covered)covered.add(i);if(!['Blocked','Reach unconfirmed'].includes(m.status))reachable.add(i)});
    blocked+=r.blocked;uncertain+=r.uncertain;resisted+=r.resisted;
    fit+=traitFit(r,o).fit;
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
  const candidates=ranked.filter(r=>r.matches.some(m=>!['Blocked','Reach unconfirmed'].includes(m.status))),groups=[];
  function visit(start,group){
    if(group.length)groups.push(scoreTraitGroup(group,options));
    if(group.length===3)return;
    for(let i=start;i<candidates.length;i++)if(!group.some(r=>r.a.name===candidates[i].a.name))visit(i+1,[...group,candidates[i]]);
  }
  visit(0,[]);
  return groups.sort(compareTraitGroups).slice(0,3);
}
