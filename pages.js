const search=document.querySelector('#module-search');
if(search){
  search.closest('form').addEventListener('submit',event=>event.preventDefault());
  const cards=[...document.querySelectorAll('[data-module]')];
  let category='all';
  function filter(){const words=search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);let count=0;for(const card of cards){const visible=(category==='all'||card.dataset.category===category)&&words.every(word=>card.dataset.search.includes(word));card.hidden=!visible;if(visible)count++;}document.querySelector('#module-count').textContent=`${count} / ${cards.length}`;document.querySelector('#search-empty').hidden=count!==0;}
  search.addEventListener('input',filter);
  document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));filter();}));
  document.querySelector('#reset-search').addEventListener('click',()=>{search.value='';document.querySelector('[data-filter="all"]').click();search.focus();});
}
