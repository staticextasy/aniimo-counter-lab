import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const root=path.resolve(import.meta.dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const {version}=JSON.parse(read('package.json'));
for(const page of ['index.html','team.html','changelog.html']){
 const html=read('dist/'+page);
 assert(!html.includes('{{APP_VERSION}}'));
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,new Set(ids).size,'Duplicate IDs in '+page);
 for(const m of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
  const url=m[1];if(/^(https?:|mailto:)/.test(url))continue;
  const file=url.split(/[?#]/)[0];if(!file||file==='./')continue;
  assert(fs.existsSync(path.join(root,'dist',file)),'Missing local asset: '+url);
 }
 assert(html.includes('style.css?v='+version));
}
for(const file of ['app.bundle.js','team.bundle.js','simulation.worker.js']){
 const source=read('dist/'+file);assert(!source.includes('{{APP_VERSION}}'));new vm.Script(source,{filename:file});
}
const ctx=vm.createContext({});
vm.runInContext(['dex','matchups','roster','scoring','team-scoring','search','traits','skills','battle'].map(n=>read('src/'+n+'.js')).join('\n;\n'),ctx);
const run=s=>vm.runInContext(s,ctx);
run(`let checkedMatchups=0;
for(const species of aniimoDex){
 if(searchDex(species.name)[0]?.id!==species.id)throw Error('Name search mismatch: '+species.name);
 for(const alias of species.aliases)if(!searchDex(alias).some(a=>a.id===species.id))throw Error('Alias mismatch');
 for(const form of species.forms)for(const spatial of spatialTypes){
  const enemy={name:species.name,elements:form.elements,spatial};
  const ranked=rankTeamCounters([enemy]);
  if(ranked.length!==17||ranked.some(r=>r.matches.length!==1))throw Error('Missing ranked matchups');
  for(const r of ranked){
   const m=r.matches[0];
   if(!m.factors.every(Number.isFinite)||!['Advantage','Blocked','Reach unconfirmed','Mixed','Resisted','Neutral'].includes(m.status))throw Error('Invalid matchup');
   if(m.covered!==(m.status==='Advantage'))throw Error('Coverage/status mismatch');
   if(spatial==='Tunnel'&&m.m.range==='Ranged'&&m.status!=='Blocked')throw Error('Ranged Tunnel coverage');
   if(spatial==='Fly'&&m.m.range!=='Ranged'&&m.covered)throw Error('Unconfirmed Fly coverage');
   checkedMatchups++;
  }
 }
}
for(const catalog of battleSkillCatalog){
 if(new Set(catalog.skills.map(s=>s.key)).size!==catalog.skills.length)throw Error('Duplicate skill key');
 for(const s of catalog.skills){
  if(!['basic','skill','ultimate'].includes(s.kind)||!Number.isInteger(s.element)||s.element<0||s.element>=types.length||![s.power,s.cost,s.breakPower,s.cast,s.weight,s.hits,s.ultimateCost].every(Number.isFinite))throw Error('Invalid skill record');
  if(s.cooldown!==null&&(!Number.isFinite(s.cooldown)||s.cooldown<0))throw Error('Invalid cooldown');
 }
}`);
assert.equal(run('checkedMatchups'),207*5*17);
assert.equal(run("searchDex('  sHeRRo!! ')[0].name"),'Sherro');
assert.equal(run("searchDex('<script>zzzz').length"),0);
assert.equal(run("normalizeBattleSettings({trials:Infinity,epStart:200,epMax:10}).epStart"),10);
assert.equal(run("normalizeBattleSettings({trials:-1}).trials"),20);
const audit=JSON.parse(read('data/skill-audit.json'));
assert.deepEqual(audit.records,JSON.parse(run('JSON.stringify(battleSkillCatalog)')),'Skill source and audit must agree');
assert(read('CHANGELOG.md').includes('## '+version+' — '));
console.log('PASS: release assets, versioned links, unique page IDs, bundle syntax, name/alias search, 17,595 form/state matchups, skill schema and bounded model settings.');
