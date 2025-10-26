window.addEventListener('scroll', function() {
  document.querySelectorAll('.tarot-card').forEach(function(card) {
    const speed = parseFloat(card.dataset.speed) || 0.1;
    const offset = card.getBoundingClientRect().top - window.innerHeight / 2;
    card.style.transform = `translateY(${offset * speed}px)`;
    card.style.boxShadow = `0 ${24 + window.scrollY/10}px ${64 + window.scrollY/9}px -12px #a6fb4c99`;
  });
});
