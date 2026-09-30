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
function battleCatalogFor(a){return battleSkillCatalog.find(c=>c.name===a.name)||null}
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
function battleSkillCost(actor,skill,party,options){return skill.cost*(actor.a.name==='Glacy'&&options.water?.84:1)*(actor.discount?.5:1)}
function battlePriority(actor,target,party,skill,t,preset){
  const effect=skill.effect||{},low=Math.min(...party.actors.filter(a=>a.hp>0).map(a=>a.hp/a.maxHp));
  let w=skill.weight;
  if(effect.heal||effect.teamHot){if(low>.85)return 0;w*=1+(1-low)*6;if(preset==='sustain')w*=2}
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
  const equipped=[actor.spec.basic,...actor.spec.skills,actor.spec.ultimate];
  const available=s=>(actor.cooldowns[s.key]||0)<=t&&party.ep+1e-9>=battleSkillCost(actor,s,party,options)&&(s.kind!=='ultimate'||actor.ult+1e-9>=s.ultimateCost);
  if(actor.sequence.length){
    const token=actor.sequence[actor.seqIndex%actor.sequence.length],slot={B:0,'1':1,'2':2,U:3}[token],planned=equipped[slot];
    if(available(planned)){actor.seqIndex++;return planned}
    metric.scriptWait+=.1;
    return available(equipped[0])?equipped[0]:null;
  }
  const candidates=equipped.filter(available).map(s=>({s,w:battlePriority(actor,target,party,s,t,actor.spec.preset||'burst')}));
  const total=candidates.reduce((n,x)=>n+x.w,0);
  if(total<=0)return null;
  let draw=rng()*total;
  for(const x of candidates){draw-=x.w;if(draw<=0)return x.s}
  return candidates.at(-1).s;
}
function simulateTimedBattle(ownSpecs,enemySpecs,settings=battleDefaults,traitOptions=traitDefaults,recordTrace=false){
  if(!ownSpecs.length||ownSpecs.length>4||!enemySpecs.length||enemySpecs.length>64)throw new Error('Use one to four counters and at least one enemy.');
  ownSpecs.forEach(validateBattleSpec);enemySpecs.forEach(validateBattleSpec);
  const c=normalizeBattleSettings(settings),options=normalizeTraitOptions(traitOptions),rng=battleRng(c.seed);
  const newMetric=spec=>({name:spec.a.name,label:formLabels[spec.a.form]||spec.a.label||spec.a.form,damage:0,taken:0,healing:0,shielded:0,traitExtra:0,epSpent:0,epRefund:0,activeTime:0,epWait:0,cooldownWait:0,scriptWait:0,casts:0,blocked:0,reachMisses:0,kos:0,breaks:0,actions:{}});
  const result={wins:0,losses:0,draws:0,timeouts:0,duration:0,remainingHp:0,own:ownSpecs.map(newMetric),enemy:enemySpecs.map(newMetric),trace:[],trials:c.trials,config:c};
  function party(specs,side,metrics){return{side,ep:c.epStart,actors:specs.map((spec,i)=>({spec,a:spec.a,metric:metrics[i],hp:spec.hp||1000,maxHp:spec.hp||1000,atk:spec.atk||spec.a.atk||100,breakStat:spec.breakStat||100,controlResistance:spec.controlResistance||0,spatial:side==='enemy'?spec.a.spatial||'Unknown':spec.a.name==='Cornet'&&options.flight?'Fly':spec.a.name==='Minespine'&&options.tunnel?'Tunnel':'Unknown',ult:0,cooldowns:{},next:0,pending:null,sequence:(spec.script||'').toUpperCase().split(',').map(s=>s.trim()).filter(Boolean),seqIndex:0,gauge:c.breakGauge,maxGauge:c.breakGauge,breakUntil:0,recoveryUntil:0,controlUntil:0,fire:side==='enemy'&&options.fire?6:0,fireUntil:side==='enemy'&&options.fire?Infinity:0,ice:side==='enemy'&&options.ice?6:0,iceUntil:side==='enemy'&&options.ice?Infinity:0,critBuff:0,critUntil:0,buff:0,buffUntil:0,shield:0,shieldUntil:0,cloneBonus:0,cloneUntil:0,clones:0,clonesUntil:0,dance:0,discount:false,sword:0,swordUntil:0,lastSkill:-Infinity,basicHits:0,rage:0,enrageUntil:0,thunder:0,wingUntil:0,hot:[]})),active:0,lastSwap:0,buff:0,buffUntil:0};}
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
    if(effect.teamBuff){own.buff=effect.teamBuff;own.buffUntil=t+effect.duration}
    if(effect.critBuff){actor.critBuff=effect.critBuff;actor.critUntil=t+effect.duration}
    if(effect.shield){actor.shield=actor.maxHp*effect.shield;actor.shieldUntil=t+effect.duration}
    if(effect.cloneBonus){actor.cloneBonus=effect.cloneBonus;actor.cloneUntil=t+effect.duration}
    if(effect.addClone){actor.clones=Math.min(2,actor.clones+1);actor.clonesUntil=t+effect.duration}
    if(effect.reduction){actor.reduction=effect.reduction;actor.reductionUntil=t+effect.duration}
    if(effect.enrage){actor.rage=0;actor.enrageUntil=t+20}
    let damage=0;
    for(let hit=0;hit<skill.hits;hit++){
      if(target.hp<=0)break;
      if(target.spatial==='Tunnel'&&skill.range==='Ranged'){m.blocked++;continue}
      if(target.spatial==='Fly'&&skill.range!=='Ranged'&&rng()>=c.reachChance){m.reachMisses++;continue}
      let power=skill.power,traitPower=power,traitDamage=1,traitCrit=0;
      const name=actor.a.name,profileKnown=!!traitFor(actor.a);
      if(profileKnown){
        if(name==='Stellarys'&&skill.kind==='basic'&&t-actor.lastSkill<=5)traitPower+=6;
        if(name==='Thornblade'&&skill.kind==='basic'&&actor.sword>0&&actor.swordUntil>t){traitPower*=2.8;actor.sword--}
        if(name==='Scorchhowl'){const f=target.a.elements.map(x=>matrix[skill.element][x]);if(f.some(x=>x>1)&&!f.some(x=>x<1))traitDamage*=1.25}
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
      const roll=rng(),baseRate=Math.min(1,c.baseCrit+(actor.critUntil>t?actor.critBuff:0));
      const critical=roll<Math.min(1,baseRate+traitCrit),withoutCrit=roll<baseRate;
      const scale=c.damageScale*(actor.atk/100)*battleFactor(skill.element,target.a.elements,c.stacking)*(1-c.variance+rng()*2*c.variance)*buff;
      let dealt=traitPower*traitDamage*scale*(critical?c.critMultiplier:1);
      let extra=Math.max(0,dealt-power*scale*(withoutCrit?c.critMultiplier:1));
      if(actor.a.name==='Irisalis'&&actor.clones>0&&actor.clonesUntil>t&&(effect.cloneBeam||skill.kind==='basic'&&actor.basicHits%c.basicCombo===c.basicCombo-1)){
        const beams=15*actor.clones*scale;dealt+=beams;extra+=beams;actor.dance+=actor.clones;if(actor.dance>=9){actor.discount=true;actor.dance-=9}
      }
      if(skill.kind==='basic')actor.basicHits++;
      if(name==='Fenmane')actor.thunder++;
      if(name==='Fulmintis'&&skill.kind==='skill'&&critical){own.ep=Math.min(c.epMax,own.ep+4);m.epRefund+=4}
      if(name==='Grizbo'&&actor.enrageUntil<=t){actor.rage+=skill.kind==='basic'?2:0;if(actor.rage>=100){actor.rage=0;actor.enrageUntil=t+20}}
      const absorbed=target.shieldUntil>t?Math.min(target.shield,dealt):0;target.shield-=absorbed;target.metric.shielded+=absorbed;
      const actual=Math.min(Math.max(0,target.hp),Math.max(0,dealt-absorbed));
      m.traitExtra+=dealt>0?extra*(actual/dealt):0;target.hp-=actual;target.metric.taken+=actual;m.damage+=actual;damage+=actual;action.damage+=actual;
      if(target.a.name==='Grizbo'&&target.enrageUntil<=t&&actual>0)target.rage+=2;
      if(skill.range==='Pound'&&target.spatial==='Tunnel')target.spatial='Unknown';
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
    const own=party(ownSpecs,'own',result.own),foes=party(enemySpecs,'enemy',result.enemy);let t=0;
    for(;t<c.timeLimit;t+=.1){
      for(const p of [own,foes]){
        const a=active(p);
        p.ep=Math.min(c.epMax,p.ep+c.epRegen*.1*(a?.a.name==='Grizbo'&&a.enrageUntil>t?1.25:1));
        for(const actor of p.actors){
          for(const hot of actor.hot)if(hot.until>t)heal(actor,hot.rate*.1,hot.metric);
          actor.hot=actor.hot.filter(h=>h.until>t);
          if(actor.fireUntil<=t)actor.fire=0;if(actor.iceUntil<=t)actor.ice=0;
          if(actor.swordUntil<=t)actor.sword=0;if(actor.clonesUntil<=t)actor.clones=0;
        }
      }
      let a=active(own),b=active(foes);if(!a||!b)break;
      // Resolve completed casts simultaneously so an action released at the same timestamp still lands.
      const completed=[];
      if(a.pending&&a.pending.at<=t)completed.push([a,b,own,foes,a.pending.skill]);
      if(b.pending&&b.pending.at<=t)completed.push([b,a,foes,own,b.pending.skill]);
      for(const [actor,target,p,q,skill] of completed){actor.pending=null;apply(actor,target,p,q,skill,t,trial)}
      a=active(own);b=active(foes);if(!a||!b)break;
      if(c.swapEvery>0&&t-own.lastSwap>=c.swapEvery&&!a.pending&&own.actors.filter(x=>x.hp>0).length>1){
        const start=own.active;do{own.active=(own.active+1)%own.actors.length}while(own.actors[own.active].hp<=0&&own.active!==start);
        own.lastSwap=t;a=active(own);a.next=Math.max(a.next,t+c.swapDelay);log(trial,t,'Swap → '+a.a.name);
      }
      for(const [actor,target,p] of [[a,b,own],[b,a,foes]]){
        actor.metric.activeTime+=.1;
        if(actor.pending||actor.next>t||actor.controlUntil>t||actor.breakUntil>t)continue;
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
    result.duration+=Math.min(t,c.timeLimit);result.remainingHp+=own.actors.reduce((n,a)=>n+Math.max(0,a.hp),0);
    const liveOwn=own.actors.some(a=>a.hp>0),liveEnemy=foes.actors.some(a=>a.hp>0);
    if(!liveOwn&&!liveEnemy)result.draws++;else if(!liveEnemy)result.wins++;else if(!liveOwn)result.losses++;else result.timeouts++;
  }
  return result;
}
function battleLoadoutOptions(spec){
  const available=(spec.available||[]).filter(s=>s.kind==='skill'&&s.cooldown!==null),ultimates=(spec.available||[]).filter(s=>s.kind==='ultimate'&&s.cooldown!==null),result=[];
  for(let i=0;i<available.length;i++)for(let j=i+1;j<available.length;j++)for(const u of ultimates)result.push({...spec,skills:[available[i],available[j]],ultimate:u});
  return result;
}
function compareBattleResults(a,b){return b.wins/b.trials-a.wins/a.trials||a.losses/a.trials-b.losses/b.trials||b.remainingHp/b.trials-a.remainingHp/a.trials||a.duration/a.trials-b.duration/b.trials}
function optimizeBattleLoadouts(own,enemy,settings,options,progress=()=>{}){
  const base=normalizeBattleSettings(settings),screen={...base,trials:20,seed:(base.seed+1009)>>>0};
  let selected=own.map(s=>({...s})),evaluations=0;
  // Two coordinate sweeps consider every permitted two-skill pair and ultimate for each member.
  // This is a local search over the fixed composition, not a proof of global optimality.
  for(let sweep=0;sweep<2;sweep++)for(let i=0;i<selected.length;i++){
    let bestSpec=selected[i],best=simulateTimedBattle(selected,enemy,screen,options);
    for(const candidate of battleLoadoutOptions(selected[i])){
      const team=selected.map((s,j)=>j===i?candidate:s),result=simulateTimedBattle(team,enemy,screen,options);evaluations++;
      if(compareBattleResults(result,best)<0){best=result;bestSpec=candidate}
    }
    selected[i]=bestSpec;progress({stage:'search',sweep:sweep+1,member:i+1,evaluations});
  }
  const baseline=simulateTimedBattle(own,enemy,base,options),validation=simulateTimedBattle(selected,enemy,base,options,true);
  // Keep the original if the proposed loadout loses its advantage on independent validation seeds.
  if(compareBattleResults(validation,baseline)>0){selected=own;return{selected,result:simulateTimedBattle(own,enemy,base,options,true),baseline,evaluations,keptBaseline:true}}
  return{selected,result:validation,baseline,evaluations,keptBaseline:false};
}
