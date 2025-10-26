window.addEventListener('scroll', function() {
  var scrolled = window.scrollY;
  document.querySelector('.layer-1').style.top = (0-(scrolled*0.25))+'px';
  document.querySelector('.layer-2').style.top = (0-(scrolled*0.5))+'px';
  document.querySelector('.layer-3').style.top = (0-(scrolled*0.75))+'px';
  document.getElementById('card-1').style.transform = 'translateY(' + (0-(scrolled*0.18)) + 'px)';
  document.getElementById('card-2').style.transform = 'translateY(' + (0-(scrolled*0.3)) + 'px)';
  document.getElementById('card-3').style.transform = 'translateY(' + (0-(scrolled*0.48)) + 'px)';
});
