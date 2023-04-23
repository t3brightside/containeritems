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


const allanchors = document.getElementsByTagName('a');

// Loop through the anchor elements and add a click event listener to the ones with an href containing "#"
for (let i = 0; i < allanchors.length; i++) {
  const href = allanchors[i].getAttribute('href');
  if (href && href.indexOf('#') !== -1) {
    allanchors[i].addEventListener('click', function(event) {
      // Get the target element with the same ID as the anchor link's href
      const targetId = href.substring(href.indexOf('#') + 1);
      const target = document.getElementById(targetId);

      // Check if a target element was found and add the "my-class" class to it if it has the "c-popup" class
      if (target && target.classList.contains('c-popup')) {
        // Prevent the default behavior of the anchor link
        document.body.style.overflow = 'hidden';

        event.preventDefault();

        // Add the "my-class" class to the target element
        target.classList.add('open');
      }
    });
  }
}
