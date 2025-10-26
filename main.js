window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.tarot-card');
  const scrollY = window.scrollY;
  cards.forEach((card, i) => {
    // Calculate parallax movement for each card
    const speed = 0.25 + i * 0.17;
    card.style.transform = `translate(-50%, ${scrollY * speed}px)`;
    card.style.boxShadow = `0 ${30 + scrollY/20}px ${80 + scrollY/18}px -10px #a6fb4c70`;
  });
});
