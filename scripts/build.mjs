import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const bundle=['dex','roster','app','lookup'].map(name=>fs.readFileSync(path.join(root,'src',name+'.js'),'utf8')).join('\n;\n');
fs.mkdirSync(path.join(root,'dist'),{recursive:true});
fs.writeFileSync(path.join(root,'dist','app.bundle.js'),bundle);
fs.writeFileSync(path.join(root,'dist','style.css'),fs.readFileSync(path.join(root,'src','style.css'),'utf8').replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s+/g,' ').replace(/\s*([{};:,])\s*/g,'$1'));
fs.writeFileSync(path.join(root,'dist','index.html'),fs.readFileSync(path.join(root,'src','index.html'),'utf8'));
for(const name of ['app.js','dex.js','lookup.js','roster.js']){const file=path.join(root,'dist',name);if(fs.existsSync(file))fs.unlinkSync(file)}
console.log('Built static bundle.');
