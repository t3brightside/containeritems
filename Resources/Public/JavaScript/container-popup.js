const popupOpeners = document.querySelectorAll('.c-popup-opener');

popupOpeners.forEach(button => {
  button.addEventListener('mouseup', () => {
    const openButtonName = event.target.name;
    document.getElementById(openButtonName).classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});


const allanchors = document.getElementsByTagName('a');
for (let i = 0; i < allanchors.length; i++) {
  const href = allanchors[i].getAttribute('href');
  if (href && href.indexOf('#') !== -1) {
    allanchors[i].addEventListener('click', function(event) {
      const targetId = href.substring(href.indexOf('#') + 1);
      const target = document.getElementById(targetId);
      if (target && target.classList.contains('c-popup')) {
        event.preventDefault();
        const subpageUrl = window.location.pathname + window.location.search;
        const popupUrl = `${subpageUrl}#${targetId}`;
        history.pushState({}, '', popupUrl);
        document.body.style.overflow = 'hidden';
        target.classList.add('open');
      }
    });
  }
}

const allPopups = document.querySelectorAll('.c-popup');

function closeTopMost() {
  let topmostPopup = null;
  let maxZIndex = -1;
  let numOpenPopups = 0;
  allPopups.forEach(function(popup) {
    if (popup.classList.contains('open')) {
      const zIndex = parseInt(window.getComputedStyle(popup).getPropertyValue('z-index'));
      if (zIndex > maxZIndex) {
        maxZIndex = zIndex;
        topmostPopup = popup;
      }
      numOpenPopups++;
    }
  });
  if (topmostPopup) {
    if (numOpenPopups === 1 && topmostPopup.classList.contains('open')) {
      document.body.style.overflow = '';
      const subpageUrl = window.location.pathname + window.location.search;
      history.replaceState({}, '', subpageUrl);
    }
    topmostPopup.classList.remove('open');
  }
}

const popupCloses = document.querySelectorAll('.c-popup-close');
popupCloses.forEach(button => {
  button.addEventListener('mouseup', () => {
    closeTopMost();
  });
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeTopMost();
  }
});

window.addEventListener('popstate', function(event) {
  closeTopMost();
});

window.addEventListener('load', function(event) {
  const targetId = window.location.hash.substring(1);
  const target = document.getElementById(targetId);
  if (target && target.classList.contains('c-popup')) {
    document.body.style.overflow = 'hidden';
    target.classList.add('open');
  }
});
