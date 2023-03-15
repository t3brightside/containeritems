function csVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--csvh', `${vh}px`);
}
window.addEventListener('load', csVh);
let previousHeight = window.innerHeight;
window.addEventListener('resize', function() {
  let currentHeight = window.innerHeight;
  if (Math.abs(currentHeight - previousHeight) > 60) {
    csVh();
  }
  previousHeight = currentHeight;
});

// add isInviewport class
const toggleInViewport = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const target = entry.target;
    if (entry.isIntersecting) {
      target.classList.add('isInViewport');
    } else {
      target.classList.remove('isInViewport');
      if (target.classList.contains('contentIsHidden')) {
        target.classList.remove('contentIsHidden');
        target.querySelectorAll('.clearframe')[0].classList.remove('active');
      }
    }
  });
});
document.querySelectorAll('.c-section').forEach(item => {
  toggleInViewport.observe(item);
});

// hide content and overlay if clear button is clicked */
document.addEventListener('click', event => {
  if (event.target.classList.contains('clearframe')) {
    const el = event.target;
    el.parentNode.parentNode.classList.toggle('contentIsHidden');
    el.classList.toggle('active');
  }
});
