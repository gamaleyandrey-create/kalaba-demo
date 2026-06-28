
(function(){
  let lang = localStorage.getItem('kalaba_lang') || 'ru';
  let dark = localStorage.getItem('kalaba_theme') === 'dark';

  function apply(){
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle('dark', dark);
    document.querySelectorAll('[data-ru][data-uk]').forEach(el=>{
      el.textContent = el.getAttribute(lang === 'uk' ? 'data-uk' : 'data-ru');
    });
    document.querySelectorAll('[data-placeholder-ru][data-placeholder-uk]').forEach(el=>{
      el.placeholder = el.getAttribute(lang === 'uk' ? 'data-placeholder-uk' : 'data-placeholder-ru');
    });
    document.querySelectorAll('.lang').forEach(btn=>{
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    const theme = document.getElementById('themeToggle');
    if(theme) theme.textContent = dark ? '☀' : '☾';
  }

  document.querySelectorAll('.lang').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      lang = btn.dataset.lang;
      localStorage.setItem('kalaba_lang', lang);
      apply();
    });
  });

  const theme = document.getElementById('themeToggle');
  if(theme){
    theme.addEventListener('click', ()=>{
      dark = !dark;
      localStorage.setItem('kalaba_theme', dark ? 'dark' : 'light');
      apply();
    });
  }

  apply();
})();
