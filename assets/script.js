const live = document.querySelector('#live-region');
const toast = document.querySelector('#toast');
let toastTimer;
function announce(message){ if(live) live.textContent = message; if(toast){ toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove('show'),2200); } }

const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('#mobile-nav');
if(menuBtn && mobileNav){
  menuBtn.addEventListener('click',()=>{ const open = mobileNav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', String(open)); announce(open?'Menu aberto':'Menu fechado'); });
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false');}));
}

const a11yToggle = document.querySelector('#a11y-toggle');
const a11yPanel = document.querySelector('#a11y-panel');
if(a11yToggle && a11yPanel){
  a11yToggle.addEventListener('click',()=>{ const open = a11yPanel.classList.toggle('open'); a11yToggle.setAttribute('aria-expanded', String(open)); a11yPanel.setAttribute('aria-hidden', String(!open)); if(open) a11yPanel.querySelector('button')?.focus(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape' && a11yPanel.classList.contains('open')){ a11yPanel.classList.remove('open'); a11yToggle.setAttribute('aria-expanded','false'); a11yPanel.setAttribute('aria-hidden','true'); a11yToggle.focus(); }});
  document.querySelectorAll('[data-a11y]').forEach(btn => btn.addEventListener('click',()=>{
    const type = btn.dataset.a11y;
    if(type==='text'){ document.body.classList.toggle('text-lg'); announce(document.body.classList.contains('text-lg')?'Texto aumentado':'Texto em tamanho padrão'); }
    if(type==='contrast'){ document.body.classList.toggle('contrast'); announce(document.body.classList.contains('contrast')?'Alto contraste ativado':'Alto contraste desativado'); }
    if(type==='motion'){ document.body.classList.toggle('motion-off'); announce(document.body.classList.contains('motion-off')?'Movimento reduzido':'Movimento restaurado'); }
    if(type==='reset'){ document.body.classList.remove('text-lg','contrast','motion-off'); announce('Preferências restauradas'); }
  }));
}

document.addEventListener('keydown', e => {
  if(e.altKey && e.key === '1'){ document.querySelector('main')?.focus?.(); document.querySelector('main')?.scrollIntoView(); announce('Indo para o conteúdo principal'); }
  if(e.altKey && e.key === '2'){ document.querySelector('#search')?.focus(); announce('Busca ativada'); }
  if(e.altKey && e.key === '3'){ document.querySelector('.topbar')?.scrollIntoView(); announce('Indo para o menu'); }
});

const search = document.querySelector('#search');
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.product-card');
const empty = document.querySelector('#empty-state');
let currentFilter = 'todos';
function filterProducts(){
  if(!cards.length) return;
  const term = (search?.value || '').trim().toLowerCase();
  let visible = 0;
  cards.forEach(card=>{
    const okCat = currentFilter === 'todos' || card.dataset.category === currentFilter;
    const okTerm = !term || card.dataset.search.toLowerCase().includes(term) || card.textContent.toLowerCase().includes(term);
    const show = okCat && okTerm;
    card.style.display = show ? '' : 'none';
    if(show) visible++;
  });
  document.querySelectorAll('.group-title').forEach(title => {
    const group = title.nextElementSibling;
    if (!group || !group.classList.contains('products')) return;
    const hasVisibleCard = [...group.querySelectorAll('.product-card')].some(card => card.style.display !== 'none');
    title.style.display = hasVisibleCard ? '' : 'none';
    group.style.display = hasVisibleCard ? '' : 'none';
  });
  if(empty) empty.style.display = visible ? 'none' : 'block';
  announce(`${visible} produto${visible === 1 ? '' : 's'} encontrado${visible === 1 ? '' : 's'}.`);
}
if(search) search.addEventListener('input', filterProducts);
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active')); tab.classList.add('active'); currentFilter = tab.dataset.filter; filterProducts();}));

const cartList = document.querySelector('#cart-list');
const cartEmpty = document.querySelector('#cart-empty');
const finish = document.querySelector('#finish-order');
const order = [];
function renderCart(){
  if(!cartList) return;
  cartList.innerHTML = order.map(item=>`<li>${item}</li>`).join('');
  if(cartEmpty) cartEmpty.style.display = order.length ? 'none' : '';
  if(finish){
    const text = order.length ? `Olá! Gostaria de fazer o pedido:%0A- ${order.join('%0A- ')}` : 'Olá! Gostaria de fazer um pedido.';
    finish.href = `https://api.whatsapp.com/send?phone=5561981579252&text=${text}`;
  }
}
document.querySelectorAll('.add').forEach(btn=>btn.addEventListener('click',()=>{ const name = btn.closest('.product-card')?.querySelector('h3')?.textContent || 'Item'; order.push(name); renderCart(); announce(`${name} adicionado ao pedido.`); }));
renderCart();
