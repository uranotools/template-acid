import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'template.json'), 'utf8'))

assert.equal(manifest.kind, 'template')
assert.equal(manifest.apiVersion, 2)
assert.equal(manifest.id, 'urano-acid')

for (const surface of ['navigation', 'header', 'history', 'welcome']) {
  const view = manifest.views.find(item => item.id === manifest.components[surface])
  assert.ok(view?.capabilities.includes('surface.read') && view.capabilities.includes('surface.act'))
}

const seen = []
const walk = node => 'slot' in node ? seen.push(node.slot) : node.children.forEach(walk)
walk(manifest.layout)
assert.deepEqual(seen.sort(), ['assistant', 'content', 'header', 'sidebar', 'subheader'])

for (const mode of ['light', 'dark']) {
  for (const value of Object.values(manifest.theme[mode])) {
    assert.match(value, /^\d+ \d+% \d+%$/)
  }
}

const bundle = fs.readFileSync(path.join(root, manifest.views[0].bundle), 'utf8')
assert.ok(bundle.length > 1000, 'Must include the compiled view')
assert.doesNotMatch(bundle, /import\s*\(/, 'No unresolved runtime imports')
assert.match(bundle, /data:font\//, 'Local font must be embedded for the isolated runtime')
assert.doesNotMatch(bundle, /\b(?:electronAPI|localStorage|sessionStorage)\b/, 'No host bridge or storage access')
assert.ok(fs.existsSync(path.join(root, manifest.font.file)))

console.log('PASS: Urano Acid template validation (identity, unique slots, modes, compiled self-contained view and font)')
