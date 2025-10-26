window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.tarot-card');
  const scrollY = window.scrollY;
  cards.forEach((card, i) => {
    // Dramatically increase parallax movement for bold effect
    const speed = 0.9 + i * 0.6; // much higher multiplier for effect
    card.style.transform = `translate(-50%, ${scrollY * speed}px)`;
    card.style.boxShadow = `0 ${40 + scrollY/10}px ${100 + scrollY/9}px -10px #a6fb4c90`;
  });
});
