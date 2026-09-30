import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const names=['dex','matchups','roster','scoring','team-scoring','traits'];
const ctx=vm.createContext({});
vm.runInContext(names.map(n=>fs.readFileSync(new URL('../src/'+n+'.js',import.meta.url),'utf8')).join('\n;\n'),ctx);
const run=s=>vm.runInContext(s,ctx);
assert.equal(run('traitProfiles.length'),14);
assert.equal(run('roster.every(a=>traitFor(a))'),true);
assert.equal(run('normalizeTraitOptions({goal:"invented",water:"true"}).water'),false);
assert.equal(run('normalizeTraitOptions({goal:"invented"}).goal'),'balanced');
for(const name of ['Sherro','Glacy','Infergon','Glynsera','Cornet','Minespine']){
  ctx.name=name;
  assert.equal(run("traitFit(rankTeamCounters([{elements:[0],spatial:'Unknown'}]).find(r=>r.a.name===name)).ready"),false);
}
assert.equal(run("traitFit(rankTeamCounters([{elements:[0],spatial:'Unknown'}]).find(r=>r.a.name==='Sherro'),{water:true}).ready"),true);
assert.equal(run("traitFit(rankTeamCounters([{elements:[2],spatial:'Fly'}]).find(r=>r.a.name==='Scorchhowl')).ready"),false);
assert.equal(run("traitFit(rankTeamCounters([{elements:[2,1],spatial:'Unknown'}]).find(r=>r.a.name==='Scorchhowl')).ready"),false);
assert.equal(run("traitFit(rankTeamCounters([{elements:[2],spatial:'Unknown'}]).find(r=>r.a.name==='Scorchhowl')).ready"),true);
assert.equal(run("traitFit(rankTeamCounters([{elements:[0],spatial:'Unknown'}]).find(r=>r.a.name==='Panpanta'),{family:true}).ready"),false);
const groups=run("suggestTraitTeams(rankTeamCounters([{elements:[0],spatial:'Unknown'},{elements:[1],spatial:'Unknown'},{elements:[8],spatial:'Fly'}]),{rotation:true})");
assert(groups.length>0);
for(const g of groups){assert(g.selected.length<=3);assert.equal(new Set(g.selected.map(r=>r.a.name)).size,g.selected.length);assert(g.selected.every(r=>r.matches.some(m=>!['Blocked','Reach unconfirmed'].includes(m.status))));}
assert.equal(run("compareTraitGroups({covered:new Set([0,1]),reachable:new Set([0,1]),fit:0},{covered:new Set([0]),reachable:new Set([0,1]),fit:999})")<0,true);
assert.equal(run("traitSynergyNotes([{a:{name:'Glacy'}},{a:{name:'Glynsera'}}])[0].includes('does not confirm')"),true);
const audit=JSON.parse(fs.readFileSync(new URL('../data/trait-audit.json',import.meta.url),'utf8'));
assert.equal(audit.length,17);
for(const a of audit)assert(a.source.startsWith('https://wiki.aniimo.com/item/'));
for(const file of ['index','team']){const html=fs.readFileSync(new URL('../dist/'+file+'.html',import.meta.url),'utf8');assert(html.includes('Suggestions, not guaranteed wins'));assert(html.includes('battleNotice'));}
console.log('PASS: checked passives, conditional triggers, unique species, coverage priority, source audits and prominent recommendation notices.');
