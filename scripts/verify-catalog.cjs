const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const sandbox = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'assets/catalog.js'),'utf8'),sandbox);
const services = JSON.parse(JSON.stringify(sandbox.window.ALVERNIA_SERVICES));
const source = JSON.parse(fs.readFileSync(path.join(root,'reference/source-catalog.json'),'utf8'));
assert.equal(new Set(services.map(s=>s.id)).size, services.length);
let entries=0,links=0;
for(const original of source.entries){
  const variant=services.flatMap(s=>s.variants).find(v=>v.sourceName===original.name && v.audience===original.audience);
  assert.ok(variant, `Missing source entry ${original.name} / ${original.audience}`);
  assert.deepEqual(variant.links,original.links, `Changed links for ${original.name}`);
  entries++;links+=variant.links.length;
}
const categories=['Academics','Campus Life','Student Services','University Operations'];
for(const service of services){
  assert.ok(categories.includes(service.category));
  assert.ok(service.description && service.aliases && service.icon && service.variants.length);
  for(const variant of service.variants) for(const link of variant.links) assert.match(link.url,/^(https?:\/\/|mailto:)/);
}
for(const page of ['index.html','classic.html','modern.html']){
  const html=fs.readFileSync(path.join(root,page),'utf8');
  assert.ok(!/\b(?:THEME|HEADLINE|INTRO|NUMBER)\b/.test(html),`Unfilled template in ${page}`);
  for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)){
    const url=match[1];if(/^(?:https?:|mailto:|tel:|#)/.test(url))continue;
    assert.ok(fs.existsSync(path.join(root,url.split('#')[0])),`${page} missing ${url}`);
  }
  assert.equal((html.match(/<h1\b/g)||[]).length,1);
}
for(const file of ['app.js','icons.js','comparison.js','catalog.js','navigation.js']){
 const code=fs.readFileSync(path.join(root,'assets',file),'utf8');
 assert.ok(!/\b(?:fetch|XMLHttpRequest|WebSocket)\s*\(/.test(code),`Network runtime in ${file}`);
 new vm.Script(code,{filename:file});
}
function luminance(hex){const rgb=hex.match(/\w\w/g).map(n=>parseInt(n,16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];}
function ratio(a,b){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
const contrastPairs=[['Primary text','292b2d','faf9f6'],['Secondary text','63646a','ffffff'],['Quick-link captions','63646a','efe8e4'],['Maroon links','76283d','ffffff'],['Hero supporting text','e3d3da','4b1829'],['Hero gold text','e8c985','4b1829'],['Audience badge','6c676a','ffffff'],['Classic homepage maroon / white','9b2743','ffffff'],['Classic supporting text / gray','565b5e','f3f3f3'],['Classic ink / gray','19232b','f3f3f3']];
for(const [name,a,b] of contrastPairs) assert.ok(ratio(a,b)>=4.5,`${name} contrast below 4.5:1`);
console.log(JSON.stringify({result:'PASS',uniqueServices:services.length,audienceEntries:entries,serviceLinkOccurrences:links,localAssets:'all resolve',runtimeNetworkDependencies:0,contrast:contrastPairs.map(([name,a,b])=>({name,ratio:ratio(a,b).toFixed(2)}))},null,2));
