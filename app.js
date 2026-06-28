
(function(){
  let lang = localStorage.getItem('kalaba_lang') || 'ru';
  let dark = localStorage.getItem('kalaba_theme') === 'dark';

  function applyLang(){
    document.documentElement.lang = lang === 'uk' ? 'uk' : 'ru';
    document.querySelectorAll('[data-ru][data-uk]').forEach(el=>{
      el.textContent = el.getAttribute(lang === 'uk' ? 'data-uk' : 'data-ru');
    });
    document.querySelectorAll('[data-placeholder-ru][data-placeholder-uk]').forEach(el=>{
      el.placeholder = el.getAttribute(lang === 'uk' ? 'data-placeholder-uk' : 'data-placeholder-ru');
    });
    document.querySelectorAll('.lang-btn').forEach(btn=>{
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
    });
  }
  function applyTheme(){
    document.documentElement.classList.toggle('dark', dark);
    const t = document.getElementById('themeToggle');
    if(t) t.textContent = dark ? '☀' : '☾';
  }
  document.querySelectorAll('[data-set-lang]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      lang = btn.getAttribute('data-set-lang');
      localStorage.setItem('kalaba_lang', lang);
      applyLang();
    });
  });
  const theme = document.getElementById('themeToggle');
  if(theme){
    theme.addEventListener('click', ()=>{
      dark = !dark;
      localStorage.setItem('kalaba_theme', dark ? 'dark' : 'light');
      applyTheme();
    });
  }
  applyLang(); applyTheme();
})();
