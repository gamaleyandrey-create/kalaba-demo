
(function(){
 let lang=localStorage.getItem('kalaba_lang')||'ru';
 let dark=localStorage.getItem('kalaba_theme')==='dark';
 function apply(){
  document.documentElement.lang=lang;
  document.documentElement.classList.toggle('dark',dark);
  document.querySelectorAll('[data-ru][data-uk]').forEach(e=>e.textContent=e.getAttribute(lang==='uk'?'data-uk':'data-ru'));
  document.querySelectorAll('[data-placeholder-ru][data-placeholder-uk]').forEach(e=>e.placeholder=e.getAttribute(lang==='uk'?'data-placeholder-uk':'data-placeholder-ru'));
  document.querySelectorAll('.lang').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  const t=document.getElementById('theme'); if(t)t.textContent=dark?'☀':'☾';
 }
 document.querySelectorAll('.lang').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;localStorage.setItem('kalaba_lang',lang);apply()});
 const t=document.getElementById('theme'); if(t)t.onclick=()=>{dark=!dark;localStorage.setItem('kalaba_theme',dark?'dark':'light');apply()};
 apply();
})();
