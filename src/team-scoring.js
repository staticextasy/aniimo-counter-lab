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
