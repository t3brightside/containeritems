// play only while in viewport
const playVideoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
});
document.querySelectorAll('.bg-video').forEach(item => {
  playVideoObserver.observe(item);
});

function enableBgVideoSoundButton(el) {
  const video = el.closest('.c-section').querySelector('.bg-video');
  const muted = video.muted;
  video.muted = !muted;
  el.classList.toggle('active');
}

document.addEventListener('click', function(event) {
  if (event.target.matches('.sound')) {
    const video = event.target.closest('.c-section').querySelector('.bg-video');
    video.muted = !video.muted;
    event.target.classList.toggle('active');
  }
});
