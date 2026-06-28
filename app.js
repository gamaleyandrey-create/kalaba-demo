
(function(){
  const DEFAULT_LANG = 'ru';
  let lang = localStorage.getItem('kalaba_lang') || DEFAULT_LANG;

  function applyLang(nextLang){
    lang = nextLang || DEFAULT_LANG;
    localStorage.setItem('kalaba_lang', lang);
    document.documentElement.lang = lang === 'uk' ? 'uk' : 'ru';
    document.querySelectorAll('[data-ru][data-uk]').forEach(el => {
      el.textContent = el.getAttribute(lang === 'uk' ? 'data-uk' : 'data-ru');
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
    });
  }

  document.querySelectorAll('[data-set-lang]').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-set-lang')));
  });

  applyLang(lang);
})();
