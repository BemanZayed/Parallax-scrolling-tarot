window.addEventListener('scroll', function() {
  document.querySelectorAll('.tarot-section').forEach(function(section, i) {
    const card = section.querySelector('.tarot-card');
    const rect = section.getBoundingClientRect();
    const sectionCenter = rect.top + rect.height / 2;
    const windowCenter = window.innerHeight / 2;
    const offset = (sectionCenter - windowCenter);

    // Greater speed for lower cards
    const base = i * 0.18 + 0.12;
    // Stronger offset multiplier for visible parallax
    const translateY = offset * base;
    // Optional: scale cards for even more depth
    const scale = 1 - Math.abs(offset) / 2000;

    card.style.transform = `translateY(${translateY}px) scale(${scale})`;
    card.style.boxShadow = `0 ${24 + Math.abs(translateY)/10}px ${64 + Math.abs(translateY)/7}px -12px #a6fb4cb0`;
  });
});
