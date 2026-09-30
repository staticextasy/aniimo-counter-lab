import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const bundle=fs.readFileSync(new URL('../dist/team.bundle.js',import.meta.url),'utf8');
const workerSource=fs.readFileSync(new URL('../dist/simulation.worker.js',import.meta.url),'utf8');
function runtime(storage=new Map()){
 const nodes=new Map(),workers=[];
 const get=id=>{
  if(!nodes.has(id))nodes.set(id,{innerHTML:'',textContent:'',value:'',checked:false,disabled:false,attrs:{},
   setAttribute(k,v){this.attrs[k]=String(v)},removeAttribute(k){delete this.attrs[k]},
   addEventListener(k,f){this[k]=f},focus(){},querySelectorAll(){return[]}});
  return nodes.get(id);
 };
 class Worker{
  constructor(url){this.url=url;this.terminated=false;workers.push(this)}
  postMessage(data){this.input=data}
  terminate(){this.terminated=true}
  finish(){const worker=this,ctx=vm.createContext({self:{postMessage:data=>worker.onmessage({data})}});vm.runInContext(workerSource,ctx);ctx.input=this.input;vm.runInContext('self.onmessage({data:input})',ctx)}
 }
 const ctx=vm.createContext({Worker,document:{getElementById:get,addEventListener(){}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)}});
 vm.runInContext(bundle,ctx);
 return{ctx,get,workers,storage,run:s=>vm.runInContext(s,ctx),change:target=>get('battleSimulator').change({target:{hasAttribute:()=>false,...target}})};
}
const r=runtime(),run=r.run;
run("selectTeamEnemy('052')");
r.get('addForm').value='basic-form';r.get('addSpatial').value='Unknown';r.get('addEnemy').onclick();
run("battleState.ownKeys=['Glacy|basic-form'];battleInitialized=true;renderBattleSimulator()");
r.change({dataset:{battleSetting:'trials'},value:'20'});
r.change({dataset:{battleSetting:'timeLimit'},value:'10'});
run('startBattleSimulation()');
assert.equal(r.workers.length,1);
const first=r.workers[0];assert.equal(first.input.own[0].skills.length,2);
first.finish();assert(first.terminated);assert.equal(run('battleWorker'),null);
assert.equal(run('battleResult.trials'),20);
assert(r.get('battleSimulator').innerHTML.includes('modeled wins'));
assert(r.get('battleSimulator').innerHTML.includes('not your real chance of winning'));
run('startBattleSimulation(true)');r.workers.at(-1).finish();
assert(run('battleOptimization.evaluations>0'));
assert(run('battleState.actors["own:0:Glacy|basic-form"].selected.length===2'));
assert(r.get('battleSimulator').innerHTML.includes('Best tested loadout'));

// Changes cancel work and clear results; a late reply from an older worker
// must not terminate a new run or restore obsolete results.
run('startBattleSimulation()');const stale=r.workers.at(-1);
r.change({dataset:{battleSetting:'seed'},value:'43'});
assert(stale.terminated);assert.equal(run('battleResult'),null);
run('startBattleSimulation()');const fresh=r.workers.at(-1);
stale.onmessage({data:{error:'stale result'}});
assert.equal(run('battleWorker'),fresh);assert.equal(fresh.terminated,false);
stale.onerror();assert.equal(run('battleWorker'),fresh);
fresh.onerror();assert.equal(run('battleWorker'),null);
assert(r.get('battleSimulator').innerHTML.includes('Simulation failed'));

run('startBattleSimulation()');const cancelled=r.workers.at(-1);
r.get('battleSimulator').click({target:{closest:()=>({dataset:{battleAction:'cancel'}})}});
assert(cancelled.terminated);assert.equal(run('battleResult'),null);
assert(r.get('battleSimulator').innerHTML.includes('Simulation cancelled'));

// Unlock flags remain authoritative when fewer than two skills are available.
run(`const lockKey='own:0:Fulmintis|basic-form',lockForm=roster.find(a=>a.name==='Fulmintis');
battleState.actors[lockKey]={enabled:{'lightning-rush':false,'lightning-blade-impact':false,'lightning-surge':false},selected:[]};
const locked=battleSpec(lockKey,lockForm);`);
assert.equal(run('locked.skills.length'),0);
assert.equal(run("locked.available.some(s=>s.key==='enhanced-light-blade')"),false);
run("battleState.actors[lockKey].enabled['enhanced-light-blade']=true");
assert.equal(run("battleSpec(lockKey,lockForm).available.some(s=>s.key==='enhanced-light-blade')"),true);
assert.throws(()=>run('validateBattleSpec(locked)'));

const restored=runtime(r.storage);
assert.equal(restored.run('battleState.settings.seed'),43);
assert.equal(restored.run('battleState.settings.trials'),20);
assert.equal(restored.run('team.length'),1);
const malformed=runtime(new Map([['aniimo-counter-battle-v1','{invalid json']]));
assert.equal(malformed.run('battleState.settings.seed'),42);
run("battleState.actors['own:0:Glacy|basic-form'].script='\"/><img src=x onerror=alert(1)>';renderBattleSimulator()");
assert(!r.get('battleSimulator').innerHTML.includes('<img src=x'));
assert(r.get('battleSimulator').innerHTML.includes('&lt;img'));
run('startBattleSimulation()');
assert(r.get('battleSimulator').innerHTML.includes('Sequence must use'));
assert.equal(run('battleWorker'),null);
console.log('PASS: simulator UI, real worker responses, optimization, cancellation, stale-response isolation, errors, unlocks, persistence and escaped script input.');
