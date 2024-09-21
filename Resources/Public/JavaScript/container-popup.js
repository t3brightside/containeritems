document.addEventListener('DOMContentLoaded', function() {
  const documentBody = document.body;
  const cPopupAllAnchorLinks = document.querySelectorAll('a[href*="#"]');
  const cPopupCloseButtons = document.querySelectorAll('.c-popup-close');
  const cPopupAllPopups = document.querySelectorAll('.c-popup');

  let cPopupCurrentZIndex = 99999;
  let openPopups = JSON.parse(sessionStorage.getItem('openPopups')) || [];

  function cPopupSetZIndex(popup, zIndex) {
    popup.style.zIndex = zIndex;
  }

  function cPopupSetTabIndex(container, value) {
    const focusableElements = container.querySelectorAll('a, button, details, input:not([aria-hidden="true"]), select, textarea');
    focusableElements.forEach(element => {
      element.setAttribute('tabindex', value);
    });
  }

  function cPopupOpen(popup, addToHistory = true) {
    documentBody.style.overflow = 'hidden';
    popup.style.visibility = 'visible';
    cPopupSetTabIndex(documentBody, '-1');
    popup.classList.add('open');
    cPopupCurrentZIndex += 1;
    cPopupSetZIndex(popup, cPopupCurrentZIndex);
    cPopupSetTabIndex(popup, '0');

    const popupId = popup.id;

    // Add popup to session storage only if it's not already there
    if (!openPopups.includes(popupId)) {
      openPopups.push(popupId);
      sessionStorage.setItem('openPopups', JSON.stringify(openPopups));
    }

    // Update URL if required
    if (addToHistory) {
      const subpageUrl = window.location.pathname + window.location.search;
      const popupUrl = `${subpageUrl}#${popupId}`;
      history.pushState({ popupId }, '', popupUrl);
    }
  }

  function cPopupClose(popup) {
    cPopupSetTabIndex(popup, '-1');
    popup.classList.remove('open');
    setTimeout(function() {
      popup.style.visibility = 'hidden';
    }, 400);

    // Remove from session storage
    const popupId = popup.id;
    openPopups = openPopups.filter(id => id !== popupId);
    sessionStorage.setItem('openPopups', JSON.stringify(openPopups));

    if (openPopups.length === 0) {
      cPopupResumeDocumentBody();
    }
  }

  function cPopupResumeDocumentBody() {
    documentBody.style.overflow = '';
    cPopupSetTabIndex(documentBody, '0');
  }

  // Open popup when link is clicked
  for (const popupLink of cPopupAllAnchorLinks) {
    const href = popupLink.getAttribute('href');
    if (href && href.indexOf('#') !== -1) {
      popupLink.addEventListener('click', function (event) {
        const targetId = href.substring(href.indexOf('#') + 1);
        const target = Array.from(cPopupAllPopups).find(popup => popup.id === targetId);
        if (target) {
          event.preventDefault();
          popupLink.id = 'trigger-link-' + targetId;
          cPopupOpen(target);
        }
      });
    }
  }

  function cPopupCloseTopmost() {
    const allOpenPopups = document.querySelectorAll('.c-popup.open');
    const topMostPopup = cPopupFindTopmost(allOpenPopups);

    if (topMostPopup) {
      cPopupClose(topMostPopup);

      const newTopMostPopup = cPopupFindTopmost(document.querySelectorAll('.c-popup.open'));

      if (newTopMostPopup) {
        const popupUrl = `${window.location.pathname + window.location.search}#${newTopMostPopup.id}`;
        history.replaceState({ popupId: newTopMostPopup.id }, '', popupUrl);
      } else {
        const currentUrlWithoutHash = window.location.pathname + window.location.search;
        history.replaceState(null, '', currentUrlWithoutHash); // Clear hash when no more popups
      }
    }
  }

  function cPopupFindTopmost(elements) {
    return Array.from(elements).reduce((topmostPopup, popup) => {
      const zIndex = parseInt(window.getComputedStyle(popup).getPropertyValue('z-index'));
      return zIndex > (topmostPopup ? parseInt(window.getComputedStyle(topmostPopup).getPropertyValue('z-index')) : -1) ?
        popup :
        topmostPopup;
    }, null);
  }

  cPopupCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
      cPopupCloseTopmost();
    });
  });

  // Handle back button (popstate) event to close topmost popup
  window.addEventListener('popstate', function(event) {
    if (openPopups.length > 0) {
      cPopupCloseTopmost();
    }
  });

  // Escape key functionality to close the topmost popup
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && openPopups.length > 0) {
      cPopupCloseTopmost();
    }
  });

  // Only open the popup from the URL's hash
  if (window.location.hash) {
    const cPopupTargetId = window.location.hash.substring(1);
    const cPopupTarget = document.getElementById(cPopupTargetId);

    if (cPopupTarget && cPopupTarget.classList.contains('c-popup')) {
      // Clear session storage popups when a hash-based popup is opened
      openPopups = [cPopupTargetId]; // Only store the opened popup
      sessionStorage.setItem('openPopups', JSON.stringify(openPopups));
      cPopupOpen(cPopupTarget, false); // Open only the popup from the hash
    }
  } else {
    // Do NOT restore any previously open popups if there is no hash
  }
});
