  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));

  function handleSubmit() {
    const btn = document.querySelector('.submit-btn');
    btn.textContent = 'Mensagem Enviada!';
    btn.style.background = 'linear-gradient(135deg, #00c853, #00a040)';
    setTimeout(() => {
      btn.textContent = 'Enviar Mensagem';
      btn.style.background = '';
    }, 3000);
  }