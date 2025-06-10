document.addEventListener('DOMContentLoaded', () => {
  const fadeElems = document.querySelectorAll('main, header, h1, h2, .voltar');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  fadeElems.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 1s ease';
    observer.observe(el);
  });
});
