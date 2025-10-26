window.addEventListener('scroll', function() {
  var scrolled = window.scrollY;
  var windowH = window.innerHeight || 800;

  // Parallax movement
  document.querySelector('.layer-1').style.top = (0-(scrolled*0.25))+'px';
  document.querySelector('.layer-2').style.top = (0-(scrolled*0.5))+'px';
  document.querySelector('.layer-3').style.top = (0-(scrolled*0.75))+'px';

  // Opacity switch effect
  var fadeRange = windowH * 1.5;
  var pic1Alpha = Math.max(0, 1 - scrolled / fadeRange);
  var pic2Alpha = Math.min(1, scrolled / fadeRange);

  document.querySelector('.layer-1').style.opacity = pic1Alpha;
  document.querySelector('.layer-2').style.opacity = pic2Alpha;

  // Cards move as before
  document.getElementById('card-1').style.transform = 'translateY(' + (0-(scrolled*0.18)) + 'px)';
  document.getElementById('card-2').style.transform = 'translateY(' + (0-(scrolled*0.3)) + 'px)';
  document.getElementById('card-3').style.transform = 'translateY(' + (0-(scrolled*0.48)) + 'px)';
});
