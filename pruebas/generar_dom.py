from html.parser import HTMLParser
from pathlib import Path
import json, hashlib

ROOT=Path(__file__).resolve().parent.parent
VOID={'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
class Parser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root={'tag':'document','attrs':{},'children':[]}
        self.stack=[self.root]
    def handle_starttag(self,tag,attrs):
        node={'tag':tag,'attrs':{k:v or '' for k,v in attrs},'children':[]}
        self.stack[-1]['children'].append(node)
        if tag not in VOID:self.stack.append(node)
    def handle_startendtag(self,tag,attrs):
        self.handle_starttag(tag,attrs)
        if tag not in VOID:self.handle_endtag(tag)
    def handle_endtag(self,tag):
        for i in range(len(self.stack)-1,0,-1):
            if self.stack[i]['tag']==tag:self.stack=self.stack[:i];return
    def handle_data(self,text):
        if text.strip():self.stack[-1]['children'].append(text)

raw=(ROOT/'herramientas.html').read_bytes()
parser=Parser();parser.feed(raw.decode())
parser.root['sourceSHA']=hashlib.sha256(raw).hexdigest()
(ROOT/'pruebas/herramientas-dom.json').write_text(json.dumps(parser.root,ensure_ascii=False),encoding='utf-8')
print('DOM instrumentado derivado del HTML actual; no se abrió navegador.')
