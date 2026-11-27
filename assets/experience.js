(()=>{'use strict';
const root=document.body;
const reduce=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce&&'IntersectionObserver'in window){const nodes=[...document.querySelectorAll('[data-reveal]')];const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('will-reveal');entry.target.classList.add('is-revealed');observer.unobserve(entry.target);}}),{threshold:.08,rootMargin:'0px 0px -25px 0px'});root.classList.add('motion-ready');nodes.forEach(n=>{n.classList.add('will-reveal');observer.observe(n);});}
const buttons=[...document.querySelectorAll('button[data-panel]')];
function selectPanel(name){const b=buttons.find(x=>x.dataset.panel===name);if(b)b.click();}
const hash=location.hash.slice(1);if(buttons.some(b=>b.dataset.panel===hash))selectPanel(hash);
buttons.forEach(b=>b.addEventListener('click',()=>{try{history.replaceState(null,'','#'+b.dataset.panel);}catch{}}));
document.querySelectorAll('[data-shortcut]').forEach(b=>b.addEventListener('click',()=>{selectPanel(b.dataset.shortcut);const reset=document.getElementById(b.dataset.reset||'');if(reset)reset.click();const field=document.getElementById(b.dataset.focus||'');if(field){const details=field.closest('details');if(details)details.open=true;field.scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'});field.focus({preventScroll:true});}}));
})();