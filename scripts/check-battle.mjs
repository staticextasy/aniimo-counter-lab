import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const ctx=vm.createContext({});
const modules=['dex','matchups','roster','scoring','team-scoring','traits','skills','battle'];
vm.runInContext(modules.map(n=>fs.readFileSync(new URL('../src/'+n+'.js',import.meta.url),'utf8')).join('\n;\n'),ctx);
const run=s=>vm.runInContext(s,ctx);
run(`function testSpec(name){
 const a=roster.find(a=>a.name===name),available=battleCatalogFor(a).skills.filter(s=>!s.variant).map(s=>makeBattleSkill(s,{cooldown:s.cooldown??1}));
 return{a,hp:2000,atk:a.atk,available,basic:available.find(s=>s.kind==='basic'),skills:available.filter(s=>s.kind==='skill').slice(0,2),ultimate:available.find(s=>s.kind==='ultimate'),preset:'burst'};
}
let own=[testSpec('Glacy'),testSpec('Scorchhowl')],enemy=[testSpec('Panpanta')];
`);
assert.equal(run('battleSkillCatalog.length'),14);
assert.equal(run('battleSkillCatalog.reduce((n,c)=>n+c.skills.length,0)'),89);
assert.equal(run("battleCatalogFor(roster.find(a=>a.name==='Scorchhowl')).skills.filter(s=>s.kind==='skill').length"),5);
assert.equal(run("makeBattleSkill(battleSkillCatalog[0].skills[0]).cooldown"),null);
assert.equal(run("makeBattleSkill(battleSkillCatalog[0].skills[0],{cooldown:4,element:0,range:'Pound'}).cooldown"),4);
assert.equal(run("makeBattleSkill(battleSkillCatalog[0].skills[0],{element:0,range:'Pound'}).range"),'Pound');
assert.throws(()=>run("validateBattleSpec({...own[0],skills:[own[0].skills[0],own[0].skills[0]]})"));
assert.throws(()=>run("validateBattleSpec({...own[0],skills:[...own[0].skills,own[0].skills[0]]})"));
assert.throws(()=>run("validateBattleSpec({...own[0],script:'1,anything'})"));
run("let one=simulateTimedBattle(own,enemy,{trials:20,seed:7,timeLimit:20},{water:true},true);let again=simulateTimedBattle(own,enemy,{trials:20,seed:7,timeLimit:20},{water:true},true);");
assert.equal(run('JSON.stringify(one)'),run('JSON.stringify(again)'));
assert.equal(run('one.wins+one.losses+one.draws+one.timeouts'),20);
assert(run('one.trace.length>0'));
assert(run('one.own.every(m=>m.traitExtra<=m.damage+1e-8)'));
run("let dry=simulateTimedBattle([testSpec('Scorchhowl')],enemy,{trials:20,timeLimit:10,epStart:0,epRegen:0,ultGain:0});");
assert.equal(run("dry.own[0].actions['burn-breaker']?.casts||0"),0);
assert.equal(run("dry.own[0].actions['falling-star']?.casts||0"),0);
run("let slow=testSpec('Scorchhowl');slow.skills=slow.skills.map(s=>({...s,cooldown:120}));let slowResult=simulateTimedBattle([slow],[{...enemy[0],hp:50000}],{trials:20,timeLimit:10,epRegen:20});");
assert(run('slowResult.own[0].cooldownWait>0'));
assert(run("Object.values(slowResult.own[0].actions).filter(a=>a.name!=='ATK').every(a=>a.casts<=20)"));
run("let scripted=testSpec('Scorchhowl');scripted.script='B,1,B,2,U';let sequence=simulateTimedBattle([scripted],[{...enemy[0],hp:50000}],{trials:20,timeLimit:10}, {},true);");
assert(run("sequence.trace.some(e=>e.text.includes('ATK'))"));
run("let optimized=optimizeBattleLoadouts([testSpec('Glacy')],enemy,{trials:20,timeLimit:12,seed:3},{water:true});");
assert(run('optimized.evaluations>0'));
assert(run('optimized.selected[0].skills.length===2'));
assert(run('compareBattleResults(optimized.result,optimized.baseline)<=0'));
const worker=fs.readFileSync(new URL('../dist/simulation.worker.js',import.meta.url),'utf8');
const messages=[];
const wc=vm.createContext({self:{postMessage:m=>messages.push(m)}});
vm.runInContext(worker,wc);
wc.input={own:run('own'),enemy:run('enemy'),settings:{trials:20,timeLimit:10},traits:{}};
vm.runInContext('self.onmessage({data:input})',wc);
assert.equal(messages.at(-1).result.trials,20);
const bundle=fs.readFileSync(new URL('../dist/team.bundle.js',import.meta.url),'utf8');
const {version}=JSON.parse(fs.readFileSync(new URL('../package.json',import.meta.url),'utf8'));
assert(bundle.includes('simulation.worker.js?v='+version));assert(!bundle.includes('{{APP_VERSION}}'));
assert(bundle.includes('not your real chance of winning'));
console.log('PASS: timed attacks, two-skill constraint, energy/cooldown/ultimate gates, scripts, deterministic trials, metrics, independent loadout validation and worker execution.');

// Exhaustive catalog execution: every imported skill and ultimate in a calibrated
// loadout, without implying that the calibration matches the actual game.
run(`
let catalogRuns=0;
for(const catalog of battleSkillCatalog){
 const spec=testSpec(catalog.name),all=catalog.skills.map(s=>makeBattleSkill(s,{cooldown:s.cooldown??1}));
 const skills=all.filter(s=>s.kind==='skill');
 for(const skill of skills){
  const pair=[skill,skills.find(s=>s.key!==skill.key)];
  const r=simulateTimedBattle([{...spec,skills:pair,hp:50000,script:'1,2,B'}],[{...enemy[0],hp:50000}],{trials:20,timeLimit:10,epRegen:20});
  if(r.wins+r.losses+r.draws+r.timeouts!==20||r.own.some(m=>!Number.isFinite(m.damage)||m.damage<0||m.traitExtra>m.damage+1e-8))throw Error('Invalid result: '+catalog.name+' '+skill.name);
  catalogRuns++;
 }
 for(const ultimate of all.filter(s=>s.kind==='ultimate')){
  const r=simulateTimedBattle([{...spec,skills:skills.slice(0,2),ultimate,hp:50000,script:'1,2,U'}],[{...enemy[0],hp:50000}],{trials:20,timeLimit:15,epRegen:20,ultGain:100});
  if(!r.own[0].actions[ultimate.key]?.casts)throw Error('Ultimate did not execute: '+catalog.name);
 }
}
`);
assert(run('catalogRuns>50'));
run(`
const neutral={...testSpec('Panpanta'),a:{...testSpec('Panpanta').a,name:'Model fixture',elements:[3]},hp:50000,atk:100};
const fixtureSkill=(key,kind,power,effect={})=>({key,name:key,kind,power,effect,element:0,range:'Ground',hits:1,cost:0,ultimateCost:100,cooldown:0,cast:.1,weight:1,breakPower:0});
const fixture={...neutral,basic:fixtureSkill('basic','basic',10),skills:[fixtureSkill('buff','skill',0,{critBuff:1,critScope:'skill',duration:20}),fixtureSkill('hit','skill',10)],ultimate:fixtureSkill('ult','ultimate',0),script:'1,B,2'};
const harmless={...neutral,basic:fixtureSkill('idle','basic',0),skills:[fixtureSkill('idle1','skill',0),fixtureSkill('idle2','skill',0)],ultimate:fixtureSkill('idleUlt','ultimate',0),script:'B'};
let scoped=simulateTimedBattle([fixture],[harmless],{trials:20,timeLimit:10,baseCrit:0,variance:0,damageScale:1,critMultiplier:2});
`);
assert.equal(run('scoped.own[0].actions.basic.damage/scoped.own[0].actions.basic.casts'),10);
assert.equal(run('scoped.own[0].actions.hit.damage/scoped.own[0].actions.hit.casts'),20);
assert.equal(run('scoped.own[0].actions.buff.damage'),0);
assert.equal(run("battleSkillCost({a:{name:'Irisalis'},discount:true},{kind:'basic',cost:20},{},{})"),20);
assert.equal(run("battleSkillCost({a:{name:'Irisalis'},discount:true},{kind:'ultimate',cost:20},{},{})"),20);
assert.equal(run("battleSkillCost({a:{name:'Irisalis'},discount:true},{kind:'skill',cost:20},{},{})"),10);
run(`const zeroActor={spec:fixture,equipped:[{...fixture.basic,weight:0},...fixture.skills.map(s=>({...s,weight:1})),fixture.ultimate],weights:[0,0,0,0],cooldowns:{},ult:0,a:fixture.a,sequence:[],seqIndex:0};
const target={...harmless,hp:50000,maxHp:50000,gauge:300,maxGauge:300,breakUntil:0,fire:0,ice:0};
const zeroAction=selectBattleAction(zeroActor,target,{ep:60,actors:[target]},0,battleDefaults,()=>0,{},{});`);
assert.notEqual(run('zeroAction.key'),'basic');
assert.equal(run("battleLoadoutOptions({...fixture,available:[...fixture.skills,fixture.ultimate],script:'1,2'}).length"),2);
assert.equal(run("battleLoadoutOptions({...fixture,available:[...fixture.skills,fixture.ultimate],script:''}).length"),1);
run(`let support=testSpec('Fulmintis');support.skills=[support.available.find(s=>s.key==='lightning-surge'),support.skills[0]];support.script='1';
const setupOnly=simulateTimedBattle([support],[harmless],{trials:20,timeLimit:10,baseCrit:1,epRegen:0});`);
assert.equal(run('setupOnly.own[0].epRefund'),0);
// Exact decimal ticks: basic casts complete at 0.1, 0.3, ... 9.9 seconds.
run(`const tickResult=simulateTimedBattle([{...fixture,script:'B'}],[harmless],{trials:20,timeLimit:10,baseCrit:0,variance:0,damageScale:1});`);
assert.equal(run('tickResult.own[0].actions.basic.casts'),20*50);
assert.equal(run('tickResult.duration'),20*10);
// One cast released at the same timestamp on either side can produce a draw.
run(`const lethal={...fixture,hp:200,basic:{...fixture.basic,power:1000},script:'B'};
const tied=simulateTimedBattle([lethal],[lethal],{trials:20,timeLimit:10,baseCrit:0,variance:0,damageScale:1});`);
assert.equal(run('tied.draws'),20);
assert.equal(run('tied.own[0].kos'),20);
assert.equal(run('tied.enemy[0].kos'),20);
console.log('PASS: all imported active skills and ultimates, critical-buff scope, support-hit exclusion, next-skill discounts, zero-weight actions, scripted slot permutations, exact ticks and simultaneous KOs.');

run(`const blockedBuff={...fixture,basic:{...fixture.basic,range:'Ground'},skills:[{...fixture.skills[0],power:10,range:'Ranged',effect:{teamBuff:.5,onHit:true,duration:20}},fixture.skills[1]],script:'1,B'};
const blockedTarget={...harmless,a:{...harmless.a,spatial:'Tunnel'}};
const blockedResult=simulateTimedBattle([blockedBuff],[blockedTarget],{trials:20,timeLimit:10,baseCrit:0,variance:0,damageScale:1});`);
assert.equal(run('blockedResult.own[0].actions.buff.damage'),0);
assert.equal(run('blockedResult.own[0].actions.basic.damage/blockedResult.own[0].actions.basic.casts'),10);
assert(run('blockedResult.own[0].blocked>0'));

run(`const cappedRefund=simulateTimedBattle([{...fixture,a:{...fixture.a,name:'Fulmintis'},script:'2'}],[harmless],{trials:20,timeLimit:10,baseCrit:1,variance:0,epRegen:0});`);
assert.equal(run('cappedRefund.own[0].epRefund'),0);
