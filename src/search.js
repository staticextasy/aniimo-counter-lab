const nameNormalize=s=>s.trim().toLowerCase().replace(/[^a-z0-9]/g,'');
const dexById=new Map(aniimoDex.map(a=>[a.id,a]));
const nameIndex=aniimoDex.map(a=>({a,normalized:nameNormalize(a.name),keys:[a.name,...a.aliases,a.id].map(nameNormalize)}));
function searchDex(query){const q=nameNormalize(query);if(!q)return[];return nameIndex.filter(r=>r.keys.some(n=>n.includes(q))).sort((a,b)=>Number(b.normalized===q)-Number(a.normalized===q)||Number(b.normalized.startsWith(q))-Number(a.normalized.startsWith(q))||a.a.name.localeCompare(b.a.name)).map(r=>r.a)}
