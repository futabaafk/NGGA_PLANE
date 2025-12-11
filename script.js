// Простой интерактив — скролл, моб.меню, форма-демо
document.addEventListener('DOMContentLoaded', () => {
  // smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // burger menu (mobile)
  const burger = document.getElementById('burgerBtn');
  burger && burger.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    if(!nav) return;
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '72px';
    nav.style.right = '20px';
    nav.style.background = 'linear-gradient(180deg, rgba(11,13,18,0.9), rgba(11,13,18,0.96))';
    nav.style.padding = '12px';
    nav.style.borderRadius = '12px';
  });

  // demo form (no backend)
  const form = document.getElementById('demoForm');
  const result = document.getElementById('formResult');
  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    if(!name || !email) {
      result.textContent = 'Заполните имя и email.';
      return;
    }
    // simulate success
    result.textContent = `Готово — ${name}, спасибо! (демо).`;
    form.reset();
    setTimeout(()=> result.textContent = '', 4500);
  });

  // download PPTX template (simulate)
  const dl = document.getElementById('downloadBtn');
  dl && dl.addEventListener('click', () => {
    alert('Это демо: здесь можно подключить генерацию PPTX. Сейчас — просто пример.');
  });

  // small progressive UI touch: animate cards on scroll
  const cards = document.querySelectorAll('.card');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(ent=>{
      if(ent.isIntersecting) ent.target.classList.add('visible');
    });
  }, {threshold: 0.12});
  cards.forEach(c => obs.observe(c));
});
