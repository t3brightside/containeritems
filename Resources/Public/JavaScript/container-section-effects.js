const addInViewport = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
      entry.target.classList.add('isInViewport');
  }
  });
});
document.querySelectorAll('.content > .frame').forEach(item => {
  addInViewport.observe(item);
});
