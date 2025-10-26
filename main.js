window.addEventListener('scroll', function() {
  var scrolled = window.scrollY;
  var windowH = window.innerHeight || 800;

  // Parallax movement
  document.querySelector('.layer-1').style.top = (0 - (scrolled * 0.25)) + 'px';
  document.querySelector('.layer-2').style.top = (0 - (scrolled * 0.5)) + 'px';
  document.querySelector('.layer-3').style.top = (0 - (scrolled * 0.75)) + 'px';

  // ULTRA FAST transition
  var fadeRange = windowH * 0.0625; // 1/16th of the viewport height!
  var pic1Alpha = (scrolled < fadeRange) ? 1 - scrolled / fadeRange : 0;
  var pic2Alpha = (scrolled < fadeRange) ? scrolled / fadeRange : 1;

  document.querySelector('.layer-1').style.opacity = pic1Alpha;
  document.querySelector('.layer-2').style.opacity = pic2Alpha;

  // Cards move as before
  document.getElementById('card-1').style.transform = 'translateY(' + (0 - (scrolled * 0.18)) + 'px)';
  document.getElementById('card-2').style.transform = 'translateY(' + (0 - (scrolled * 0.3)) + 'px)';
  document.getElementById('card-3').style.transform = 'translateY(' + (0 - (scrolled * 0.48)) + 'px)';
});
