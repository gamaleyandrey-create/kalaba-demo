
(function(){
  let lang='ru';
  let dark=localStorage.getItem('kalaba_theme')==='dark';
  function apply(){
    document.documentElement.lang=lang;
    document.documentElement.classList.toggle('dark', dark);
    document.querySelectorAll('[data-ru][data-uk][data-es][data-en]').forEach(el=>el.textContent=el.getAttribute('data-'+lang));
    document.querySelectorAll('[data-placeholder-ru][data-placeholder-uk][data-placeholder-es][data-placeholder-en]').forEach(el=>el.placeholder=el.getAttribute('data-placeholder-'+lang));
    document.querySelectorAll('.lang').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
    const t=document.getElementById('theme'); if(t)t.textContent=dark?'☀':'☾';
  }
  document.querySelectorAll('.lang').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;apply();});
  const t=document.getElementById('theme'); if(t)t.onclick=()=>{dark=!dark;localStorage.setItem('kalaba_theme',dark?'dark':'light');apply();};
  apply();
})();
