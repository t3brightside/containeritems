const popupOpeners = document.querySelectorAll('.c-popup-opener');

popupOpeners.forEach(button => {
  button.addEventListener('mouseup', () => {
    const openButtonName = event.target.name;
    document.getElementById(openButtonName).classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

const popupCloses = document.querySelectorAll('.c-popup-close');
popupCloses.forEach(button => {
  button.addEventListener('mouseup', () => {
    const closeButtonName = event.target.name;
    document.getElementById(closeButtonName).classList.remove('open');
    if (!document.querySelectorAll('.c-popup.open').length) {
      document.body.style.overflow = '';
    }
  });
});
