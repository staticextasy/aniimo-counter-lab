import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const nodes = new Map();
function get(id) {
  if (!nodes.has(id)) nodes.set(id, {
    innerHTML: '', textContent: '', value: '', open: false, checked: false,
    disabled: false, attrs: {},
    setAttribute(k, v) { this.attrs[k] = String(v); },
    removeAttribute(k) { delete this.attrs[k]; },
    addEventListener(k, f) { this[k] = f; },
    focus() {}, querySelectorAll() { return []; }
  });
  return nodes.get(id);
}
const context = vm.createContext({ document: { getElementById: get, addEventListener() {} } });
vm.runInContext(fs.readFileSync(new URL('../dist/app.bundle.js', import.meta.url), 'utf8'), context);
const run = s => vm.runInContext(s, context);
const dex = run('aniimoDex');
assert.equal(dex.length, 87);
assert.equal(dex.flatMap(a => a.forms).length, 207);
assert.equal(dex.flatMap(a => a.forms).filter(f => f.key === 'prismana-form').length, 26);

const expected = [
  ['003', 'highland-form', [0, 5]],
  ['003', 'thunderstorm-form', [0, 3]],
  ['009', 'beach-form', [6, 1]],
  ['009', 'highland-form', [6, 2]],
  ['044', 'nighttime-form', [8, 4]],
  ['006', 'prismana-form', [8, 4]]
];
for (const [id, key, elements] of expected) {
  const form = dex.find(a => a.id === id).forms.find(f => f.key === key);
  assert.deepEqual(Array.from(form.elements), elements);
}

for (const a of dex) {
  assert.equal(new Set(a.forms.map(f => f.key)).size, a.forms.length);
  context.testId = a.id;
  run('selectEnemy(testId)');
  for (const f of a.forms) {
    context.testKey = f.key;
    run('applyNamedForm(testKey)');
    assert.deepEqual(Array.from(run('selected')), Array.from(f.elements));
    assert.equal(get('formBadge').textContent, f.label.toUpperCase());
    assert.equal(run('prismatic'), f.key === 'prismana-form');
    assert.equal(get('normal').attrs['aria-pressed'], String(f.key === 'basic-form'));
    assert.equal(get('prism').attrs['aria-pressed'], String(f.key === 'prismana-form'));
    assert(get('enemyForm').innerHTML.includes(f.label));
    assert.equal(run('spatial'), 'Unknown');
    assert(f.elements.every(e => Number.isInteger(e) && e >= 0 && e < 9));
    assert.equal(f.source, `https://wiki.aniimo.com/item/${a.id}/${f.key}`);
  }
}
run("selectEnemy('003'); applyNamedForm('highland-form')");
get('prism').onclick();
assert.equal(get('enemyForm').value, 'prismana-form');
get('normal').onclick();
assert.equal(get('enemyForm').value, 'basic-form');
get('reset').onclick();
assert.equal(run('namedEnemy'), null);
assert.equal(get('formBadge').textContent, 'STANDARD');
const {version} = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const index = fs.readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const history = fs.readFileSync(new URL('../dist/changelog.html', import.meta.url), 'utf8');
assert(index.includes(`App v${version}`));
assert(index.includes('href="changelog.html"'));
assert(!index.includes('{{APP_VERSION}}'));
assert(history.includes(`${version} — `));
assert(history.includes('1.0.0 — '));
console.log('PASS: 207 form selections, regional typings, form controls, reset, app version and changelog.');
