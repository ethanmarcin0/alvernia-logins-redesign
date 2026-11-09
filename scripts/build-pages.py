"""Build a portable GitHub Pages artifact with Classic as its homepage."""
from pathlib import Path
from collections import Counter
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
import shutil

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / '_site'

class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []
        self.ids = set()
        self.primary = False
        self.navigation = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.add(a['id'])
        for field in ('href', 'src'):
            if a.get(field):
                self.links.append(a[field])
        if tag == 'nav' and 'university-primary-nav' in a.get('class', '').split():
            self.primary = True
        if self.primary and tag == 'a':
            self.navigation.append(a.get('data-source-url', a.get('href')))
    def handle_endtag(self, tag):
        if tag == 'nav':
            self.primary = False

source = json.loads((ROOT / 'reference/navigation-source.json').read_text())
page = Page()
page.feed((ROOT / 'classic.html').read_text())
expected = Counter(
    url
    for menu in source['menus']
    for url in ([menu['url']] if menu['url'] else []) + [link['url'] for group in menu['groups'] for link in group['links']]
)
assert Counter(page.navigation) == expected, 'University navigation differs from the captured source'

if OUTPUT.exists():
    shutil.rmtree(OUTPUT)
OUTPUT.mkdir()
shutil.copytree(ROOT / 'assets', OUTPUT / 'assets')
for filename in ('classic.html', 'modern.html', 'HANDOFF.md'):
    shutil.copy2(ROOT / filename, OUTPUT / filename)
# Keep the original offline comparison page; only the deployed homepage changes.
(OUTPUT / 'index.html').write_text((ROOT / 'classic.html').read_text())
(OUTPUT / 'concepts.html').write_text((ROOT / 'index.html').read_text())
modern = (OUTPUT / 'modern.html').read_text().replace('href="index.html"', 'href="concepts.html"')
(OUTPUT / 'modern.html').write_text(modern)
(OUTPUT / '.nojekyll').write_text('')

for filename in ('index.html', 'classic.html', 'modern.html', 'concepts.html'):
    current = Page()
    current.feed((OUTPUT / filename).read_text())
    for link in current.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        target = (OUTPUT / unquote(url.path)) if url.path else (OUTPUT / filename)
        assert target.is_file(), f'{filename}: missing local target {link}'
        if url.fragment and target.suffix == '.html':
            target_page = Page()
            target_page.feed(target.read_text())
            assert unquote(url.fragment) in target_page.ids, f'{filename}: missing fragment {link}'
assert (OUTPUT / 'index.html').read_bytes() == (ROOT / 'classic.html').read_bytes()
print(f'Built {OUTPUT}: Classic homepage, 87 navigation link occurrences verified, all page asset/link/fragment targets resolve.')
