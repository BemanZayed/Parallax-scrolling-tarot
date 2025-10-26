window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.tarot-card');
  const scrollY = window.scrollY;
  cards.forEach((card, i) => {
    // Strong, fast parallax: each lower card moves more
    const speed = 0.8 + i * 0.7; 
    card.style.transform = `translate(-50%, ${scrollY * speed}px)`;
    card.style.boxShadow = `0 ${40 + scrollY/10}px ${100 + scrollY/8}px -10px #a6fb4c90`;
  });
});
