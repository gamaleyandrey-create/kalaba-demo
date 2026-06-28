
(function(){
 let lang='ru';
 localStorage.setItem('kalaba_lang','ru');
 let dark=localStorage.getItem('kalaba_theme')==='dark';
 function apply(){
  document.documentElement.lang=lang;
  document.documentElement.classList.toggle('dark',dark);
  document.querySelectorAll('[data-ru][data-uk][data-es][data-en]').forEach(e=>e.textContent=e.getAttribute('data-'+lang));
  document.querySelectorAll('[data-placeholder-ru][data-placeholder-uk][data-placeholder-es][data-placeholder-en]').forEach(e=>e.placeholder=e.getAttribute('data-placeholder-'+lang));
  document.querySelectorAll('.lang').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  const t=document.getElementById('themeToggle'); if(t)t.textContent=dark?'☀':'☾';
 }
 document.querySelectorAll('.lang').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;localStorage.setItem('kalaba_lang',lang);apply()});
 const t=document.getElementById('themeToggle'); if(t)t.onclick=()=>{dark=!dark;localStorage.setItem('kalaba_theme',dark?'dark':'light');apply()};
 apply();
})();
