import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const bundle=['dex','roster','app','lookup'].map(name=>fs.readFileSync(path.join(root,'src',name+'.js'),'utf8')).join('\n;\n');
fs.mkdirSync(path.join(root,'dist'),{recursive:true});
fs.writeFileSync(path.join(root,'dist','app.bundle.js'),bundle);
fs.writeFileSync(path.join(root,'dist','style.css'),fs.readFileSync(path.join(root,'src','style.css'),'utf8').replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s+/g,' ').replace(/\s*([{};:,])\s*/g,'$1'));
const {version}=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
if(!/^\d+\.\d+\.\d+$/.test(version))throw new Error('Use a numeric major.minor.patch app version.');
const changelog=fs.readFileSync(path.join(root,'CHANGELOG.md'),'utf8');
if(!changelog.includes(`## ${version} — `))throw new Error('Current app version needs a changelog entry.');
fs.writeFileSync(path.join(root,'dist','index.html'),fs.readFileSync(path.join(root,'src','index.html'),'utf8').replaceAll('{{APP_VERSION}}',version));
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
let inList=false;
let html='';
for(const line of changelog.split('\n')){
  if(!line.startsWith('- ')&&inList){html+='</ul>';inList=false;}
  if(line.startsWith('- ')){if(!inList){html+='<ul>';inList=true;}html+=`<li>${escape(line.slice(2))}</li>`;}
  else if(line.startsWith('## '))html+=`<h2>${escape(line.slice(3))}</h2>`;
  else if(line.startsWith('# '))html+=`<h1>${escape(line.slice(2))}</h1>`;
  else if(line.trim())html+=`<p>${escape(line)}</p>`;
}
if(inList)html+='</ul>';
fs.writeFileSync(path.join(root,'dist','changelog.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#101723"><title>Changelog · Aniimo Counter Lab</title><link rel="stylesheet" href="style.css?v=${version}"></head><body><header><a class="brand" href="./">◇ ANIIMO <span>COUNTER LAB</span></a><span class="fan">App v${version}</span></header><main><section class="panel releaseNotes">${html}<p><a href="./">← Back to counter lookup</a></p></section></main></body></html>`);
for(const name of ['app.js','dex.js','lookup.js','roster.js']){const file=path.join(root,'dist',name);if(fs.existsSync(file))fs.unlinkSync(file)}
console.log('Built static bundle.');
